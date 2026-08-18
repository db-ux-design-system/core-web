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

Slot-Namen werden wie Komponentennamen mit Leerzeichen geschrieben: Start Slot, End Slot, Logo Slot, Brand Slot, usw. „Slot" ist dabei Teil des Namens und wird mitgeschrieben.

Ausnahme: Der Default-Slot heißt in Design und Code nur „Children", nicht „Children Slot". „Slot" ist hier kein Teil des Namens, sondern nur eine Kategorie-Bezeichnung wie bei den übrigen Slots — deshalb bleibt es beim kanonischen Namen „Children" ohne den Zusatz.

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
- Steuert eine Begründung keine Entscheidung, gehört sie nicht in die Regel, sondern nach `## Zusätzliche Informationen`. Sie entfällt ganz, wenn ihre Konsequenz dort schon als Handlungsoption steht.
- Bei einer Unmöglichkeit („können nicht eingesetzt werden") entfällt die Anforderung, dass jedes Dont ein Warum trägt. Wo nichts zu entscheiden ist, hat die Ursache keine steuernde Funktion.

### `## Regeln`

Eine Aussage gehört unter `## Regeln`, wenn sie eine Entscheidung bei der Nutzung oder Gestaltung der Komponente vorgibt. Sie muss mindestens eine der folgenden Funktionen erfüllen:

- eine verbindliche Anforderung, Empfehlung oder Option formulieren,
- eine zulässige und eine unzulässige Umsetzung voneinander abgrenzen,
- ein Verhalten vorschreiben, das für Barrierefreiheit, Semantik, Marken- oder Systemkonsistenz relevant ist.

Regeln sind handlungsorientiert und müssen sich als Do, Don't oder bei `**sollte**` als Caution ausformulieren lassen. Reine Property-, Slot- oder Variantenfakten sind keine Regeln, solange daraus keine Handlung oder Einschränkung für Konsumenten folgt. Jede Regel enthält nur eine eigenständige Entscheidung; zusätzliche Aussagen werden getrennt oder als Begründung in einem eigenen Satz formuliert.

Eine Regel besteht immer aus Do **und** Don't (oder Caution). Ein Do ohne zugehöriges Don't ist keine Regel, sondern ein Example: Es zeigt einen gültigen Fall, ohne einen ungültigen davon abzugrenzen. Lässt sich zu einem Do kein eigenständiges Don't formulieren, das mehr ist als die reine Negation derselben Aussage, gehört der Inhalt nicht unter `## Regeln`.

#### Reihenfolge der Regeln

Die Reihenfolge unter `## Regeln` wird beim Generieren zur Reihenfolge in `guidelines[]` und damit zum Inhaltsverzeichnis der Doku-Seite. Sie folgt vier Kriterien in dieser Priorität:

1. **Abhängigkeit.** Eine Regel, die einen Begriff aus einer anderen Regel voraussetzt, steht dahinter. Begriffe aus der Beschreibungszeile gelten als bekannt und begründen keine Abhängigkeit.
2. **Verwandtes zusammen.** Regeln zum selben Gegenstand — Text, Zustand, Logo, Slot — stehen benachbart, ohne fremde Regel dazwischen. Dieses Kriterium schlägt das nächste: ein Detail bleibt bei seinem Gegenstand, statt ans Ende zu wandern.
3. **Regelfall vor Sonderfall.** Zuerst die Regeln zum Regelfall: die Default-Variante und Fälle, die alle Varianten betreffen. Danach die Sonderfälle, also Varianten und Positionen, die nur einzelne Produkte oder Kontexte betreffen. Häufigkeit rangiert vor der Art der Regel — eine Regel zum Default-Fall steht auch dann vorn, wenn sie nur ein Darstellungsdetail betrifft.
4. **Entscheidungsreihenfolge innerhalb einer Gruppe.** Was gehört hinein, dann welche Variante oder Position, dann wie viel, dann was die gewählte Variante einschränkt, dann Zustände, dann Darstellungsdetails. Das ist die Reihenfolge, in der die Komponente aufgebaut wird.
5. **Normativität ist kein Kriterium.** `**sollte**`-Regeln werden nicht gruppiert. Sonst trennt die Sortierung zusammengehörige Regeln, bei denen eine Empfehlung und eine Vorgabe denselben Gegenstand betreffen.

### `## Zusätzliche Informationen`

Eine Aussage gehört unter `## Zusätzliche Informationen`, wenn sie das dokumentierte Verhalten der Komponente beschreibt, aber keine Handlung vorgibt. Dazu gehören zum Beispiel:

- beobachtbares Systemverhalten oder automatische Mechanismen,
- zulässiger Gestaltungsspielraum oder Beziehungen zwischen Varianten,
- vorhandene, fehlende oder eingeschränkte Properties und Slots.

Jede zusätzliche Information muss für Konsumenten der Komponente relevant und fachlich bestätigt sein. Sie darf keine Regel paraphrasieren. Für den Redundanztest gilt: Wenn die Aussage entfernt werden kann, ohne dass gegenüber den Regeln eine eigenständige Information verloren geht, gehört sie nicht in diesen Abschnitt.

Zusätzliche Informationen werden nicht automatisch als Examples veröffentlicht. Ein Example ist nur sinnvoll, wenn die Aussage einen eigenständigen, visuell nachvollziehbaren gültigen Fall, eine zulässige Kombination oder einen echten Gestaltungsspielraum zeigt. Reine Struktur- oder Property-Fakten bleiben erklärender Text und erhalten kein Example-Visual. Normative Aussagen werden als Do, Don't oder Caution dokumentiert; ein Example darf sie nur ergänzen, wenn es einen zusätzlichen visuellen Erkenntniswert liefert.

#### Example-Kandidaten markieren

Erfüllt ein Punkt unter `## Zusätzliche Informationen` alle vier Kriterien für ein Example (neue, nicht redundante Information; echter Gestaltungsspielraum statt reiner Struktur-/Property-Fakt; visuell sinnvoll darstellbar; nicht schon durch das Do-, Dont- oder Caution-Visual einer Regel abgedeckt), wird er am Zeilenende mit `_(Example-Kandidat)_` markiert:

```markdown
- Das Control Panel kann oben oder unten positioniert werden. Die Wahl ist keine Regel, sondern eine Gestaltungsoption. _(Example-Kandidat)_
```

Markierte Punkte stehen an erster Stelle unter `## Zusätzliche Informationen`, vor den unmarkierten und ohne unmarkierte dazwischen. Damit ist beim Lesen der Datei sofort sichtbar, was zu einem Example wird, und die Reihenfolge in `examples[]` bleibt beim Generieren stabil.

Das vierte Kriterium ist das am leichtesten zu übersehende, weil es nicht am Text hängt, sondern am Bild: jede Regel erhält über `do.figmaNodeId` und `dont.figmaNodeId` beziehungsweise `caution.figmaNodeId` ohnehin Visuals. Zeigt ein Example dasselbe Motiv wie eines davon, entsteht dasselbe Bild zweimal — auch dann, wenn der Text nicht redundant ist. Der Redundanztest allein genügt also nicht.

Das Kriterium gilt innerhalb einer Komponente. Zwei Komponenten dürfen dasselbe Visual führen, wenn die Aussage für beide gilt: jede Datei wird einzeln gelesen, und beim Generieren verweisen beide `examples[]`-Einträge auf denselben Figma-Node.

Die Markierung steht am Zeilenende, nicht am Satzanfang wie die Normativitäts-Marker (`**sollte**`, `**kann**`), weil sie eine andere Achse betrifft: Normativitäts-Marker beschreiben die Verbindlichkeit einer Regel, `_(Example-Kandidat)_` markiert eine spätere Generierungsentscheidung für `documentation.json` und wird dort zu einem Eintrag in `examples[]`. Die Markierung kommt ausschließlich unter `## Zusätzliche Informationen` vor, nie unter `## Regeln` — Regeln werden immer zu Do/Don't, nie zu Examples.

## Content Tone für `documentation.json`

Die generierten Doku-Texte folgen dem Content Styleguide des Platform-Repos (`db-ux-design-system.github.io/.kiro/steering/content-tone.md`, Area: Documentation).

Solange der Ordner [`_platform-steering/`](_platform-steering/README.md) existiert, gilt die Arbeitskopie darin als aktuelle Fassung. Neue Tonalitätsregeln werden dort ergänzt und gesammelt in das Platform-Repo zurückgespielt, nicht hier dupliziert. Dieser Abschnitt bleibt eine Kurzfassung für den Generierungsschritt.

### Allgemein

- Faktenbasiert, direkt, kein Wort zu viel
- Eine Idee pro Satz, aktiv statt passiv
- DE Guideline-Texte: Imperativ oder klares Subjekt, nie nackte Infinitivkonstruktionen
- Kein umgangssprachliches oder wertendes Register. Das Kriterium benennen statt es zu bewerten: nicht „lohnt sich", „bequem", „macht Sinn"

### `useCases`

Der Satzbau der deutschen Bullets ist festgelegt, weil zwei Anforderungen gegeneinander stehen: Die Einträge nennen **Möglichkeiten**, dürfen also nicht auffordern, und in einer Liste liest man die **linken Wortanfänge**, das unterscheidende Wort muss deshalb vorn stehen. Beides erfüllt nur ein artikelloser Infinitiv.

1. **Infinitiv**, kein Imperativ und kein Nominalstil. Der Imperativ wäre erweiterungsfester, ist aber eine Aufforderung: bei drei Einträgen wählt man einen aus, statt alle drei auszuführen. Zusätzlich wäre er nicht mehr von den Do-Texten zu unterscheiden, die tatsächlich auffordern. Der Nominalstil („Positionierung des Control Panels") löst die Verbstellung, verliert aber die Handlung, die hier der Inhalt ist.
2. **Kein Artikel am Anfang.** Der Schlüsselbegriff steht auf Position 1, nicht „Das", „Eine", „Die", und auch kein Oberbegriff davor: „Sub Navigation für Unterseiten ergänzen", nicht „Ebene der Sub Navigation für Unterseiten ergänzen". Der Vorlauf vor dem Verb umfasst höchstens zwei Satzglieder, also ein Objekt und eine Näherbestimmung. Gezählt werden Satzglieder, nicht Wörter, weil Komponentennamen wie Control Panel oder Sub Navigation aus mehreren Wörtern bestehen und trotzdem ein Begriff sind.
3. **Bedingung oder Konsequenz nie in den Vorlauf**, sondern nach Doppelpunkt als Hauptsatz. Dort steht das finite Verb wieder an Position 2 und die Verbalklammer bleibt kurz.

```text
Control Panel oben oder links positionieren
Sub Navigation für Unterseiten ergänzen
Layout einer Desktop-Anwendung aufbauen: nur der Inhaltsbereich scrollt
```

Die Verb-Letztstellung bleibt als bewusst akzeptierte Schwäche. Sie ist im Deutschen nativ und trägt bei kurzem Vorlauf problemlos; sie kippt erst, wenn sich Attribute davor stapeln. Genau das verhindern Punkt 2 und 3.

Weitere Anforderungen:

- Ein Gedanke pro Bullet. Jedes Bullet ist selbsttragend und verweist nicht mit „Diese", „Dabei" oder „Dafür" auf das vorherige
- Nicht wiederholen, was schon in `description` steht
- Keinen Relativsatz an ein Bezugswort hängen, das durch ein Genitivattribut davon getrennt ist. Im Englischen steht das Kopfnomen als Kompositum direkt vor dem Relativsatz, im Deutschen nicht, dadurch kippt der Bezug: „Layout einer Desktop-Anwendung, in dem …" liest sich zuerst als Bezug auf die Anwendung. Auch hier gilt Punkt 3

### Headlines

- So kurz wie möglich. Die Headline erscheint im Inhaltsverzeichnis der Doku-Seite und wird dort bei zu großer Länge abgeschnitten
- Nur der Kern der Regel, ohne Artikel und Präposition: „Control Panel Position" statt „Position des Control Panels"
- Den Komponentennamen nicht wiederholen, wenn er schon auf der Seite steht. „Sub Navigation Position" ist auf der Seite Shell Desktop eindeutig
- Kein Regel-Vokabular in der Headline („Regel", „Guideline", „Hinweis zu")

### Do-Texte

- DE: Imperativ, Verb vorn
- EN: Positiv formuliert, sagen was zu tun ist

### Dont-Texte

- DE: Imperativ, Verb vorn, „nicht" nach dem Objekt (nie mit „Nicht..." starten)
- Zwischen Objekt und „nicht" steht nichts. Eine Bedingung dort lässt das „nicht" mitten im Satz hängen und macht den Bezug unklar. Die Bedingung kommt als `wenn`-Satz danach, die Begründung als eigener Satz
- EN: Beginnt mit „Don't..."
- Jedes Dont enthält das Warum oder die Konsequenz
