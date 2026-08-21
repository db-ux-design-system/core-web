# Control Panel Navigation

Navigations-Container innerhalb des Control Panels und der Shell Sub Navigation. Enthält Navigation Items in den Varianten Popover, Tree, Drill Down und Flat Icon.

## Regeln

1. Navigation Items nur für Navigationsziele verwenden. Aktionen wie Suche nicht als Navigation Item platzieren.
2. **sollte** Drill Down ab acht Navigation Items je Ebene verwenden, es zeigt eine Ebene auf einmal und bleibt auch bei vielen Einträgen übersichtlich.
3. **sollte** Tree bis sieben Navigation Items je Ebene verwenden, dort bleibt die vollständige Hierarchie sichtbar.
4. Flat Icon nur für gleichwertige Ziele auf oberster Ebene einsetzen. Flat Icon nicht einsetzen, wenn ein Ziel dominiert, es gewichtet alle Ziele gleich.
5. **sollte** in Flat Icon auf Desktop höchstens zehn Navigation Items einsetzen, optimal bis zu sieben, längere Icon-Listen widersprechen dem schnellen Zugriff.

## Zusätzliche Informationen

- In der Flat Icon Navigation lässt sich das Label ausblenden, sodass nur das Icon sichtbar bleibt. _(Example-Kandidat)_
- Auf Desktop lässt sich die Popover-Navigation über Overflow-Chevrons scrollen, wenn nicht alle Navigation Items in die verfügbare Breite passen. Die dahinter liegenden Navigation Items werden leicht übersehen. _(Example-Kandidat)_
- Aktionen und Navigationsziele können denselben Namen tragen: Konto oder Einstellungen dürfen als Navigation Item auftreten, nicht aber als Aktions-Button in der Navigation.
- Popover ist die Navigation von Desktop Top, in Desktop Left steht sie nicht zur Verfügung. In der mobilen [Sub Navigation](../../shell/shell-sub-navigation/guidelines.md) wird sie horizontal und ohne zweite Ebene verwendet.
- Auf Desktop entscheidet die Anzahl der Navigation Items auf oberster Ebene über die Position des Control Panels, siehe [Shell Desktop](../../shell/shell-desktop/guidelines.md).
- Im Drawer auf Mobile stehen Drill Down und Tree zur Verfügung, ausgewählt nach denselben Kriterien wie auf Desktop.
- Mit jeder weiteren Ebene steigt in beiden Varianten die Zahl der Klicks bis zum Ziel. Dazu nimmt in Tree die Einrückung zu, während Drill Down weiter nur eine Ebene zeigt. Die Tiefe wirkt sich damit auf beide Varianten aus und entscheidet nicht zwischen ihnen.
- Der Flat Icon Slot ist auf Mobile technisch begrenzt: zwei bis vier Items mit Text, zwei bis sechs Items ohne Text.
