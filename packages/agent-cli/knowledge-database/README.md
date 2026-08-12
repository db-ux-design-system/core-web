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
  figma-findings.md        Beobachtungen aus dem Auslesen der Figma-Library
  requirements.md          Anforderungsdokument an die Knowledge Base
  writing-conventions.md   Schreib- und Formulierungskonventionen
  TODO.md                  Offene Punkte
```

### Wo welches Wissen liegt

- **`guidelines.md`** — Was die Komponente kann und nicht kann. Doku-relevant.
- **`inconsistencies.md`** — Abweichungen zwischen Figma und Code, offene Befunde. Nicht doku-relevant.
- **`figma-findings.md`** — Beobachtungen aus dem Auslesen der Figma-Library, die noch keinen Zielort haben. Arbeitsliste zum Durchgehen mit Design, ausdrücklich kein Doku-Inhalt. Jeder Punkt wird nach der Klärung an seinen Zielort verschoben und dort gelöscht.
- **`writing-conventions.md`** — Schreibweisen, Normativität, Tonalität in der Wissensbasis.

Beobachtungen aus Figma dürfen nicht in die `guidelines.md` einfließen, solange sie nicht fachlich bestätigt und in der Doku verankert sind. Die `guidelines.md` speist sich aus dem Doku-Inhalt, nicht aus der Figma-Struktur.

**Konventionen der Figma-Library** stehen nicht in dieser Wissensbasis, sondern in der Design Power des Core Teams (Steering `design-library.md`). Dort ist geregelt, wie Komponenten benannt und strukturiert werden, welche Emoji-Präfixe Properties tragen, wie Slots und Variantenmatrizen aufgebaut sind. Die Wissensbasis beschreibt den **Inhalt** des Design Systems, die Power beschreibt **wie die Figma-Library gebaut ist**. Beides doppelt zu pflegen führt zu Divergenz.

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

### Zustand der Guidelines

Eine leere `## Regeln`-Sektion ist mehrdeutig. Damit Generatoren nicht raten müssen, wird der Zustand doppelt ausgezeichnet: maschinenlesbar im Feld `guidelines` der `meta.json` und als selbstbeschreibender Zeiger in der `guidelines.md` selbst. Letzteres ist nötig, weil Agents die Markdown-Datei häufig ohne die `meta.json` daneben lesen.

- **Feld fehlt** — Regeln sind ausgearbeitet und stehen unter `## Regeln`.
- **`guidelines: "pending"`** — Regeln noch nicht festgelegt. Die `guidelines.md` bleibt leer, der offene Punkt steht in `TODO.md`. Generatoren überspringen diese Ordner, statt aus einer leeren Datei ein fehlendes Schema abzuleiten.
- **`guidelines: "delegated"`** — Regeln liegen bewusst auf der Unterebene. Betrifft Elternkomponenten mit mehreren Hauptkomponenten (z. B. Shell, Control Panel), deren Regeln sich vollständig aus den Varianten ergeben. Die `guidelines.md` enthält unter `## Regeln` einen Satz mit Links auf die zuständigen Dateien.

Der Zeiger bei `delegated` listet **alle direkten Kinder** — Hauptkomponenten und Unterkomponenten. Die Hauptkomponenten allein reichen nicht, weil sie nicht auf die Unterkomponenten weiterverlinken: ein Agent, der nur den Hauptkomponenten folgt, würde die Regeln der Unterkomponenten nie erreichen. Die Unterscheidung zwischen beiden bleibt im Satz sichtbar, analog zur Trennung von `componentSets` und `subComponents` in der `figma.json`. Tiefer verschachtelte Ordner werden nicht aufgeführt, ihre Zuordnung steht in der `figma.json` der jeweiligen Elternkomponente.

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

### Aufbau der `figma.json`

Die `figma.json` auf Elternebene enthält zwei Arrays:

- `componentSets[]` — die Hauptkomponenten der Elternkomponente. Das sind die Varianten, die in Figma als eigenständige Component Sets modelliert sind und in der KDB jeweils einen eigenen Unterordner mit vollständiger Dateistruktur erhalten (z. B. Shell Desktop, Shell Mobile).
- `subComponents[]` — Unterkomponenten, die innerhalb der Hauptkomponenten verwendet werden, aber fachlich eigenständig sind (z. B. Control Panel Brand, Control Panel Navigation). Auch sie erhalten einen eigenen Unterordner.

Beide Typen haben denselben Ordneraufbau (`meta.json`, `figma.json`, `properties.json`, `guidelines.md`). Der Unterschied ist semantisch: `componentSets` sind die Dinge, die man als Nutzer der Elternkomponente direkt platziert. `subComponents` sind eingebettete Bausteine innerhalb dieser Hauptkomponenten.

Ein Eintrag in `componentSets` trägt `name`, `nodeId`, `type` und `key`. Das Feld `type` unterscheidet `COMPONENT_SET` von `COMPONENT`: nicht jede Variante ist in Figma als Set mit Variantenachse modelliert, manche sind parallele Einzelkomponenten. Der tatsächliche Typ wird übernommen, nicht angenommen.

### Aufbau der `properties.json`

Die Datei spiegelt Code und Figma, sie autoriert keinen Inhalt. Deshalb sind alle Texte darin englisch — `description` entspricht dem JSDoc der `model.ts`, `note` beschreibt Abweichungen zwischen Design und Code. Deutsch ist nur die autorierte Ebene (`guidelines.md`) und die interne Dokumentation.

Pro Property:

- `name`, `type`, `values`, `default` — die kanonische API, unabhängig von Figma oder Code
- `code` — Prop-Name und TypeScript-Typ, `null` wenn im Code nicht vorhanden
- `design` — Figma-Name inklusive Emoji-Präfix, Variantenwerte in Figma-Schreibweise, optional `codeConnect` und `note`

#### `description` nur bei vorhandener Code-Property

`description` wird ausschließlich gesetzt, wenn die Property eine Code-Entsprechung hat, und übernimmt dann den JSDoc-Wortlaut aus der `model.ts`. Figma-only Properties (`code: null`) tragen keine Description.

Der Grund ist inhaltlich: Bei Figma-only Properties wäre jede Description eine Neuformulierung, die niemand gegen eine Quelle prüfen kann. Meist wiederholt sie nur den Property-Namen. Trägt eine solche Property tatsächlich Wissen, das über den Namen hinausgeht, gehört das als Regel in die `guidelines.md` oder als `note` in das `design`-Objekt — nicht als Description.

Solange eine Komponente noch keinen Code hat, bleibt das Feld deshalb überall leer und wird beim Dev-Handoff aus dem JSDoc gefüllt.

#### Property in mehreren Component Sets

Hat eine Komponente mehrere Component Sets mit unterschiedlichen Property-Flächen (z. B. Control Panel Desktop mit Top und Left), trägt jede Property im `design`-Objekt zusätzlich ein `componentSet`-Array mit den Sets, in denen sie vorkommt. Die Bezeichner sind kurze Kleinschreibungen der Variante (`top`, `left`, `flat-icon-desktop`).

Ohne dieses Feld wäre bei flacher Ablage nicht erkennbar, welche Property zu welchem Set gehört. Kommt dieselbe logische Property in mehreren Sets unter **abweichendem Figma-Namen** vor, wird sie in getrennte Einträge aufgeteilt und über `note` aufeinander verwiesen — ein Generator würde die Namen sonst als zwei verschiedene Properties behandeln.

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

#### Was gehört in `## Zusätzliche Informationen`, was nicht

Beide Abschnitte der `guidelines.md` sind doku-relevant. Deshalb gehört unter `## Zusätzliche Informationen` nur, was Konsumenten der Komponente wissen müssen — also **Verhalten und Property-Fläche, einschließlich fehlender Properties**:

- „Bei Tree ist immer ein Icon vorhanden und lässt sich nicht ausblenden."
- „Popover-Items haben keinen End Slot."
- „Der Flat Icon Slot ist auf Mobile auf zwei bis sechs Items begrenzt."

Nicht dorthin gehört, **wie die Figma-Datei organisiert ist**, wenn das keine Auswirkung auf die Nutzung hat. Ob eine Variante als Component Set oder als eigenständige Komponente modelliert ist, ob ein Emoji-Präfix vom Typ abweicht, warum ein Property-Name gekürzt wurde — das sieht in der Doku niemand.

Die Trennlinie ist die Frage: **Wie verhält sich die Komponente** gegen **warum ist die Figma-Library so gebaut**. Erstes in die `guidelines.md`, zweites in das Steering `design-library.md` der Design Power des Core Teams.

Solche Begründungen gehören übergreifend formuliert, nicht pro Komponente. Wenn ein Modellierungsmuster bei einer Komponente auftritt, trifft es meist auch andere — unter einer Komponentenüberschrift wird es dann mehrfach als Befund aufgeworfen.

### Normativität von Regeln

Siehe [writing-conventions.md](writing-conventions.md#normativität-von-regeln).

### Verweise in `guidelines.md`

- **Andere Komponenten** werden als relativer Markdown-Link auf deren Guideline gesetzt: `[Checkbox](../checkbox/guidelines.md)`. Der Anzeigename entspricht `name` aus der `meta.json`, die ID ist aus dem Pfad ableitbar. Selbstverweise innerhalb der eigenen Guideline werden nicht verlinkt.
- **Lab-Komponenten** werden ebenfalls verlinkt, aber zusätzlich als solche gekennzeichnet, weil sie keinen stabilen API-Vertrag haben.
- **Dateien** (z. B. Principles) werden genauso verlinkt: `[Adaptive Density](../_principles/adaptive-density.md)`.
- **Kein Gedankenstrich in `## Regeln`.** Siehe [writing-conventions.md](writing-conventions.md#formulierung-in--regeln).

### Schreibweise von Begriffen

Siehe [writing-conventions.md](writing-conventions.md#schreibweise-von-begriffen).

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
- `caution.description` — statt `dont` bei einer Regel mit `**sollte**`. Die abgemilderte Form: keine harte Untersagung, sondern ein Hinweis auf die Folgen mit einer Empfehlung. (DE + EN)
- `do.figmaNodeId` — wird nach Erstellung der Figma-Visuals nachgetragen
- `dont.figmaNodeId` bzw. `caution.figmaNodeId` — wird nach Erstellung der Figma-Visuals nachgetragen

Eine Regel trägt entweder `dont` oder `caution`, nicht beides. `**sollte**` im Regeltext und `caution` im Eintrag sind zwei Darstellungen derselben Normativität — wer eine Regel ohne `dont` findet, muss `caution` prüfen, bevor er sie für nicht normativ hält.

#### Content Tone (Documentation Area)

Siehe [writing-conventions.md](writing-conventions.md#content-tone-für-documentationjson).

#### Was nicht aus `guidelines.md` generiert wird

- `figmaFileKey` — aus `figma.json`
- `figmaNodeId` — Figma-Visuals müssen erst erstellt werden, Node-IDs werden nachgetragen
- `faq` — wird manuell befüllt (Support, häufige Rückfragen)
