# Dialog Header

Subkomponente für den oberen Bereich des Dialogs. Nimmt den Titel, den Close-Button und ergänzende Inhalte in Start Slot und End Slot auf.

## Regeln

1. Immer einen Titel vergeben, entweder über `text` oder als Inhalt in Children. Der Titel wird zum zugänglichen Namen des Dialogs, ohne ihn bleibt der Dialog unbenannt.
2. **sollte** Titel die Aktion benennen und sich am Label des auslösenden Elements orientieren. Weicht er davon ab, bleibt offen, ob der erwartete Dialog geöffnet wurde.
3. **sollte** Eine ergänzende Erläuterung nur aufnehmen, wenn der Zweck nicht aus dem Titel hervorgeht. Sonst wiederholt sie den Titel und verlängert den Weg zum Inhalt.
4. **sollte** Den Titel im Bold-Schnitt belassen und ergänzende Inhalte im regulären Schnitt setzen, nicht größer als den Titel. Optional lassen sie sich über eine kleinere Größe oder eine zurückgenommene Farbe weiter abstufen. Sonst konkurrieren die Ergänzungen mit dem Titel und schwächen ihn als Einstieg in den Dialog.
5. **sollte** Elemente in Start Slot und End Slot nur aufnehmen, wenn sie sich auf den Inhalt des Dialogs beziehen. Aktionen ohne diesen Bezug lenken von der Aufgabe des Dialogs ab.

## Zusätzliche Informationen

- Der Titel wird automatisch mit dem Dialog verknüpft und liefert dessen zugänglichen Namen. Dafür ist keine Konfiguration nötig.
- Der Titel ist standardmäßig im Bold-Schnitt gesetzt.
- Der Close-Button ist Teil des Dialog Headers und muss nicht ergänzt werden. Sein Label wird über `closeButtonText` gesetzt und ist zusätzlich als [Tooltip](../../tooltip/guidelines.md) sichtbar.
