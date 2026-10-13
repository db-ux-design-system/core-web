# Breadcrumb

Sekundäre Navigation, die die Position der aktuellen Seite in der Seitenhierarchie zeigt und den Weg zurück zu den übergeordneten Ebenen öffnet.

## Regeln

1. Breadcrumb als sekundäre Navigationshilfe zur Orientierung einsetzen, nicht als Ersatz der Hauptnavigation. Sie ergänzt die Wegfindung, kann die vollständige Navigationsstruktur aber nicht abbilden.
2. Im Breadcrumb den hierarchischen Pfad zur aktuellen Seite abbilden, nicht den Klickverlauf. Aus dem besuchten Verlauf entstehen wiederholte und zurückführende Schritte, die den Pfad unverständlich machen.
3. Jedes [Breadcrumb Item](breadcrumb-item/guidelines.md) genauso benennen wie den Titel der Seite, auf die es verweist. Abweichende Bezeichnungen lösen die Verbindung zwischen Pfad und Seite und schwächen die Orientierung.

## Zusätzliche Informationen

- `maxItems` bestimmt, wie viele Items höchstens erscheinen; der Default ist `4`. Überschreitet der Pfad die Grenze, klappen die mittleren Items hinter einer Truncation zusammen, während das erste Item und die aktuelle Seite sichtbar bleiben. Ein Klick auf die Truncation klappt die verborgenen Items wieder aus. _(Example-Kandidat)_
- Das [Breadcrumb Popover Item](breadcrumb-popover-item/guidelines.md) sieht wie die automatische Truncation aus, öffnet beim Hover aber ein Popover mit den eingeklappten [Breadcrumb Items](breadcrumb-item/guidelines.md). Die verborgenen Ebenen bleiben an ihrer Stelle erreichbar, ohne den Pfad auszuklappen oder die Seite zu wechseln. _(Example-Kandidat)_
- Auf Mobile reduziert sich die Breadcrumb automatisch auf die aktuelle Seite und die direkt darüberliegende Ebene. Der Pfad bleibt auf kleinen Viewports lesbar, und das vorangestellte Item führt eine Ebene nach oben. _(Example-Kandidat)_
- `separator` gilt für den gesamten Pfad und bietet `chevron` als Default und `slash`.
- Werte unter `2` werden bei `maxItems` als `2` behandelt. Das erste Item und die aktuelle Seite bleiben damit immer sichtbar.
- `expandText` ist der zugängliche Name der automatischen Truncation und wird nicht dargestellt.
- Die Items kommen entweder als Children oder über `items` als Array. Children nimmt ausschließlich [Breadcrumb Item](breadcrumb-item/guidelines.md) und [Breadcrumb Popover Item](breadcrumb-popover-item/guidelines.md) auf.
- Die Tabreihenfolge verwaltet die Breadcrumb selbst: deaktivierte, aktuelle und eingeklappte Items liegen außerhalb der Tabreihenfolge. `tabindex` wird an den Items nicht gesetzt.
- `size` bietet `small` und `medium`. In Figma sind das zwei eigene Varianten der Hauptkomponente.
