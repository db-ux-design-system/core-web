# Drawer

Sliding Panel, das von allen Seiten eingeblendet werden kann und ergänzende Inhalte zeigt, ohne den Nutzer aus dem aktuellen Kontext zu reißen.

## Regeln

1. Drawer nur für optionale Inhalte verwenden. Wenn die Information kritisch oder blockierend ist, stattdessen [Dialog](../../lab-components/dialog/guidelines.md) oder eine eigene Seite nutzen. Dialog ist eine Lab-Komponente ohne stabilen API-Vertrag.
2. Inhalt auf einfache Aktionen beschränken, keine mehrstufigen Prozesse oder komplexen Validierungen abbilden.
3. Der Drawer überlagert immer die gesamte Seitenbreite und -höhe inklusive Header. Nicht auf einen bestimmten Seitenbereich beschränken.
4. Die Drawer-Größe entsprechend der Menge und Komplexität des Inhalts wählen.
5. Immer eine Möglichkeit zum Schließen bereitstellen: Klick außerhalb des Drawers (bei Backdrop) oder expliziter Close-Button.
