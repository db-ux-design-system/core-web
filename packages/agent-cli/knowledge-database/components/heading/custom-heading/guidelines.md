# Custom Heading

Heading-Variante mit Slot für zusätzlichen Content wie Verlinkungen, Badges oder andere interaktive Elemente.

## Regeln

1. Custom Heading nur verwenden, wenn interaktive oder nicht-textliche Inhalte innerhalb der Heading benötigt werden. Für reine Textheadings stattdessen [Heading H1–H6](../heading-h1-h6/guidelines.md) einsetzen.
2. Semantic Level nicht überspringen (1 → 2 → 3). Eine übersprungene Ebene erzeugt eine unvollständige Outline und erschwert die Navigation mit Assistenztechnologien.
3. Pro Seite genau ein Semantic Level 1 verwenden. Mehrere Level 1 brechen die Dokumenthierarchie für Screenreader.
4. **sollte** Bei abweichender `size` die visuelle Hierarchie beibehalten (jede Stufe gleich groß oder kleiner als die vorherige). Eine invertierte Größenreihenfolge widerspricht der Leseerwartung und erschwert das Erfassen der Seitenstruktur.
5. **sollte** Interaktive Elemente innerhalb der Heading auf das Nötigste beschränken. Zu viele Aktionen in einer Heading lenken vom Inhalt ab und erschweren die Übersicht.
6. **sollte** `paragraphSpacing` aktivieren, wenn auf die Heading direkt Fließtext oder eine weitere Heading folgt.

## Zusätzliche Informationen

- Der Children Slot nimmt beliebigen Content auf: Links, Icons, Badges oder andere Inline-Elemente. Er unterscheidet Custom Heading von Heading H1–H6, die reinen Text rendern.
- `semanticLevel` bestimmt das semantische HTML-Element (`h1`–`h6`). Es muss immer gesetzt werden, damit die Dokumentstruktur korrekt bleibt.
- `size` hat kein stufenspezifisches Default Mapping wie bei Heading H1–H6, sondern muss immer explizit gesetzt werden.
- `alignment` steuert die Textausrichtung (Left, Center, Right). Die Standardausrichtung ist Left.
- `fontWeight` bietet Black (Standard) und Light.
- `paragraphSpacing` erzeugt einen Abstand von 1lh unterhalb der Heading.
