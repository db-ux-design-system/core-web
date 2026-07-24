# Stack

Layout-Komponente zur Anordnung von Elementen in vertikalem oder horizontalem Fluss mit konsistenten Abständen.

## Do

- Verwende die Gap-Property für gleichmäßige Abstände zwischen Items statt manueller Margins
- Wähle die passende Richtung (Column oder Row) basierend auf Layout und Inhaltsanforderungen
- Aktiviere Wrap für Stacks, die sich an kleinere Bildschirme anpassen sollen

## Don't

- Setze nicht manuell Margins an einzelne Items statt Gap zu verwenden – das führt zu inkonsistenten Abständen
- Verwende „No Wrap" nicht, wenn Overflow-Risiko besteht und die Inhalte zugänglich sein sollen
