# Custom Select Form Field

Eingabefeld-Subkomponente, die den Trigger zum Öffnen des Dropdowns darstellt und ausgewählte Werte anzeigt.

## Regeln

1. Label immer setzen, es beschreibt klar, welche Auswahl erwartet wird.
2. `above` als Standard verwenden, `floating` nur bei knappem vertikalen Platz. `variant` auf allen Eingabefeldern eines Formulars identisch setzen, gemischte Label-Positionen nicht verwenden. Das Property liegt auf der Elternkomponente `custom-select`.
3. Ausgewählte Optionen müssen ohne erneutes Öffnen überprüfbar sein: `selectedType` bei Mehrfachauswahl auf `tag` setzen, wenn die Auswahl häufig bearbeitet wird, auf `amount` bei knappem Platz. Bei Einzelauswahl wird der Text angezeigt (`text`). Das Property liegt auf der Elternkomponente `custom-select`.
4. `showClearSelection` aktiv lassen (Default `true`), damit die Auswahl zurückgesetzt werden kann. Nur ausblenden, wenn der Platz knapp ist und die Auswahl selten geändert wird. Das Property liegt auf der Elternkomponente `custom-select`.
