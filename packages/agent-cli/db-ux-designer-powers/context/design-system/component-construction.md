# Component Guidelines – Aufbau, Content Height & Spacing

> **Regel-Ownership:** Diese Datei ist die normative Quelle dafür, **wie eine Komponente
> DB-UX-konform aufgebaut** wird: Anatomie, Größenstufen, Content Height, interne Abstände,
> Nesting und Rundung. Sie gilt für jede Komponente gleichermaßen — unabhängig davon, was die
> Komponente semantisch bedeutet.
>
> **Abgrenzung:** `component-guidelines/*.md` beschreibt Do/Don't **pro Komponente** (wann ein
> Button, wann ein Link). `screen-guidelines.md` beschreibt, **was** eine Komponente bedeutet und
> welchen visuellen Zustand sie hat. `layout-guidelines.md` beschreibt die Abstände **zwischen**
> Komponenten (R-Hierarchie). Diese Datei beschreibt den **Innenraum** einer Komponente — genau
> jene „eigene, intrinsische Dichte", die `layout-guidelines.md` bewusst nicht aus R ableitet.

## 1. Aufbau (Anatomie)

Jede Komponente folgt derselben vierstufigen Kette:

```text
Component / Layout Container  →  Row / Column  →  Content Container  →  Content
```

| Ebene                            | Aufgabe                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Component / Layout Container** | Visueller Außencontainer (Fläche, Border, Radius). Trägt das **Component Padding**.              |
| **Row / Column**                 | Anordnung der Inhaltsgruppe. Trägt **Row/Column Padding** und den **Gap** zwischen den Inhalten. |
| **Content Container**            | Wrapper um genau einen Inhalt. Trägt die **optische Korrektur** dieses einen Inhalts.            |
| **Content**                      | Text, Icon oder genestete Komponente. Wird nie direkt bemaßt.                                    |

Diese Kette ist verpflichtend: ein Inhalt sitzt nie direkt in der Row und nie direkt im Component
Container. Nur so lassen sich Abstände pro Inhalt korrigieren, ohne die Geometrie der Komponente zu
verändern.

## 2. Content Height (CH)

Die **Content Height** ist die Bezugshöhe für die vertikale Ausrichtung innerhalb einer Row. Sie
gilt pro Row, nicht pro Komponente.

```text
CH = Component Height − 2 × Component Padding
```

Die **Basis-Höhe** eines Inhalts ist bei Text seine **Line Height**, bei Icons und genesteten
Komponenten deren **definierte Containerhöhe**.

### Row

- Content Container werden horizontal angeordnet und am **oberen Rand** der Row ausgerichtet.
- Die CH entspricht der **größten Basis-Höhe** der enthaltenen Inhalte.
- Kleinere Inhalte werden innerhalb der CH **vertikal zentriert** (Icon-Container und
  Text-Container sind CH hoch, das Glyph/Icon sitzt mittig).
- Inhalte, die über ihre Basis-Höhe hinaus wachsen, vergrößern **nur ihren eigenen** Content
  Container nach unten. Die CH bleibt unverändert.

### Column

- Content Container werden vertikal untereinander angeordnet und nutzen ihre **tatsächliche
  Inhaltshöhe (Hug Content)**.
- Eine gemeinsame CH ist nicht erforderlich — es liegen keine Inhalte nebeneinander, die
  zueinander ausgerichtet werden müssten.
- Wachsende Inhalte vergrößern ihren Container nach unten und verschieben die nachfolgenden
  Inhalte entsprechend.

### Mixed (Row und Column verschachtelt)

Horizontale und vertikale Anordnungen folgen jeweils ihrer eigenen Logik:

- Innerhalb einer Row gilt die CH als Ausrichtungsbezug.
- Vertikal angeordnete Content Container bleiben **Hug Content**.
- Wächst ein Inhalt über seine Basis-Höhe hinaus, wächst nur der betroffene Container
  beziehungsweise die betroffene Row nach unten; nachfolgende Inhalte schließen darunter an.

### Constrained Content

Bilden **mehrere vertikal angeordnete Inhalte gemeinsam einen einzelnen Content-Bereich** einer
Komponente (z. B. zweizeilige Beschriftung in einem Slot), darf ihre **gemeinsame Basis-Höhe die CH
der Row nicht überschreiten**. Praktisch heißt das: die Line Heights der Zeilen werden reduziert,
bis ihre Summe in die CH passt — die Komponente wird nicht höher (siehe §6).

## 3. Spacing: Abstände sind eine Summe

Abstände entstehen aus der **Summe der Spacings aller beteiligten Container**:

- **Component Padding** — grundlegender Innenabstand der Komponente.
- **Row/Column Padding** — Abstand der Inhaltsgruppe zum Component Container.
- **Content Container Padding** — optische Korrektur eines einzelnen Inhalts.
- **Row/Column Gap** — Abstand zwischen zwei Content Containern.

Für die Bewertung zählt immer die **tatsächlich sichtbare Fläche** des Contents (Glyphen-Kante,
Icon-Kante), nicht die Container-Kante.

| Sichtbarer Abstand         | Setzt sich zusammen aus                                  |
| -------------------------- | -------------------------------------------------------- |
| Icon → Rand                | Row Padding + Component Padding                          |
| Icon → Text                | **1/4 der größten Text Line Height** der Row             |
| Text → Rand (links/rechts) | Text Container Padding + Row Padding + Component Padding |
| Text → Rand (oben/unten)   | Component Padding + Row Padding + Text Container Padding |

`Icon → Text` ist die einzige Regel, die als **Zielwert** formuliert ist: Row Gap und Text
Container Padding werden so gewählt, dass in Summe 1/4 der maximalen Line Height der Row
herauskommt (auf ganze Pixel aufgerundet). Die übrigen Zeilen sind reine Additionen.

### Stroke und Auto Layout

Ein Border des visuellen Component Containers wird in Figma mit **Stroke alignment: Inside** und
**Strokes excluded** aufgebaut (`strokesIncludedInLayout = false`). Der Stroke wird damit innerhalb
der vorhandenen Außenfläche gezeichnet, nimmt aber nicht an der Auto-Layout-Berechnung teil.

- Component Height, CH, Padding und sichtbare Abstände werden **ohne zusätzliche Stroke-Breite**
  berechnet.
- Auf einer Hug-Content-Achse darf der Stroke die Komponente nicht um seine linke/rechte bzw.
  obere/untere Stärke vergrößern.
- **Strokes included** ist für Component Container nicht zulässig: Bei einer Hug-Breite und einer
  festen Höhe würde der Stroke sonst nur die Breite vergrößern und die intrinsische Geometrie
  zwischen den Achsen inkonsistent machen.
- Die Regel gilt unabhängig davon, ob ein konkreter Variant gerade einen sichtbaren Stroke besitzt;
  alle Main Components werden auf **Strokes excluded** eingestellt.

### Decorative Border Contrast

`border/decorative` ist eine subtile visuelle Trennung und wird deterministisch relativ zum
aufgelösten `background/default` des jeweiligen WCAG-, Material-, Scheme- und Color-Modes
bestimmt:

- Zielkontrast im regulären WCAG-Modus: **1,3 : 1** zwischen Border und eigenem
  Background. Dieser Wert erzeugt eine bewusst zurückhaltende, GitHub-ähnliche Kontur.
- Im WCAG-Modus **AAA** wird die Outline nicht mehr nur dekorativ behandelt:
  Nicht-transparente Materials verwenden die Content-Farbe als Outline und erreichen damit
  mindestens den für nicht-textuelle UI-Grenzen erforderlichen Kontrast von **3 : 1** gegen den
  eigenen Background. Transparente Materials behalten ihre explizit transparente dekorative
  Border.
- Zulässiger Korridor bei diskreten Palette-Steps: **1,2–1,4 : 1**.
- Löst ein WCAG-Mode für ein Material einen anderen Background auf, erhält er einen eigenen
  Decorative-Border-Alias-Pfad; ein gemeinsamer Border-Token darf nicht gegen unterschiedliche
  Backgrounds ausgewertet werden.
- Der nächstliegende Palette-Step innerhalb des Korridors wird im regulären WCAG-Modus
  verwendet; Hue und Chroma bleiben dadurch möglichst in derselben Farbfamilie.
- Gibt es dort keinen passenden Palette-Step, wird ein eigener physischer Token vom Background
  in Richtung des zugehörigen Foreground-Polls interpoliert, bis 1,3 : 1 erreicht sind.
  Außerhalb der AAA-Ausnahme wird `border/decorative` nie direkt auf `text/default`
  beziehungsweise den maximalen Kontrast-Poll gelegt.
- Bei transparenten Materials wird der aufgelöste Background zuerst über die Basisfläche des
  aktuellen Schemes komponiert (Light: helle Basisfläche, Dark: dunkle Basisfläche); der Kontrast
  wird gegen dieses Kompositionsergebnis berechnet.
- Die Regel gilt für **alle Material-Modes**: Filled Level 1–3, Vibrant, Origin, Inverted,
  Transparent und Transparent Semi.

Der reguläre Zielwert von 1,3 : 1 ist eine visuelle Designregel, keine
WCAG-Anforderung. Die AAA-Ausnahme macht die Outline dagegen bewusst
kontrastrelevant. Ist ein Border unabhängig vom gewählten WCAG-Mode notwendig,
um Form, Zustand oder Interaktivität einer Komponente überhaupt zu erkennen,
ist er nicht dekorativ: Dann wird ein funktionaler Border-Token verwendet und
separat mit mindestens **3 : 1** gegen die angrenzende Außenfläche geprüft.

## 4. Größenstufen (Referenzwerte)

Standardkomponente mit visuellem Außencontainer, einzeilig, Icon + Text:

| Size    | Component Height | Component Padding | CH  | Icon | Font / Line Height | Icon → Rand | Icon → Text | Text → Rand (h) | Text → Rand (v) |
| ------- | ---------------- | ----------------- | --- | ---- | ------------------ | ----------- | ----------- | --------------- | --------------- |
| **3XS** | 16               | 0                 | 16  | 12   | 10.67 / 16         | 2           | 4           | 4               | 0               |
| **2XS** | 18               | 1                 | 16  | 12   | 10.67 / 16         | 3           | 4           | 5               | 1               |
| **XS**  | 20               | 1                 | 18  | 14   | 12 / 18            | 3           | 5           | 5               | 1               |
| **SM**  | 24               | 2                 | 20  | 16   | 13.33 / 20         | 5           | 5           | 7               | 2               |
| **MD**  | 28               | 2                 | 24  | 20   | 16 / 24            | 4           | 6           | 8               | 2               |
| **LG**  | 32               | 2                 | 28  | 20   | 16 / 24            | 6           | 6           | 10              | 4               |
| **XL**  | 40               | 4                 | 32  | 20   | 16 / 24            | 10          | 6           | 14              | 8               |

Ableitungen, die aus der Tabelle folgen und für neue Komponenten gelten:

- **CH = Component Height − 2 × Component Padding** — ohne Ausnahme.
- **Die Icon-Größe ist an die Größenstufe gebunden** (12 / 12 / 14 / 16 / 20 / 20 / 20) und
  deckelt ab MD bei 20. Icons werden nie frei skaliert.
- **Ab LG ist die Text-Line-Height kleiner als die CH** (24 statt 28 bzw. 32). Die Differenz wird
  als vertikales Text-Container-Padding gesetzt, nicht als Zentrierung der Row — dadurch bleibt
  die Row weiterhin oben ausgerichtet und die CH unverändert.
- Interne Abstände binden **Spacing-Tokens** (`db-spacing/fixed/*`), keine rohen Pixelwerte.

### Figma-Umsetzung: Größe ausschließlich über Modes

Die Größenstufe einer Komponente wird in Figma **ausschließlich über den Mode der
Variablen-Collection `Size`** gesteuert — niemals über eine Component Property oder Variant-Achse
wie `Size=SM`.

- Das Main Component definiert über den `Size`-Mode seine Standardgröße (in der Regel `MD`).
- Auf einer Instanz wird die Größe durch Wechseln des `Size`-Modes geändert.
- Alle größenabhängigen Eigenschaften (Component Height und Padding, CH, Row-/Content-Padding,
  Gap, Icon-Größe, Font Size und Line Height) bleiben an die Variablen der Collection gebunden und
  reagieren gemeinsam auf den gewählten Mode.
- Component Properties und Variant-Achsen bilden ausschließlich semantische, inhaltliche oder
  strukturelle Unterschiede ab. Größenvarianten werden nicht als separate Components dupliziert.

### Figma-Umsetzung: Typografie vollständig über Tokens

Jeder Text-Content bindet seine Typografie vollständig an Variablen. Rohe Font-Werte auf dem
Text-Layer sind nicht zulässig:

- **Font Family** bindet an das passende Token der Collection `Theme`, zum Beispiel
  `font-family/body` oder `font-family/headline`.
- **Font Weight** bindet an das passende Token der Collection `Emphasis`. Figma bildet den Weight
  technisch über das Feld `fontStyle` und Tokens wie `font-style/body` beziehungsweise
  `font-style/headline` ab; Werte wie `Regular`, `Bold` oder `Black` werden nicht direkt gesetzt.
- **Font Size** bindet an `Size/font-size`.
- **Line Height** bindet an `Size/line-height`.

Theme-, Emphasis- und Size-Modes lösen diese Bindings gemeinsam auf. Semantische Ausprägungen
setzen den passenden Collection-Mode, statt Font Family oder Weight als rohe Werte beziehungsweise
als eigene Typografie-Varianten zu duplizieren. Zeigt Figma bei einer Mehrfachauswahl nur die
aufgelösten Werte an, werden die Bindings zusätzlich über die Variable-Details des einzelnen
Text-Layers geprüft.

## 5. Content Components (ohne visuellen Container)

Content Components besitzen keinen eigenen visuellen Außencontainer und verwenden daher **kein
Component Padding**. Sie wachsen mit ihrem Inhalt; die Abstände zu umliegenden Elementen werden
vom übergeordneten Layout definiert (→ `layout-guidelines.md`).

Innerhalb der Komponente gelten die allgemeinen Content-Regeln unverändert: Inhalte einer Row
teilen sich eine gemeinsame CH, und die internen Abstände werden aus der sichtbaren Geometrie
abgeleitet.

| Size    | Component Height = CH | Component Padding | Icon | Font / Line Height | Icon → Text |
| ------- | --------------------- | ----------------- | ---- | ------------------ | ----------- |
| **3XS** | 16                    | 0                 | 12   | 10.67 / 16         | 4           |
| **2XS** | 16                    | 0                 | 12   | 10.67 / 16         | 4           |
| **XS**  | 18                    | 0                 | 14   | 12 / 18            | 5           |
| **SM**  | 20                    | 0                 | 16   | 13.33 / 20         | 5           |
| **MD**  | 24                    | 0                 | 20   | 16 / 24            | 6           |
| **LG**  | 28                    | 0                 | 20   | 16 / 24            | 6           |
| **XL**  | 32                    | 0                 | 20   | 16 / 24            | 6           |

Weil kein Padding existiert, ist der Row Gap hier der **vollständige** `Icon → Text`-Abstand und
entspricht direkt 1/4 der Line Height.

## 6. Zweizeilige Components

Zweizeilige Varianten nutzen dieselbe Hülle wie die Standardkomponente (gleiche Component Height,
gleiches Padding, gleiche CH). Die beiden Zeilen sind **Constrained Content** nach §2: ihre
gemeinsame Basis-Höhe passt in die CH, indem die Line Height reduziert wird — die Komponente wird
**nicht** höher.

| Size   | Component Height | CH  | Line Height je Zeile | Summe |
| ------ | ---------------- | --- | -------------------- | ----- |
| **SM** | 24               | 20  | 10                   | 20    |
| **MD** | 28               | 24  | 12                   | 24    |
| **LG** | 32               | 28  | 12                   | 24    |
| **XL** | 40               | 32  | 12                   | 24    |

Zweizeilig existiert erst ab **SM**. 3XS/2XS/XS haben keine ausreichende CH.

## 7. Vollständig abgerundete Components

Bei vollständig abgerundeten Komponenten (Pill/Kreis) muss der sichtbare Inhalt ausreichend
Abstand zur Rundung behalten:

- Der **optische Mindestabstand** zwischen sichtbarem Icon bzw. Text und dem äußeren Rand beträgt
  auf **beiden Seiten mindestens 1/4 der Component Height**.
- Ist der nach §3 regulär berechnete visuelle Abstand kleiner, wird das **horizontale Padding
  entsprechend erhöht** — nicht der Radius reduziert und nicht der Inhalt verkleinert.

Beispiel: eine 32 px hohe Pill braucht links und rechts ≥ 8 px sichtbaren Abstand; der reguläre
LG-Wert von 10 px (Text) erfüllt das, der Icon-Wert von 6 px nicht und wird angehoben.

## 8. Nesting (Komponente in Komponente)

Kleinere Komponentengrößen müssen **ohne Skalierung** in der jeweils nächstgrößeren Größe
verwendbar sein.

```text
Component Height (außen) ≥ Component Height (nächstkleinere) + 2 × Component Padding (außen)
```

| Außen       | Nestet      | Rechnung        |
| ----------- | ----------- | --------------- |
| **MD** (28) | **SM** (24) | 24 + 2 × 2 = 28 |
| **XL** (40) | **LG** (32) | 32 + 2 × 4 = 40 |

Genestete Komponenten behalten dabei ihre **eigene Größe, ihre internen Abstände und ihre
Content-Struktur** unverändert. Eine genestete Komponente wird nie gestreckt, nie umgefärbt und
nie in ihrer Anatomie angetastet — sie ist eine Black Box (vgl. `layout-guidelines.md` →
Component-Innenraum).

## 9. Hierarchische Einrückung (Content Indent)

Hierarchische Komponenten (Baum, verschachtelte Liste, Navigation mit Unterpunkten) können ihren
Content horizontal einrücken:

- Die Einrückung wird als **Content Indent zusätzlich zum regulären Component Padding**
  angewendet und richtet sich nach der **Hierarchietiefe**.
- Sie verändert **weder Component Padding, noch Content Height, noch die internen Abstände**
  zwischen den Content Containern.
- Alle Inhalte einer hierarchischen Einheit werden **gemeinsam** verschoben, sodass ihre interne
  Ausrichtung über alle Ebenen konsistent bleibt.

## Checkliste

1. **Kette vollständig?** Component Container → Row/Column → Content Container → Content. Kein
   Inhalt sitzt direkt in der Row.
2. **CH korrekt?** CH = Component Height − 2 × Component Padding, und die CH entspricht der
   größten Basis-Höhe der Row.
3. **Row oben ausgerichtet, Kleineres innerhalb der CH zentriert?** Wachsende Inhalte dehnen nur
   ihren eigenen Container nach unten.
4. **Column auf Hug Content?** Keine erzwungene gemeinsame Höhe in vertikaler Anordnung.
5. **Mehrzeiliger Slot innerhalb der CH?** Sonst Line Height reduzieren, nicht die Komponente
   vergrößern.
6. **Abstände als Summe geprüft** — an der sichtbaren Kante gemessen, nicht an der
   Container-Kante. `Icon → Text` = 1/4 max. Line Height.
7. **Icon-Größe aus der Größenstufe** (nicht frei skaliert), Spacings über Tokens gebunden.
8. **Bei Vollrundung:** sichtbarer Abstand beidseitig ≥ 1/4 Component Height, sonst horizontales
   Padding erhöhen.
9. **Nesting-Reserve vorhanden?** Nächstkleinere Höhe + 2 × eigenes Component Padding.
10. **Content Indent** verändert nichts außer der horizontalen Position der ganzen Einheit.
