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

Slot-Namen werden wie Komponentennamen mit Leerzeichen geschrieben: Start Slot, End Slot, Children Slot, Logo Slot, Brand Slot, usw. Der Name des Children Slots ist „Children".

### Technische Begriffe

Etablierte englische Fachbegriffe sind zulässig, wenn sie im fachlichen Kontext bekannt sind: Touch-Target, Viewport, Screenreader, Chevron. Als deutsches Kompositum werden sie gekoppelt geschrieben: Touch-Targets, Utility-Aktionen, Scroll-Indikatoren.

### Deutsche Komposita

Alles außer Token-, Property-, Komponenten- und Slot-Namen sind deutsche Komposita und werden gekoppelt geschrieben: Viewport-Größen, Code-Mapping, Icon-Größe, Mindest-Trefferzone.

### Englische Mehrwortbegriffe

Englische Mehrwortbegriffe ohne Bindestrich sind nicht zulässig, sofern sie nicht Komponenten-, Property- oder Slot-Namen sind („Sizing Tokens", „Icon Size", „Label Variant"). Dieselbe Entität wird sonst in zwei Schreibweisen nicht als dieselbe erkannt.

## Formulierung in `## Regeln`

- Kein Gedankenstrich. Verbote als „nicht"/„nie" im Satz, Alternativen mit „stattdessen", Begründungen als eigener Satz, Aufzählungen nach Doppelpunkt.
- Trägt die zweite Hälfte eine eigenständige Aussage, wird sie eine eigene Regel.

## Kriterien für Guidelines

### Kürze und Aufteilung

- Eine Regel oder zusätzliche Information so knapp wie möglich formulieren.
- Pro Regel nur eine eigenständige Entscheidung oder Aussage formulieren.
- Möglichst einen kurzen Satz verwenden.
- Mehrere unabhängige Punkte in getrennte Regeln aufteilen.
- Varianten, Positionen, Ausnahmen und Konsequenzen nicht in einer Regel sammeln, wenn sie eigene Entscheidungen darstellen.
- Eine Begründung nur dann im selben Satz behalten, wenn sie für das Verständnis oder die Konsequenz der Regel notwendig ist.

### `## Regeln`

Eine Aussage gehört unter `## Regeln`, wenn sie eine Entscheidung bei der Nutzung oder Gestaltung der Komponente vorgibt. Sie muss mindestens eine der folgenden Funktionen erfüllen:

- eine verbindliche Anforderung, Empfehlung oder Option formulieren,
- eine zulässige und eine unzulässige Umsetzung voneinander abgrenzen,
- ein Verhalten vorschreiben, das für Barrierefreiheit, Semantik, Marken- oder Systemkonsistenz relevant ist.

Regeln sind handlungsorientiert und müssen sich als Do, Don't oder bei `**sollte**` als Caution ausformulieren lassen. Reine Property-, Slot- oder Variantenfakten sind keine Regeln, solange daraus keine Handlung oder Einschränkung für Konsumenten folgt. Jede Regel enthält nur eine eigenständige Entscheidung; zusätzliche Aussagen werden getrennt oder als Begründung in einem eigenen Satz formuliert.

Eine Regel besteht immer aus Do **und** Don't (oder Caution). Ein Do ohne zugehöriges Don't ist keine Regel, sondern ein Example: Es zeigt einen gültigen Fall, ohne einen ungültigen davon abzugrenzen. Lässt sich zu einem Do kein eigenständiges Don't formulieren, das mehr ist als die reine Negation derselben Aussage, gehört der Inhalt nicht unter `## Regeln`.

### `## Zusätzliche Informationen`

Eine Aussage gehört unter `## Zusätzliche Informationen`, wenn sie das dokumentierte Verhalten der Komponente beschreibt, aber keine Handlung vorgibt. Dazu gehören zum Beispiel:

- beobachtbares Systemverhalten oder automatische Mechanismen,
- zulässiger Gestaltungsspielraum oder Beziehungen zwischen Varianten,
- vorhandene, fehlende oder eingeschränkte Properties und Slots.

Jede zusätzliche Information muss für Konsumenten der Komponente relevant und fachlich bestätigt sein. Sie darf keine Regel paraphrasieren. Für den Redundanztest gilt: Wenn die Aussage entfernt werden kann, ohne dass gegenüber den Regeln eine eigenständige Information verloren geht, gehört sie nicht in diesen Abschnitt.

Zusätzliche Informationen werden nicht automatisch als Examples veröffentlicht. Ein Example ist nur sinnvoll, wenn die Aussage einen eigenständigen, visuell nachvollziehbaren gültigen Fall, eine zulässige Kombination oder einen echten Gestaltungsspielraum zeigt. Reine Struktur- oder Property-Fakten bleiben erklärender Text und erhalten kein Example-Visual. Normative Aussagen werden als Do, Don't oder Caution dokumentiert; ein Example darf sie nur ergänzen, wenn es einen zusätzlichen visuellen Erkenntniswert liefert.

#### Example-Kandidaten markieren

Erfüllt ein Punkt unter `## Zusätzliche Informationen` alle drei Kriterien für ein Example (neue, nicht redundante Information; echter Gestaltungsspielraum statt reiner Struktur-/Property-Fakt; visuell sinnvoll darstellbar), wird er am Zeilenende mit `_(Example-Kandidat)_` markiert:

```markdown
- Das Control Panel kann oben oder unten positioniert werden. Die Wahl ist keine Regel, sondern eine Gestaltungsoption. _(Example-Kandidat)_
```

Die Markierung steht am Zeilenende, nicht am Satzanfang wie die Normativitäts-Marker (`**sollte**`, `**kann**`), weil sie eine andere Achse betrifft: Normativitäts-Marker beschreiben die Verbindlichkeit einer Regel, `_(Example-Kandidat)_` markiert eine spätere Generierungsentscheidung für `documentation.json`. Die Markierung kommt ausschließlich unter `## Zusätzliche Informationen` vor, nie unter `## Regeln` — Regeln werden immer zu Do/Don't, nie zu Examples.

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
