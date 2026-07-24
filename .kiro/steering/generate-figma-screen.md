---
inclusion: manual
---

# DB Designer – Figma Screen generieren

Verwende dieses Skill wenn du einen DB UX Design System v3-konformen Screen in Figma erstellen möchtest.

**Aktivierung:** Schreibe `#generate-figma-screen` oder beginne deine Anfrage mit `DB Designer:` gefolgt von einer Beschreibung und einer Figma-URL mit `node-id`.

**Beispiel:**

```
#generate-figma-screen DB Designer: Erstelle mir ein Dashboard zum Thema Putzmaßnahmen am Bahnhof
https://www.figma.com/design/uI6oKmJ0qDhsEuE0nFah2W/...?node-id=177-1091
```

---

## Pflichtprozess – NIEMALS umgehen

> **OUTPUT IST IMMER EIN FIGMA-FRAME — NIEMALS HTML, CSS, JSX oder andere Code-Dateien.**
> Wenn du daran denkst, eine Datei im Workspace zu erstellen oder zu bearbeiten: STOP.
> Der einzige erlaubte Output ist ein gerenderter Frame in der Figma-Datei via `use_figma` + `renderPlan`.

Der Agent darf **keinen** imperativen Figma-Node-Code schreiben (`createFrame`, `createInstance`, `appendChild`, `setBoundVariable` direkt). Jeder Screen läuft ausschließlich über den folgenden Prozess:

1. **Composition Plan (JSON)** erstellen – ein deklaratives Layout-Objekt mit `screen`, `targetNodeId` und `layout[]`.
2. **Render-Runtime** (`db-ux-designer-powers/skills/generate-figma-screen/assets/db-figma-runtime.min.js` – die größenoptimierte Build-Variante, da die kommentierte Quelle das 50 000-Zeichen-Limit von `use_figma` überschreitet) vollständig und wortgetreu in den `use_figma`-Call einfügen. `globalThis` bleibt zwischen Calls NICHT erhalten – Runtime + Plan müssen in EINEN Call.
3. **`renderPlan(PLAN)`** aufrufen – kein eigener Node-Code.
4. **Audit prüfen** – `res.audit.valid === true`, sonst Plan korrigieren und erneut rendern (max. 3×).

## Iterieren statt neu generieren

> **REGEL – Intent-Wörter beziehen sich immer auf den bereits bestehenden Screen.**
> Sobald ein Screen für die Zielseite schon gerendert wurde, meinen Folge-Anweisungen wie
> **„ändern", „anpassen", „ergänzen", „hinzufügen", „entfernen", „umbenennen", „austauschen",
> „korrigieren"** IMMER eine In-place-Bearbeitung dieses vorhandenen Frames via `applyEdits` —
> NICHT einen neuen `renderPlan`. Ein voller `renderPlan` ist ausschließlich für die
> **erstmalige** Erstellung oder einen echten Struktur-Umbau (neuer Seitentyp, umsortierte
> Sektionen, anderes Template) erlaubt. Im Zweifel: erst den bestehenden Frame per
> `figma/get_metadata` auf der Zielseite prüfen; existiert er → `applyEdits`.
> Ein voller Re-Render bei einer additiven Änderung ist ein Fehler (er kostet unnötig Tokens,
> verliert Node-IDs/manuelle Anpassungen und erzeugt ein Duplikat-Frame).

`renderPlan` ist für die **erstmalige** Erstellung. Für **kleine Änderungen an einem bereits gerenderten Screen** (Text ändern, Farbe/Variante tauschen, Element ausblenden, Block hinzufügen/entfernen) NICHT den ganzen Plan neu schreiben und neu rendern – das zerstört den Frame, verliert Node-IDs und manuelle Anpassungen. Stattdessen **in-place patchen mit `applyEdits`**:

`applyEdits` steckt in der EINEN Runtime. Ist die Datei gebootstrappt (Phase 4a), einfach den Loader `assets/bootstrap/render.js` einfügen — er stellt `renderPlan` UND `applyEdits` für ~0 zusätzliche Output-Tokens bereit. Kein separates Edit-Bundle mehr. Ist die Datei nicht gebootstrappt, zuerst bootstrappen oder ersatzweise `assets/db-figma-runtime.min.js` verbatim einfügen.

```js
// bootstrap/render.js (oder db-figma-runtime.min.js) einfügen, dann:
const res = await applyEdits({
	screen: "Mein Screen", // exakter Frame-Name (oder rootId: "12:34")
	edits: [
		{ op: "setText", find: "Alt", value: "Neu" },
		{ op: "hideNavItem", label: "Startseite" },
		{ op: "setVariant", find: "Titel", axis: "As", value: "h3" },
		{
			op: "setSectionFill",
			anchorText: "Schnellzugriff",
			token: "color.background.elevated"
		}
	]
});
return JSON.stringify(res);
```

Ops: `setText`, `setVisible`, `hideNavItem`, `setVariant`, `setContainerGap`, `setSectionFill`, `setTextFill`, `remove`, `appendLike`, `custom`. Selektoren sind text- oder namensbasiert. Nur bei großen strukturellen Umbauten (neuer Seitentyp, umsortierte Sektionen) auf `renderPlan` zurückfallen.

**Fallback-Leiter, wenn keine vorbereitete Op passt** (nicht direkt zu rohem Node-Code springen — jede Stufe hält die Figma-API-Gotchas gelöst; Stufen 1–3 auditieren weiterhin):

1. Passende `applyEdits`-Op → nutzen.
2. Keine Op passt, ein Ziel → **`custom`-Op**: löst den Node über dieselben Selektoren auf und ruft `apply(node, api, frame)` mit dem gehärteten Helfer-Toolkit `api` (`bindFill`/`bindTextFill` auf dem Paint, `setVariant`, `freshSlot`/`appendToSlot`, `renderNode` für neuen Content, …). Audit läuft weiter.
3. Freiform / mehrere Nodes → Loader `assets/bootstrap/render.js` einfügen und `api` direkt nutzen, danach mit `await api.auditTree(frame)` re-validieren.
4. Wirklich roher Node-Code → letzte Option: Fills auf dem Paint binden, Slots frisch holen, nur Registry-Tokens/-Styles, am Ende `api.auditTree(frame)` und Violations melden.

Die vollständige Skill-Anleitung liegt in:

#[[file:packages/agent-cli/db-ux-designer-powers/skills/generate-figma-screen/SKILL.md]]

Die bindenden Regeln — sowohl Komposition (Seitentyp-Erkennung, Blocks & Block-Patterns pro Seitentyp, Action Hierarchy) als auch visuelle Regeln (Farbtokens, Typografie, Button-Regeln, Zebra-Pattern, Layout) — liegen in EINER Datei:

#[[file:packages/agent-cli/db-ux-designer-powers/context/figma-generation.md]]

## Vorauszuladende Assets — nur laden, was der Task braucht

> **Nicht pauschal alles vorladen.** Bestimme ZUERST den Task-Typ und lade dann nur die
> Dateien des passenden Pfads. Jede vorgeladene Datei kostet Tokens bei jeder Interaktion —
> ein Relabel braucht nicht dieselben ~20k Tokens wie eine Neuerstellung.

**Entscheide zuerst:** Existiert der Ziel-Screen schon und soll nur geändert werden
(umbenennen, umfärben, Variante tauschen, Element aus-/einblenden, Block ergänzen/entfernen)?
→ **Pfad B (Iteration)**. Andernfalls (neuer Screen, kompletter Neuaufbau, umsortierte
Sektionen / anderer Seitentyp) → **Pfad A (Erst-Erstellung)**.

### Pfad A — Erst-Erstellung / großer Umbau (`renderPlan`)

| Asset                                                                                | Zweck                                                                                                                                                             |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/db-figma-runtime.min.js`                                                     | Volle Render-Runtime (~37 KB, `renderPlan` + `applyEdits`), verbatim einfügen (Quelle: Module unter `assets/src/`, neu bauen via `node assets/build-runtime.cjs`) |
| `assets/registries/tokens.json`                                                      | Farb-/Spacing-/Radius-Tokens + Textstyles (Figma-Bindings)                                                                                                        |
| `assets/registries/components.json`                                                  | Komponenten + Varianten. Detail-Props NICHT komplett lesen — gezielt via `db-ux/get_component_props` für die tatsächlich genutzten Komponenten.                   |
| `assets/registries/<pageType>/example.json`                                          | Kanonischer Referenz-Plan des erkannten Seitentyps (`dashboard` **oder** `landingpage`) — das strukturelle Skelett.                                               |
| `assets/registries/<pageType>/blocks.json` (+ `block-patterns.json` bei landingpage) | Die Block-/Pattern-Palette des Seitentyps zum Befüllen des Skeletts.                                                                                              |

### Pfad B — Iteration an bestehendem Screen (`applyEdits`)

| Asset                           | Zweck                                                                                                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/bootstrap/render.js`    | Store-once-Loader — stellt `applyEdits` (und `renderPlan`) aus der gebootstrappten Runtime bereit. Fallback ohne Bootstrap: `assets/db-figma-runtime.min.js` verbatim. |
| `assets/registries/tokens.json` | Nur wenn ein Edit ein Farb-/Spacing-Token oder einen Textstyle setzt (`setSectionFill`, `setTextFill`, `setContainerGap`)                                              |

**Abgestufte Zusatzladung bei Pfad B** (nur bei Bedarf des jeweiligen Edits):

- `setText` / `setVisible` / `hideNavItem` / `remove` → **kein** Registry-Read nötig.
- `setVariant` → zusätzlich `components.json` (gültige Varianten-Achsen/-Werte) laden.
- `appendLike` → braucht `renderNode` (steckt in der vollen Runtime, die der Loader ohnehin lädt) plus
  das eine passende Block-Fragment aus `<pageType>/blocks.json`; der neue Block muss registry-valide bleiben.

Alle Pfade relativ zu `packages/agent-cli/db-ux-designer-powers/skills/generate-figma-screen/`.

## Sofort-Stop-Bedingungen

Stoppe und melde den genauen Gap, wenn:

- Eine benötigte Komponente / Variante / Token / Textstyle nicht in den Registries vorkommt.
- Die Figma-URL keine `node-id` enthält → nachfragen.
- `res.audit.valid === false` nach 3 Versuchen.

## Runtime-Änderungen bündeln (feste Regel – Kosten)

> **Regel:** Ein Re-Bootstrap fügt die gesamte ~37 KB-Runtime als 6 Chunks neu ein und ist
> **teuer**. Änderungen an der Runtime (Module unter `assets/src/`) daher IMMER bündeln:
>
> 1. **Alle** geplanten Runtime-Fixes zuerst sammeln und gemeinsam vornehmen.
> 2. Dann **genau ein** `node assets/build-runtime.cjs`.
> 3. Dann **genau ein** Re-Bootstrap (Store-Chunks + `store-meta.js`), mit Längen-Check je Chunk.
>
> **Niemals pro Mikro-Fix neu bauen + neu bootstrappen.** Wer sich dabei erwischt, die Runtime
> ein zweites Mal im selben Task zu ändern: STOP und erst sicherstellen, dass keine weiteren
> Runtime-Fixes mehr kommen, bevor gebaut wird.
>
> Für rein visuelle Änderungen an einem bestehenden Frame ohnehin `applyEdits` nutzen – keine
> Runtime-Änderung, kein Re-Bootstrap, kein Re-Render.

## Registry-Key-Verifikation (Drift-Check)

> Figma-Component-/Variablen-/Style-Keys können sich beim Re-Publish **innerhalb derselben
> Library-Version** ändern — der Versionsname ist kein zuverlässiges Frische-Signal. Der
> Core-Build bleibt daher auf die committeten Registry-Keys **gepinnt** (deterministisch, kein
> Figma-Zugriff beim Build). Die Verifikation ist ein expliziter, on-demand Schritt.

Ablauf (auch als Hook „Verify Figma Registry Keys (Drift Check)" hinterlegt):

1. `node assets/verify-registry-keys.cjs --emit` → erzeugt ein `use_figma`-Snippet, das alle
   Registry-Keys (Component-Sets, Variablen, Textstyles) import-testet.
2. Snippet in **einem** `figma/use_figma`-Call gegen eine Datei mit den DB-UX-Libraries einfügen.
3. Rückgabe `{ ok, failCount, fails }` lesen. Jeder Eintrag in `fails` ist **stale**
   (`set:` = Component-Set, `var:` = Variable, `style:` = Textstyle).
4. Für jeden stale Key den aktuellen aus der kanonischen Library holen (`search_design_system`
   gescopt auf den `libraryKey` aus `_meta`, mit `import…ByKeyAsync` verifizieren) und die
   Registry (`components.json` / `tokens.json` / `icons.json`) aktualisieren.
5. `_meta.lastKeyVerification` mit Datum + ok/total stempeln, dann `node assets/build-runtime.cjs`.

Wichtig: Der Build zieht **nie** live aus Figma — er bleibt auf die committeten Keys gepinnt.
