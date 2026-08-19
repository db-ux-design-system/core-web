# DB UX Designer Power

Du beschreibst in Worten, welchen Screen du brauchst – die Power baut daraus einen **DB UX Design
System v3-konformen Screen direkt in Figma**. Nur aus echten Bibliotheks-Komponenten, gebundenen
Farb-Tokens und registrierten Textstilen. Kein Code-Wissen nötig.

## Loslegen

Du brauchst ein **Figma-Design-File mit Schreibrechten** (verbunden über den Figma MCP) und einen
**Link mit `node-id`** – die Seite, auf die gebaut wird. Starte den Prompt mit `DB Designer:` und
sag, was für ein Screen, für wen und mit welchen Inhalten:

```text
DB Designer: Erstelle ein Dashboard „Sicherheit am Bahnhof" mit KPI-Übersicht,
Status-Karten pro Bahnhof, Vorfall-Liste und Maßnahmen.
https://figma.com/design/…?node-id=177-1091
```

Dann passiert Folgendes: deine Inhalte werden in Gruppen geteilt, jede Gruppe bekommt ein passendes
Muster aus dem Katalog, das Ergebnis wird als echte Komponenten in Figma gebaut und automatisch
geprüft. Du bekommst einen normalen Frame, den du frei weiterbearbeitest, plus einen kurzen Bericht.

## Fünf Seitentypen

Die Power erkennt aus deiner Beschreibung den Typ – und damit die Form des Screens:

| Typ             | Wofür                                              | Form                                                                          |
| --------------- | -------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Dashboard**   | Betrieb, Kennzahlen, Vorfälle, Reporting           | Bento-Grid über die volle Breite: Titelzeile, KPI-Reihe, Panels nebeneinander |
| **Contentpage** | Produkt, Marketing, Event, Service                 | Zentrierte Spalte: Hero, abwechselnde Inhaltsmodule, abschließender CTA       |
| **Form**        | Dateneingabe, Antrag, Registrierung, Einstellungen | Eine schmale Spalte: Titel, betitelte Feldgruppen, Aktionszeile               |
| **Process**     | Mehrschrittiger Ablauf, Wizard, Checkout           | Wie ein Formular, plus Fortschritt und „Zurück/Weiter" pro Schritt            |
| **Modal**       | Bestätigen, Quittieren, kurze Aufgabe              | Dialog auf abgedunkeltem Hintergrund – kein Header, keine Seite               |

Sag „Modul", „Block" oder „Karten", wenn du nur einen einzelnen Baustein willst: dann kommt ein
header-loser Frame pro Baustein statt eines kompletten Screens.

## Nachschärfen

Sag einfach, was anders werden soll („ändere", „ergänze", „entferne", „färbe um") – die Power
patcht direkt im vorhandenen Frame. Beschreibe dabei die **Absicht**, nicht Pixelwerte:

- „Incident-Liste über volle Breite, Badges rechts"
- „Sections auf spacing small"
- „die Zahl soll der Blickfang sein"
- „Statuskarten als klickbare Link-Cards statt Button"

Die Regeln kennt die Power selbst: nur offizielle Komponenten, höchstens eine Brand-Aktion pro
Seite, Kommando → Button und Navigation → Link, Text immer über registrierte Stile, keine
Großbuchstaben-Schreibweise. Fehlt eine Komponente, ein Token oder ein Icon, bricht sie ab und
nennt die Lücke – improvisiert wird nicht.

## Drei Dinge, die überraschen können

**Bilder kommen leer.** Ein Bildplatz ist ein leeres Figma-Image im richtigen Seitenverhältnis –
du ziehst das echte Asset danach hinein. Das ist Absicht, kein Fehler.

**Kein Prototyping.** Du bekommst statische Frames, keine verknüpften Klickflüsse. Mehrere Zustände
werden zu mehreren Frames.

**Neues Figma-File? Einmal ein großes Modell.** Beim ersten Auftrag in einem File überträgt die
Power ihre Render-Runtime dorthin – das gelingt nur großen Modellen zuverlässig. Falls nötig
bricht sie ab, ohne etwas zu verändern, und bittet dich zu wechseln (z. B. Claude Opus 5). Danach
läuft alles Weitere in diesem File mit jedem Modell.
