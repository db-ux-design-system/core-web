# Tag

Kompaktes Label zur Kategorisierung, Hervorhebung von Attributen oder Darstellung von Auswahlen — statisch oder interaktiv.

## Regeln

1. `behavior` steuert ausschließlich den Entfernen-Button — `static` (Default) für reine Anzeige, `removable`, wenn eine getroffene Auswahl entfernbar sein soll.
2. Interaktivität entsteht über das eingebettete Element, nicht über ein Property — `<input type="checkbox">` oder `<input type="radio">` im `<label>` für Filterung und Auswahl, `<a>` für Navigation, `<button>` für Aktionen. Mit `behavior="removable"` kombinierbar.
3. Labels so kurz wie möglich — Tags bleiben immer einzeilig.
4. Für reine Statusanzeige stattdessen Badge verwenden — Tag ist für kategorisierende und interaktive Zwecke.
5. Strong-Betonung gezielt einsetzen — nicht verschiedene Betonungen innerhalb eines Kontexts ohne Grund mischen.
6. Mindest-Trefferzone 24×24 px bei interaktiven Varianten sicherstellen.
