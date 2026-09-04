# Loading Indicator

Visuelles Feedback, das anzeigt, dass Inhalte oder ein Prozess geladen werden.

## Regeln

1. Loading Indicator ausschließlich für Systemvorgänge einsetzen. Für Fortschritt, den Nutzende selbst herstellen, etwa ausgefüllte Formularschritte oder erledigte Aufgaben, ist der Loading Indicator nicht vorgesehen.
2. Jeden Loading Indicator genau einem Vorgang zuordnen. Elemente, die nur auf den Vorgang warten, deaktivieren statt mit einem eigenen Indikator versehen, weil mehrere Indikatoren sich als mehrere Vorgänge lesen.
3. `indeterminate` nur wählen, wenn der Fortschritt des Vorgangs nicht berechenbar ist. Ist er berechenbar, stattdessen die determinierte Variante wählen und den Wert in `progressText` anzeigen.
4. Im `label` den Vorgang mit einem Verb benennen, nicht nur das betroffene Objekt. Ein `label` ohne Verb lässt offen, ob der Vorgang läuft oder abgeschlossen ist.
5. Im `label` bei `state` mit dem Wert `active` den laufenden Vorgang beschreiben und bei `successful` das Ergebnis. Ein Label, das nach dem Abschluss weiter den Verlauf beschreibt, widerspricht dem angezeigten Status-Icon.
6. Im `label` bei `state` mit dem Wert `critical` den Grund des Abbruchs nennen. Ohne Grund bleibt offen, ob der Vorgang wiederholbar ist.
7. `showLabel` nur auf `false` setzen, wenn der umgebende Kontext den Vorgang eindeutig benennt. Ohne sichtbares `label` und ohne Kontext bleibt offen, worauf sich das Warten bezieht.
8. **sollte** in `progressText` eine quantitative Angabe setzen: Prozentwert, Anteil oder Menge. Eine Wiederholung des `label` liefert keine zusätzliche Information.
9. **sollte** `label` aus wenigen Wörtern bilden und einzeilig halten. Bei `variant` mit dem Wert `circular` und `orientation` mit dem Wert `vertical` steht das `label` unter dem Kreis und bricht bei größerer Länge um.

## Zusätzliche Informationen

- Mehrere Loading Indicator können gleichzeitig sichtbar sein, solange jeder einen eigenen Vorgang zeigt, etwa ein Vorgang pro Zeile einer Liste. _(Example-Kandidat)_
- Ein Indikator mit `indeterminate` kann während des Vorgangs auf die determinierte Variante wechseln, sobald der Fortschritt berechenbar wird. Der umgekehrte Wechsel ist nicht vorgesehen.
- `state` mit den Werten `successful` und `critical` beendet die Animation und zeigt an ihrer Stelle ein Status-Icon. Der Indikator deckt damit auch den Abschluss des Vorgangs ab und muss dafür nicht ausgetauscht werden.
- `orientation` existiert nur bei `variant` mit dem Wert `circular`. Bei `bar` verläuft der Track immer horizontal.
- `progressText` und `showProgressText` existieren nur in der determinierten Variante. Mit `indeterminate` gibt es keinen Fortschrittstext.
- Die Textpositionen sind festgelegt und nicht wählbar: bei `circular` steht `progressText` im Kreis und `label` darunter, bei `bar` stehen `label` und `progressText` gemeinsam über dem Track.
