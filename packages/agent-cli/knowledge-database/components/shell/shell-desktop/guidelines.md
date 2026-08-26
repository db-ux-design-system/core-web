# Shell Desktop

Äußere Layoutstruktur für Desktop-Webanwendungen mit persistentem Control Panel und scrollbarem Inhaltsbereich.

## Regeln

1. **sollte** [Control Panel](../../control-panel/control-panel-desktop/guidelines.md) Left ab vier Navigation Items auf oberster Ebene einsetzen, darunter belegt Left Platz ohne strukturellen Nutzen.
2. **sollte** [Sub Navigation](../shell-sub-navigation/guidelines.md) Left ab sechs Navigation Items auf Unterebene einsetzen, darunter genügt Top.
3. Position der Sub Navigation beim Navigieren zwischen Hauptbereichen nicht wechseln, Nutzer:innen erwarten ein stabiles Navigationslayout.

## Zusätzliche Informationen

- Beide Positionen werden unabhängig voneinander gewählt. Liegt die Komplexität erst auf Unterebene, ergibt das Control Panel Top mit Sub Navigation Left.
- Die Schwellwerte für Left unterscheiden sich, weil in der Zeile des Control Panels zusätzlich [Brand](../../control-panel/control-panel-brand/guidelines.md) und je nach Aufbau [Primary Actions](../../control-panel/control-panel-primary-actions/guidelines.md) und [Secondary Actions](../../control-panel/control-panel-secondary-actions/guidelines.md) liegen. Die Sub Navigation Top hat die volle Breite.
- Control Panel Left und Sub Navigation Left sind nicht kombinierbar. Zwei vertikale Sidebars nebeneinander gibt es nicht.
- **Mögliche Kombinationen von Control Panel und Sub Navigation:**
    - Control Panel: Desktop; Control Panel Position: Top; Control Panel Navigation: Popover; Sub Navigation: None.
    - Control Panel: Desktop; Control Panel Position: Top; Control Panel Navigation: Popover; Sub Navigation Position: Top; Sub Navigation Variant: Popover.
    - Control Panel: Desktop; Control Panel Position: Top; Control Panel Navigation: Popover; Sub Navigation Position: Left; Sub Navigation Variant: Drill Down.
    - Control Panel: Desktop; Control Panel Position: Top; Control Panel Navigation: Popover; Sub Navigation Position: Left; Sub Navigation Variant: Tree.
    - Control Panel: Desktop; Control Panel Position: Left; Control Panel Navigation: Drill Down; Sub Navigation: None.
    - Control Panel: Desktop; Control Panel Position: Left; Control Panel Navigation: Tree; Sub Navigation: None.
    - Control Panel: Desktop; Control Panel Position: Left; Control Panel Navigation: Drill Down; Sub Navigation Position: Top; Sub Navigation Variant: Popover.
    - Control Panel: Desktop; Control Panel Position: Left; Control Panel Navigation: Tree; Sub Navigation Position: Top; Sub Navigation Variant: Popover.
    - Control Panel: Desktop; Control Panel Navigation: Flat Icon; Sub Navigation: None.
    - Control Panel: Desktop; Control Panel Navigation: Flat Icon; Sub Navigation Position: Top; Sub Navigation Variant: Popover.
