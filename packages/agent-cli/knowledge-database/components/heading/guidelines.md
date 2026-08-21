# Heading

Typografisches Element zur Strukturierung von Inhalten mit semantischer Hierarchie (H1–H6). Custom Heading ergänzt Start und End Slot für zusätzliche Elemente neben dem Text.

## Regeln

1. Pro Seite genau ein H1 verwenden. Mehrere H1 brechen die Dokumenthierarchie für Screenreader.
2. Heading-Level nicht überspringen (H1 → H2 → H3). Eine übersprungene Ebene erzeugt eine unvollständige Outline und erschwert die Navigation mit Assistenztechnologien.
3. **sollte** Bei abweichender `size` die visuelle Hierarchie von H1 bis H6 beibehalten (jede Stufe gleich groß oder kleiner als die vorherige). Eine invertierte Größenreihenfolge widerspricht der Leseerwartung und erschwert das Erfassen der Seitenstruktur.
4. Custom Heading nur verwenden, wenn neben dem Heading-Text zusätzliche Elemente (Links, Icons, Badges) im Start oder End Slot benötigt werden. Für reine Textheadings stattdessen Heading H1–H6 einsetzen.
5. **sollte** Zusätzliche Elemente in den Slots auf das Nötigste beschränken. Zu viele Aktionen neben einer Heading lenken vom Inhalt ab und erschweren die Übersicht.

## Zusätzliche Informationen

- Heading H1–H6 existiert in Figma als sechs einzelne Komponenten mit eigenem Default-Wert für `size`: H1 = xl, H2 = lg, H3 = md, H4 = sm, H5 = xs, H6 = 2xs.
- Custom Heading hat dieselben Properties wie Heading H1–H6, ergänzt um einen Start Slot (vor dem Text) und einen End Slot (nach dem Text).
- `size` erlaubt es, die visuelle Größe unabhängig von der semantischen Stufe zu setzen. Ohne expliziten Wert greift das stufenspezifische Default Mapping.
- `alignment` steuert die Textausrichtung (Left, Center, Right). Die Standardausrichtung ist Left.
- `fontWeight` bietet Black (Standard) und Light.
- `paragraphSpacing` erzeugt einen Abstand von 1lh unterhalb der Heading.
