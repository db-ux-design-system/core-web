# Breadcrumb Item

Einzelnes Element innerhalb einer [Breadcrumb](../guidelines.md), das eine Ebene im Pfad abbildet.

## Regeln

1. Icons entweder an allen Breadcrumb Items setzen oder an keinem. Ein einzelnes Item mit Icon lässt den Pfad unausgewogen und überladen wirken. Das erste Item des Pfads ist davon ausgenommen.
2. `noText` ausschließlich am ersten Item des Pfads setzen und mit einem eindeutig erkennbaren Icon kombinieren, zum Beispiel `house`. Den übrigen Items fehlt ohne Text die Bedeutung im Pfad.
3. Für den gesamten Pfad denselben `separator` verwenden, entweder `chevron` oder `slash`, und beide nie innerhalb eines Pfads mischen. Wechselnde Separatoren wirken unbeabsichtigt und stören den Pfad.

Die übrigen Regeln zum Einsatz der Items liegen in [Breadcrumb](../guidelines.md), weil sie erst im Zusammenspiel des ganzen Pfads gelten: welchen Pfad die Items abbilden und wie sie benannt werden.

## Zusätzliche Informationen

- `ariaCurrent` markiert das Item als aktuelle Seite. Ohne gesetzten Wert erhält das letzte Item des Pfads `page`. Das markierte Item wird als Text dargestellt, die übrigen als Link.
- Der `separator` wird im Code einmal an der [Breadcrumb](../guidelines.md) gesetzt und gilt für alle Items. In Figma ist er ein Instance Swap je Item, mit Chevron Right als Default und Slash als Alternative.
- Der `separator` ist rein visuell und zieht keine Aufmerksamkeit von den Items ab.
- `noText` blendet das Label aus und zeigt das Item als reines Icon. Der Text bleibt als zugänglicher Name erhalten.
- In Figma unterscheidet `variant` die Rollen `path`, `root`, `current` und `truncation`. Im Code gibt es diese Property nicht: das erste Item ist `root`, `ariaCurrent` markiert `current`, und die Truncation entsteht über `maxItems` oder das [Breadcrumb Popover Item](../breadcrumb-popover-item/guidelines.md).
