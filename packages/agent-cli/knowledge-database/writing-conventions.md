# Schreib- und Formulierungskonventionen

Autorenrichtlinien für alle `guidelines.md`-Dateien und die daraus generierten Texte (`documentation.json`).

## Normativität von Regeln

Jede Regel unter `## Regeln` ist **verbindlich (MUSS)**, sofern sie keinen abweichenden Marker trägt. Abweichungen werden am Satzanfang ausgezeichnet:

- _(kein Marker)_ — MUSS — verbindlich. Betrifft Barrierefreiheit, Token-Nutzung, semantische Korrektheit und Abgrenzung von Komponenten.
- `**sollte**` — Empfehlung. Abweichung ist im begründeten Einzelfall zulässig, typischerweise bei Gestaltung, Textstil und Proportionen.
- `**kann**` — Echte Option ohne Vorgabe.

Trägt eine Regel mehrere Aussagen, gilt der Marker nur für den Satz, an dem er steht. Der Rest der Regel bleibt verbindlich.

Ein Generator kann daraus gewichtete Do's und Don'ts ableiten: unmarkierte Regeln als harte Anforderung, `**sollte**` als Empfehlung, `**kann**` als Hinweis auf Gestaltungsspielraum.

## Schreibweise von Begriffen

### Token-Kategorien, Properties und Property-Werte

Werden mit ihrem kanonischen Namen in Backticks referenziert: `` `sizing` ``-Tokens, `` `placement` ``, `` `selectedType` `` auf `tag`. Der Name muss exakt dem Eintrag in `tokens.json` bzw. `properties.json` entsprechen, damit Term-Matching greift.

### Komponenten- und Property-Namen

In Doku und Figma mit Leerzeichen, nicht CamelCase: Control Panel, Sub Navigation, Button Group.

Nicht angetastet werden: Figma-URLs (`Doku--ControlPanel`), React-Identifier (`DBShellContent`), Template-Komponenten/JSX-Tags, Frontmatter-Keys, Eigennamen.

Deutsche Komposita nie mit Bindestrich an einen gespacten Namen hängen: „Ebene der Sub Navigation" statt „Sub Navigation-Ebene".

### Slot-Namen

Slot-Namen werden wie Komponentennamen mit Leerzeichen geschrieben: Start Slot, End Slot, Children Slot, Logo Slot, Brand Slot. Der Name des Children Slots ist „Children".

### Technische Begriffe

Etablierte englische Fachbegriffe sind zulässig, wenn sie im fachlichen Kontext bekannt sind: Touch-Target, Viewport, Screenreader, Chevron. Als deutsches Kompositum werden sie gekoppelt geschrieben: Touch-Targets, Utility-Aktionen, Scroll-Indikatoren.

### Deutsche Komposita

Alles außer Token-, Property-, Komponenten- und Slot-Namen sind deutsche Komposita und werden gekoppelt geschrieben: Viewport-Größen, Code-Mapping, Icon-Größe, Mindest-Trefferzone.

### Englische Mehrwortbegriffe

Englische Mehrwortbegriffe ohne Bindestrich sind nicht zulässig, sofern sie nicht Komponenten-, Property- oder Slot-Namen sind („Sizing Tokens", „Icon Size", „Label Variant"). Dieselbe Entität wird sonst in zwei Schreibweisen nicht als dieselbe erkannt.

## Formulierung in `## Regeln`

- Kein Gedankenstrich. Verbote als „nicht"/„nie" im Satz, Alternativen mit „stattdessen", Begründungen als eigener Satz, Aufzählungen nach Doppelpunkt.
- Trägt die zweite Hälfte eine eigenständige Aussage, wird sie eine eigene Regel.

## Content Tone für `documentation.json`

Die generierten Doku-Texte folgen dem Content Styleguide des Platform-Repos (`db-ux-design-system.github.io/.kiro/steering/content-tone.md`, Area: Documentation).

### Allgemein

- Faktenbasiert, direkt, kein Wort zu viel
- Eine Idee pro Satz, aktiv statt passiv
- DE Guideline-Texte: Imperativ oder klares Subjekt, nie nackte Infinitivkonstruktionen

### Do-Texte

- DE: Imperativ, Verb vorn
- EN: Positiv formuliert, sagen was zu tun ist

### Dont-Texte

- DE: Imperativ, Verb vorn, „nicht" nach dem Objekt (nie mit „Nicht..." starten)
- EN: Beginnt mit „Don't..."
- Jedes Dont enthält das Warum oder die Konsequenz
