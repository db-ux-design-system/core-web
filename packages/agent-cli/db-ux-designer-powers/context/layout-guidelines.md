# Layout Guidelines – Contentarten, Gruppierung & Anordnung

> Diese Guideline beschreibt die Bausteine von Inhalten (Contentarten), wie sie zu sinnvollen
> Gruppen zusammengefasst werden und nach welchen Regeln Gruppen und Elemente vertikal oder
> horizontal angeordnet werden.

## Contentarten/**Elemente**

- **Visual / Media** (Icon, Image, GIF, Video) — Visuelles Element, das den Inhalt unterstützt
  oder illustriert.
- **Caption** (Bildbeschreibung) — Kurzer Text, der erklärt, was auf einem Visual dargestellt
  wird.
- **Topline / Category / Label** — Kurzer Text oberhalb der Headline; gibt Kontext oder
  Kategorie an.
- **Headline / Title** — Text, der den Kerninhalt in einer prägnanten Aussage zusammenfasst.
- **Subline / Subtitle / Subheadline** — Text, der zusätzlichen Kontext zur Headline liefert
  oder diese konkretisiert.
- **Text / Maintext / Paragraph / Description / Copy / Body** — Fließtext, der ausführliche
  Informationen liefert.
- **Meta / Subtext / Zusatzinformationen** (z. B. Datum, Author, etc.) — Text, der zusätzliche
  Informationen liefert.
- **Action / CTA** (Link / Button / Inputs) — Interaktives Element, das eine Handlung
  ermöglicht.

## Guidelines

- Die **Elemente** können flexibel nach Bedarf kombiniert werden.
- Eine **Subline** ist nur in Verbindung mit einer Headline erlaubt.
- Eine **Caption** ist nur in Verbindung mit einem Visual erlaubt.
- **Topline** & **Meta** dürfen niemals alleine stehen.
- **Topline**, die Kategorien abbilden, können als Tags dargestellt werden.
- **Meta**, die einen Status abbildet, kann als medium Badge oder Badge-Text-Kombination dargestellt werden.

## Gruppierung

- **Elemente**, die inhaltlich zusammengehören, werden zu Gruppen zusammengefasst.
- Es kann mehrere **Elemente** einer Contentart in einer Gruppe geben.
- Mehrere **Elemente** einer Art gehören gruppiert.
- Die Topline gehört zur Headline gruppiert.
- Die Subline gehört zur Headline gruppiert.
- Metainformationen gehören zur Hauptinformation (Text, Headline, Subline) gruppiert.
- Mehrere Metainformationen werden in einer Text-Komponente dargestellt und mit „ · " getrennt.
- Metainformationen, die einen Status abbilden, können als Badge dargestellt werden.
- Gruppen können in einer Card Komponente dargestellt werden.
- Der Innenabstand der Card Komponente soll den selben Abstand haben wie die **Elemente** darin zueinander (regulärer Abstand, R).
- Der Abstand zwischen einem Visual und dem nächsten Element ist eine Spacing-Stufe größer als der reguläre Abstand der Elemente zueinander (z. B. Elemente `lg` → Visual-Abstand `xl`).
- Der Abstand zwischen gruppierten **Elementen** ist eine Spacing-Stufe kleiner als der reguläre Abstand der Elemente zueinander (z. B. Elemente `lg` → gruppierte Elemente `md`).
- Der Abstand zwischen gruppierten **Elementen** der selben Art ist zwei Spacing-Stufen kleiner als der reguläre Abstand der Elemente zueinander (z. B. Elemente `lg` → gruppierte Elemente der selben Art `sm`).
- Der Abstand zwischen Cards ist eine Spacing-Stufe größer als der reguläre
  Abstand der Elemente in der Card (z. B. Elemente `lg` → Card-Abstand `xl`).

## Reihenfolgen

Die folgenden Regeln gelten sowohl für die Anordnung der Gruppen zueinander als auch für die
Anordnung der Elemente innerhalb einer Gruppe.

- Nutze **vertikale** Anordnungen, wenn Inhalte in einer klaren Reihenfolge gelesen werden,
  unterschiedlich priorisiert sind oder aufeinander aufbauen.
- Nutze **vertikale** Anordnungen, wenn einzelne Inhalte mehr Raum, Fokus und visuelle Wirkung
  erhalten sollen.
- Nutze **horizontale** Anordnungen, wenn Inhalte parallel erfasst, direkt verglichen oder als
  gleichwertig wahrgenommen werden sollen.
- Nutze **horizontale** Anordnungen, wenn eine hohe Informationsdichte erforderlich ist und mehr
  Inhalte innerhalb eines Viewports sichtbar sein sollen.
- Kombiniere horizontale und vertikale Anordnungen nur, wenn die jeweilige Anordnung innerhalb
  jeder Gruppe diesen Regeln folgt und die Lesereihenfolge eindeutig bleibt.
- Reicht der verfügbare Platz in der Breite nicht aus oder wird die Lesbarkeit beeinträchtigt,
  wechsle responsiv zu einer vertikalen Anordnung.

## Layout-Primitive: ContainerHorizontal vs. Grid

Für nebeneinander angeordnete Inhalte gibt es zwei Primitive. Die Wahl richtet sich danach,
ob die Spalten ein gemeinsames, ausgerichtetes Raster bilden müssen oder nicht.

- Nutze einen **ContainerHorizontal (mit Gap)** für eine einzelne Reihe weniger Elemente,
  deren Breite inhaltsgetrieben ist (hug) oder bei der ein Element den Rest füllt (fill), und
  wenn keine spaltenweise Ausrichtung über mehrere Reihen hinweg nötig ist. Der Abstand ist ein
  Gap nach dem Spacing-Modell (R, R−1 …). Beispiele: Icon + Text, Thumbnail + Text, Tag-Reihe,
  Badge + Meta, Button-Gruppe, „spread"-Reihe (führender Block links, Aktion rechtsbündig).
- Nutze ein **Grid**, wenn die Spalten ein gemeinsames, ausgerichtetes Raster bilden sollen:
  proportionale Splits (`50-50`, `33-66`, `33-33-33`), eine feste Medienspalte (`320-auto`),
  wenn mehrere Items/Reihen dieselben Spaltenbreiten teilen (Karten-Raster, Media-Text-Reihen,
  Feature-Grid) oder wenn das responsive Spaltensystem greifen soll.
- **Faustregel:** Ausrichtung / Raster / proportionaler oder fester Spalten-Split → **Grid**.
  Nur ein paar Elemente nebeneinander mit Abstand, Breite aus dem Inhalt → **ContainerHorizontal**.
