# Knowledge Database

Zentrale, strukturierte Wissensbasis des DB UX Design Systems.

## Struktur

```text
knowledge-database/
  foundations/              Tokens, Prinzipien und interne Mechanismen
  components/              Core-Komponenten (veröffentlicht)
  lab-components/          Lab-Komponenten (Concept / Pre-Release)
  icons/                   Icon-System (Namen, Guidelines)
  figma-libraries.json     Übersicht der Figma-Libraries mit File Keys
  inconsistencies.md       Tracking von Abweichungen zwischen Figma und Code
  requirements.md          Anforderungsdokument an die Knowledge Base
  TODO.md                  Offene Punkte
```

## Aufbau der Markdown-Dateien

Gilt für alle `guidelines.md` sowie die Dateien unter `foundations/_principles/`:

1. **H1** — Anzeigename, entspricht `name` aus der `meta.json`.
2. **Beschreibungszeile** — die erste nicht-leere Zeile nach dem H1 ist die Beschreibung. Sie ist verbindlicher Teil des Schemas und wird von Generatoren an dieser Position erwartet. Deshalb steht dort nie ein Abschnitt, eine Liste oder ein Kommentar, und die Beschreibung wird nicht als Feld in der `meta.json` geführt.
3. **Abschnitte** — je nach Genre, siehe unten.

### Genres

Die Wissensbasis kennt zwei Genres mit unterschiedlichen Pflichtabschnitten. Welches Genre gilt, ist am Feld `type` der `meta.json` bzw. an der Ablage erkennbar:

- **Regelwerk** — Ablage: `components/`, `lab-components/`, `icons/`, Token-Kategorien in `foundations/`. Pflichtabschnitte: `## Regeln`, optional `## Zusätzliche Informationen`.
- **Systemkonzept / internes System** — Ablage: `foundations/_principles/`, `foundations/icon-font-size/`. Freies Schema — erklärende Abschnitte je nach Thema, kein `## Regeln`.

Regelwerke werden zu Do's und Don'ts verarbeitet und müssen sich deshalb auf `## Regeln` verlassen können. Systemkonzepte beschreiben, wie Tokens zusammenwirken, und enthalten bewusst keine Handlungsanweisungen — ein Generator darf sie nicht als Regelquelle behandeln.

### Noch nicht ausgearbeitete Guidelines

Solange für eine Komponente keine Regeln festgelegt sind, trägt ihre `meta.json` das Feld `guidelines: "pending"` und der offene Punkt steht in `TODO.md`. Die `guidelines.md` bleibt in diesem Fall leer. Generatoren überspringen diese Ordner, statt aus einer leeren Datei ein fehlendes Schema abzuleiten.

## Foundations

Jeder Ordner enthält eine `meta.json` mit den allgemeinen Informationen. Der fachliche Inhalt liegt je nach Kategorie in einer `tokens.json` und/oder als Markdown-Datei (`guidelines.md`).

### Token-Ordner (`{kategorie}/tokens.json`)

Öffentliche Token-API des Design Systems. Jede Datei dokumentiert pro Token:

- CSS Custom Property
- Figma Variable/Style Name und Key
- Gruppierung (bei Multi-Group-Tokens wie spacing, typography)

Kategorien: `colors`, `spacing`, `sizing`, `border-width`, `border-radius`, `opacity`, `elevation`, `typography`, `transition`, `screen`, `container`

**Kategorie und Gruppe sind nicht dasselbe** und werden in Guidelines und Principles konsequent auseinandergehalten:

- **Kategorie** — oberste Ebene, entspricht dem Feld `category` in der `tokens.json` (z. B. `spacing`, `colors`)
- **Gruppe** — Unterteilung innerhalb einer Kategorie (z. B. `fixed` und `responsive` bei `spacing`, `bg/basic` und `on-bg/basic` bei `colors`)

### Principles (`foundations/_principles/`)

Übergreifende Systemkonzepte, die beschreiben wie die Tokens zusammenwirken. Zielgruppe: Konsumenten und Entwickler, die verstehen wollen wie das adaptive System funktioniert.

- `adaptive-colors.md` — Farbsystem (Modes, Varianten, Collections)
- `adaptive-density.md` — Density-System (Modi, Aktivierung, betroffene Kategorien)

### Component Tokens (`foundations/_component-tokens/`)

Komponentenspezifische Sizing-Variablen (`🧱 design`) für Fälle, die über die globalen Spacing-/Sizing-Skalen hinausgehen. Existieren nur in Figma (Density Collection) und werden nicht als CSS Custom Properties exponiert.

- `shell.json` — Width/Height für die Shell-Komponente (Header/Navigation)
- `resizer.json` — Sizing/Container für die Resizer-Komponente (Drag-Handle)
- `textarea.json` — Height für die Textarea-Komponente (Label-positionsabhängig)

### Icon Font Size (`foundations/icon-font-size/`)

Internes Icon-Sizing-System (density × device × type × size). Nicht für Konsumenten, sondern für den Bau von Komponenten relevant.

## Icons

Icon-System des Design Systems:

- `guidelines.md` — Nutzungsregeln
- `icon-names.json` — Vollständige Liste aller verfügbaren Icon-Namen
- `properties.json` — Properties der Icon-Komponente
- `meta.json` — Allgemeine Informationen

## Components

Veröffentlichte Core-Komponenten mit stabilem API-Vertrag. Pro Komponente:

- `meta.json` — Allgemeine Informationen (ID, Name, Typ, Status, Owner, Version). Quelle: manuell.
- `figma.json` — Figma Library-Referenz, Component Sets, Node IDs. Quelle: Figma API.
- `properties.json` — Figma Properties, Code Connect Properties, Code Properties. Quelle: Figma + Code.
- `guidelines.md` — Nutzungsrichtlinien — normative Regeln für Agents und Generatoren. Quelle: manuell (Authoring).
- `documentation.json` — Platform-Dokumentation — zweisprachige Texte für die Doku-Website. Quelle: generiert aus `guidelines.md`.

### Zusammenhang der Dateien

```text
guidelines.md          ← Autoriert (Regeln, kompakt, deutsch)
       │
       ▼
documentation.json     ← Generiert (DE + EN, expandiert, Content Tone)
       │
       ▼
Platform MDX           ← Sync (db-ux-design-system.github.io)
```

- `guidelines.md` ist die **Single Source of Truth** für den fachlichen Inhalt. Hier werden Regeln geschrieben und gepflegt.
- `documentation.json` wird aus `guidelines.md` **generiert** und enthält die ausformulierten Texte für die Platform-Dokumentation in DE und EN. Die Tonalität folgt dem Content Styleguide (siehe „Generierung der documentation.json").
- Die **Platform MDX-Dateien** im Repo `db-ux-design-system.github.io` werden perspektivisch aus `documentation.json` gesynct.

`meta.json` kann optional `deprecation: "planned"` plus `note` enthalten, wenn eine Komponente mittelfristig abgelöst wird — dieser Hinweis gehört in die `meta.json` und nicht in die `guidelines.md`, damit er maschinell auswertbar bleibt.

### Abschnitte in `guidelines.md`

- `## Regeln` — ausschließlich normative Aussagen: Anweisungen, Empfehlungen, Verbote. Alles, worüber bei der Umsetzung entschieden wird.
- `## Zusätzliche Informationen` — deskriptive Aussagen: Systemverhalten, Gestaltungsspielraum, automatische Mechanismen. Nichts davon ist eine Handlungsanweisung, die Inhalte sind aber Grundlage für erklärende Doku-Abschnitte und Beispiele.

Ein Generator, der `## Regeln` zu Do's und Don'ts verarbeitet, darf `## Zusätzliche Informationen` nicht als Anweisung interpretieren.

### Normativität von Regeln

Jede Regel unter `## Regeln` ist **verbindlich (MUSS)**, sofern sie keinen abweichenden Marker trägt. Abweichungen werden am Satzanfang ausgezeichnet:

- _(kein Marker)_ — MUSS — verbindlich. Betrifft Barrierefreiheit, Token-Nutzung, semantische Korrektheit und Abgrenzung von Komponenten.
- `**sollte**` — Empfehlung. Abweichung ist im begründeten Einzelfall zulässig, typischerweise bei Gestaltung, Textstil und Proportionen.
- `**kann**` — Echte Option ohne Vorgabe.

Trägt eine Regel mehrere Aussagen, gilt der Marker nur für den Satz, an dem er steht. Der Rest der Regel bleibt verbindlich.

Ein Generator kann daraus gewichtete Do's und Don'ts ableiten: unmarkierte Regeln als harte Anforderung, `**sollte**` als Empfehlung, `**kann**` als Hinweis auf Gestaltungsspielraum.

### Verweise in `guidelines.md`

- **Andere Komponenten** werden als relativer Markdown-Link auf deren Guideline gesetzt: `[Checkbox](../checkbox/guidelines.md)`. Der Anzeigename entspricht `name` aus der `meta.json`, die ID ist aus dem Pfad ableitbar. Selbstverweise innerhalb der eigenen Guideline werden nicht verlinkt.
- **Lab-Komponenten** werden ebenfalls verlinkt, aber zusätzlich als solche gekennzeichnet, weil sie keinen stabilen API-Vertrag haben.
- **Dateien** (z. B. Principles) werden genauso verlinkt: `[Adaptive Density](../_principles/adaptive-density.md)`.
- **Kein Gedankenstrich in `## Regeln`.** Verbote als „nicht"/„nie" im Satz, Alternativen mit „stattdessen", Begründungen als eigener Satz, Aufzählungen nach Doppelpunkt. Trägt die zweite Hälfte eine eigenständige Aussage, wird sie eine eigene Regel.

### Schreibweise von Begriffen

- **Token-Kategorien, Properties und Property-Werte** werden mit ihrem kanonischen Namen in Backticks referenziert: `` `sizing` ``-Tokens, `` `placement` ``, `` `selectedType` `` auf `tag`. Der Name muss exakt dem Eintrag in `tokens.json` bzw. `properties.json` entsprechen, damit Term-Matching greift.
- **Alles andere** sind deutsche Komposita und werden gekoppelt geschrieben: Viewport-Größen, Code-Mapping, Icon-Größe, Mindest-Trefferzone.
- **Englische Mehrwortbegriffe ohne Bindestrich sind nicht zulässig** („Sizing Tokens", „Icon Size", „Label Variant"). Dieselbe Entität wird sonst in zwei Schreibweisen nicht als dieselbe erkannt.

### Generierung der `documentation.json`

`documentation.json` wird aus `guidelines.md` generiert und folgt dem Content Styleguide des Platform-Repos (`db-ux-design-system.github.io/.kiro/steering/content-tone.md`).

#### Eingabe

- `guidelines.md` — Beschreibungszeile und `## Regeln` als fachliche Basis
- `figma.json` — `figmaFileKey` wird von dort übernommen
- `meta.json` — Komponenten-Name und -ID
- Markdown-Links in den Regeln — werden zu `related`-Einträgen

#### Mapping-Regeln

- Beschreibungszeile (nach H1) → `description` — umformuliert nach Content Tone (vollständiger Satz mit Subjekt)
- Beschreibungszeile (gekürzt) → `shortDescription` — einzeilige Kurzversion
- Aus Beschreibung abgeleitet → `useCases` — 3 Bullet Points, was die Komponente ermöglicht
- Jede Regel unter `## Regeln` → ein Eintrag in `guidelines[]`
- Markdown-Links auf andere Komponenten → `related[]`-Einträge

#### Guideline-Expansion (pro Regel)

Jede Regel wird zu einem Guideline-Objekt expandiert:

- `id` — aus dem Thema der Regel (kebab-case)
- `headline` — kurze, sprechende Überschrift für die Regel (DE + EN)
- `text` — die Regel als natürlicher Satz im Dokumentations-Ton, ergänzt um Kontext aus der Regel selbst (DE + EN)
- `do.description` — positiv formuliert: was zu tun ist. Imperativ. (DE + EN)
- `dont.description` — beginnt mit Verb + „nicht" (DE) bzw. „Don't..." (EN). Enthält immer die Konsequenz.
- `do.figmaNodeId` — wird nach Erstellung der Figma-Visuals nachgetragen
- `dont.figmaNodeId` — wird nach Erstellung der Figma-Visuals nachgetragen

#### Content Tone (Documentation Area)

- Faktenbasiert, direkt, kein Wort zu viel
- Eine Idee pro Satz, aktiv statt passiv
- DE Guideline-Texte: Imperativ oder klares Subjekt, nie nackte Infinitivkonstruktionen
- DE Do: Imperativ, Verb vorn
- DE Dont: Imperativ, Verb vorn, „nicht" nach dem Objekt (nie mit „Nicht..." starten)
- EN Do: Positiv formuliert
- EN Dont: Beginnt mit „Don't..."
- Jedes Dont enthält das Warum oder die Konsequenz

#### Was nicht aus `guidelines.md` generiert wird

- `figmaFileKey` — aus `figma.json`
- `figmaNodeId` — Figma-Visuals müssen erst erstellt werden, Node-IDs werden nachgetragen
- `faq` — wird manuell befüllt (Support, häufige Rückfragen)