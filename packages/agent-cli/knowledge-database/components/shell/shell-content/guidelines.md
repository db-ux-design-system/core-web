# Shell Content

Scrollbarer Hauptinhaltsbereich der Shell mit Slot-basiertem Layout.

## Regeln

1. Auto verwenden, wenn der gesamte Inhaltsbereich aus Start Slot, Children Slot und End Slot zusammen scrollen soll, Fixed verwenden, wenn Start Slot oder End Slot persistent sichtbar bleiben müssen und nur der Children Slot scrollt.
2. Start Slot und End Slot in Fixed nicht überfüllen, da zu große Slots den scrollbaren Children Slot auf eine unbrauchbare Größe schrumpfen.
3. Im Start Slot nur persistente, systemweite UI-Elemente platzieren, etwa angedockte Benachrichtigungen oder Systembanner. Keinen regulären Seiteninhalt dort ablegen.
4. Wichtige Aktionen wie einen primären CTA im End Slot ausschließlich mit Fixed verwenden, da sie in Auto aus dem Viewport scrollen und unerreichbar werden. **kann** Einen Footer mit rechtlichen Links im End Slot mit Auto mitscrollen lassen, da er keine persistente Sichtbarkeit erfordert.
