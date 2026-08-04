# Language Review — Guidelines (Foundations & Components)

Review der `guidelines.md`-Dateien unter `foundations/`, `components/` sowie `icons/` und `foundations/_principles/`.

Stand: 2026-08-04 · Branch `feat--knowledge-database` · Umfang: 61 nicht-leere Dateien, ~3.990 Wörter, 167 Regel-Einträge

## Bewertungsmaßstab

Die Guidelines sind **keine Endtexte**. Sie sind Quellmaterial für KI-Nutzung und nachgelagerte Ausarbeitung; die publizierten Texte entstehen daraus erst in Verbindung mit der jeweiligen Content Guideline. Die Review bewertet deshalb primär:

1. **Eindeutigkeit** — lässt die Formulierung nur eine Lesart zu?
2. **Normativität** — ist erkennbar, ob eine Aussage Pflicht, Empfehlung, Verbot oder reine Systembeschreibung ist?
3. **Auflösbarkeit** — sind Verweise auf Properties, Tokens, Komponenten und Dateien maschinell auflösbar?
4. **Widerspruchsfreiheit** — stimmen Aussagen mit `properties.json`, `tokens.json`, `meta.json` und untereinander überein?
5. **Strukturelle Vorhersagbarkeit** — kann ein Generator sich auf ein festes Schema verlassen?

Reine Prosa-Qualität (Tonalität, Anführungszeichen, Gendering, Satzbau, Register) ist **nicht** Maßstab, weil sie erst bei der Ausformulierung entsteht. Solche Beobachtungen sind unter [Zurückgestellt](#zurückgestellt-kein-handlungsbedarf-in-der-quelle) dokumentiert, damit nachvollziehbar ist, dass sie geprüft und bewusst nicht als Finding gewertet wurden.

## Erledigt

Behobene Findings werden aus den Abschnitten „Priorität A/B" entfernt und hier vermerkt. Die Nummerierung der offenen Findings bleibt dabei unverändert, damit bestehende Verweise weiter stimmen — Lücken in der Zählung sind deshalb erwartbar.

| Finding     | Titel                                                           | Behoben am | Umsetzung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------- | --------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A1          | Regeln referenzieren Properties, die es nicht gibt              | 2026-08-04 | Alle sechs Fundstellen aufgelöst: `variant` (`above`/`floating`) existiert im Code und wurde in `custom-select/properties.json` nachgetragen; `showClearSelection` und `selectedType` (`tag`/`amount`/`text`) korrekt benannt und beim Form Field belassen (Figma-Struktur), jeweils mit Hinweis auf die Elternkomponente als Ablageort im Code — Abweichung Dev/Design in `inconsistencies.md` festgehalten; `popover:9` auf `placement` bezogen und Flipping als automatisches Verhalten beschrieben; `section`-TODO auf `width` mit allen vier Werten korrigiert |
| A2          | Regel widerspricht der Property-Definition                      | 2026-08-04 | Mit A1 Zeile 5 gelöst: Full-Width-Regel nach `tabs` verschoben (`tabItemWidth: full` + `tabItemAlignment`), `tab-list` hat jetzt eine eigene Regel zu `overflowPosition` inkl. AutoWidth-Einschränkung                                                                                                                                                                                                                                                                                                                                                              |
| A3          | Property-Werte erfunden oder mit Figma-Component-Sets vermischt | 2026-08-04 | `tag:7` in zwei Regeln getrennt: `behavior` (`static`/`removable`) steuert nur den Entfernen-Button, Interaktivität entsteht über das eingebettete Element (`<input type="checkbox">`/`<input type="radio">`, `<a>`, `<button>`) und ist damit kombinierbar. Note in `properties.json` ergänzt, 1:n-Mapping Figma↔Code in `inconsistencies.md` festgehalten                                                                                                                                                                                                         |
| A11         | Dieselbe Anforderung in zwei Notationen und zwei Begriffen      | 2026-08-04 | `sizing:8` von „Klickfläche … 24x24px" auf die in `button:11` und `tag:12` bereits verwendete Form angeglichen. Alle drei Stellen enthalten jetzt den identischen Kernstring „Mindest-Trefferzone 24×24 px" und sind als eine Anforderung erkennbar                                                                                                                                                                                                                                                                                                                 |
| A14         | Interne Kommentare im ausgelieferten Inhalt                     | 2026-08-04 | Alle sechs Kommentare aus den `guidelines.md` entfernt. Deprecation von `header` und `navigation` als `deprecation: "planned"` plus `note` in die jeweilige `meta.json` verschoben; Arbeitsnotizen zu Button, Link, Section und Header als Punkte 2–5 in `TODO.md`; der Figma-Hinweis bei `custom-select-list` war in `inconsistencies.md` schon vorhanden und ist entfallen. Regel dazu in `README.md` unter „Arbeitsnotizen"                                                                                                                                      |
| A9          | Pfadverweise auf die Principles sind nicht auflösbar            | 2026-08-04 | In `colors`, `sizing`, `spacing`, `_component-tokens`: Pfad auf `../_principles/…` korrigiert, als Markdown-Link gesetzt, Bezug („in der Datei …") und Satzpunkt ergänzt                                                                                                                                                                                                                                                                                                                                                                                            |
| B1          | Terminologie-Dubletten für dasselbe Konzept                     | 2026-08-04 | Kategorie/Gruppe in `README.md` definiert (Kategorie = `category` aus `tokens.json`, Gruppe = Unterteilung darin); `adaptive-density:13,33` listet jetzt echte Kategorien, `spacing-fixed`/`spacing-responsive` als Gruppen von `spacing` ausgewiesen, `typography-sizes` → `typography`; „Sektionen" in `tabs:3,8` → „Inhaltsbereiche"                                                                                                                                                                                                                             |
| B2          | Token-Kategorien im Text vs. Token-Namen                        | 2026-08-04 | `spacing:7-11`: „Fixed-Spacings" / „Responsive-Spacings" / „Spacings" durch `spacing-fixed`- / `spacing-responsive`- / `spacing`-Tokens in Backticks ersetzt — Term-Matching gegen `tokens.json` greift jetzt                                                                                                                                                                                                                                                                                                                                                       |
| B4          | Sprachmix in Titeln und Überschriften                           | 2026-08-04 | `_principles/adaptive-colors.md`: Titel zu „Adaptive Colors" (analog „Adaptive Density"), Figma-Bullets zu „Adaptive Colors" / „Absolute Colors"; Unterüberschriften zu „Semantische Farben" / „Zusätzliche Farben"                                                                                                                                                                                                                                                                                                                                                 |
| B6 (teilw.) | Inhaltlich leere Regeln                                         | 2026-08-04 | Tautologie in `border-radius`, `border-width`, `container`, `screen` durch überprüfbare Anweisungen ersetzt; Plural-Überschrift `## Regeln` als Schema-Vorgabe bestätigt. Fehlende inhaltliche Guidance bleibt offen, siehe [B6](#b6--inhaltlich-leere-regeln)                                                                                                                                                                                                                                                                                                      |
| B5          | Redundanz                                                       | 2026-08-04 | `_principles/adaptive-colors.md`: doppelte Variantenliste („Gültige Varianten" im Abschnitt „Im Code") entfernt — einzige Quelle ist jetzt „Verfügbare Varianten → Semantische Farben"                                                                                                                                                                                                                                                                                                                                                                              |

C7 (Satzpunkte) ist mit A9 und A3 vollständig abgedeckt und deshalb aus der zurückgestellten Liste entfernt. Mit A14 ist zusätzlich der Kommentar-Teilpunkt von [A13](#a13--struktur-nicht-garantiert) entfallen: Die Extraktion nach „erste Zeile nach H1" liefert jetzt überall die Beschreibung statt bei `navigation` einen Kommentar.

## Priorität A — blockiert oder verfälscht die maschinelle Nutzung

### A4 — Property-Werte ohne Property-Bezug und in abweichender Schreibweise

Werte erscheinen als großgeschriebene Fließtextwörter, ohne dass das zugehörige Property genannt wird. Ein Mapping auf `properties.json` ist nur durch Raten möglich.

| Fundstelle                  | Guideline                                     | Auflösung                                                                               |
| --------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------- |
| `divider:8`                 | „Weak … Strong"                               | `emphasis: weak \| strong`                                                              |
| `tag:11`                    | „Strong-Betonung"                             | `emphasis: strong` — „Betonung" als Übersetzung von _emphasis_ kommt nirgends sonst vor |
| `notification:11`           | „Successful/Informational … Warning/Critical" | `semantic: successful \| informational \| warning \| critical`                          |
| `custom-select-dropdown:9`  | „Select All" · „Multiple = True"              | `showSelectAll` · `multiple`                                                            |
| `custom-select-dropdown:10` | „No Results oder Loading"                     | `showNoResults` · `showLoading`                                                         |
| `stack:7`                   | „Gap-Property"                                | `gap`                                                                                   |
| `transition:8-9`            | „functional", „emotional", „show", „hide"     | Token-Namen, nicht als Code ausgezeichnet                                               |

Gegenbeispiel, das das Zielbild zeigt: `accordion-item:8-9` nutzt korrekt `` `defaultOpen` `` und `` `disabled` `` in Backticks.

### A5 — Normativität nicht erkennbar

Der Infinitiv („… verwenden") lässt offen, ob MUSS, SOLL oder KANN gemeint ist. Aus derselben Formulierung lässt sich kein gewichtetes Do/Don't ableiten. Beispiele mit sehr unterschiedlicher tatsächlicher Verbindlichkeit, aber identischer Form:

- `button:7` „Nie verwechseln." → Verbot
- `divider:9` „Länge an den Inhaltsbereich anpassen" → Empfehlung
- `sizing:8` „Mindest-Trefferzone 24×24 px sicherstellen" → harte A11y-Anforderung
- `infotext:11` „Sparsam fetten" → Stilhinweis

Empfehlung: normative Marker in der Quelle setzen (`muss` / `darf nicht` / `sollte` / `kann`) oder ein Feld pro Regel.

### A6 — Beschreibende Aussagen stehen unter `## Regeln`

Sechs Einträge sind Systemverhalten, keine Handlungsanweisung. Ein Generator, der `## Regeln` zu Do's/Don'ts verarbeitet, erzeugt daraus falsche Anweisungen.

- `tab-panel:8` „Panel kann beliebige Inhalte enthalten."
- `tab-item:9` „Zu lange Labels werden ausgepunktet — Tooltip zeigt den vollständigen Text bei Hover."
- `backdrop:8` „Blockiert Interaktion mit dem Hintergrund …"
- `elevation:8` „Je höher die Elevation-Werte desto stärker rücken die Elemente in den Vordergrund."
- `icons:7` „Bei Icon-Text-Kombinationen entspricht die Icon Size der Line Height des Texts."
- `custom-select-dropdown:8` (2. Satz) „Die Kollisionsvermeidung überschreibt das gesetzte Placement …"

Empfehlung: eigener Abschnitt (z. B. `## Verhalten`) getrennt von `## Regeln`.

### A7 — Do und Don't nicht trennbar

84 von 167 Regeln (50 %) hängen die zweite Hälfte an ein `—`. Der Strich steht dabei ohne erkennbares System für Kontrast, Alternative, Begründung, Ausnahme oder eine eigenständige zweite Regel:

- `card:10` — „… kein weiteres Steuerelement nötig **—** klickbare Cards enthalten keine verschachtelten interaktiven Elemente." Zweiter Teil ist eine eigene Regel.
- `checkbox:11` — „Checkbox wenn Änderung erst nach Absenden wirkt **—** Switch wenn sofortige Wirkung." Zweiter Teil ist eine Alternative.
- `accordion:7` — „Nur für optionale Inhalte verwenden **—** wesentliche Informationen nicht hinter einen Klick verstecken." Zweiter Teil ist ein Verbot.
- `tabs:9` — „… vertikale Orientierung bei vielen Items **—** so wird starker Overflow vermieden." Zweiter Teil ist eine Begründung.

Solange die Semantik im Strich steckt, ist keine verlässliche Do/Don't-Extraktion möglich.

### A8 — Komponentenverweise nicht auflösbar

- Uneinheitliche Bezeichner: `input:7` „**CustomSelect**" vs. `select:7` „**Custom Select**" — die ID lautet `custom-select`.
- Klartextnamen ohne Verknüpfung: `Radio`, `Checkbox`, `Select`, `Tag`, `Badge`, `Accordion`, `Popover`, `Tooltip`, `Button`, `Input` erscheinen als reiner Text. Kein Link, keine ID aus `meta.json`.
- `backdrop:7`, `drawer:7`, `notification:7` verweisen auf **Dialog** — der liegt in `lab-components/` und hat laut `README.md` keinen stabilen API-Vertrag. Als gleichwertige Alternative dargestellt.

### A10 — Nicht entscheidbare Schwellenwerte

Die drei Auswahlkomponenten geben unvereinbare Kriterien:

- `custom-select:7` — „ab 5+ Optionen", „unter 5 Optionen Radio oder Checkbox"
- `radio:8` — „Für 2–6 Optionen"
- `select:7` — „bei moderater Optionenzahl", „bei sehr langen Listen Custom Select"

Für 5 und 6 Optionen ergeben sich drei konkurrierende Empfehlungen. „moderat" und „sehr lang" sind nicht quantifiziert. Eine KI kann daraus keine Auswahlentscheidung ableiten.

### A12 — Ambige Bezüge, die beim Umformulieren die Aussage kippen

- `custom-select-form-field:9` — „Tags bei Mehrfachauswahl die häufig bearbeitet wird": bezieht sich „die häufig bearbeitet wird" auf die Tags oder die Auswahl?
- `backdrop:8` — „Klick auf den Backdrop kann das Overlay schließen (optional)": optional ist das Verhalten, nicht der Klick — nachgestelltes „(optional)" lässt beides zu.
- `colors:3` — „… mit Background- und Content-Farben, die Barrierefreiheit durch definierte Kontrastverhältnisse sicherstellen": Bezug von „die" unklar (Farben oder Paletten).
- `_principles/adaptive-colors:15` — „Innerhalb eines `data-variant="brand"`-Containers wird **es** die Brand-Farbe": Subjekt nicht benannt.
- `custom-select-dropdown:8` — „wenn das **Element** außerhalb des Viewports fällt": Dropdown, List oder List Item?
- `accordion-item:8` — nennt nur `defaultOpen`, `properties.json` führt zusätzlich `open`. Ohne Abgrenzung ist unklar, welches Property gemeint ist.

### A13 — Struktur nicht garantiert

- 12 `guidelines.md` sind 0 Bytes: `brand`, `custom-button`, `page`, `table`, `navigation-item` und alle sieben `table-*`-Subkomponenten.
- `custom-select-list` enthält nur die Beschreibung, keinen `## Regeln`-Abschnitt.
- Die Beschreibung ist nirgends als Feld hinterlegt, sondern nur implizit „erste Zeile nach H1". `meta.json` hat kein `description`-Feld.
- Foundations folgen keinem gemeinsamen Schema: `## Regeln` (10 Dateien) vs. `## Überblick` / `## Variablen-Pattern` / `## Parameter` / `## Funktionsweise` / `## Figma` / `## Nutzung in der Komponentenentwicklung` (`icon-font-size`) vs. `## Collections-Überblick` / `## Aktivierung` / `## Verfügbare Varianten` (`_principles/*`).

## Priorität B — erzeugt Nacharbeit, blockiert aber nicht

### B3 — Bindestrich vs. Leerzeichen bei Komposita

Betrifft dieselben Fundstellen wie [B6](#b6--inhaltlich-leere-regeln) und deckt den ehemaligen vierten Punkt von B1 („Guidelines weichen von den Kategorienamen der `README.md` ab") mit ab.

Gekoppelt: „Border-Radius-Tokens", „Border-Width-Tokens", „Elevation-Werte", „Dropdown-Width".
Ungekoppelt: `screen:3` „Viewport Größen", `screen:7` „Screen Tokens", `container:7` „Container Tokens", `sizing:7` „Sizing Tokens", `typography:7` „Code Mapping", `icons:7` „Icon Size" / „Line Height", `custom-select-form-field:8` „Label Variant", `:10` „Clear Selection Button".

Relevant, weil dieselbe Entität in zwei Schreibweisen nicht als dieselbe erkannt wird.

### B6 — Inhaltlich leere Regeln

`border-radius`, `border-width`, `container`, `screen` haben je genau eine Regel. Die tautologische Formulierung ist behoben (siehe [Erledigt](#erledigt)), die Regeln tragen jetzt eine überprüfbare Anweisung („keine festen `px`- oder `rem`-Werte" bzw. „keine eigenen Zwischenwerte"). Es fehlt aber weiterhin inhaltliche Guidance, wann welche Stufe der Skala zu wählen ist. Kandidaten, die nur mit Design bzw. Dev entschieden werden können:

- `border-radius` — Abgrenzung von `full` (Wert `500rem`, also Pill-/Kreisfall) gegenüber den Stufen der Skala
- `container` — sind die Werte (`14rem`–`48rem`) als Inhaltsbreiten oder als Layout-/Seitenbreiten gedacht? Die aktuelle Beschreibung („Layout-Container") und die Wertelage widersprechen sich
- `border-width` — die Skala hat keine semantische Zuordnung (welche Stufe für Trennlinien, Umrandungen, Fokus-Zustände?)
- `screen` — dass `--db-screen-*` als CSS Custom Property in Media Queries nicht funktioniert und dort die SCSS-Variablen bzw. der `screen`-Mixin nötig sind, ist nirgends dokumentiert

Die Plural-Überschrift `## Regeln` über einem Einzeleintrag bleibt bewusst so: Ein Generator muss sich auf einen festen Abschnittsnamen verlassen können, eine am Umfang hängende Überschrift würde die Extraktion brechen (vgl. [A13](#a13--struktur-nicht-garantiert)).

### B7 — Nicht handlungsfähige Regeln

Regeln, die eine Entscheidung fordern, ohne ein Kriterium zu liefern:

- `custom-select-dropdown:7` „Dropdown-Width passend zur Länge der List Items wählen." — welcher der Werte `fixed` / `auto` / `full` wann?
- `stack:8` „Richtung (Column/Row) basierend auf Layout und Inhaltsanforderungen wählen."
- `drawer:10` „Die Drawer-Größe entsprechend der Menge und Komplexität des Inhalts wählen."
- `custom-select-form-field:8` „Label Variant passend zu anderen Eingabe-Feldern wählen."

### B8 — Tooling: `lint:codespell` deckt die deutschsprachige KDB nicht ab

Die cspell-Konfiguration (`.config/cspell.config.ts`) bindet kein deutsches Wörterbuch ein und schließt `packages/agent-cli/` nicht aus. Bereits zwei bestehende Dateien (`components/badge/guidelines.md`, `foundations/colors/guidelines.md`) erzeugen 128 Meldungen. Rechtschreibprüfung ist für die Quelldateien damit faktisch nicht vorhanden. Optionen: deutsches Wörterbuch ergänzen oder das Verzeichnis bewusst in `ignorePaths` aufnehmen und Prüfung auf die generierten Endtexte verlagern.

## Zurückgestellt (kein Handlungsbedarf in der Quelle)

Geprüft und bewusst nicht als Finding gewertet, weil es sich bei der Ausformulierung nach Content Guideline ohnehin auflöst. Dokumentiert, damit die Beobachtungen nicht verloren gehen.

| #   | Beobachtung                                                                                                                                                                                                                | Umfang                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| C1  | Schließende Anführungszeichen sind ASCII `"` statt `“`                                                                                                                                                                     | 12 Stellen, kein `“` im Korpus             |
| C2  | Gendering inkonsistent: `Nutzer:innen` vs. generisches `Nutzer`                                                                                                                                                            | 3× vs. 11×, in `tabs` direkt nebeneinander |
| C3  | Beschreibungszeile mal Verbalsatz („Zeigt … an."), mal Nominalphrase („Overlay-Ebene hinter …")                                                                                                                            | ~50/50                                     |
| C4  | Register teils umgangssprachlich: „aus dem Kontext reißen", „in Cards packen", „Sparsam fetten", „ausgepunktet", „inflationär", „missbrauchen", „exzessiv"                                                                 | 9 Stellen                                  |
| C5  | Kommasetzung vor Neben- und Relativsätzen inkonsistent                                                                                                                                                                     | 15 Stellen                                 |
| C6  | Einzelne Grammatikfehler: Kasus `backdrop:3` („hinter modale Inhalte"), `colors:9` („die Neutral Farbpalette"), `custom-select-dropdown:8` („außerhalb des Viewports fällt"), `icon-font-size:39` („sind das … Variablen") | 4 Stellen                                  |
| C8  | Hervorhebung: durchgängig `**fett**`, einmal Versalien (`adaptive-colors:9` „NICHT")                                                                                                                                       | 1 Stelle                                   |
| C9  | Grammatischer Modus der Regeln gemischt: Infinitiv, Imperativ (`input:7` „Verwende …"), Nominalstil (`button:9`, `select:8`)                                                                                               | 1 Imperativ-Ausreißer, ~8 Nominalstil      |

C9 hat einen normativen Kern, der unter [A5](#a5--normativität-nicht-erkennbar) behandelt wird; die rein grammatische Vereinheitlichung selbst ist zurückgestellt.

## Was konsistent ist

- `z. B.` durchgängig mit geschütztem Abstand (6×)
- Nummerierte Regel-Listen durchgängig im `1.`-Stil
- Grundgerüst H1 → Beschreibung → `## Regeln` bei allen gefüllten Component-Dateien
- Deutsches Dezimalkomma (`4,5:1`)
- `properties.json`-Struktur selbst ist einheitlich und maschinell gut verwertbar — die Findings betreffen die Guidelines, nicht die JSON-Dateien

## Empfohlene nächste Schritte

1. **A4 und A10 klären** — inhaltliche Entscheidungen, die nur mit Design und Dev getroffen werden können. Höchste Priorität, weil hier aus der Quelle falsche Ergebnisse ableitbar sind.
2. **Schema für `guidelines.md` festlegen** und in `README.md` dokumentieren: Pflichtabschnitte, Trennung `## Regeln` (normativ) von `## Verhalten` (deskriptiv), Auszeichnungsregel für Properties/Tokens/Werte (Backticks plus Property-Name), Verweisformat für Komponenten und Dateien.
3. **`description` als Feld in `meta.json`** aufnehmen, statt sie als „erste Zeile nach H1" zu führen.
4. **Validierung ergänzen**, sobald das Schema steht: In Guidelines genannte Property-Namen und -Werte gegen `properties.json` prüfen, Dateiverweise auf Existenz prüfen. Damit werden A1, A2, A4 und A9 dauerhaft ausgeschlossen statt nur einmalig korrigiert — A1 hat gezeigt, dass die Prüfung in beide Richtungen laufen muss, weil auch `properties.json` Einträge fehlen können.
