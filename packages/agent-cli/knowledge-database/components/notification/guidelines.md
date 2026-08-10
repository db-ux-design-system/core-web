# Notification

Kommuniziert eine kurze Nachricht über ein Ereignis, eine Zustandsänderung oder System-Feedback, ohne zu blockieren.

## Regeln

1. Nur für nicht-blockierendes Feedback verwenden. Für Bestätigungen irreversibler Aktionen oder erzwungene Entscheidungen stattdessen [Dialog](../../lab-components/dialog/guidelines.md) verwenden. Dialog ist eine Lab-Komponente ohne stabilen API-Vertrag.
2. Semantische Variante passend zur Dringlichkeit wählen, nicht zur rein visuellen Betonung.
3. Bedeutung muss auch ohne Farbe verständlich sein.
4. **sollte** Nachricht so kurz wie möglich halten. Für Details auf eine eigene Oberfläche verlinken.
5. Automatisches Ausblenden nur bei `semantic: successful` und `informational` erlauben.
6. Notifications mit `semantic: warning` oder `critical` immer persistent zeigen und mit Schließen-Button versehen.
7. Sichtbar platzieren, ohne primäre Steuerelemente zu verdecken.
8. **sollte** Anzahl gleichzeitig sichtbarer Notifications begrenzen.
