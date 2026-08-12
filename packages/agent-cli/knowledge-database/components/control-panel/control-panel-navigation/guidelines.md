# Control Panel Navigation

Navigations-Container innerhalb des Control Panels. Enthält Navigation Items und unterstützt verschiedene Varianten für unterschiedliche Inhaltsstrukturen und Positionen des Control Panels.

## Regeln

1. Die Anzahl der Navigation Items auf oberster Ebene in der horizontalen Popover-Navigation (Desktop Top) angemessen halten. Nicht zu viele Navigation Items platzieren, da Scroll-Chevrons zwar unterstützt sind, verborgene Navigation Items dahinter aber leicht übersehen werden.
2. Drill Down verwenden, wenn die Navigation viele Navigation Items bei flacher Struktur (ein bis zwei Ebenen) hat, damit jede Ansicht fokussiert und überschaubar bleibt. Tree nicht für Navigationen mit vielen Items, aber nur ein bis zwei Ebenen Tiefe verwenden, eine lange flache Liste in Tree bietet gegenüber Drill Down keinen strukturellen Vorteil.
3. Tree verwenden, wenn die Navigation vier oder mehr Ebenen hat, damit die vollständige Hierarchie sichtbar und jede Ebene direkt erreichbar bleibt. Drill Down nicht für Navigationen mit vier oder mehr Ebenen verwenden, da Nutzer:innen ihre Position in der Hierarchie verlieren, wenn sie nur eine Ebene zur Zeit sehen.
4. In der Flat Icon Navigation eine fokussierte Auswahl gleichwertiger Ziele auf oberster Ebene verwenden. Sie auf Desktop nicht mit zu vielen Navigation Items überladen, eine lange Icon-Liste ohne klare Priorität widerspricht dem Zweck des schnellen Zugriffs.

## Zusätzliche Informationen

- Popover ist die Navigation von Desktop Top. In Desktop Left steht sie nicht zur Verfügung.
- Im Drawer auf Mobile stehen Drill Down und Tree zur Verfügung, ausgewählt nach denselben Tiefenkriterien wie auf Desktop.
- Der Flat Icon Slot ist auf Mobile technisch begrenzt: zwei bis vier Items mit Text, zwei bis sechs Items ohne Text.
- Den Text ausblenden lässt sich ausschließlich über separate Varianten in der Flat Icon Navigation (mit und ohne Text). Popover, Tree und Drill Down zeigen ihn immer, es gibt kein Property dafür. _(Example-Kandidat)_
