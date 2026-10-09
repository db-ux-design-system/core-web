# Drawer Header

Subkomponente für den oberen Bereich des Drawers. Nimmt den Titel, den Close-Button und ergänzende Inhalte in Start Slot und End Slot auf.

## Regeln

1. **sollte** Einen Titel vergeben, über `text` oder in Children. Ohne Titel geben Assistenztechnologien nur „Dialog" aus.
2. **sollte** Den Titel am Label des auslösenden Elements orientieren. Sonst bleibt offen, ob der erwartete Drawer geöffnet wurde.
3. **sollte** Eine ergänzende Erläuterung nur aufnehmen, wenn der Zweck nicht aus dem Titel hervorgeht. Sonst verlängert sie nur den Weg zum Inhalt.
4. **sollte** Nur den Titel bold setzen, ergänzende Inhalte im regulären Schnitt und nicht größer. Sonst konkurrieren sie mit dem Titel.
5. **sollte** In Start Slot und End Slot nur Elemente mit Bezug zum Inhalt des Drawers platzieren. Ohne Bezug lenken sie vom Inhalt ab.

## Zusätzliche Informationen

- Der Titel ist standardmäßig im Bold-Schnitt gesetzt.
- Ergänzende Inhalte lassen sich über eine kleinere Größe oder eine zurückgenommene Farbe weiter abstufen.
- Start Slot und End Slot können ergänzende Aktionen aufnehmen, etwa ein Zurück-Control.
- Der Close-Button ist Teil des Drawer Headers und muss nicht ergänzt werden. Sein Label wird über `closeButtonText` gesetzt und ist zusätzlich als [Tooltip](../../tooltip/guidelines.md) sichtbar.
