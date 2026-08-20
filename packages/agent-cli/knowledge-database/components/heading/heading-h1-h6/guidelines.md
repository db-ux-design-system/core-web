# Heading H1–H6

Sechs semantische Heading-Stufen zur Strukturierung von Inhalten. Rendert reinen Text ohne zusätzliche interaktive Elemente.

## Regeln

1. Pro Seite genau ein `h1` verwenden. Mehrere `h1` brechen die Dokumenthierarchie für Screenreader.
2. Heading-Level nicht überspringen (`h1` → `h2` → `h3`). Eine übersprungene Ebene erzeugt eine unvollständige Outline und erschwert die Navigation mit Assistenztechnologien.
3. **sollte** Bei abweichender `size` die visuelle Hierarchie von H1 bis H6 beibehalten (jede Stufe gleich groß oder kleiner als die vorherige). Eine invertierte Größenreihenfolge widerspricht der Leseerwartung und erschwert das Erfassen der Seitenstruktur.

## Zusätzliche Informationen

- Jede Heading-Stufe (H1–H6) existiert in Figma als einzelne Komponente mit eigenem Default-Wert für `size`: H1 = xl, H2 = lg, H3 = md, H4 = sm, H5 = xs, H6 = 2xs.
- `size` erlaubt es, die visuelle Größe unabhängig von der semantischen Stufe zu setzen. Ohne expliziten Wert greift das stufenspezifische Default Mapping.
- `alignment` steuert die Textausrichtung (Left, Center, Right). Die Standardausrichtung ist Left.
- `fontWeight` bietet Black (Standard) und Light. Beide Gewichte stehen bei allen Stufen und Größen zur Verfügung.
- `paragraphSpacing` erzeugt einen Abstand von 1lh unterhalb der Heading.
