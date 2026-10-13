# Text Group

Container, der mehrere Textblöcke stapelt und den Abstand zwischen ihnen automatisch aus der jeweiligen Zeilenhöhe ableitet.

## Regeln

1. Die Text Group verwenden, wenn sich der Abstand zwischen den Textblöcken aus der Zeilenhöhe ableiten soll, und deren automatischen Abstand nicht durch einen manuellen Gap überschreiben. Für einen festen Abstand stattdessen einen Container oder [Stack](../stack/guidelines.md) verwenden und dessen Gap mit einem `spacing`-Token setzen.
2. Die Ebenen der [Heading](../heading/guidelines.md) absteigend und ohne Sprünge anordnen, jede Überschrift führt ihren Abschnitt ein. Eine unklare Hierarchie macht den Abschnitt schwer erfassbar.
3. Genau ein `h1` als oberste Ebene der Seite verwenden, auch bei mehreren Text Groups. Mehrere `h1` brechen die Dokumentstruktur und erschweren die Navigation mit Screenreadern.

## Zusätzliche Informationen

- `textSpacing` gibt jedem Textkind `0.5lh` Abstand oben und unten. Zwischen zwei benachbarten Kindern ergibt das rund `1lh`, an den Außenkanten der Gruppe `0.5lh`. Ohne die Property setzt die Text Group keinen Abstand.
- Der Abstand sitzt am Textelement selbst und löst sich deshalb gegen deren Zeilenhöhe auf. Ein Kind mit kleinerem `size` bekommt proportional weniger Abstand, und zwei Kinder unterschiedlicher Größe stehen etwas näher zusammen als `1lh`.
- `textSpacing` mit dem Wert `false` nimmt einen Teilbaum wieder heraus.
- `textSpacing` ist eine Property der Text Group. Der [Paragraph](../paragraph/guidelines.md) trägt sie nicht, ein einzelner Block bekommt den Abstand also nur innerhalb einer Gruppe.
- `alignment` bietet `start`, `center` und `end`, der Default ist `start`. Die Kinder erben den Wert, eine verschachtelte Text Group kann einen eigenen setzen.
- Der Abstand greift an jedem `h1` bis `h6` und jedem `p` unterhalb der Gruppe, unabhängig davon, ob es eine Komponente des Design Systems ist. Andere Blockelemente wie Listen und Zitate behalten den Abstand, den sie selbst mitbringen.
- Die Text Group trägt keine eigene Semantik und ist für assistive Technologien unsichtbar, die Bedeutung liegt allein bei den Kindern. Für einen benannten Bereich ist die [Section](../section/guidelines.md) zuständig, die Gruppe liegt dann darin.
- Der Inhalt kommt immer über Children, eine `text`-Property gibt es nicht.
