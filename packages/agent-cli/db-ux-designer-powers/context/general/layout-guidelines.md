# Layout Guidelines – Contentarten, Gruppierung & Anordnung

> **Regel-Ownership:** Diese Datei ist die normative Quelle für Contentarten, Gruppierung,
> Spacing und räumliche Anordnung. Sie beschreibt die Layout-Komposition zwischen Elementen,
> Gruppen, Blocks und Components — nicht die semantische Bedeutung oder den visuellen Zustand
> einzelner DB-UX-Komponenten. Diese Regeln gelten framework-agnostisch für alle Screen-Typen.
>
> **Abgrenzung zu `screen-guidelines.md`:** Diese Datei beantwortet, **wie Inhalte strukturiert
> und angeordnet** werden. `screen-guidelines.md` beantwortet dagegen, **was Komponenten
> bedeuten**, wann Tag/Badge/Notification verwendet werden und welche visuelle Darstellung
> beziehungsweise welcher Zustand dafür gilt.

## Contentarten (Elemente)

- **Visual / Media** (Icon, Image, GIF, Video) — Visuelles Element, das den Inhalt unterstützt.
- **Caption** — Kurzer Text, der erklärt, was auf einem Visual dargestellt wird.
- **Topline / Category / Label** — Kurzer Text oberhalb der Headline; gibt Kontext oder Kategorie an.
- **Headline / Title** — Kerninhalt in einer prägnanten Aussage.
- **Subline / Subtitle** — Zusätzlicher Kontext zur Headline.
- **Text / Body / Description** — Fließtext mit ausführlichen Informationen.
- **Meta / Subtext** (Datum, Author, Status) — Zusatzinformationen.
- **Action / Navigation** (Link / Button / Input) — Interaktives Element für eine Handlung.

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
- Innerhalb eines Inhaltsblocks teilen alle direkten Elemente denselben Abstand — keine
  verschachtelten, enger gesetzten Untergruppen.

## Spacing-Hierarchie

Gegeben ein regulärer Abstand R zwischen Elementen:

- Card-Innenabstand: R
- Elemente zueinander: R
- Visual zum nächsten Element: R (vertikal, gestapelt) — dieselbe Regel wie „Elemente zueinander"
- Visual zum nächsten Element: R + 1 Stufe **nur horizontal** (Bild neben Text) — Ausnahme, weil ein horizontal gestelltes Visual mehr Trennung zu seinem Text braucht als gestapelte Elemente
- Gruppierte Elemente: R − 1 Stufe
- Gruppierte Elemente selber Art: R − 2 Stufen
- Cards / Contentblöcke zueinander: R + 1 Stufe (horizontal und vertikal)
    - **Nur** für visuell eigenständige Cards/Sections mit Weißraum dazwischen. **Nicht** für eng
      zusammengehörige peer-Controls in einer funktionalen Zeile (z. B. mehrere Auswahl-Optionen
      wie „Hinfahrt / Rückfahrt / Reisende" in einer Toolbar): die stehen als Elemente/Gruppen
      zueinander auf **R** (nicht R+1). R+1 würde sie fälschlich als getrennte Blöcke lesen lassen.

## Geltungsbereich der Spacing-Hierarchie: Komposition vs. Component-Innenraum

Die R-basierte Spacing-Hierarchie ist ein **Kompositions-System** — sie beschreibt die Abstände
**ZWISCHEN** Elementen, Gruppen, Blöcken und Components auf der Layout-Ebene. Sie gilt **nicht**
für die Innereien einer in sich geschlossenen Component.

- **Component-Innenraum (eigene, intrinsische Dichte):** Eine in sich geschlossene Einheit —
  eine echte DS-Component (Button, Input, Tag, Card-Chrome …) ODER ein selbst komponiertes
  component-artiges Item (z. B. ein List-Item / „Parameter-Item" aus Icon + Label + Wert +
  Chevron) — bringt ihre **eigene feste Dichte** mit. Diese internen Abstände (typisch eng,
  `3xs`/`2xs`/`xs`) sind **nicht** aus dem Seiten-R abgeleitet und werden **nicht** an `R−n`
  gemessen. Sie gehören zur Component, nicht zum Seitenlayout.
- **Komposition (R-Hierarchie):** Ab der **Component-Grenze und darüber** greift die
  R-Hierarchie wieder — wie Components/Elemente/Blöcke zueinander stehen (Elemente zueinander
  = R, gruppierte gleichartige = R−2, eigenständige Cards/Sections = R+1 usw.).

**Merksatz:** _Innerhalb_ einer Component gilt ihre eigene Dichte; _zwischen_ Elementen/Blöcken/
Components gilt die R-Hierarchie. Die Component ist eine Black Box — man misst ihren Innenraum
nicht gegen R.

Wie dieser Innenraum aufgebaut ist (Anatomie, Content Height, Ableitung der internen Abstände,
Größenstufen, Nesting), definiert
`../design-system/component-construction.md`.

### Prüf-Checkliste (Spacing reviewen)

1. **Grenzen markieren:** Identifiziere zuerst alle in sich geschlossenen Components/Items im
   Layout (was ist eine wiederverwendbare Einheit?).
2. **Innen ≠ Regel-Objekt:** Abstände INNERHALB einer solchen Einheit nicht gegen `R−n` prüfen —
   sie folgen der Dichte der Component (fest, meist eng). Nur auf Konsistenz gleicher Items
   prüfen (alle „Parameter-Items" nutzen dieselben internen Abstände).
3. **Außen = R-Hierarchie:** Abstände ZWISCHEN Einheiten/Elementen/Blöcken gegen die
   R-Hierarchie prüfen (R, R−1, R−2, R+1 …), R = regulärer Abstand des jeweiligen Kontexts.
4. **R festlegen:** R ist der Basisabstand des umgebenden Kontexts (z. B. der vertikale
   Block-Gap eines Moduls). Erst R bestimmen, dann die relativen Stufen ableiten.

## Anordnung

- **Vertikal** wenn: klare Lesereihenfolge, unterschiedliche Priorisierung, Aufbau aufeinander, mehr Raum/Fokus pro Inhalt.
- **Horizontal** wenn: paralleles Erfassen, direkter Vergleich, gleichwertige Wahrnehmung, hohe Informationsdichte gewünscht.
- Reicht der Platz in der Breite nicht → responsiv zu vertikal wechseln.
- Card-Inhalt ist oben ausgerichtet (nicht vertikal zentriert), damit Cards nebeneinander konsistent wirken; nur eine abschließende Aktion darf unten rechts sitzen.
- In einem mehrspaltigen Raster erhalten kürzere Karten die Höhe der höchsten (gleiche Höhe pro Reihe).
- Listen-/Statuszeile: führender Block links, Status/Aktion rechtsbündig über die volle Breite
  (Spread) — nicht in eine schmale linke Spalte quetschen.
- Bild-Text-Reihe: der Text wird vertikal zum Bild zentriert

## Layout-Primitive: ContainerHorizontal vs. Grid

> Beide Primitive sind **Library-Komponenten aus 🧪 Core Lab** (`Container` mit `Direction`
> Column/Row, `Grid`). Es gibt keine lokalen Layout-Komponenten mehr: alles wird per Key aus der
> Library instanziiert. `gap`, `align` und `spread` bleiben als Plan-Felder unverändert — beim
> `Container` setzt die Runtime sie am inneren Slot (gebundener `space.*`-Token bzw.
> Achsen-Ausrichtung), weil dieses Set keine Gap-/Align-Variante hat.

- **ContainerHorizontal (mit Gap)** — Einzelne Reihe weniger Elemente, Breite inhaltsgetrieben (hug) oder ein Element füllt den Rest (fill). Keine spaltenweise Ausrichtung über mehrere Reihen nötig. Beispiele: Icon + Text, Tag-Reihe, Badge + Meta, Button-Gruppe, Spread-Reihe, **Suchfeld-Reihe (Input(s) + Button)**.
- **Grid** — Spalten bilden ein gemeinsames Raster: proportionale Splits (`50-50`, `33-66`, `33-33-33`), feste Medienspalte (`320-auto`), mehrere Items teilen dieselben Spaltenbreiten, responsives Spaltensystem.
- **Faustregel:** Ausrichtung / Raster / proportionaler Split → Grid. Wenige Elemente nebeneinander mit Abstand, Breite aus Inhalt → ContainerHorizontal.
- **Elemente unterschiedlicher Eigenbreite (z. B. Inputs + Button, Textfeld + Icon-Button) NIE ins Grid** — ein Grid zwingt alle Spalten auf dieselbe (proportionale) Breite und bläht z. B. einen Button auf Input-Breite auf. Solche Reihen gehören in einen ContainerHorizontal: die dehnbaren Elemente (Inputs, Textfelder) füllen (fill), die inhaltsbreiten Elemente (Button, Tag, Badge) huggen. Grid nur, wenn alle Elemente bewusst dieselbe Spaltenbreite teilen sollen.

## Breiten-Sizing: Hug vs. Fill (Intent pro Block konsistent)

Jeder Knoten ist in der Breite entweder **hug** (schrumpft auf den Inhalt) oder **fill**
(füllt die Elternbreite). Es gibt keine freien Pixelbreiten — die Breite entsteht aus der
Kette dieser Modi, beginnend bei der einzigen festen Breite ganz oben (Screen-Frame) bzw. der
`contentWidth` der Section.

**Grundregel: hug-Parent → hug-Kinder; fill-Parent → fill-Kinder.** Die Breiten-Absicht eines
Blocks muss über ALLE Ebenen konsistent sein — von der äußersten Gruppe bis zum Text:

- Ein **inhaltsbreiter Block** (Zeiten-/Preis-Block, Button, Tag, Chip, Badge, Icon) muss auf
  jeder Ebene huggen — Zeile UND Spalten UND die Text-Komponenten darin. Nur dann sitzt er
  glyphen-eng. Text-Komponenten (Heading/Body) huggen ebenfalls auf die Glyphen, wenn sie auf
  hug stehen — sie haben keine erzwungene Box-Breite.
- Ein **füllender Block** (Card, Input/Select, Section, Absatztext, volle Ergebniszeile) füllt
  durchgängig bis zum Text.

**Nie mischen ohne Absicht:** Ein hug-Container mit fill-Kindern (oder umgekehrt) erzeugt genau
den falschen Leerraum — die Kinder bekommen ihre Breite dann aus dem Layout statt aus dem
Inhalt, und der Block huggt nicht wirklich. Bewusste Ausnahme ist nur die **Spread-Reihe**:
eine fill-Reihe mit ausschließlich **hug**-Kindern, die per space-between an die Ränder
verteilt werden (führender Block links, Aktion/Status rechtsbündig). **Space-between wird über
`Gap: auto` am Container gesetzt** (die native Gap-Variante des Containers), nicht über ein
manuelles Slot-Override.

**Spread-Fallstricke:** In einer Spread-Reihe müssen ALLE Kinder huggen — ein fill-Kind in
einer Spread-Reihe kollabiert (space-between + wachsendes Kind widersprechen sich; die Spalte
schrumpft auf ~0 und Text bricht zeichenweise um). Spreads NICHT verschachteln. Den großen
Info-vs-Aktion-Split einer Card (linke Infospalte ↔ rechte Preis/Aktion-Spalte) NICHT per
Spread lösen, sondern per **fill-links / hug-rechts** (linke Spalte fill, rechte Spalte
`hugWidth`); Spread nur für eine einzelne, flache Zeile (z. B. Start ↔ Ziel innerhalb der
Infospalte).

**Für ausgerichtete, gleich breite Spalten** (z. B. Abfahrt/Ankunft in Verbindungsergebnissen)
NICHT hug/fill mischen, sondern ein **Grid** verwenden (`50-50`) — dann teilen sich die Spalten
die Breite unabhängig von der Textlänge.

**Text in einer links gepackten Reihe huggt.** `Heading`/`Body` füllen standardmäßig die Breite —
in einer Spalte richtig, in einer **Reihe** falsch: der Text frisst den Restplatz und schiebt alle
folgenden Geschwister an den rechten Rand, statt sie eine Gap dahinter sitzen zu lassen. Ein Label
und das, was es einführt (z. B. „Aktive Filter" + seine Tags), gehören nach dem **Gesetz der Nähe**
zusammen. Die Runtime setzt Textkinder einer mehrgliedrigen `ContainerHorizontal` deshalb
automatisch auf hug; verteilt wird nur in der **Spread-Reihe**, wo der führende Block bewusst
wächst. `fillWidth: true` ist die ausdrückliche Ausnahme.

**Heading huggt nicht — in Hug-Spalten Body verwenden:** Eine `Heading`-Komponente schrumpft
in einem hug-Kontext NICHT auf ihre Glyphen (sie behält eine große Eigenbreite und bläht damit
eine hug-Spalte auf die volle Breite auf — typischer Kollaps: die fill-Nachbarspalte schrumpft
auf ~0, Text überlappt). `Body` huggt dagegen sauber auf den Text. Daher: prominenten,
inhaltsbreiten Text in einer hug-Spalte (z. B. Preis „ab 79,99 €" in der rechten Aktionsspalte
einer Ergebniszeile) als **Body (bold, größere Size)** setzen, NICHT als Heading. Heading nur in
fill-Kontexten (Section-/Card-Titel, Hero) verwenden, wo die volle Breite ohnehin gewollt ist.

## Muster: Card mit Info- + Aktions-Panel (full-bleed Divider)

Für Ergebnis-/Buchungszeilen mit einer Info-Spalte (z. B. Verbindungsdetails) und einer
rechten Preis-/Aktions-Spalte (Preis, Primäraktion, Zusatzaktion):

- **Trennung per vertikalem Divider, nicht per Leerraum.** Die beiden Spalten liegen in einem
  `ContainerHorizontal`; dazwischen sitzt ein `Divider` mit `orientation: "vertical"`, der die
  **volle Kartenhöhe** füllt (full-bleed, Kante zu Kante).
- **Card-Padding AUS, Padding in die Spalten.** Damit der Divider beide Kanten berührt, bekommt
  die Card `spacing: "none"` und JEDE Spalte ihr eigenes Innen-Padding (Container mit
  `padding`). Läge das Padding auf der Card, entstünde oben/unten eine Lücke am Divider.
- **Primäraktion füllt die Aktionsspalte.** Der Haupt-Button (z. B. „Weiter") wird mit
  `fillWidth: true` über die Spaltenbreite gestreckt (Label zentriert) — nicht huggen lassen.
  Weiterhin gilt: max. 1 Brand-Button pro Karte.
- **Preis & Overflow-Menü rechtsbündig** in der Aktionsspalte (der Preis als `Body` bold/große
  Size, damit er in der hug-Spalte sauber huggt — siehe „Heading huggt nicht"). Das
  Kebab-/Overflow-Menü ist das `more-vertical`-Icon oben rechts.
- **Sub-Blöcke der Aktionsspalte per horizontalem Divider trennen.** Preis + Primäraktion oben,
  Zusatzaktion (z. B. „Rückfahrt hinzufügen") unten; dazwischen ein `Divider` (horizontal) über
  die volle Spaltenbreite. Auch hier: die Sub-Blöcke tragen das Padding, der Divider läuft
  full-bleed.

## Einfärben (semantische Farbe) — Grundprinzip

Farbe entsteht NICHT durch ein fixes Farbtoken oder einen überschriebenen Fill, sondern durch
**zwei Achsen** auf einem gebundenen **adaptiven** Token:

1. **Mode = Farbfamilie** (`semantic`): `Successful` (grün), `Critical` (rot), `Warning`,
   `Informational`, `Neutral`, `Brand`, bzw. reine Farben `Green`/`Blue`/… . Der Mode wird auf
   den Knoten gesetzt und färbt dessen gebundenes adaptives Token — und alle adaptiven Tokens
   im Subtree — in diese Palette um.
2. **Emphasis = Helligkeit** (über das gewählte Token): Beim **Vordergrund** (Text/Icon) muss
   die Emphasis runter, damit der Farbton sichtbar wird — `emphasis-100` (`color.text.strong`)
   bleibt in jedem Mode nahezu **schwarz**. AA-sicher für Text: `color.text.muted`
   (emphasis-80). Kräftiger, aber nur für **Icons**: `color.icon` (emphasis-70).

**Gilt universell** über das Plan-Feld `semantic` (kein `custom`-Edit nötig) für:

- **Text** — `Heading`/`Body`: `{ type:"Body", content:"13:13", fills:"color.text.muted", semantic:"Successful" }` → grüne Pünktlichkeitszeit.
- **Icon** — die adaptive Icon-Farbe wird umgefärbt (`semantic:"Critical"` → rotes Icon).
- **Hintergrund/Fläche** — `Section`/`Card`/`Container` mit gebundenem bg-Token: `{ type:"Section", fills:"color.background.surface", semantic:"Warning" }` → warngetönte Fläche; `on-bg`-Text darauf kontrastiert automatisch. Ein Container mit `fills` + `radius` ist so auch der Weg für farbige Balken/Panels (z. B. der dunkle Linienbalken).
- **Komponenten** — `Tag`/`Badge`/`Notification`: `semantic` setzt den Zustand (Semantic-Variant oder Mode) — dasselbe Grundprinzip.

**Merksatz:** Einfärben = passendes adaptives Token binden → (bei Vordergrund) Helligkeit/Emphasis runter → Mode setzen.

## Alignment im Container (`align`)

Das Plan-Feld `align` von `ContainerHorizontal`/`ContainerVertical` ist ein **3×3-Raster** im
Format `"<vertikal>-<horizontal>"`:

```text
top-left     | top-center     | top-right
left         | center         | right        ← mittlere Reihe = vertikal zentriert
bottom-left  | bottom-center  | bottom-right
```

Die mittlere Reihe lässt das Wort „center-" für die Vertikale weg: `left` = vertikal-zentriert +
links, `center` = beides zentriert, `right` = vertikal-zentriert + rechts.

**Welche Achse zählt, hängt von der Container-Richtung ab** (die Cross-Achse ist die
entscheidende):

- **ContainerHorizontal** → der **vertikale** Teil richtet Kinder **unterschiedlicher Höhe**
  aneinander aus (Icon + Text, Titel + Chevron, Input + Button, Preis + Icon). Default
  `top-left` setzt sie nach oben; für **vertikal zentriert** `left` (zentriert, links gepackt)
  oder `center` (zentriert + horizontal zentriert) nutzen. Der horizontale Teil ist die Packung
  (bei hug-Zeilen irrelevant).
- **ContainerVertical** → der **horizontale** Teil richtet Kinder **unterschiedlicher Breite**
  aus; `center` / `top-center` zentriert horizontal (z. B. ein mittiger „Details"-Link/CTA).

**Faustregeln:**

- Zeile mit gemischt hohen Elementen (Icon+Text, Titel+Chevron, Input+Button) → `left` oder
  `center`, damit das kleinere Element (z. B. Chevron/Icon) mittig zum Text sitzt statt oben.
- Zwei Zeilen aus Text (Titel + Subline) untereinander mit einem führenden Icon: das äußere
  Icon+Text-Row auf `top-left` lassen (Icon an der ersten Zeile), nur die innere Titel+Chevron-
  Row auf `left`/`center` (Chevron mittig zum Titel).
- Mittiges Element (Link/Button) in einer vertikalen Spalte → `center`.
- Sonst Default `top-left`.
