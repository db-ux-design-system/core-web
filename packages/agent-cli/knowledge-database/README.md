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

- `meta.json` — Allgemeine Informationen (ID, Name, Typ, Status, Owner, Version)
- `figma.json` — Figma Library-Referenz, Component Sets, Node IDs
- `properties.json` — Figma Properties, Code Connect Properties, Code Properties
- `guidelines.md` — Nutzungsrichtlinien, Do's and Don'ts

### Sub-Components

Sub-Components liegen als Unterordner der Elternkomponente und haben dieselbe Dateistruktur. Ihre `meta.json` referenziert die Elternkomponente über das Feld `parent`, die `figma.json` der Elternkomponente listet sie über `subComponents` auf.

Varianten desselben Sub-Components (z. B. Größen oder Stile, die in Figma als separate Component Sets modelliert sind) werden in **einem** Ordner zusammengefasst und dort als mehrere Einträge in `componentSets` geführt.

Maßgeblich ist die fachliche Struktur, nicht die Figma-Modellierung: Was in Figma aus Design-Gründen in mehrere Component Sets aufgeteilt ist, bleibt in der Wissensbasis ein Sub-Component.

### Hilfskomponenten

Reine Figma-Hilfskomponenten (Präfix `🛟`) sind kein Teil der Design-System-API. Sie werden in der `figma.json` der Elternkomponente unter `helperComponents` geführt und erhalten keinen eigenen Ordner.

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
