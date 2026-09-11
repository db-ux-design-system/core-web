# Dialog

Modales Overlay, das den Fokus auf eine einzelne Aufgabe legt und sie abschließen oder verwerfen lässt, bevor es weitergeht.

## Regeln

1. Dialog nur einsetzen, wenn die Aufgabe abgeschlossen oder verworfen werden muss, bevor es weitergeht: eine Bestätigung mit Konsequenz, eine erforderliche Eingabe, eine in sich geschlossene Teilaufgabe oder eine blockierende Systemmeldung. Für nicht-blockierendes Feedback stattdessen [Notification](../notification/guidelines.md) nutzen, für ergänzende Inhalte [Drawer](../drawer/guidelines.md).
2. **sollte** Für Inhalte, die sich auf ein bestimmtes Element beziehen und keinen Abschluss erfordern, [Popover](../popover/guidelines.md) statt Dialog verwenden. Das Popover wird am Element verankert, der Dialog erscheint zentriert und lässt den Bezug zum Auslöser nicht erkennen.
3. Dialog immer mit einem [Dialog Header](dialog-header/guidelines.md) verwenden. Ohne Header hat der Dialog keinen zugänglichen Namen, Assistenztechnologien geben dann nur „Dialog" aus.
4. Umkehrbare Aktionen nicht mit einem Dialog bestätigen lassen. Stattdessen die Aktion ausführen und über [Notification](../notification/guidelines.md) das Rückgängigmachen anbieten. Die Rückfrage verhindert hier keinen Fehler, senkt aber die Aufmerksamkeit für die Rückfragen, die wirklich schützen.
5. Bei einer irreversiblen Aktion die Konsequenz und den betroffenen Gegenstand im Inhalt benennen. Eine Rückfrage wie „Sind Sie sicher?" lässt nicht erkennen, ob der richtige Gegenstand gewählt wurde.
6. **sollte** Nur einen Dialog gleichzeitig öffnen. Bei gestapelten Dialogen schließt Escape nur den obersten.
7. Bei `backdrop` `none` den Dialog nicht für Aufgaben einsetzen, die abgeschlossen oder verworfen werden müssen. Ohne Backdrop bleibt der Hintergrund bedienbar und der Fokus nicht im Dialog, die Aufgabe ist damit nicht erzwingbar.

## Zusätzliche Informationen

- Welche Stufe von `containerSize` zum Inhalt passt, ist eine Gestaltungsentscheidung: kurze Texte in den kleinen Stufen, breite Inhalte wie [Table](../table/guidelines.md) in den großen, `full` für datenreiche Inhalte. _(Example-Kandidat)_
- `containerSize` setzt ausschließlich die Maximalbreite des Dialogs und bietet dafür die Stufen `small`, `medium`, `large` und `full`. `full` nutzt die Viewport-Breite abzüglich des Abstands zum Rand. Auf die Höhe wirkt der Wert nicht.
- Der Dialog nutzt die Maximalbreite vollständig aus und verkleinert sich nicht auf seinen Inhalt. Reicht der Platz nicht, verkleinert er sich mit dem Viewport und behält den Abstand zum Rand. Bei sehr schmalen Viewports führen alle Stufen zur selben Breite.
- Zwischen Dialog und Viewport-Rand bleibt in jeder Stufe von `containerSize` ein Abstand von 40px erhalten, auch bei `full`. Der Wert ist über alle Densities konstant.
- Die Höhe ist unabhängig von `containerSize` am sichtbar verfügbaren Bereich begrenzt. Der Inhaltsbereich scrollt automatisch, [Dialog Header](dialog-header/guidelines.md) und [Dialog Footer](dialog-footer/guidelines.md) bleiben dabei sichtbar.
- `backdrop` kann `strong` oder `weak` sein. Die Wahl ist eine Gestaltungsentscheidung und keine Anforderung an den Kontrast.
- Escape schließt den Dialog in jeder Variante. Ein Klick außerhalb schließt ihn nur, wenn ein Backdrop vorhanden ist.
- Beim Öffnen liegt der Fokus im Dialog, beim Schließen kehrt er auf das auslösende Element zurück.
- Bei `backdrop` `none` bleibt der Fokus nicht im Dialog. Er liegt beim Öffnen darin, kann ihn aber mit dem Tabulator verlassen.
- Bei `backdrop` `none` bleibt der Hintergrund bedienbar, der Dialog bleibt aber zentriert und wird nicht am auslösenden Element positioniert. Eine Verankerung am Auslöser gibt es nur beim [Popover](../popover/guidelines.md).
- Die Inhalte von [Dialog Header](dialog-header/guidelines.md) und [Dialog Footer](dialog-footer/guidelines.md) sind frei wählbar. Die Befüllung in den Beispielen ist exemplarisch und keine Vorgabe.
