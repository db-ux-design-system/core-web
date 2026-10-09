# Heading

Typografisches Element zur Strukturierung von Inhalten mit semantischer Hierarchie (H1–H6). Custom Heading ergänzt Start und End Slot für zusätzliche Elemente neben dem Text.

## Regeln

1. Pro Seite genau ein H1 verwenden. Mehrere H1 brechen die Dokumenthierarchie für Screenreader.
2. Heading-Level nicht überspringen (H1 → H2 → H3). Eine übersprungene Ebene erzeugt eine unvollständige Outline und erschwert die Navigation mit Assistenztechnologien.
3. **sollte** Bei abweichender `visualSize` die visuelle Hierarchie von H1 bis H6 beibehalten (jede Stufe gleich groß oder kleiner als die vorherige). Eine invertierte Größenreihenfolge widerspricht der Leseerwartung und erschwert das Erfassen der Seitenstruktur.
4. Custom Heading nur verwenden, wenn neben dem Heading-Text zusätzliche Elemente (Links, Icons, Badges) im Start oder End Slot benötigt werden. Für reine Textheadings stattdessen Heading H1–H6 einsetzen.
5. **sollte** Zusätzliche Elemente in den Slots auf das Nötigste beschränken. Zu viele Aktionen neben einer Heading lenken vom Inhalt ab und erschweren die Übersicht.

## Zusätzliche Informationen

- Eine semantische Stufe kann eine kleinere `visualSize` tragen als die nachfolgende. Bei einer Topline steht eine klein ausgezeichnete Heading H1 über einer größeren Heading H2, für Screenreader bleibt die H1 dennoch die oberste Ebene. _(Example-Kandidat)_
- Ohne expliziten `visualSize` nutzt jede Stufe die gleichnamige visuelle Größe: Heading H1 den Wert `h1`, Heading H6 den Wert `h6`.
- Custom Heading hat dieselben Properties wie Heading H1–H6, ergänzt um einen Start Slot (vor dem Text) und einen End Slot (nach dem Text).
- `visualSize` setzt die visuelle Größe unabhängig von der semantischen Stufe. Die Werte `h1`–`h6` nutzen die Headline-Schriftgrößen, `p-small`, `p-medium` und `p-large` die Body-Schriftgrößen.
- Die Komponente setzt `text-align: start`. Eine Ausrichtung auf einem Vorfahren-Element wirkt deshalb nicht, `text-align` gehört an das Heading-Element selbst.
- `fontWeight` bietet Black (Standard), Light und Regular. Regular ist für die Paragraph-Größen `p-small`, `p-medium` und `p-large` vorgesehen.
- Headings tragen standardmäßig keinen `margin-block`. Das Attribut `data-text-spacing="true"` aktiviert einen Abstand von `calc(1lh / 2)` je Blockkante, am Element selbst oder an einem Vorfahren-Element.
