# Custom Select Dropdown

Aufklappbarer Container, der die Optionsliste und optional ein Suchfeld anzeigt — wird über das Form Field geöffnet und positioniert sich relativ dazu.

## Regeln

1. Dropdown-Width passend zur Länge der List Items wählen.
2. Placement so wählen, dass wichtige Informationen nicht verdeckt werden.
3. „Select All" nur bei Multiple = True anbieten.
4. Suchfunktion bei langen Listen anbieten. No Results oder Loading wird als Zustand kommuniziert.

## Zusätzliche Informationen

- Läuft das Dropdown aus dem Viewport, dreht die Kollisionsvermeidung die Platzierung automatisch und überschreibt dabei das gesetzte Placement — dafür ist keine Konfiguration nötig.
