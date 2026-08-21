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
- `key`-Felder wurden am 2026-08-11 nachträglich per Inventur ergänzt und gegen einen zweiten unabhängigen Read verifiziert; die drei am 2026-08-14 ergänzten Komponenten wurden ebenfalls vervollständigt. Nach dem Release trotzdem gegenprüfen, ob sie noch stimmen
- Property-Keys unverändert

Vorgehen: als Diff, nicht als Inventur. Nach dem Publish einmal alle publizierten Komponenten aus dem Main-File lesen und gegen die `figma.json` abgleichen — Name, Node ID und `key` je Eintrag. Das beantwortet empirisch, was sich beim Merge und Publish ändert, und deckt alle Fälle gleich ab: bleiben die Keys stabil, ist der Diff leer, werden sie neu vergeben, sieht man es vollständig. Ob bestehende Keys einen Branch-Merge und einen Publish überleben, ist vorab nicht belegbar, deshalb wird es nicht vorausgesetzt.

Shell und Control Panel sind noch nicht mit Code Connect verknüpft. Ein Key-Wechsel bricht damit aktuell keine Mappings, das Zeitfenster für den Abgleich ist also unkritisch.

Der Auslesestand ist bewusst nicht als Kommentarfeld in den Datendateien vermerkt, weil er ein temporärer Zustand ist.

### 14. `description` und `code` in Shell und Control Panel beim Dev-Handoff füllen

Beide Komponenten haben aktuell `code: null` bei jeder Property und entsprechend keine `description` — so sieht es die Konvention vor, siehe README-Abschnitt „`description` nur bei vorhandener Code-Property".

Sobald die `model.ts` existiert:

- `code` mit Prop-Name und TypeScript-Typ füllen
- `description` mit dem JSDoc-Wortlaut füllen, für die Properties die eine Code-Entsprechung haben
- Figma-only Properties behalten weiterhin keine Description
- Abweichungen zwischen Figma-Property-Namen und Code-Prop-Namen in `inconsistencies.md` nachtragen

Bei Shell Content sind beim Review am 2026-08-14 Code-Aspekte aufgefallen, die in Figma keine Entsprechung haben und deshalb noch nicht in der `properties.json` stehen. Quelle war der WIP-Branch `feat-shell`, beim Handoff gegenprüfen:

- `mainId`, `mainClass`, `mainLabel` fehlen als Properties. `mainId` ist das Ziel des Skip-Navigation-Links der Shell.
- Pro Seite darf nur ein Shell Content existieren, sonst entstehen doppelte IDs und der Skip-Navigation-Link bricht. In Figma ist das nicht modellierbar, es ist also keine Design-Regel, sondern gehört als Note an `mainId`.
- Children rendert innerhalb von `<main>`, Start Slot und End Slot liegen außerhalb. Daraus folgt Regel 3 der `guidelines.md`. Die Aussage steht bewusst nicht im `design`-Objekt, weil sie die Code-Struktur beschreibt, und gehört beim Handoff in den `code`-Teil, sofern sie dort nötig ist.

### 15. Unquantifizierte Mengenwörter in Shell- und Control-Panel-Regeln

Mehrere Regeln steuern eine Mengenentscheidung über ein Wort statt über einen Wert. Damit ist die Grenze unbestimmt und beim Generieren der `documentation.json` müsste für das `dont` eine Zahl erfunden werden. Jeweils beim Bearbeiten der Datei entscheiden, ob ein Wert festgelegt wird oder ob ein anderes Kriterium die Menge ersetzt.

| Datei                                                             | Regel | Begriffe                                    |
| ----------------------------------------------------------------- | ----- | ------------------------------------------- |
| `components/shell/shell-sub-navigation/guidelines.md`             | 1     | überschaubar, zu viele, übermäßig           |
| `components/shell/shell-content/guidelines.md`                    | 2     | kompakt, überfüllen, zu große, unbrauchbare |
| `components/control-panel/control-panel-navigation/guidelines.md` | 1     | angemessen, zu viele                        |
| `components/control-panel/control-panel-navigation/guidelines.md` | 2     | viele Navigation Items                      |
| `components/control-panel/control-panel-navigation/guidelines.md` | 5     | zu vielen                                   |

Shell Desktop ist erledigt: dort stehen jetzt vier Navigation Items für Control Panel Left und sechs für Sub Navigation Left. `control-panel-primary-actions` und `control-panel-secondary-actions` quantifizieren bereits („ein bis zwei", „eine bis drei"), `control-panel-navigation` Regel 3 ebenfalls („vier oder mehr Ebenen"). Die Uneinheitlichkeit betrifft also einzelne Regeln, nicht die Praxis insgesamt.

### 16. Control Panel Desktop: Kriterien für `width` bei Top

`components/control-panel/control-panel-desktop/properties.json` führt `🔀 Width` am Top-Set mit `(Def) Full`, `Small`, `Medium` und `Large`. Zu den vier Werten gibt es in keiner Shell- oder Control-Panel-Guideline ein Auswahlkriterium.

Mit Dev zu klären, was die Werte bewirken und wann welcher zu wählen ist. Danach entscheiden, ob daraus eine Regel wird oder eine Zusatzinformation. Vergleichbare Lage wie bei Punkt 4 zu den `width`-Optionen der Section.

Das Auswahlkriterium ist die Breite der Section im Inhaltsbereich: das Control Panel Top wird passend dazu gewählt, damit Navigation und Inhalt auf derselben Kante liegen. Sobald die Zuordnung der vier Werte zu den Section-Breiten geklärt ist, wird daraus eine Regel mit Do und Dont — der Fehlerfall ist gut zeigbar, nämlich ein Control Panel, dessen Kante gegen die Section versetzt ist.

## Platform-Repo

### 17. Tonalitätsregeln aus `_platform-steering/` zurückspielen

Der Ordner [`_platform-steering/`](_platform-steering/README.md) enthält eine temporäre Arbeitskopie der Steering-Dateien aus `db-ux-design-system.github.io`. Lücken, die beim Generieren der `documentation.json` auffallen, werden dort ergänzt und gesammelt in das Platform-Repo integriert, statt pro Fund zwischen den Repos zu wechseln.

Offene Änderungen und das Vorgehen beim Zurückspielen stehen im README des Ordners. Nach der Integration entfällt der Ordner samt den beiden Einträgen in `.prettierignore` und `.markdownlintignore`, und der Verweis in `writing-conventions.md` richtet sich wieder auf das Platform-Repo.

### 18. Accessibility als eigener Bereich in der Komponenten-Doku

Barrierefreiheits-Anforderungen lassen sich oft nicht als Do-Dont-Paar im Layout zeigen, weil sie an Werten hängen, die im Screenshot nicht sichtbar sind. Dafür braucht die Komponenten-Doku einen eigenen Bereich neben Guidelines und Examples, dessen Einträge ohne Visual funktionieren.

Bis dahin bleibt eine Anforderung dieser Art aus den Guidelines heraus. Betroffen ist bei `control-panel-navigation-item` die Regel, für jedes Flat Icon Navigation Item einen beschreibenden Text anzugeben: er dient zugleich als zugängliches Label, und bei ausgeblendetem Label identifiziert der Tooltip den Eintrag als Einziges. Ein Dont-Visual dazu ist in Figma nicht darstellbar, weil der Tooltip bei Hover immer eingeblendet wird — zeigen ließe sich nur das Property-Panel, und das ist Werkzeugwissen und für Entwickler:innen ohne Entsprechung.

Beim Aufbau des Bereichs diese Regel als ersten Eintrag übernehmen und prüfen, welche weiteren Komponenten Anforderungen tragen, die aus demselben Grund bisher fehlen.

### 19. Figma-Learn-Einträge und Verweise darauf

Manche Aussagen sind Werkzeugwissen für Figma und gehören nicht in die Komponenten-Doku, sondern nach Figma Learn. Die Komponentenseite verweist dann darauf, statt den Inhalt zu wiederholen.

- **End Slot des Navigation Items.** Wofür der End Slot gedacht ist, steht bisher nirgends — anders als bei `control-panel-brand`, wo eine Regel den End Slot auf Umgebungs-Informationen begrenzt. Das Floating Item wird in Figma Learn dokumentiert und von der Seite `control-panel-navigation-item` verlinkt. Bis dahin bleibt in der `guidelines.md` nur der Verfügbarkeitsfakt, dass Popover-Items keinen End Slot haben und Tree- und Drill-Down-Items einen.
- **Manuell zu setzende Texte.** In Figma müssen Texte wie das Label des CP Back Buttons oder der Anwendungsname in CP Brand von Hand gesetzt werden, in Dev entstehen sie automatisch. Gleicher Output, anderer Weg — deshalb keine Inkonsistenz im Sinne von `inconsistencies.md`, aber erklärungsbedürftig für Designer:innen.

Beim Anlegen der Learn-Einträge prüfen, welche weiteren Aussagen aus den Guidelines dorthin gehören, statt in `## Zusätzliche Informationen` zu stehen.
