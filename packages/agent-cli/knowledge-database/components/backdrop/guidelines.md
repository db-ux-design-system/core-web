# Backdrop

Overlay-Ebene hinter modale Inhalte zur Fokussierung und Interaktionsblockierung.

## Regeln

1. Nur hinter modalen Overlays (Dialog, Drawer) einsetzen — nie dekorativ ohne zugehöriges Overlay.
2. Blockiert Interaktion mit dem Hintergrund — Klick auf den Backdrop kann das Overlay schließen (optional). Fokus bleibt innerhalb des Overlays.
3. Nur verwenden, wenn die Aufgabe ohne Zugriff auf Hintergrundinhalte abschließbar ist — sonst nicht-blockierendes Muster nutzen.
