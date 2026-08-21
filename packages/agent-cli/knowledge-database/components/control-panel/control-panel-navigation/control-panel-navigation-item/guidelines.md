# Control Panel Navigation Item

Einzelnes Navigation Item innerhalb der Control Panel Navigation. Für Unternavigation gibt es Navigation Item Groups.

## Regeln

1. Active auf allen Navigation Items des aktuellen Pfads setzen, von der ersten Ebene bis zum aktuellen Ziel, sonst ist der Pfad nicht nachvollziehbar.
2. Den Indicator nur auf der ersten Navigationsebene verwenden, dort zusätzlich zu Active. Ihn nicht auf tieferen Ebenen platzieren, Dev unterstützt das nicht.
3. **sollte** Labels kurz halten, lange Labels sind schwerer zu erfassen und verändern das Layout der Navigation.
4. Tooltip-Text und Label-Text identisch halten.
5. In Tree eigene Icons innerhalb einer Ebene konsistent einsetzen, nicht mit dem Standard-Kreis-Icon mischen.

## Zusätzliche Informationen

- Lange Labels wirken sich je Variante unterschiedlich aus: in Drill Down und Tree werden sie mehrzeilig, in Popover wächst das Navigation Item auf die Länge des Labels, in Flat Icon werden sie mit Auslassungspunkten abgeschnitten.
- Der Tooltip erscheint bei Interaktion mit dem Navigation Item.
- In Tree tragen Navigation Items standardmäßig einen kleinen Kreis, der sich durch ein eigenes Icon ersetzen lässt. Navigation Item Groups tragen immer den Chevron, er lässt sich nicht ersetzen.
- Popover-Items haben keinen End Slot, weder horizontal noch vertikal. Tree- und Drill-Down-Items haben ihn.
