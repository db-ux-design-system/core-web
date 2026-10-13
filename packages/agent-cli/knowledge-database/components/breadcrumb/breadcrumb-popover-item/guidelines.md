# Breadcrumb Popover Item

Truncation-Element innerhalb einer [Breadcrumb](../guidelines.md), das die eingeklappten Ebenen beim Hover in einem Popover zeigt.

## Regeln

1. Bei langen Pfaden und auf schmalen Viewports das Breadcrumb Popover Item setzen statt der automatischen Truncation über `maxItems`. Deren ausgeklappte Items schieben die Breadcrumb über den Viewport hinaus.
2. Innerhalb einer Breadcrumb entweder das Breadcrumb Popover Item oder die Truncation über `maxItems` verwenden, nie beides. Zwei Mechanismen für dasselbe Einklappen machen das Verhalten unvorhersehbar.
3. Nur die Zwischenebenen in das Breadcrumb Popover Item einklappen und das erste Item sowie die aktuelle Seite im Pfad sichtbar lassen. Diese beiden Anker tragen die Orientierung und dürfen nicht im Popover liegen.

## Zusätzliche Informationen

- Das Breadcrumb Popover Item wird manuell gesetzt und erscheint nicht automatisch wie die Truncation über `maxItems`.
- Das Popover öffnet beim Hover über dem Item und beim Tastaturfokus auf der Truncation. Einen Klick braucht es nicht.
- Children nimmt die eingeklappten [Breadcrumb Items](../breadcrumb-item/guidelines.md) auf. Die Zwischenebenen sind damit an ihrer Stelle einsehbar, ohne den Pfad auszuklappen.
- `label` ist der zugängliche Name der Truncation und wird nicht dargestellt.
