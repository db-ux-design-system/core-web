# Layout Guidelines – Contentarten, Gruppierung & Anordnung

> Beschreibt die Bausteine von Inhalten (Contentarten), wie sie zu sinnvollen Gruppen
> zusammengefasst werden und nach welchen Regeln Gruppen und Elemente angeordnet werden.

## Contentarten (Elemente)

- **Visual / Media** (Icon, Image, GIF, Video) — Visuelles Element, das den Inhalt unterstützt.
- **Caption** — Kurzer Text, der erklärt, was auf einem Visual dargestellt wird.
- **Topline / Category / Label** — Kurzer Text oberhalb der Headline; gibt Kontext oder Kategorie an.
- **Headline / Title** — Kerninhalt in einer prägnanten Aussage.
- **Subline / Subtitle** — Zusätzlicher Kontext zur Headline.
- **Text / Body / Description** — Fließtext mit ausführlichen Informationen.
- **Meta / Subtext** (Datum, Author, Status) — Zusatzinformationen.
- **Action / CTA** (Link / Button / Input) — Interaktives Element für eine Handlung.

## Kombinationsregeln

- Elemente können flexibel nach Bedarf kombiniert werden.
- Subline ist nur in Verbindung mit einer Headline erlaubt.
- Caption ist nur in Verbindung mit einem Visual erlaubt.
- Topline & Meta dürfen niemals alleine stehen.
- Topline als Kategorie kann als Tag dargestellt werden.
- Meta als Status kann als Badge oder Badge-Text-Kombination dargestellt werden.

## Gruppierung

- Elemente, die inhaltlich zusammengehören, werden zu Gruppen zusammengefasst.
- Mehrere Elemente einer Art gehören gruppiert.
- Topline und Subline gehören zur Headline gruppiert.
- Metainformationen gehören zur Hauptinformation gruppiert.
- Mehrere Metainformationen werden mit „ · " getrennt.
- Gruppen können in einer Card dargestellt werden.

## Spacing-Hierarchie

Gegeben ein regulärer Abstand R zwischen Elementen:

| Relation | Abstand |
|----------|---------|
| Card-Innenabstand | R |
| Elemente zueinander | R |
| Visual zum nächsten Element | R + 1 Stufe |
| Gruppierte Elemente | R − 1 Stufe |
| Gruppierte Elemente selber Art | R − 2 Stufen |
| Cards zueinander | R + 1 Stufe |

## Anordnung

- **Vertikal** wenn: klare Lesereihenfolge, unterschiedliche Priorisierung, Aufbau aufeinander, mehr Raum/Fokus pro Inhalt.
- **Horizontal** wenn: paralleles Erfassen, direkter Vergleich, gleichwertige Wahrnehmung, hohe Informationsdichte gewünscht.
- Reicht der Platz in der Breite nicht → responsiv zu vertikal wechseln.

## Layout-Primitive: ContainerHorizontal vs. Grid

- **ContainerHorizontal (mit Gap)** — Einzelne Reihe weniger Elemente, Breite inhaltsgetrieben (hug) oder ein Element füllt den Rest (fill). Keine spaltenweise Ausrichtung über mehrere Reihen nötig. Beispiele: Icon + Text, Tag-Reihe, Badge + Meta, Button-Gruppe, Spread-Reihe.
- **Grid** — Spalten bilden ein gemeinsames Raster: proportionale Splits (`50-50`, `33-66`, `33-33-33`), feste Medienspalte (`320-auto`), mehrere Items teilen dieselben Spaltenbreiten, responsives Spaltensystem.
- **Faustregel:** Ausrichtung / Raster / proportionaler Split → Grid. Wenige Elemente nebeneinander mit Abstand, Breite aus Inhalt → ContainerHorizontal.
