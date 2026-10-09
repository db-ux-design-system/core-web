# Drawer

Herausfahrendes Panel, das von einem Rand des Viewports erscheint und ergänzende Inhalte oder einfache Interaktionen zeigt, während der aktuelle Kontext erhalten bleibt.

## Regeln

1. Drawer nur für optionale Inhalte verwenden. Wenn die Information kritisch oder blockierend ist, stattdessen [Dialog](../dialog/guidelines.md) oder eine eigene Seite nutzen.
2. Inhalt auf einfache Aktionen beschränken, keine mehrstufigen Prozesse oder komplexen Validierungen abbilden.
3. Der Drawer überlagert immer die gesamte Seitenbreite und -höhe inklusive Header. Nicht auf einen bestimmten Seitenbereich beschränken.
4. **sollte** Auf Mobile `direction` `up` wählen, wenn der Inhalt kurz und interaktiv ist. Bei voller Höhe liegen die oberen Elemente außerhalb des Daumen-Greifbereichs.

## Zusätzliche Informationen

- Welche Stufe von `containerSize` zum Inhalt passt, ist eine Gestaltungsentscheidung: kurze, fokussierte Aufgaben in `small`, Formulare und Listen in `medium`, breite Inhalte wie eine [Table](../table/guidelines.md) in `large`, großer Arbeitsbereich oder vorübergehender Ersatz des Seitenkontexts in `full`. _(Example-Kandidat)_
- `containerSize` wirkt richtungsabhängig: bei `direction` `to-left` und `to-right` begrenzt es die Breite (`small` 20rem, `medium` 32rem, `large` 48rem), bei `up` und `down` die Höhe als Anteil des Viewports (`small` ein Drittel, `medium` die Hälfte, `large` zwei Drittel). `full` setzt keine Begrenzung.
- Der Default unterscheidet sich je Richtung: horizontal greift `small`, vertikal `large`.
- Die Richtung wechselt nicht mit der Viewport-Breite. Für ein abweichendes Verhalten je Breakpoint wird `direction` im Produkt gesetzt.
- Escape schließt den Drawer. Ein Klick außerhalb schließt ihn nur bei vorhandenem Backdrop.
- Der Close-Button ist Teil des [Drawer Headers](drawer-header/guidelines.md) und immer vorhanden. Eine Property zum Ausblenden gibt es nicht.
