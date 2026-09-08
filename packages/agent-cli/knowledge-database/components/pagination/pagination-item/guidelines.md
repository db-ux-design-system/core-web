# Pagination Item

Einzelne Seite oder Auslassung innerhalb einer Pagination.

## Regeln

1. **sollte** im `label` die Seite im Kontext benennen, zum Beispiel `Seite 5 von 10`, und dasselbe Muster für jedes Item der Reihe verwenden. Sichtbar ist allein die Seitenzahl; ohne den Umfang des Datensatzes bleibt beim Vorlesen nur eine Zahl ohne Bezug.

Die übrigen Regeln zum Einsatz der Items liegen in [Pagination](../guidelines.md), weil sie erst im Zusammenspiel der ganzen Reihe gelten: wie viele Seitenzahlen erscheinen, welche Seite als aktuelle markiert ist und wo Auslassungen stehen.

## Zusätzliche Informationen

- `type` mit den Werten `page` und `truncation` bestimmt, ob das Item eine Seitenzahl oder eine Auslassung zeigt. Die Truncation ist nicht interaktiv und wird von Screenreadern nicht ausgegeben.
- `label` wird nicht dargestellt, sondern dient als zugänglicher Name der Seite.
