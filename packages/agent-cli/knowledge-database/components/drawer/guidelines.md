# Drawer

Sliding Panel, das von allen Seiten eingeblendet werden kann und ergänzende Inhalte zeigt, ohne den Nutzer aus dem aktuellen Kontext zu reißen.

## Regeln

1. Drawer nur für optionale Inhalte verwenden. Wenn die Information kritisch oder blockierend ist, stattdessen [Dialog](../../lab-components/dialog/guidelines.md) oder eine eigene Seite nutzen. Dialog ist eine Lab-Komponente ohne stabilen API-Vertrag.
2. Inhalt auf einfache Aktionen beschränken, keine mehrstufigen Prozesse oder komplexen Validierungen abbilden.
3. Der Drawer überlagert immer die gesamte Seitenbreite und -höhe inklusive Header. Nicht auf einen bestimmten Seitenbereich beschränken.
4. **sollte** `containerSize` entsprechend der Menge und Komplexität des Inhalts wählen, nicht größer als nötig.
5. Immer eine Möglichkeit zum Schließen bereitstellen: Klick außerhalb des Drawers (bei Backdrop) oder expliziter Close-Button.

## Zusätzliche Informationen

- `containerSize` wirkt richtungsabhängig: bei `direction` `to-left` und `to-right` begrenzt es die Breite (`small` 20rem, `medium` 32rem, `large` 48rem), bei `up` und `down` die Höhe als Anteil des Viewports (`small` ein Drittel, `medium` die Hälfte, `large` zwei Drittel). `full` setzt keine Begrenzung.
- Der Default unterscheidet sich je Richtung: horizontal greift `small`, vertikal `large`.
