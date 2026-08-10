# Custom Select Dropdown

Aufklappbarer Container, der die Optionsliste und optional ein Suchfeld anzeigt — wird über das Form Field geöffnet und positioniert sich relativ dazu.

## Regeln

1. `width` nach der Länge der [Custom Select List Items](../custom-select-list-item/guidelines.md) wählen: `full`, wenn das Dropdown die Breite des Form Fields übernehmen soll, `auto` bei kurzen Optionen, die nicht umbrechen dürfen, `fixed` als Standard, wenn lange Labels umbrechen dürfen.
2. `placement` so wählen, dass wichtige Informationen nicht verdeckt werden. Das Property liegt auf der Elternkomponente `custom-select`.
3. `showSelectAll` nur anzeigen, wenn `multiple` aktiv ist.
4. **sollte** Suchfunktion (`showSearch`) bei langen Listen anbieten. Zustände `showNoResults` und `showLoading` bei entsprechender Datenlage anzeigen.

## Zusätzliche Informationen

- Läuft das Dropdown aus dem Viewport, dreht die Kollisionsvermeidung die Platzierung automatisch und überschreibt dabei das gesetzte Placement — dafür ist keine Konfiguration nötig.
