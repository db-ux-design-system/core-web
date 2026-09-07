# Loading Indicator

Visuelles Feedback, das anzeigt, dass Inhalte oder ein Prozess geladen werden.

## Regeln

1. Loading Indicator ausschließlich für Systemvorgänge einsetzen. Für Fortschritt, den Nutzende selbst herstellen, etwa ausgefüllte Formularschritte oder erledigte Aufgaben, ist der Loading Indicator nicht vorgesehen.
2. Den Loading Indicator dort zeigen, wo der Vorgang ausgelöst wird oder sein Ergebnis erscheint. Andere Elemente deaktivieren statt sie mit einem eigenen Indikator zu versehen, weil ein Indikator an einem wartenden Element wie ein eigener Vorgang wirkt.
3. `indeterminate` nur wählen, wenn der Fortschritt des Vorgangs nicht berechenbar ist. Ist er berechenbar, stattdessen die determinierte Variante wählen und den Wert in `progressText` anzeigen.
4. Zwei Darstellungen desselben Vorgangs nur einsetzen, wenn jede eine eigene Aussage trägt, etwa `indeterminate` im auslösenden Element für die laufende Aktion und die determinierte Variante für den Fortschritt. Zwei Darstellungen mit derselben Aussage lesen sich als zwei Vorgänge.
5. Im `label` den Vorgang mit einem Verb benennen, nicht nur das betroffene Objekt. Ein `label` ohne Verb lässt offen, ob der Vorgang läuft oder abgeschlossen ist.
6. Im `label` bei `state` mit dem Wert `active` den laufenden Vorgang beschreiben und bei `successful` das Ergebnis. Ein Label, das nach dem Abschluss weiter den Verlauf beschreibt, widerspricht dem angezeigten Status-Icon.
7. Im `label` bei `state` mit dem Wert `critical` den Grund des Abbruchs nennen. Ohne Grund bleibt offen, ob der Vorgang wiederholbar ist.
8. `showLabel` nur auf `false` setzen, wenn der umgebende Kontext den Vorgang eindeutig benennt. Ohne sichtbares `label` und ohne Kontext bleibt offen, worauf sich das Warten bezieht.
9. **sollte** in `progressText` eine quantitative Angabe setzen: Prozentwert, Anteil oder Menge. Eine Wiederholung des `label` liefert keine zusätzliche Information.

## Zusätzliche Informationen

- Mehrere Loading Indicator können gleichzeitig sichtbar sein, solange jeder einen eigenen Vorgang zeigt, etwa ein Vorgang pro Zeile einer Liste. _(Example-Kandidat)_
- Ein Indikator mit `indeterminate` kann während des Vorgangs auf die determinierte Variante wechseln, sobald der Fortschritt berechenbar wird. Der umgekehrte Wechsel ist nicht vorgesehen.
- `state` mit den Werten `successful` und `critical` beendet die Animation und zeigt an ihrer Stelle ein Status-Icon. Der Indikator deckt damit auch den Abschluss des Vorgangs ab und muss dafür nicht ausgetauscht werden.
- `orientation` existiert nur bei `variant` mit dem Wert `circular`. Bei `bar` verläuft der Track immer horizontal.
- `progressText` und `showProgressText` existieren nur in der determinierten Variante. Mit `indeterminate` gibt es keinen Fortschrittstext.
- Die Textpositionen sind festgelegt und nicht wählbar: bei `circular` steht `progressText` im Kreis und `label` darunter, bei `bar` stehen `label` und `progressText` gemeinsam über dem Track.
- Die Länge des `label` ist nicht begrenzt. Ein kurzes, einzeiliges `label` hält die Höhe des Indikators stabil, ein längeres vergrößert sie.
