# Knowledge Database

Zentrale, strukturierte Wissensbasis des DB UX Design Systems.

## Struktur

```
knowledge-database/
  foundations/              Tokens, Prinzipien und interne Mechanismen
  components/              Core-Komponenten (veröffentlicht)
  lab-components/          Lab-Komponenten (Concept / Pre-Release)
  figma-libraries.json     Übersicht der Figma-Libraries mit File Keys
  requirements.md          Anforderungsdokument an die Knowledge Base
```

## Foundations

### Token-Ordner (`{kategorie}/tokens.json`)

Öffentliche Token-API des Design Systems. Jede Datei dokumentiert:

- CSS Custom Properties mit Token-Namen
- Figma Variable Collection und Variable Keys
- Skala, Gruppen und Beschreibungen

Kategorien: `colors`, `spacing`, `sizing`, `border-width`, `border-radius`, `opacity`, `elevation`, `typography`, `transition`, `screen`, `container`

### Principles (`foundations/principles/`)

Übergreifende Systemkonzepte, die beschreiben wie die Tokens zusammenwirken. Zielgruppe: Konsumenten und Entwickler, die verstehen wollen wie das adaptive System funktioniert.

- `adaptive-colors.md` — Farbsystem (Modes, Varianten, Collections)
- `adaptive-density.md` — Density-System (Modi, Aktivierung, betroffene Kategorien)

### Internals (`foundations/internals/`)

Interne Mechanismen und Variablen für Design-System-Maintainer und Komponentenentwickler. Nicht für Konsumenten gedacht, aber essentiell für den Bau neuer Komponenten.

- `icon-font-size.md` — Internes Icon-Sizing-System (density × device × type × size)
- `design-variables.md` — Komponentenspezifische 🧱-Variablen in Figma

### Inkonsistenzen (`foundations/inconsistencies.md`)

Tracking von Abweichungen zwischen Figma und Code (Figma-only Tokens, Code-only Tokens, strukturelle Unterschiede).

## Components

Veröffentlichte Core-Komponenten mit stabilem API-Vertrag. Pro Komponente:

- `figma.json` — Figma Library-Referenz, Component Sets, Node IDs
- `properties.json` — Figma Properties, Code Connect Properties, Code Properties
- `guidelines.md` — Nutzungsrichtlinien, Do's and Don'ts

## Lab-Components

Komponenten im Status **Concept** oder **Pre-Release**. Gleiche Dateistruktur wie Components, aber:

- Sind als Konzept-Komponenten in Figma vorhanden und existieren noch nicht im Code.
- `properties.json` enthält nur `figmaProperties` (Code-Properties noch nicht definiert)
- `guidelines.md` ist Platzhalter
- Kein stabiler API-Vertrag — Breaking Changes jederzeit möglich

## Figma Libraries

`figma-libraries.json` listet alle referenzierten Figma-Libraries mit:

- Library-Name
- File Key (für API-Zugriff)
- Library Key (für Variable-Lookups)
