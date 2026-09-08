# Adaptive Material-Vererbung

Isolierter Browser-Prototyp für unabhängig kombinierbare Foundation-Modes.

## Starten

```bash
cd packages/foundations
pnpm run dev:vite
```

Danach öffnen:

`http://localhost:5173/dev/experiments/adaptive-material-inheritance/?v=20260831-14`

Die Versionskennung umgeht einmalig Dokumentstände aus älteren Dev-Sessions;
der Vite-Server liefert anschließend alle Dateien mit `Cache-Control: no-store`.

## Figma-Snapshot

Die Werte wurden am 25. August 2026 direkt aus der
[Foundation – 08.26](https://www.figma.com/design/fPJQkHT1iDKiUz1nVgnFa0/Foundation---08.26?node-id=42-739)
aufgelöst. Referenznode ist `42:739`; die gebundenen Farbvariablen sind:

- `VariableID:15:36` → `background/default`
- `VariableID:15:37` → `text/default`
- `VariableID:15:51` → `border/decorative`

Nur `Theme=DB` bleibt fest. Variabel sind alle sieben im Screenshot
sichtbaren Foundation-Achsen:

- Color (`VariableCollectionId:9:7`): `Grey`, `Brand`, `Yellow`, `Orange`,
  `Red`, `Burgundy`, `Pink`, `Violet`, `Blue`, `Cyan`, `Turquoise`,
  `Light Green`, `Green`
- Scheme (`VariableCollectionId:10:66`): `Light`, `Dark`
- Material (`VariableCollectionId:10:119`): `Filled Level 1`,
  `Filled Level 2`, `Filled Level 3`, `Vibrant`, `Origin`, `Inverted`,
  `Transparent`, `Transparent Semi`
- Size (`VariableCollectionId:3:23`): `3XS`, `2XS`, `XS`, `SM`, `MD`,
  `LG`, `XL`, `2XL`
- Emphasis (`VariableCollectionId:92:6`): `Default`, `Low`, `High`
- WCAG (`VariableCollectionId:15:35`): `AA`, `AAA`
- Contrast (`VariableCollectionId:22:19`): `Max`, `Min`

Figma zeigt `Auto (Max)`, wenn eine Fläche keinen eigenen Contrast-Override
besitzt: `Auto` beschreibt die Herkunft durch Vererbung, während `Max` der
aktuell vom Parent aufgelöste Wert ist. Würde der Parent `Min` liefern, würde
die Fläche automatisch `Min` erben. Deshalb existieren weiterhin nur die zwei
Modes `Max` und `Min`; im CSS bedeutet `Auto`, dass das Kind kein eigenes
`data-contrast`-Attribut trägt.

Die Size-Werte stammen aus der Figma-Collection `Size`
(`VariableCollectionId:3:23`):

| Size | Höhe | Component Padding | Content Gap | Content Height | Content Padding Block | Content Padding Inline | Radius | Font Size | Icon | Line Height | Row Padding Inline |
| ---- | ---: | ----------------: | ----------: | -------------: | --------------------: | ---------------------: | -----: | --------: | ---: | ----------: | -----------------: |
| 3XS  |   16 |                 0 |           2 |             16 |                     0 |                      2 |      4 |     10.67 |   12 |          16 |                  2 |
| 2XS  |   18 |                 1 |           2 |             16 |                     0 |                      2 |      4 |     10.67 |   12 |          16 |                  2 |
| XS   |   20 |                 1 |           3 |             18 |                     0 |                      2 |      4 |        12 |   14 |          18 |                  2 |
| SM   |   24 |                 2 |           3 |             20 |                     0 |                      2 |      4 |     13.33 |   16 |          20 |                  3 |
| MD   |   28 |                 2 |           2 |             24 |                     0 |                      4 |      4 |        16 |   20 |          24 |                  2 |
| LG   |   32 |                 2 |           2 |             28 |                     2 |                      4 |      4 |        16 |   20 |          24 |                  4 |
| XL   |   40 |                 4 |           2 |             32 |                     4 |                      4 |      4 |        16 |   20 |          24 |                  6 |
| 2XL  |   48 |                 4 |           2 |             40 |                     8 |                      4 |      4 |        16 |   20 |          24 |                  8 |

Der Selbsttest durchläuft `13 × 2 × 8 × 8 × 3 × 2 × 2 = 19968`
Kombinationen, die UI zeigt aber nur eine kompakte Live-Preview. Im regulären
WCAG-Modus stammen die Decorative Borders jedes nicht-transparenten Materials
aus den jeweiligen dedizierten Figma-Variablen; sie sind keine angenäherten
Palette-Stufen. Im AAA-Modus ersetzt die kontraststarke Outline diese subtile
Kontur. `Contrast = Min` ist absichtlich nur für Filled Level 1 bis 3 direkt
aktiv. Transparent und Transparent Semi können als transparente Overlays in
Filled-Materials den Min-Token ihres Filled-Elternkontexts erben. Unter
Vibrant, Origin oder Inverted sowie ohne Filled-Elternkontext behalten sie die
Basis-On-Farbe, weil der lokale Materialkontext sonst keine verlässliche
Kontrastbasis liefert.

Die vollständige Aliasauflösung zeigt, dass WCAG und Contrast nur dort
abweichen, wo sich ein semantisch sinnvoller und zugänglicher Wert ergibt:
`AAA` ersetzt die Origin-Werte für alle 13 Farben und beide Schemes; `Min`
passt die On- und Visual/Icon-Tokens ausschließlich bei den drei Filled-
Materials an (78 von 208 Color-/Scheme-/Material-Kontexten). Text nutzt dort
die Emphasis-80-Stufe, Visuals und Icons die hellere Emphasis-70-Stufe. Bei
Vibrant, Origin, Inverted und transparenten Materials ohne Filled-Elternkontext
bleibt die jeweilige Basisfarbe erhalten. Transparent-Overlays in Filled-
Materials erben dagegen die registrierten Min-Palette-Tokens aus ihrem
Filled-Kontext. Zusätzlich hebt `AAA` die Outline aller nicht-transparenten
Materials auf mindestens `3 : 1` Kontrast zum eigenen Background an; dafür wird
die bereits kontraststarke Content-Farbe verwendet.

## Was der Prototyp zeigt

- Alle sieben Achsen lassen sich über Selects live ändern.
- Die sieben Mode-Attribute liegen ausschließlich auf dem äußeren
  Preview-Context. Die äußere Komponente erbt sie vollständig; ihre beiden
  Nested Components setzen nur den echten Size-Override auf die nächstkleinere
  Stufe. Die Component verwendet in Breite und Höhe Auto-Sizing und liegt auf
  beiden Achsen zentriert in einer eigenständigen Preview-Card. Der MD-Inhalt
  bleibt in der Component Row; die beiden SM-Components liegen außerhalb
  dieser Row in einem eigenen End-Slot. Dadurch entspricht der rechte
  Inline-Abstand zum Component-Rand dem Block-Abstand. Die intrinsische
  Mindesthöhe stammt weiterhin aus der Figma-Size-Geometrie.
- Die untere Vererbungsdemo behandelt ihre Flächen als Cards. Card-Innenabstand
  und Abstände zwischen direkten Card-Inhalten entsprechen dem lokalen
  Layout-Spacing R (`--db-spacing-fixed-md`). Sie demonstriert bewusst nur
  Scheme, Color, Material, Emphasis, WCAG und Contrast; Size beeinflusst ihre
  Card-Geometrie nicht.
- `data-mode` löst Light/Dark über das bestehende `color-scheme` auf.
- `data-color` liefert exakte, Scheme-neutrale Background-, Foreground- und
  Border-Branches aus Figma.
- Material-, WCAG- und Contrast-Boundaries nutzen `@scope`, damit jede Fläche
  ihre Werte mit dem jeweils lokalen Color- und Scheme-Context neu auswertet.
- `data-size` liefert Component Height, Component Padding, Content Gap,
  Content Height, Content Padding, Radius, Font Size, Icon Size, Line Height
  und Row Padding als lokal vererbbare Custom Properties.
- `data-emphasis` löst die Figma-Werte `Regular/Regular/100%`,
  `Regular/Regular/80%` und `Bold/Black/100%` für Body, Headline und Opacity
  auf.
- Innere Mode-Attribute sind nur bei einem tatsächlichen Override nötig;
  Wiederholungen desselben Werts entfallen.
- Der Browser-Selbsttest prüft unsichtbar alle 19968 Kombinationen sowie
  lokale Overrides für jede der sieben Achsen.
- `Filled Level 1`, alle `AAA + Origin`-Background-/Content-Werte und
  die materialbezogene `Min`-Aufhellung der `on`- und Visual/Icon-Farben
  in den drei Filled-Materials sowie für transparente Overlays innerhalb
  eines Filled-Kontexts werden gegen die jeweilige Auflösungslogik geprüft.
  Bei transparenten Overlays unter Vibrant prüft der Selbsttest ausdrücklich
  die unveränderte Basisfarbe. Zusätzlich prüft jede nicht-transparente
  AAA-Kombination ihre Outline auf mindestens
  `3 : 1` zum eigenen Background. Für jede Size werden
  alle elf Variablen sowie Höhe, Padding, Radius, Font Size und Line Height
  geprüft.
- `Transparent` und `Transparent Semi` liegen auf einer opaken Scheme-Basis
  und sind als Overlays für Filled-Materials gedacht. Innerhalb eines Filled-
  Kontexts erben sie bei `Min` die Text- und Visual/Icon-Tokens des Parents;
  unter anderen Materials bleiben sie bei der Basisfarbe. Sie behalten ihre
  Borderbreite und setzen die Borderfarbe wie festgelegt explizit auf
  `transparent`.

Die eigentliche Mode-Auflösung und Vererbung erfolgt vollständig in CSS. Das
JavaScript ändert nur die sieben Preview-Attribute und führt den
Browser-Selbsttest aus.

Damit ist kein Token für das kartesische Produkt aller Modes nötig. Ein neuer
Token wird nur benötigt, wenn sich ein semantischer Wert tatsächlich
unterscheidet; die Kombination geschieht anschließend zur Laufzeit über die
CSS-Kaskade.

Statt bereits aufgelöste Farben zu vererben, trägt jeder Color-Mode
Scheme-neutrale Light- und Dark-Branches. Erst die jeweilige Materialfläche
kombiniert beide über ihr lokales `color-scheme` mit `light-dark()`.

Dadurch bleibt beispielsweise `brand` erbbar, während ein inneres
`data-mode="dark"` trotzdem zuverlässig den Dark-Branch verwendet.
Transparent ist als Overlay in einem Filled-Kontext sinnvoll: Die opake
Scheme-Basis kommt vom Filled-Parent, während das Material selbst transparent
bleibt. Unter Vibrant, Origin oder Inverted wird kein Filled-Min-Kontext
weitergereicht; ein transparentes Kind fällt dort auf die Basis-On-Farbe
zurück.

## Abgrenzung

Der Snapshot ist absichtlich experimentlokal und ändert keine publizierten
Foundation-Tokens. Funktionale Borders dürfen nicht durch die
Transparent-Material-Regel entfernt werden; nur die hier geprüfte dekorative
Border wird transparent aufgelöst.
