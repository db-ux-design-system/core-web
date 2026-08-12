# Knowledge-Database — Offene Punkte

## Components

### 1. `code.json` für alle Komponenten ausrollen

Aktuell nur als Prototyp bei Button vorhanden. Muss von Dev für alle Komponenten angelegt werden. Format-Vorschlag und Generierungskonzept siehe `components/button/code.json`.

### 2. Button: Regel zur Varianten-Hierarchie in Button-Gruppen

Explizite Regel für die Kombination `filled` + `ghost` als primär + sekundär ergänzen? Steckt bisher implizit in Regel 2 von `components/button/guidelines.md`.

### 3. Link: Regel 4 verifizieren

Icon-Konvention und `target="_blank"`-Verhalten für externe Links konkretisieren (`components/link/guidelines.md`, Regel 4).

### 4. Section: Regel zu den `width`-Optionen

Einsatzkriterien für `full`, `large`, `medium` und `small` ergänzen? Alternativ eher im Layout-Kontext abhandeln statt an der Komponente.

### 5. Header: Regeln komplett überarbeiten

Die aktuelle Basis in `components/header/guidelines.md` war nicht sinnvoll. Überarbeitung im Zusammenhang mit der geplanten Deprecation (siehe `meta.json`).

### 6. Guidelines für zwölf Komponenten ausarbeiten

Diese Komponenten haben eine leere `guidelines.md` und sind in ihrer `meta.json` mit `guidelines: "pending"` markiert. Regeln und Beschreibung müssen mit Design und Dev festgelegt werden:

- `brand`
- `custom-button`
- `page`
- `navigation/navigation-item` — abhängig von der geplanten Deprecation der Navigation (siehe Punkt 5)
- `table` und die sieben Sub-Components `table-body`, `table-caption`, `table-data-cell`, `table-footer`, `table-head`, `table-header-cell`, `table-row`

Nach der Ausarbeitung entfällt das Feld `guidelines` in der jeweiligen `meta.json`.

## Foundations

### 7. Auswahlkriterien innerhalb der Skalen ergänzen

Für `border-radius` und `container` ist geregelt, dass ausschließlich Tokens verwendet werden, und bei `border-radius` zusätzlich, dass `full` der Pill-/Kreisfall ist. Offen bleibt, welche Stufe der Skala wann zu wählen ist — das ist eine Design-Entscheidung.

Als Anhaltspunkt, wie Core die Stufen aktuell belegt:

- `border-radius` — `2xs` bei Checkbox, `xs` bei Tag, List Item, Tooltip und Fokusringen, `sm` bei Accordion, Tab, Navigation, Drawer und Card. `3xs` und `md`–`3xl` sind unbelegt.
- `container` — `xs` bei Popover, Tooltip und Navigation-Submenu, `xs`/`lg`/`3xl` als Drawer-Größen. Der Rest ist unbelegt.

## Icons

### 8. Anleitung zur lokalen Einbindung ergänzen

Von Dev: Wie werden Icons lokal eingebunden/installiert (inner source, Font-Setup)?

## Tooling

### 9. `lint:codespell` für die deutschsprachige Wissensbasis klären

Von Dev zu entscheiden, sobald klar ist, wo die Wissensbasis dauerhaft liegt.

Die cspell-Konfiguration (`.config/cspell.config.ts`) bindet kein deutsches Wörterbuch ein und schließt `packages/agent-cli/` nicht aus. Rechtschreibprüfung ist für die Quelldateien damit faktisch nicht vorhanden — allein `components/badge/guidelines.md` und `foundations/colors/guidelines.md` erzeugen 128 Meldungen.

Zwei Optionen:

- deutsches Wörterbuch in die cspell-Konfiguration aufnehmen und die Quelldateien mitprüfen
- das Verzeichnis in `ignorePaths` aufnehmen und die Prüfung auf die generierten Endtexte verlagern

## Generierung

### 10. Nachgelagerte Artefakte aus der Wissensbasis erzeugen

Welche Artefakte sich zukünftig aus der Wissensbasis generieren lassen, anstatt parallel gepflegt zu werden — z.B. Storybook-Dokumentation (Props-Tabellen, Controls, Beschreibungen) oder Teile der Plattform-Dokumentation. Voraussetzung: Props, Slots, Events und Guidelines vollständig in der Wissensbasis.

### 11. `documentation.json` für alle Stable- und Beta-Komponenten erstellen

Aktuell nur als Prototyp bei Button vorhanden. Muss für alle Komponenten mit Status `stable` oder `beta` aus der jeweiligen `guidelines.md` generiert werden. Voraussetzung: `guidelines.md` ist ausgearbeitet (nicht `pending`). Vorgehen siehe README-Abschnitt „Generierung der documentation.json".

Bei Shell und Control Panel hatte `control-panel-brand` als einzige Komponente noch keine `documentation.json`, weil zunächst keine Doku-Seite dafür bekannt war. Die Doku-Seite existiert inzwischen (`pElrqVUyojrzYzSagyJPS6`, Node `4006:3`) und wurde am 2026-08-11 ausgelesen, die Datei ist erzeugt. Sie fällt unter dieselbe Regel-zu-Eintrag-Diskrepanz wie die übrigen elf Komponenten, siehe Punkt 15.

## Shell und Control Panel

### 12. Property-Werte in Shell- und Control-Panel-Guidelines an `properties.json` binden

Variantennamen stehen in den Guidelines als großgeschriebene Fließtextwörter ohne Property-Bezug und ohne Backticks: `Top`, `Left`, `Auto`, `Fixed`, `Popover`, `Tree`, `Drill Down`, `Flat Icon`, `Regular`, `Functional`, `Expressive`, `Short`, `Custom`, `Default`, `Logozusatz`. Das ist dasselbe Muster wie Finding A4 im Language Review.

Die `properties.json` beider Komponenten ist inzwischen aus Figma gefüllt, der Abgleich ist damit möglich. Nach der Umbenennungsrunde im Design sind Variantenwerte und Component-Set-Namen einheitlich mit Leerzeichen geschrieben (`Drill Down`, `Flat Icon`), die Doppeldeutigkeit ist damit weg. Offen bleibt nur die Festlegung, ob im Fließtext Backticks gesetzt werden.

### 13. Figma-IDs von Shell und Control Panel nach dem Release verifizieren

Die `figma.json` und `properties.json` beider Komponenten sind am 2026-08-11 aus dem Figma Feature Branch `4J5l3KlMIiam61iLM1sQGO` ausgelesen. Main-File ist `mlJ6R0GkfR15a93KSlqXtB`. Node IDs, Property-Keys und Variantennamen sind damit vorläufig.

Nach dem Merge und Release prüfen:

- Node IDs und Component-Set-Namen unverändert
- `key`-Felder wurden am 2026-08-11 nachträglich per Inventur ergänzt und gegen einen zweiten unabhängigen Read verifiziert. Nach dem Release trotzdem gegenprüfen, ob sie noch stimmen
- Property-Keys unverändert

Der Auslesestand ist bewusst nicht als Kommentarfeld in den Datendateien vermerkt, weil er ein temporärer Zustand ist.

### 14. `description` und `code` in Shell und Control Panel beim Dev-Handoff füllen

Beide Komponenten haben aktuell `code: null` bei jeder Property und entsprechend keine `description` — so sieht es die Konvention vor, siehe README-Abschnitt „`description` nur bei vorhandener Code-Property".

Sobald die `model.ts` existiert:

- `code` mit Prop-Name und TypeScript-Typ füllen
- `description` mit dem JSDoc-Wortlaut füllen, für die Properties die eine Code-Entsprechung haben
- Figma-only Properties behalten weiterhin keine Description
- Abweichungen zwischen Figma-Property-Namen und Code-Prop-Namen in `inconsistencies.md` nachtragen

### 15. `documentation.json` von Shell und Control Panel neu erzeugen

Der ursprüngliche Bootstrap-Fehler ist behoben: alle zwölf `guidelines.md` sind mit den `documentation.json` aus dem Platform-Branch `feat(documentation)--component-documentation-shell-controlpanel` abgeglichen, jede Regel entspricht jetzt genau einem Eintrag in `guidelines[]` mit `text`, `do` und `dont` bzw. `caution`.

Bis die Guidelines final mit Design abgestimmt sind, gilt für Shell und Control Panel: `documentation.json` wird ignoriert und nicht mitgepflegt. Erst nach der Finalisierung wird sie für alle zwölf Komponenten aus der jeweiligen `guidelines.md` neu generiert, siehe README-Abschnitt „Generierung der documentation.json".

Der Guideline-Review vom 2026-08-11 hat alle zwölf Dateien inhaltlich überarbeitet: Regeln auf je eine Entscheidung mit vollständigem Do+Don't- bzw. Do+Caution-Paar gekürzt, redundante Aussagen zwischen Regeln und Zusätzlichen Informationen sowie zwischen Dateien entfernt, Cross-File-Dubletten durch Verweise ersetzt (Control Panel Desktop verweist für die Positionswahl auf Shell Desktop, Control Panel Mobile und Shell Mobile für Flat Icon aufeinander) und Example-Kandidaten unter `## Zusätzliche Informationen` mit `_(Example-Kandidat)_` markiert. Beim Neuerzeugen zu berücksichtigen:

- `control-panel-brand` Regel zur Bold-Hierarchie bei ein- oder zweizeiligem Text ist neu und hat keine Entsprechung auf der aktuellen Doku-Seite. Es fehlen `figmaNodeId`-Verweise für Do und Dont, bis es dafür Visuals in der Doku gibt.
- Als Example-Kandidaten markiert: Control-Panel-Position oben/unten bei Shell Mobile, Slide-Button-Einklappen bei Control Panel Desktop, Text-Ausblenden über separate Flat-Icon-Varianten bei Control Panel Navigation. Beim Generieren prüfen, ob dafür ein Example-Visual sinnvoll erstellt wird.
- `control-panel-navigation-item` hat zwei neue Regeln erhalten (Flat-Icon-Text-Anforderung, Indicator nur auf erster Ebene), die vorher als nicht normative Zusatzinformation geführt wurden.

## Platform-Repo

### 16. Tonalitätsregeln aus `_platform-steering/` zurückspielen

Der Ordner [`_platform-steering/`](_platform-steering/README.md) enthält eine temporäre Arbeitskopie der Steering-Dateien aus `db-ux-design-system.github.io`. Lücken, die beim Generieren der `documentation.json` auffallen, werden dort ergänzt und gesammelt in das Platform-Repo integriert, statt pro Fund zwischen den Repos zu wechseln.

Offene Änderungen und das Vorgehen beim Zurückspielen stehen im README des Ordners. Nach der Integration entfällt der Ordner samt den beiden Einträgen in `.prettierignore` und `.markdownlintignore`, und der Verweis in `writing-conventions.md` richtet sich wieder auf das Platform-Repo.
