# Backdrop

Overlay-Ebene hinter modale Inhalte zur Fokussierung und Interaktionsblockierung.

## Regeln

1. Nur hinter modalen Overlays einsetzen ([Dialog](../../lab-components/dialog/guidelines.md), [Drawer](../drawer/guidelines.md)), nie dekorativ ohne zugehöriges Overlay. Dialog ist eine Lab-Komponente ohne stabilen API-Vertrag.
2. Nur verwenden, wenn die Aufgabe ohne Zugriff auf Hintergrundinhalte abschließbar ist. Sonst ein nicht-blockierendes Muster nutzen.

## Zusätzliche Informationen

- Blockiert Interaktion mit dem Hintergrund. Klick auf den Backdrop kann das Overlay schließen. Fokus bleibt innerhalb des Overlays.
