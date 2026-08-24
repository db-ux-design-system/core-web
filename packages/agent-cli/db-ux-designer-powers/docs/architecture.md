# Architektur der Designer-Power

Für die Wartung. Die Nutzersicht steht in [README.md](README.md), der Arbeitsablauf des Agenten in
`skills/generate-figma-screen/SKILL.md`, die Entwicklungsregeln in `packages/agent-cli/AGENTS.md`.

## Datenfluss

Eine Kette mit genau einer Quelle je Stufe. Jede Stufe ist generiert aus der vorigen — nichts wird
zweimal von Hand gepflegt.

```text
knowledge-database/  ──build-from-kb.cjs──▶  registries/*.json
                                                  │
                                     build-registry-maps.cjs  (JSON → JS-Literale)
                                                  │
                     src/*.js  ──build-runtime.cjs──▶  db-figma-runtime.min.js
                                                  │
                                                  ├─▶ bootstrap/store-0…4.js  (einmal pro Figma-File)
                                                  └─▶ bootstrap/render.js     (jeder Render)
```

Warum der Umweg über Literale: die Runtime läuft in der `use_figma`-Sandbox und kann dort keine
Dateien lesen. Warum der Bootstrap: die minifizierte Runtime (~86 kB) müsste sonst bei jedem Render
als Modell-Output emittiert werden. Stattdessen liegt sie in den Shared Plugin Data des Figma-Files,
und jeder Render überträgt nur den ~0,5 kB-Loader plus den Plan.

Zur Laufzeit: `renderPlan(plan)` validiert erst statisch (`45`), baut dann die Nodes (`50`) und
prüft am Ende den gerenderten Frame (`60`). Iterationen laufen über `applyEdits` (`70`) und werden
danach erneut geprüft.

## Wurzel

| Datei               | Zweck                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `power.yaml`        | Manifest: Name, Version, Skill-Liste, Verweis auf `mcp.json`.                                                                                                                                    |
| `mcp.json`          | Zwei MCP-Server: `db-ux` (7 Lese-Tools) und der Figma-Remote-Server (`use_figma` zum Bauen).                                                                                                     |
| `POWER.md`          | Einstiegsdokument, das der Agent beim Aktivieren der Power liest.                                                                                                                                |
| `build-from-kb.cjs` | Der EINZIGE Transform Knowledge Database → Power. Erzeugt `tokens.json`, `icons.json`, `components.json` und die Component-Guidelines. Handgepflegte Felder werden über eine Allowlist erhalten. |

## `context/` — was der Agent über Design weiß

| Pfad                                       | Zweck                                                                                         |
| ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `general/design-laws.md`                   | Gestaltgesetze und Wahrnehmungsgrundlagen — das Warum hinter den Regeln.                      |
| `general/layout-guidelines.md`             | Immer geltende Regeln: Abstände, Gruppierung, Anordnung, Breiten-Sizing.                      |
| `general/layout-type-guidelines/README.md` | Wie die Dateien daneben zu lesen sind und wie sie zu den Registries stehen.                   |
| `general/layout-type-guidelines/*.md`      | Kompositionsprinzipien je Seitentyp (`dashboard`, `form`, `modal`, `process`).                |
| `design-system/screen-guidelines.md`       | Visuelle Regeln auf Screen-Ebene: Aktionen, Zebra, Farbe, Typografie.                         |
| `design-system/component-construction.md`  | Wie ein Komponenten-Innenraum aufgebaut ist (Anatomie, Content Height, Nesting-Reserve).      |
| `design-system/component-guidelines/*.md`  | 30 generierte Do/Don't-Dateien, eine pro Komponente. **Generiert — nicht direkt bearbeiten.** |

## `skills/generate-figma-screen/`

| Datei                                          | Zweck                                                                                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `SKILL.md`                                     | Der Ablauf in Phasen: Auftrag lesen, Seitentyp bestimmen, Plan schreiben, Runtime bootstrappen, rendern, prüfen, nachschärfen. |
| `requirements/incremental-runtime-transfer.md` | Anforderungsnotiz für einen künftigen Umbau (Regeln als Daten, inkrementelle Übertragung). Noch nicht umgesetzt.               |

### `assets/src/` — die Render-Runtime

Konkatenierte Skript-Module mit gemeinsamen Globals, in Dateinamen-Reihenfolge. **Nie einzeln
linten oder ausführen** — Validierung läuft über `node assets/build-runtime.cjs`.

| Modul                      | Zeilen | Zweck                                                                                                                                 |
| -------------------------- | -----: | ------------------------------------------------------------------------------------------------------------------------------------- |
| `10-figma-helpers.js`      |    376 | Gehärtete Primitive gegen die scharfen Kanten der Plugin-API: Fills auf dem Paint binden, Slots frisch holen, Hug/Fill sicher setzen. |
| `20-component-resolver.js` |     82 | Name + Props → Bibliotheks-Key und passende Variante; Import über den Key.                                                            |
| `30-text-and-props.js`     |    608 | Fonts laden, registrierte Textstile, Textfelder und Varianten-Props an Instanzen schreiben.                                           |
| `40-layout-builders.js`    |    865 | Baut die Layout-Träger: Section, Card, Container, Grid, Header.                                                                       |
| `45-plan-validation.js`    |    421 | Reine statische Plan-Prüfung ohne Figma. Wird von der Runtime UND von `validate-plan.cjs` benutzt.                                    |
| `50-plan-renderer.js`      |  1 243 | `renderPlan` / `renderNode`: läuft den Plan ab und erzeugt die Nodes.                                                                 |
| `60-compliance-audit.js`   |  1 156 | `auditTree`: alle Compliance-Checks am gerenderten Frame, plus der Vertrag für `applyEdits`.                                          |
| `70-edit-engine.js`        |    657 | `applyEdits` mit seinen Ops und Selektoren, dazu `EDIT_API` als gehärteter Fallback-Werkzeugkasten.                                   |

### `assets/registries/` — was als offiziell gilt

| Datei                         | Herkunft  | Zweck                                                                                                                                                               |
| ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components.json`             | generiert | Komponenten-Keys, Varianten-Achsen und die handgepflegte Skill-Zuordnung (`planNodeType`, `textProp`, Slots, Notizen).                                              |
| `component-constraints.json`  | Hand      | Render-Grenzen, die die Bibliotheken nicht als Daten hergeben (z. B. `Navigation.maxItems`). Bewusst getrennt, weil `components.json` vollständig neu erzeugt wird. |
| `tokens.json`                 | generiert | Farb-, Abstands- und Radius-Variablen sowie registrierte Textstile mit ihren Figma-Keys.                                                                            |
| `icons.json`                  | generiert | Handverlesene Teilmenge der DB Theme Icons mit Component-Set-Keys.                                                                                                  |
| `icon-names-full.json`        | generiert | Vollständige Icon-Namensliste. Nicht registrierte Glyphen werden bei Bedarf über den Figma-MCP aufgelöst.                                                           |
| `lab-components-catalog.json` | generiert | Core-Lab-Katalog (Concept-Reifegrad, Status, Sub-Komponenten).                                                                                                      |
| `<seitentyp>/blocks.json`     | Capture   | Atomare Fragmente, 1:1 aus den Katalogseiten in Figma abgenommen.                                                                                                   |
| `<seitentyp>/patterns.json`   | Capture   | Setzt Blöcke über `$ref` zu auswählbaren Mustern zusammen, samt Auswahl-Metadaten.                                                                                  |
| `<seitentyp>/template.json`   | Capture   | Seitengrammatik: `order`, `slots`, `rules`.                                                                                                                         |

Fünf Seitentypen (`contentpage`, `dashboard`, `form`, `modal`, `process`), je genau diese drei
Dateien — die Dreier-Form ist Pflicht und wird geprüft.

### `assets/` — Werkzeuge und Erzeugnisse

| Datei                      | Art       | Zweck                                                                                                                                                |
| -------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `build-runtime.cjs`        | Werkzeug  | Baut `src/` zur minifizierten Runtime und erzeugt daraus die Bootstrap-Snippets. `--check` schlägt fehl, wenn Gebautes und Quelle auseinanderlaufen. |
| `build-registry-maps.cjs`  | Werkzeug  | Der eine Transform Registries → eingebettete JS-Literale. Verhindert, dass Keys in der Runtime driften.                                              |
| `validate-registries.cjs`  | Werkzeug  | Vertragsprüfung der Registries: Schema, `$ref`-Auflösung, Erreichbarkeit, Props gegen echte Achsen, Tokens, Icons. Das Gate, keine Empfehlung.       |
| `validate-plan.cjs`        | Werkzeug  | CLI (`plan:lint`): prüft einen Composition Plan lokal mit derselben Funktion, die die Runtime nutzt.                                                 |
| `verify-registry-keys.cjs` | Werkzeug  | Drift-Prüfung der Figma-Keys. `--emit` erzeugt einen `use_figma`-Schnipsel, der jeden Key testweise aus der Live-Bibliothek importiert.              |
| `db-figma-runtime.min.js`  | generiert | Die gebündelte Runtime. Von Prettier, xo und cspell ausgenommen — neu erzeugen, nie bearbeiten.                                                      |
| `bootstrap/store-0…4.js`   | generiert | Ein Chunk je Snippet, zeichengenau einzufügen. Legt die Runtime im Figma-File ab.                                                                    |
| `bootstrap/store-meta.js`  | generiert | Prüft jeden Chunk auf Länge UND Inhalts-Checksumme und schreibt den `ready`-Datensatz nur, wenn alles stimmt.                                        |
| `bootstrap/check.js`       | generiert | Liegt die Runtime in diesem File und ist sie aktuell? Verifiziert per Checksumme und liefert bei Bedarf das Modell-Gate.                             |
| `bootstrap/render.js`      | generiert | Der Loader: liest die Chunks zurück, stellt die Runtime her, stellt `renderPlan` / `applyEdits` / `api` bereit.                                      |
| `bootstrap/manifest.json`  | generiert | Maschinenlesbare Kennzahlen: Namespace, `version_sha`, Chunk-Anzahl und -Checksummen, Modell-Gate.                                                   |

## Beim Ändern

1. `src/` oder Registries angefasst → `node assets/build-runtime.cjs` (sonst prüft die CI-Stufe
   `runtime:check` das Gebaute gegen die Quelle und schlägt fehl).
2. Registry angefasst → `pnpm run registry:validate`.
3. Eine `sha`-Änderung der Runtime bedeutet: bestehende Figma-Files müssen neu bootstrappen. Nur
   Änderungen unter `src/` bewegen die `sha`.
4. Tests liegen in `packages/agent-cli/test/db-ux-designer-powers/` — nie im Bundle selbst, das
   würde mit dem npm-Paket ausgeliefert.
