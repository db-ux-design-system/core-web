# Custom Heading

Slot-Container für Headings mit zusätzlichem Content wie Verlinkungen, Badges oder andere Elemente neben der Überschrift.

## Regeln

1. Custom Heading nur verwenden, wenn neben der Heading zusätzliche Elemente (Links, Icons, Badges) benötigt werden. Für reine Textheadings stattdessen [Heading H1–H6](../heading-h1-h6/guidelines.md) einsetzen.
2. Im Children Slot immer mindestens eine Heading H1–H6 Instanz platzieren. Ohne Heading fehlt die semantische Struktur.
3. **sollte** Zusätzliche Elemente im Slot auf das Nötigste beschränken. Zu viele Aktionen neben einer Heading lenken vom Inhalt ab und erschweren die Übersicht.

## Zusätzliche Informationen

- Custom Heading ist ein reiner Slot-Container. Properties wie `size`, `fontWeight` und `alignment` werden nicht auf Custom Heading gesetzt, sondern auf der enthaltenen Heading H1–H6 Instanz.
- Der Children Slot ist in Figma mit einer Heading H1–H6 Instanz vorbefüllt, um die Nutzung zu erleichtern.
- `paragraphSpacing` erzeugt einen Abstand von 1lh unterhalb der Custom Heading (siehe [Heading H1–H6](../heading-h1-h6/guidelines.md)).
