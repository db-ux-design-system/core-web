# Popover

Schwebendes Overlay für kontextbezogene Inhalte, ausgelöst durch Nutzer:innen-Interaktion.

## Regeln

1. Für interaktive oder zusammengesetzte Inhalte an einem Trigger verwenden, für reine Text-Erklärungen stattdessen [Tooltip](../tooltip/guidelines.md), für eigenständige Aufgaben mit eigenem Titel stattdessen [Dialog](../dialog/guidelines.md).
2. Inhalt auf ein Thema begrenzen, keine großen oder scrolllastigen Inhalte.
3. Inhalte mit Bedienelementen über einen Klick öffnen und dafür `open` setzen. Ohne `open` öffnet und schließt das Popover über Hover und Fokus und verschwindet, sobald beide die Komponente verlassen.
4. Bei über `open` gesteuertem Popover eine Möglichkeit zum Schließen anbieten. In diesem Modus schließt es sich nicht mehr von selbst, auch nicht über Escape.
5. **sollte** `placement` beim Standardwert `bottom` belassen, sofern kein Grund dagegen spricht.

## Zusätzliche Informationen

- Läuft das Popover aus dem Viewport, dreht die Kollisionsvermeidung die Platzierung automatisch und überschreibt dabei das gesetzte Placement — dafür ist keine Konfiguration nötig.
- Das auslösende Element wird automatisch als Trigger des Popovers ausgezeichnet und gibt seinen Auf- und Zuklappzustand an Assistenztechnologien weiter. Dafür ist keine Konfiguration nötig.
- Scrollt das auslösende Element aus dem sichtbaren Bereich, schließt sich das Popover automatisch.
