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

| Genre                               | Ablage                                                                         | Pflichtabschnitte                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| **Regelwerk**                       | `components/`, `lab-components/`, `icons/`, Token-Kategorien in `foundations/` | `## Regeln`, optional `## Zusätzliche Informationen`                  |
| **Systemkonzept / internes System** | `foundations/_principles/`, `foundations/icon-font-size/`                      | freies Schema — erklärende Abschnitte je nach Thema, kein `## Regeln` |

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

- `meta.json` — Allgemeine Informationen (ID, Name, Typ, Status, Owner, Version). Optional `deprecation: "planned"` plus `note`, wenn eine Komponente mittelfristig abgelöst wird — dieser Hinweis gehört in die `meta.json` und nicht in die `guidelines.md`, damit er maschinell auswertbar bleibt.
- `figma.json` — Figma Library-Referenz, Component Sets, Node IDs
- `properties.json` — Figma Properties, Code Connect Properties, Code Properties
- `guidelines.md` — Nutzungsrichtlinien, Do's and Don'ts

### Abschnitte in `guidelines.md`

- `## Regeln` — ausschließlich normative Aussagen: Anweisungen, Empfehlungen, Verbote. Alles, worüber bei der Umsetzung entschieden wird.
- `## Zusätzliche Informationen` — deskriptive Aussagen: Systemverhalten, Gestaltungsspielraum, automatische Mechanismen. Nichts davon ist eine Handlungsanweisung, die Inhalte sind aber Grundlage für erklärende Doku-Abschnitte und Beispiele.

Ein Generator, der `## Regeln` zu Do's und Don'ts verarbeitet, darf `## Zusätzliche Informationen` nicht als Anweisung interpretieren.

### Normativität von Regeln

Jede Regel unter `## Regeln` ist **verbindlich (MUSS)**, sofern sie keinen abweichenden Marker trägt. Abweichungen werden am Satzanfang ausgezeichnet:

| Marker          | Bedeutung                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| _(kein Marker)_ | MUSS — verbindlich. Betrifft Barrierefreiheit, Token-Nutzung, semantische Korrektheit und Abgrenzung von Komponenten    |
| `**sollte**`    | Empfehlung. Abweichung ist im begründeten Einzelfall zulässig, typischerweise bei Gestaltung, Textstil und Proportionen |
| `**kann**`      | Echte Option ohne Vorgabe                                                                                               |

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
