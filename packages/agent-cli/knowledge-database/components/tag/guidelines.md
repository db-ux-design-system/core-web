# Tag

Kompaktes Label zur Kategorisierung, Hervorhebung von Attributen oder Darstellung von Auswahlen — statisch oder interaktiv.

## Regeln

1. `behavior` steuert ausschließlich den Entfernen-Button: `static` (Default) für reine Anzeige, `removable`, wenn eine getroffene Auswahl entfernbar sein soll.
2. Interaktivität entsteht über das eingebettete Element, nicht über ein Property: `<input type="checkbox">` oder `<input type="radio">` im `<label>` für Filterung und Auswahl, `<a>` für Navigation, `<button>` für Aktionen. Mit `behavior="removable"` kombinierbar.
3. **sollte** Labels so kurz wie möglich halten.
4. Für reine Statusanzeige stattdessen [Badge](../badge/guidelines.md) verwenden. Tag ist für kategorisierende und interaktive Zwecke gedacht.
5. `emphasis: strong` gezielt einsetzen, nicht verschiedene Betonungen innerhalb eines Kontexts ohne Grund mischen.
6. Mindest-Trefferzone 24×24 px bei interaktiven Varianten sicherstellen.

## Zusätzliche Informationen

- Tags bleiben immer einzeilig.
