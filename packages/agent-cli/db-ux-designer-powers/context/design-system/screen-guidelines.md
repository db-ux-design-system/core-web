# Screen Guidelines – Visuelle Regeln & Struktur

> Design-Prinzipien für DB-UX-Screens: wie Elemente aussehen und wie ein Screen strukturiert
> wird. Framework-agnostisch — die technische Umsetzung (Runtime, Registries, Composition-
> Workflow, Validierung) steht in `skills/generate-figma-screen/SKILL.md`.
>
> **Abgrenzung zu `layout-guidelines.md`:** Diese Datei beantwortet, **was** ein UI-Element
> semantisch bedeutet, **welche Komponente** dafür verwendet wird und wie ihr visueller Zustand
> aussieht. `layout-guidelines.md` beantwortet dagegen, **wie Inhalte gruppiert und räumlich
> angeordnet** werden. Wenn die Layout-Guidelines zur Darstellung einer Contentart eine
> Komponente nennen (z. B. Topline als Tag oder Meta als Badge), beschreibt das die Rolle im
> Inhaltsmodell — die Semantik und Verwendung der Komponente selbst bleibt hier definiert.

## Komponenten

- Alle UI-Elemente (Button, Card, Tag, Input, Navigation, Notification, Accordion, Badge,
  Switch, Tooltip, …) sind offizielle DB-Komponenten — nie aus Frames/Rechtecken/Text nachgebaut.
- Varianten nie durch Umfärben von Fill/Stroke/Radius vortäuschen — die vorhandene Variante nutzen.
- Jeder Screen beginnt mit dem DB-Header; Logo/App-Name IST der Home-Link (kein „Startseite"-Punkt).
- Meta-Navigation und Header-Aktionsicons nur zeigen, wenn eine echte Aktion existiert — nie
  leere Platzhalter.
- **Aktive Filter werden als Tags dargestellt, nie als Badges.** Tags repräsentieren entfernbare
  oder interaktive Filterzustände; Badges sind für nicht-interaktive Status-, Prioritäts- oder
  Kennzeichnungsinformationen innerhalb von Inhalten. Für Filter-Chips immer die offizielle
  `Tag`-Komponente verwenden und die aktive Filterauswahl nachvollziehbar sowie entfernbar
  machen.

### Position von Notifications

- **Default: eine Notification steht ÜBER dem Inhalt, auf den sie sich bezieht** — also zwischen
  Headline und Content. Ein Hinweis ist eine Voraussetzung für das Lesen oder Handeln und wird
  daher zuerst gelesen. Steht er am Ende eines Blocks, findet man ihn erst, nachdem man den
  Inhalt bereits durchgearbeitet — oder die Aktion schon ausgelöst — hat.
- Bezugsgröße bestimmt die Ebene: gilt der Hinweis für die ganze Seite oder Section, steht er
  unter deren Headline; gilt er für ein einzelnes Feld oder Panel, steht er direkt über diesem.
- Was legitim VOR der Notification stehen darf, ergibt sich aus dem Bezug: die Page-Header-Zeile
  eines Dashboards, der Erfolgs-Icon-Block einer Bestätigung oder die Filterleiste, die ein
  Leerergebnis erklärt, gehören alle über den Hinweis. Deshalb ist die Regel ein **Default mit
  Urteilsvermögen**, keine mechanische Sortierung — ein Versuch, Notifications automatisch nach
  oben zu schieben, hat genau diese drei Fälle verschlechtert.
- Ausnahme sind **viewport-bezogene** Hinweise: `docked` (globaler Alert unter dem Header) und
  `overlay` (Snackbar/Toast) folgen ihrer eigenen Platzierung und sind von der Regel ausgenommen.
- Der Plan-Linter prüft den eindeutigen Verstoß: eine `standalone`-Notification als **letztes**
  Element ihres Containers, unter dem Inhalt, auf den sie sich bezieht.

### Datei-Upload — die Upload-Komponente verwenden

Für Datei-Uploads gibt es eine echte Komponente: **`🧪 Upload`** in Core Lab (Concept). Sie bringt
den Ablagebereich, ein eigenes Label, einen gefüllten Button und zwei Slots (`Start Slot` /
`End Slot`) mit. Sie ist deshalb die richtige Wahl — nicht ein aus `Image`-Raster plus losem
`Button` zusammengesetzter Ersatz und erst recht kein nachgebautes Rechteck mit gestricheltem Rand.

- Plan-Node `Upload`; `label` setzt den Text im Ablagebereich, `direction` wählt vertikal
  (Default) oder horizontal.
- Vorschauen, Zähler und Limits gehören in den `End Slot` (Plan-Feld `children`), zusätzlicher
  Inhalt oberhalb in den `Start Slot` (`startChildren`). Beide Slots hängen an einem eigenen
  `🎨 Show …`-Boolean — die Runtime schaltet es mit, sonst bliebe der gefüllte Slot unsichtbar.
- Akzeptierte Formate als `Infotext` unter der Komponente.

Registriert als Block `form.upload-field` und Pattern `form.attachments`.

**Wichtig:** `Upload` ist eine Concept-Komponente und gehört **nicht** zu den vier Baseline-Einträgen
(Heading, Body, Grid, Container). Ihr Einsatz erfordert daher das `concept_components`-Opt-in —
einmal nachfragen. Wird das Opt-in nicht gegeben, ist die Aufgabe zu benennen und nicht durch einen
nachgebauten Upload zu ersetzen.

## Farbe

- Große Flächen nur in Hintergrund-Level 1–3. Zebra-Flächen sind optional und werden nur bewusst eingesetzt, um inhaltlich unterschiedliche Bereiche klar zu gruppieren; sie sind kein Standard für jeden Screen.
- Brand-/Akzentfarbe nur für Text, Icon oder Border — nie als Fläche.
- Text-Emphasis: 100 ist Standard; 90/80 nur für bewusst abgeschwächten Text; 70 nur für Icons.

## Typografie

- Überschriften und Fließtext nutzen die definierten Typo-Stufen: Hero h1, Section-Titel h2,
  Card-Titel h4; Fließtext/Caption entsprechend kleiner.
- Heading-Hierarchie: pro Section genau eine Titelebene (h2), innere Headings kleiner (h3/h4/h5)
  — nie zwei gleich große Headlines in einer Section.
- Gewicht und Farb-Emphasis stimmen überein: Bold mit starker Farbe (100); abgeschwächte Farbe
  mit Regular. Meta/Caption = Regular + gedämpft. Nie Bold + gedämpft.
- **Keine Versalien (Capslock).** Texte stehen in normaler Schreibweise — Toplines, Kategorien,
  Labels, Meta und Component-Beschriftungen (Tag, Badge, Button, Link) eingeschlossen. Eine
  Topline wird über Größe, Gewicht und Farb-Emphasis abgesetzt, nie über Großschreibung. Das
  gilt für den Textinhalt selbst („ORIENTIERUNG" → „Orientierung") genauso wie für erzwungenes
  Uppercase (Figma `Text Case`, CSS `text-transform`). Ausnahme: Eigennamen und etablierte
  Abkürzungen (DB, ICE, AGB).

## Spacing

- Abstände folgen den definierten Spacing-Stufen (siehe `layout-guidelines.md` → Spacing-Hierarchie).
- Sections und Card-/Container-Inhalte passen sich in der Höhe dem Inhalt an — nie feste Höhe.
- Dichte nach Screentyp konsistent wählen: kompakt für operative/B2B-Screens, luftiger für
  Marketing/Landing — nicht auf einem Screen mischen.

## Komponentengrößen (Höhen-Matching in einer Reihe)

Stehen interaktive Komponenten in EINER horizontalen Reihe nebeneinander (z. B. eine
Filter-/Optionszeile), müssen ihre Größenstufen so gewählt werden, dass die Höhen
zusammenpassen — nie unterschiedlich hohe Controls mischen. Die Größenstufen der Komponenten
sind nicht namensgleich (ein „small" Button ist nicht so hoch wie ein „small" Radio). Als
Höhen-Referenz:

| Höhe | Button   | Link | Radio / Checkbox / Switch | Tag |
| ---- | -------- | ---- | ------------------------- | --- |
| 24px | `small`  | —    | `medium` (Default)        | —   |
| 32px | `medium` | —    | —                         | —   |
| 48px | `large`  | —    | —                         | —   |

- Faustregel: **Ein `small` Button (24px) passt zu einem `medium` Radio/Checkbox/Switch (24px)** —
  diese Kombination für kompakte Options-/Filterzeilen nutzen.
- Inputs/Selects (Formularfelder) sind höher; ein begleitender Aktions-Button in derselben
  Feldzeile nutzt die Feld-Höhe (Default/`medium`), nicht `small`.
- In einer Action-/Filterzeile (Felder neben einem Button) nutzen Input/Select das
  **Floating-Label** (`label: "floating"`), nicht Label-Above: Label-Above stapelt Label + Feld
  auf ~64px und passt nicht zur Button-Höhe, während ein Floating-Label-Feld ein einzelnes
  ~48px-Control ist, dessen Höhe zum Button passt (Reihe vertikal zentriert). Label-Above nur in
  gestapelten Formularen mit eigener Feld-Beschriftung, nicht in einer Aktionszeile.
- Größen innerhalb einer Reihe nie mischen, nur weil ein Element „wichtiger" wirkt — die
  Bedeutung steuert die Aktionsart (Brand/Filled/Ghost), nicht die Höhe.

## Layout & Breite

- Content-Sections standardmäßig volle Breite.
- Contentpages: durchgehend eine schmale, zentrierte Spalte; Hero und abschließende CTA zentriert.

## Section-Struktur

- Jede Content-Section trägt einen Titel (optional eine Beschreibung); nie ein nacktes
  Element-Raster ohne Titel.
- Keine Ein-Block-Sections außer Hero, abschließende CTA und einer einzelnen Media/Text-Reihe.
- Gruppierung, Abstände und Ausrichtung innerhalb der Blöcke: siehe `layout-guidelines.md`
  (Gruppierung, Spacing-Hierarchie, Anordnung).

## Aktionen (Hierarchie)

Die Art der Aktion ergibt sich aus ihrer Bedeutung — nie frei gewählt. Buttons verwenden die
Property `Action Hierarchy` mit genau diesen Werten:

- **Default** — reguläre, auch allein verwendbare Aktion. Das ist der Default-Wert.
- **Primary** — wichtigste Vorwärts- oder Commit-Aktion. Sparsam verwenden: maximal einmal pro
  Screen und höchstens einmal innerhalb einer Aktionsgruppe.
- **Alternative** — untergeordnete Begleitaktion. Sie darf nie allein stehen, sondern ergänzt eine
  stärkere Aktion, beispielsweise „Zurück“ zu „Weiter“ oder „Abbrechen“ zu „Speichern“.

Weitere Regeln:

- Mehrere gleichwertige Aktionen verwenden alle `Default` oder werden als Links dargestellt.
- Navigierende oder informative Aktionen verwenden einen Link („Mehr erfahren“, „Details“).
- Eine einzelne Aktion ist `Default` oder — nur bei eindeutig höchster Priorität — `Primary`.
  `Alternative` ist als Einzelaktion verboten.
- `Danger` beziehungsweise `Critical` ist vorerst kein Bestandteil der Button-Hierarchie und darf
  nicht durch eine frei gewählte Farbe nachgebildet werden.
- Reine Anzeige erhält keine Aktion.

### Ausrichtung von Aktionszeilen

- **Bleibt nur EINE Aktion übrig, steht sie rechts** (`align: "right"`). Das gilt überall, wo eine
  Aktionszeile die Inhaltsspalte füllt — typisch der erste Schritt eines Prozesses, in dem
  „Zurück" entfällt.
- Zwei Aktionen an den Enden einer Zeile (Zurück links, Weiter rechts) werden mit `spread: true`
  verteilt. **`spread` braucht zwei Enden:** bei nur einem Kind setzt Figma es an den ANFANG, die
  Aktion landet also links und die restliche Zeile bleibt leer. Eine Einzelaktion wird daher nie
  über `spread` gelöst, sondern über `align: "right"`.
- Gilt nur für AKTIONEN. Fällt in einer verteilten Zeile die Aktion weg und nur ein Titel bleibt
  übrig, bleibt dieser links — ein nach rechts geschobener Seitentitel ist ein schlimmerer Fehler.

## Klickbare Cards

- Eine klickbare Card enthält genau ein interaktives Element — oder keins. Keine verschachtelten
  Buttons/Links.
- Ein Navigationsziel, das die ganze Card beschreibt → ganze Card ist der Link.
- Befehl/Zustandsänderung → expliziter Button, Card nicht klickbar. Navigation = Link, nicht Button.

## Media / Text

- Abgerundete Ecken binden einen Radius-Token — nie rohe Pixelwerte.
- Anordnung von Bild und Text (Zentrierung, Abstand): siehe `layout-guidelines.md` → Anordnung.

## Bilder & Icons

- Bilder nutzen eines der Seitenverhältnisse 1:1, 3:4 oder 16:9; Breite füllt den Container,
  Höhe ergibt sich daraus — keine freien Pixelhöhen.
- Icons sind echte DB-Icon-Komponenten (nie Emoji, Bild-Rechteck oder umgefärbte Form); die
  Größe ist über die Größenstufe intrinsisch bestimmt.
- **Ein Icon-Only-Button braucht zwingend ein Icon.** Ohne gesetztes Icon bleibt der
  Platzhalter der Library stehen und rendert als leeres ✕-Kästchen. Ist für die Aktion kein
  passendes, verifiziertes Icon vorhanden, wird die Aktion als Button MIT Label gesetzt oder
  weggelassen — nie als leerer Icon-Button. Dasselbe gilt für jedes Icon-Slot: nur verifizierte
  DB-Theme-Icon-Namen verwenden.
