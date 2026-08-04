# Popover

Schwebendes Overlay für kontextbezogene Inhalte, ausgelöst durch Nutzer:innen-Interaktion.

## Regeln

1. Für interaktive oder zusammengesetzte Inhalte an einem Trigger verwenden, für reine Text-Erklärungen stattdessen [Tooltip](../tooltip/guidelines.md).
2. Inhalt auf ein Thema begrenzen, keine großen oder scrolllastigen Inhalte.
3. `placement` beim Standardwert `bottom` belassen, sofern kein Grund dagegen spricht.

## Zusätzliche Informationen

- Läuft das Popover aus dem Viewport, dreht die Kollisionsvermeidung die Platzierung automatisch und überschreibt dabei das gesetzte Placement — dafür ist keine Konfiguration nötig.
