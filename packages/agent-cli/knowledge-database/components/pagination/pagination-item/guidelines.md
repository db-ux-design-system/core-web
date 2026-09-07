# Pagination Item

Einzelne Seite oder Auslassung innerhalb einer Pagination.

## Regeln

Die Regeln zum Einsatz der Items liegen in [Pagination](../guidelines.md), weil sie erst im Zusammenspiel der ganzen Reihe gelten: wie viele Seitenzahlen erscheinen, welche Seite als aktuelle markiert ist und wo Auslassungen stehen.

## Zusätzliche Informationen

- `type` mit den Werten `page` und `truncation` bestimmt, ob das Item eine Seitenzahl oder eine Auslassung zeigt. Die Truncation ist nicht interaktiv und wird von Screenreadern nicht ausgegeben.
- Der sichtbare Text eines Items mit `type` auf `page` ist allein die Seitenzahl. Die Einordnung in den Datensatz trägt `label`, das nicht dargestellt wird, sondern als zugänglicher Name der Seite dient.
