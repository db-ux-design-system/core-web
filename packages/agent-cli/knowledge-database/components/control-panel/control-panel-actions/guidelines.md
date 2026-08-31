# Control Panel Actions

Bereich im Control Panel für zwei eigenständige Slot-Komponenten: Actions 1 und Actions 2.

## Regeln

1. **sollte** innerhalb eines Slots entweder Aktionen oder Umgebungsinformationen platzieren und beides nicht mischen. Die Elemente eines Slots werden als zusammengehörige Gruppe gelesen. Umgebungsinformationen stattdessen im End Slot von [Control Panel Brand](../control-panel-brand/guidelines.md) platzieren, auf Mobile steht in der Menüleiste neben Actions 1 nur dieser Slot zur Verfügung.
2. Zuerst Actions 1 befüllen. Actions 2 zusätzlich verwenden, wenn die Aktionen inhaltlich oder hierarchisch getrennt werden. Actions 2 nicht als einzigen Slot befüllen, der Divider trennt auf Desktop sonst einen leeren Bereich ab.
3. **sollte** über beide Slots hinweg höchstens eine Hauptaktion und höchstens vier Utility-Aktionen platzieren. In welchem Slot sie liegen, hängt von der gewählten Aufteilung ab.
4. **sollte** auf Mobile im Slot in der Menüleiste nur eine Aktion platzieren, wenn [Control Panel Brand](../control-panel-brand/guidelines.md) einen Anwendungsnamen oder Zusatz enthält. Ohne Anwendungsnamen sind dort höchstens zwei Aktionen möglich, wenn beide Icon-Buttons sind.
5. Flat Icon nicht verwenden, wenn Actions benötigt werden, die Variante hat dafür keinen Bereich.

## Zusätzliche Informationen

- Je nach Seitentyp und Anzahl der Aktionen sind unterschiedliche Aufteilungen möglich: Auf marketinglastigen Seiten kann ein einzelner Haupt-CTA in Actions 1 liegen und Actions 2 leer bleiben. Kommen weitere Aktionen hinzu, kann der Haupt-CTA in Actions 2 liegen und die übrigen Aktionen in Actions 1. Auf utility-lastigen Seiten können Suche und häufig genutzte globale Aktionen in Actions 1 sowie Utility-Aktionen wie Light-/Dark-Switcher und Login oder Account in Actions 2 liegen. _(Example-Kandidat)_
- Auf Mobile liegt Actions 1 in der Control-Panel-Menüleiste. Der Inhalt von Actions 2 liegt im Drawer-Footer und ist erst nach dem Öffnen des Drawers erreichbar. _(Example-Kandidat)_
- Actions 1 und Actions 2 werden gemeinsam dokumentiert, bleiben in Development und Design aber eigenständige Slot-Komponenten.
- Auf Desktop Top sind Actions 1 und Actions 2 horizontal angeordnet. Auf Desktop Left sind sie vertikal angeordnet.
- Actions 2 blendet auf Desktop einen Divider ein, der Actions 1 und Actions 2 voneinander trennt.
