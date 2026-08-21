# Shell Content

Scrollbarer Hauptinhaltsbereich der Shell mit Slot-basiertem Layout.

## Regeln

1. Fixed verwenden, wenn Start Slot oder End Slot beim Scrollen sichtbar bleiben sollen. Auto scrollt den gesamten Bereich einschließlich der Slots.
2. Hauptinhalt in Children ablegen, nicht in Start Slot oder End Slot. Mit Fixed bleibt Inhalt in den Slots dauerhaft stehen statt mitzuscrollen.
3. Start Slot und End Slot in Fixed kompakt halten. Sie nicht überfüllen, da zu große Slots den scrollbaren Bereich für Children auf eine unbrauchbare Größe schrumpfen lassen.

## Zusätzliche Informationen

- Ein Footer mit rechtlichen Links im End Slot kann mit Auto mitscrollen, ein primärer CTA braucht dort Fixed, sonst ist er nicht dauerhaft sichtbar. _(Example-Kandidat)_
- In Start Slot und End Slot liegen typischerweise angedockte Benachrichtigungen oder Systembanner.
