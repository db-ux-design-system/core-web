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

Dafür das **kompakte Edit-Bundle `assets/db-figma-edit.min.js`** (~8 KB) einfügen — NICHT die ~33 KB volle Runtime. Das ist der größte Kostenhebel pro Iteration.

```js
// db-figma-edit.min.js einfügen, dann:
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

Ops: `setText`, `setVisible`, `hideNavItem`, `setVariant`, `setContainerGap`, `setSectionFill`, `setTextFill`, `remove`, `appendLike`. Selektoren sind text- oder namensbasiert. Nur bei großen strukturellen Umbauten (neuer Seitentyp, umsortierte Sektionen) auf `renderPlan` zurückfallen.

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

| Asset                                                                                | Zweck                                                                                                                                           |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/db-figma-runtime.min.js`                                                     | Volle Render-Runtime (~33 KB), verbatim einfügen (Quelle: `db-figma-runtime.js`, neu bauen via `node assets/build-runtime.cjs`)                 |
| `assets/registries/tokens.json`                                                      | Farb-/Spacing-/Radius-Tokens + Textstyles (Figma-Bindings)                                                                                      |
| `assets/registries/components.json`                                                  | Komponenten + Varianten. Detail-Props NICHT komplett lesen — gezielt via `db-ux/get_component_props` für die tatsächlich genutzten Komponenten. |
| `assets/registries/<pageType>/example.json`                                          | Kanonischer Referenz-Plan des erkannten Seitentyps (`dashboard` **oder** `landingpage`) — das strukturelle Skelett.                             |
| `assets/registries/<pageType>/blocks.json` (+ `block-patterns.json` bei landingpage) | Die Block-/Pattern-Palette des Seitentyps zum Befüllen des Skeletts.                                                                            |

### Pfad B — Iteration an bestehendem Screen (`applyEdits`)

| Asset                           | Zweck                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `assets/db-figma-edit.min.js`   | Kompaktes Edit-Bundle (~8 KB), verbatim einfügen                                                                          |
| `assets/registries/tokens.json` | Nur wenn ein Edit ein Farb-/Spacing-Token oder einen Textstyle setzt (`setSectionFill`, `setTextFill`, `setContainerGap`) |

**Abgestufte Zusatzladung bei Pfad B** (nur bei Bedarf des jeweiligen Edits):

- `setText` / `setVisible` / `hideNavItem` / `remove` → **kein** Registry-Read nötig.
- `setVariant` → zusätzlich `components.json` (gültige Varianten-Achsen/-Werte) laden.
- `appendLike` → zusätzlich die **volle** `db-figma-runtime.min.js` (statt Edit-Bundle) plus
  das eine passende Block-Fragment aus `<pageType>/blocks.json`; der neue Block muss registry-valide bleiben.

Alle Pfade relativ zu `packages/agent-cli/db-ux-designer-powers/skills/generate-figma-screen/`.

## Sofort-Stop-Bedingungen

Stoppe und melde den genauen Gap, wenn:

- Eine benötigte Komponente / Variante / Token / Textstyle nicht in den Registries vorkommt.
- Die Figma-URL keine `node-id` enthält → nachfragen.
- `res.audit.valid === false` nach 3 Versuchen.

## Runtime-Änderungen bündeln (feste Regel – Kosten)

> **Regel:** Ein Re-Bootstrap fügt die gesamte ~37 KB-Runtime als 6 Chunks neu ein und ist
> **teuer**. Änderungen an der Runtime (`db-figma-runtime.js`) daher IMMER bündeln:
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
