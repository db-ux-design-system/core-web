# Control Panel Navigation Item

Einzelnes Navigation Item innerhalb der Navigations-Container des Control Panels. Navigation Item Group ist als Gruppierungs-Variante für Navigation Items mit Unternavigation enthalten.

## Regeln

1. Eigene Icons in der Tree Navigation innerhalb einer Ebene konsistent einsetzen und nicht mit Standard-Markern mischen. Navigation Item Groups behalten dabei immer den Chevron, unabhängig von der Icon-Wahl der Ebene.
2. Für jedes Flat Icon Navigation Item einen klaren, beschreibenden Text angeben, er erscheint als Tooltip und dient zugleich als zugängliches Label. Den Text nicht leer lassen oder von der sichtbaren Anzeige abweichen lassen, sonst divergieren visuelle Anzeige und Ausgabe assistiver Technologien.
3. Den Indicator nur auf der ersten Navigationsebene verwenden. Ihn nicht auf tieferen Ebenen platzieren, Dev unterstützt das nicht.

## Zusätzliche Informationen

- Popover-Items haben keinen End Slot, weder horizontal noch vertikal. Tree- und Drill-Down-Items haben ihn.
