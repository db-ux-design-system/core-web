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

- `meta.json` — Allgemeine Informationen (ID, Name, Typ, Status, Owner, Version). Optional `deprecation: "planned"` plus `note`, wenn eine Komponente mittelfristig abgelöst wird — dieser Hinweis gehört in die `meta.json` und nicht in die `guidelines.md`, damit er maschinell auswertbar bleibt.
- `figma.json` — Figma Library-Referenz, Component Sets, Node IDs
- `properties.json` — Figma Properties, Code Connect Properties, Code Properties
- `guidelines.md` — Nutzungsrichtlinien, Do's and Don'ts

### Sub-Components

In Figma sind Sub-Components am Präfix `↳` im Namen des Component Sets erkennbar und liegen zusätzlich in einer eigenen Sub-Component-Section auf der Komponentenseite.

Sub-Components liegen als Unterordner der Elternkomponente und haben dieselbe Dateistruktur. Ihre `meta.json` referenziert die Elternkomponente über das Feld `parent`, die `figma.json` der Elternkomponente listet sie über `subComponents` auf. Das `componentSets`-Array der Elternkomponente enthält ausschließlich deren eigene Sets — `↳`-Sets stehen nie darin.

Varianten desselben Sub-Components (z. B. Größen oder Stile, die in Figma als separate Component Sets modelliert sind) werden in **einem** Ordner zusammengefasst und dort als mehrere Einträge in `componentSets` geführt.

Maßgeblich ist die fachliche Struktur, nicht die Figma-Modellierung: Was in Figma aus Design-Gründen in mehrere Component Sets aufgeteilt ist, bleibt in der Wissensbasis ein Sub-Component.

### Hilfskomponenten

Reine Figma-Hilfskomponenten (Präfix `🛟`) sind kein Teil der Design-System-API. Sie werden in der `figma.json` der Elternkomponente unter `helperComponents` geführt und erhalten keinen eigenen Ordner.

## Lab-Components

Komponenten im Status **Concept** oder **Pre-Release**. Gleiche Dateistruktur wie Components, aber:

- Sind als Konzept-Komponenten in Figma vorhanden und existieren noch nicht im Code.
- `properties.json` enthält nur `figmaProperties` (Code-Properties noch nicht definiert)
- `guidelines.md` enthält die Beschreibung der Komponente, aber noch keine Regeln
- Kein stabiler API-Vertrag — Breaking Changes jederzeit möglich

Property-Namen werden 1:1 aus der Figma-Library übernommen. Die endgültige Benennung erfolgt erst mit dem Übertrag nach Core (Beta) in Abstimmung mit Dev — bis dahin ist die Abweichung zur Core-Namenskonvention beabsichtigt.

## Arbeitsnotizen

`guidelines.md`-Dateien enthalten keine internen Kommentare (`<!-- TODO -->`, `<!-- NOTE -->`). Offene Punkte gehören nach `TODO.md`, Abweichungen zwischen Figma und Code nach `inconsistencies.md`, verarbeitungsrelevante Statusinformationen in die jeweilige `meta.json`.

## Figma Libraries

`figma-libraries.json` listet alle referenzierten Figma-Libraries mit:

- Library-Name
- File Key (für API-Zugriff)
- Library Key (für Variable-Lookups)
