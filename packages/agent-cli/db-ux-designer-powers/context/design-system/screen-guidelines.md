# Screen Guidelines – Visuelle Regeln & Struktur

> Design-Prinzipien für DB-UX-Screens: wie Elemente aussehen und wie ein Screen strukturiert
> wird. Framework-agnostisch — die technische Umsetzung (Runtime, Registries, Composition-
> Workflow, Validierung) steht in `skills/generate-figma-screen/SKILL.md`.

## Komponenten

- Alle UI-Elemente (Button, Card, Tag, Input, Navigation, Notification, Accordion, Badge,
  Switch, Tooltip, …) sind offizielle DB-Komponenten — nie aus Frames/Rechtecken/Text nachgebaut.
- Varianten nie durch Umfärben von Fill/Stroke/Radius vortäuschen — die vorhandene Variante nutzen.
- Jeder Screen beginnt mit dem DB-Header; Logo/App-Name IST der Home-Link (kein „Startseite"-Punkt).
- Meta-Navigation und Header-Aktionsicons nur zeigen, wenn eine echte Aktion existiert — nie
  leere Platzhalter.

## Farbe

- Große Flächen nur in Hintergrund-Level 1–3; Zebra: oberste Fläche Level 1, dann abwechselnd.
- Brand-/Akzentfarbe nur für Text, Icon oder Border — nie als Fläche.
- Text-Emphasis: 100 ist Standard; 90/80 nur für bewusst abgeschwächten Text; 70 nur für Icons.

## Typografie

- Überschriften und Fließtext nutzen die definierten Typo-Stufen: Hero h1, Section-Titel h2,
  Card-Titel h4; Fließtext/Caption entsprechend kleiner.
- Heading-Hierarchie: pro Section genau eine Titelebene (h2), innere Headings kleiner (h3/h4/h5)
  — nie zwei gleich große Headlines in einer Section.
- Gewicht und Farb-Emphasis stimmen überein: Bold mit starker Farbe (100); abgeschwächte Farbe
  mit Regular. Meta/Caption = Regular + gedämpft. Nie Bold + gedämpft.

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

Die Art der Aktion ergibt sich aus ihrer Bedeutung — nie frei gewählt:

- Wichtigste Seitenaktion → Primär/Brand — max. einmal pro Screen, nie pro Card.
- Mehrere gleichwertige Items → alle dieselbe Aktionsart (gefüllt oder Link).
- Navigierend / informativ → Link („Mehr erfahren", „Details").
- Mehrere Aktionen am selben Objekt → Gruppe: max. eine primäre + sekundäre (ghost).
- Reine Anzeige → keine Aktion.

- Eine einzelne Aktion ist gefüllt (Hero/CTA: Brand). Ein einzelner schwacher Button
  (ghost/outlined) ist verboten — nur als sekundäre Aktion neben einem stärkeren gültig.

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
