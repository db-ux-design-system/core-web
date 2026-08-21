# Shell Mobile

Äußere Layoutstruktur für mobile Webanwendungen. Unterstützt verschiedene Positionen des Control Panels und nutzt standardmäßig einen Drawer als Hauptnavigation.

## Regeln

1. Navigation für Mobile umstrukturieren, wenn die [Sub Navigation](../shell-sub-navigation/guidelines.md) auf Desktop mehr als eine Ebene hat. Eine mehrstufige Sub Navigation nicht auf Mobile spiegeln, dort ist nur eine flache Ebene möglich.

## Zusätzliche Informationen

- Shell Mobile und [Shell Desktop](../shell-desktop/guidelines.md) können unterschiedlich aufgebaut sein. Die Navigationsstruktur muss auf beiden Devices nicht identisch sein, sie kann je Device angepasst werden. _(Example-Kandidat)_
- Das Control Panel kann oben oder unten positioniert werden. _(Example-Kandidat)_
- Für eine mehrstufige Desktop-Navigation gibt es auf Mobile zwei Wege: eine flache [Sub Navigation](../shell-sub-navigation/guidelines.md) mit einer Ebene, oder alles in die Hauptnavigation verlagern, wo Drill Down und Tree tiefere Ebenen tragen.
- Control Panel unten und Sub Navigation unten sind nicht kombinierbar.
- [Flat Icon](../../control-panel/control-panel-navigation/guidelines.md) existiert ausschließlich mit Control Panel unten.
- Ebene 3 und tiefer ist auf Mobile nur im [Drawer](../../drawer/guidelines.md) darstellbar.
- Mit Flat Icon sind Ebene 3 und tiefer nicht darstellbar, Ebene 2 nur über die Sub Navigation.
