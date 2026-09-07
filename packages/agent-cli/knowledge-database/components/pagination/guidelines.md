# Pagination

Navigations-Steuerelement zum Blättern zwischen den Seiten eines aufgeteilten Datensatzes.

## Regeln

1. Pagination nicht für Schrittfolgen einsetzen, die in fester Reihenfolge abgearbeitet werden. Sie erlaubt freie Sprünge zwischen allen Seiten und widerspricht damit einem festgelegten Ablauf.
2. **sollte** Pagination erst ab mehr als 20 Einträgen einsetzen. Bei kürzeren Listen kostet das Blättern mehr, als das Aufteilen einspart.
3. Die erste und letzte Seite immer anzeigen. Ohne sie ist der Umfang des Datensatzes nicht erkennbar.
4. **sollte** höchstens sieben Seitenzahlen gleichzeitig anzeigen. Mehr lassen die Reihe umbrechen, und mehrzeilig sind die Items schwerer zu treffen.
5. Für jede Lücke in der Seitenfolge eine Truncation anzeigen. Ohne sie lesen sich die angrenzenden Seitenzahlen als benachbart.
6. Als aktuelle Seite die Seite markieren, deren Inhalt angezeigt wird. Eine falsche Markierung sieht korrekt aus und fällt an der Pagination selbst nicht auf.

## Zusätzliche Informationen

- `position` mit den Werten `start`, `center` und `end` zeigt, wo die aktuelle Seite im Datensatz liegt: am Anfang ist der Pfeil zurück deaktiviert, am Ende der Pfeil vorwärts, und in der Mitte wird die Reihe auf beiden Seiten gekürzt. _(Example-Kandidat)_
- Unterhalb des `sm`-Breakpoints klappt die Seitenliste zusammen: Es bleiben die Randseiten, die aktuelle Seite und die Truncations. Dieselbe Konfiguration erscheint damit auf schmalen Viewports kürzer, ohne dass sich etwas an den Properties ändert. _(Example-Kandidat)_
- `boundaryCount` bestimmt, wie viele Seiten an den Rändern immer sichtbar bleiben, `siblingCount` wie viele neben der aktuellen Seite. Die Anzahl der Seitenzahlen ergibt sich aus `boundaryCount` mal zwei plus `siblingCount` mal zwei plus drei; die Defaults `1` und `1` ergeben damit sieben.
- Die Truncations leiten sich aus den Lücken der Seitenliste ab. Eine Lücke von genau einer Seite wird als diese Seite dargestellt, weil eine Truncation denselben Platz braucht und dabei verbirgt, welche Seite fehlt.
- `siblingCount` bleibt unterhalb des `sm`-Breakpoints ohne Wirkung, weil die Seiten neben der aktuellen dort zusammenklappen.
- Die Pfeile zurück und vorwärts sind Teil der Komponente und werden nicht eigens hinzugefügt.
- `size` bietet `medium` und `small`. In Figma sind das zwei eigene Hauptkomponenten, im Code ist es eine Property.
