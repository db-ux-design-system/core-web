# Paragraph

Einzelner Textcontainer für einen fortlaufenden Block Bodytext.

## Regeln

1. **sollte** Fett und Kursiv nur an einzelnen Wörtern oder kurzen Passagen einsetzen, die wirklich Betonung brauchen. Ein ganzer Paragraph in Fett oder Kursiv nimmt den Kontrast und erschwert das Lesen längerer Passagen.

## Zusätzliche Informationen

- `size` bietet `lg`, `md` und `sm`, der Default ist `md`. Eine breakpointabhängige Größe gibt es nicht, weil die Density-Tokens die responsive Typografie liefern.
- `fontWeight` wählt die Schriftvariante: `regular` ist der Default und entspricht Gewicht 400, `black` dem Gewicht 900.
- Ohne die DB-Theme-Fonts rendert `black` wie Bold, weil die Open-Source-Fallback-Schrift für die Bodytext-Familie keinen 900er-Schnitt mitbringt.
- Der Inhalt kommt immer über Children, eine `text`-Property gibt es nicht.
- Der Abstand zwischen mehreren Paragraphen kommt entweder über `textSpacing` aus der [Text Group](../text-group/guidelines.md) oder als fester Gap aus einem umgebenden Container oder [Stack](../stack/guidelines.md), der mit einem `spacing`-Token gesetzt wird.
- Eine Textausrichtung trägt der Paragraph nicht. Dadurch erreicht ihn die `alignment` einer [Text Group](../text-group/guidelines.md) über Vererbung.
- In Figma werden die Ausrichtung und die Inline-Auszeichnung in Fett oder Kursiv direkt am Text eingestellt, Properties gibt es dafür nicht.
- Für Inline-Text innerhalb eines Satzes gibt es keine Komponente.
- Der Paragraph rendert ein `p` und ist damit Flow Content. Er passt in `dd`, `figcaption`, `blockquote`, `li` und `td`, aber nicht in `legend`, `label`, `summary` und `button`, die nur Phrasing Content aufnehmen.
