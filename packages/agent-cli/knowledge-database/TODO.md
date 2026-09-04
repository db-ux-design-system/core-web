# Knowledge-Database — Offene Punkte

## Components

### 1. `code.json` für alle Komponenten ausrollen

Aktuell nur als Prototyp bei Button vorhanden. Muss von Dev für alle Komponenten angelegt werden. Format-Vorschlag und Generierungskonzept siehe `components/button/code.json`.

### 2. Button: Regel zur Varianten-Hierarchie in Button-Gruppen

Explizite Regel für die Kombination `filled` + `ghost` als primär + sekundär ergänzen? Steckt bisher implizit in Regel 2 von `components/button/guidelines.md`.

### 3. Link: Regel 4 verifizieren

Icon-Konvention und `target="_blank"`-Verhalten für externe Links konkretisieren (`components/link/guidelines.md`, Regel 4).

### 4. Section: Regel zu den `width`-Optionen

Einsatzkriterien für `full`, `large`, `medium` und `small` ergänzen? Alternativ eher im Layout-Kontext abhandeln statt an der Komponente. Hängt mit den `width`-Kriterien von Control Panel Desktop und Footer zusammen (siehe „Control Panel Desktop: Kriterien für `width` bei Top" und „Footer: Kriterien für `width`").

### 5. Guidelines für die noch offenen Komponenten ausarbeiten

Diese Komponenten haben eine leere `guidelines.md` und sind in ihrer `meta.json` mit `guidelines: "pending"` markiert. Regeln und Beschreibung müssen mit Design und Dev festgelegt werden:

- `custom-button`
- `table` und die sieben Sub-Components `table-body`, `table-caption`, `table-data-cell`, `table-footer`, `table-head`, `table-header-cell`, `table-row`

Nach der Ausarbeitung entfällt das Feld `guidelines` in der jeweiligen `meta.json`.

Nicht mehr auszuarbeiten: `header`, `navigation`/`navigation-item`, `brand` und `page` sind seit 2026-09-03 deprecated (`deprecation: "deprecated"` in der jeweiligen `meta.json`) und brauchen keine Guidelines mehr.

### 6. Footer: Figma-IDs nach Merge verifizieren, Dev-Handoff

Betrifft `components/footer`, `components/footer/footer-content` und `components/footer/footer-meta`.

- Nach dem Merge des Feature Branch `feat--footer-beta` in `mlJ6R0GkfR15a93KSlqXtB` und dem Core-Release: Node IDs, Component-Set-Namen und `key`-Felder aller drei `figma.json`-Dateien gegen das Main-File verifizieren. Vorgehen: alle publizierten Komponenten per Plugin-API (`publish=CURRENT`) aus dem Main-File lesen und `nodeId`, `key` und Component-Set-Name je Eintrag abgleichen. Erfahrungswert von Shell/Control Panel: der Publish vergibt die Component-`key`s neu, die Node-IDs bleiben stabil. Betrifft nur die Komponenten-Definitionen im Feature Branch `z9uaxWJEoZW94deKS22oXo`, nicht die bereits verifizierten Doku-Visuals in `AtXL3DIkXMbr1PBEWB3yJG`.
- `code` und `description` in allen drei `properties.json` beim Dev-Handoff füllen, sobald die `model.ts` existiert.

### 7. Footer: Kriterien für `width`

Ausgeklammert, bis die Section-Breiten überarbeitet sind. `components/footer/properties.json` führt `🔀 Width` mit `(Def) Full`, `Large (1440)`, `Medium (1024)` und `Small (768)`. Ein Auswahlkriterium für die vier Werte fehlt in `guidelines.md` bewusst, weil es voraussichtlich an derselben Section-Breite hängt wie bei Control Panel Desktop Top. Nach der Section-Überarbeitung gemeinsam mit Section und Control Panel Desktop klären, damit die Kriterien konsistent formuliert werden.

### 8. Control Panel Desktop: Kriterien für `width` bei Top

`components/control-panel/control-panel-desktop/properties.json` führt `🔀 Width` am Top-Set mit `(Def) Full`, `Small`, `Medium` und `Large`. Zu den vier Werten gibt es in keiner Shell- oder Control-Panel-Guideline ein Auswahlkriterium.

Mit Dev zu klären, was die Werte bewirken und wann welcher zu wählen ist. Danach entscheiden, ob daraus eine Regel wird oder eine Zusatzinformation. Vergleichbare Lage wie bei Section (siehe „Section: Regel zu den `width`-Optionen").

Das Auswahlkriterium ist die Breite der Section im Inhaltsbereich: das Control Panel Top wird passend dazu gewählt, damit Navigation und Inhalt auf derselben Kante liegen. Sobald die Zuordnung der vier Werte zu den Section-Breiten geklärt ist, wird daraus eine Regel mit Do und Dont — der Fehlerfall ist gut zeigbar, nämlich ein Control Panel, dessen Kante gegen die Section versetzt ist.

### 9. Shell und Control Panel: offene Punkte aus dem Property-Review

Der Property-Review von Shell und Control Panel hat `code` und `description` in allen `properties.json` gefüllt und die Asymmetrien in `inconsistencies.md` festgehalten. Drei Punkte hängen an Dev und bleiben offen:

- `secondLine` bei Control Panel Brand hat in der `model.ts` keinen JSDoc und bleibt deshalb ohne `description`, siehe README-Abschnitt „`description` nur bei vorhandener Code-Property". Sobald der JSDoc existiert, den Wortlaut übernehmen.
- Der `📦 Logo`-Slot existiert in Figma nur im Set `Logozusatz`, im Code gibt es keinen `logo`-Slot. Die Abweichung ist gewollt und in `inconsistencies.md` vermerkt. Offen ist, wie das Logo im Code gesetzt wird — Dev muss das dokumentieren, danach gehört die Antwort als Note an die Property.
- Shell Sub Navigation ist noch offen: welche Properties die Komponente überhaupt führt, ist unklar. In Figma tragen die Sets `Desktop - Top` und `Mobile` keine Properties, nur `Desktop - Left` hat `🔀 Variant` und `🔀 Expanded`, im Code hat `DBShellSubNavigation` kein `variant`. Beim Bearbeiten klären, ob `variant` in Figma oder im Code entfällt, und die `properties.json` entsprechend füllen.

### 10. Shell Content: unquantifiziertes Mengenwort in Regel 3

Regel 3 von `components/shell/shell-content/guidelines.md` steuert eine Mengenentscheidung über ein Wort statt über einen Wert (kompakt, überfüllen, zu große, unbrauchbare). Damit ist die Grenze unbestimmt und beim Generieren der `documentation.json` müsste für das `dont` eine Zahl erfunden werden. Beim Bearbeiten der Datei entscheiden, ob ein Wert festgelegt wird oder ob ein anderes Kriterium die Menge ersetzt.

Der übrige Bestand ist erledigt: Shell Desktop nennt vier Navigation Items für Control Panel Left und sechs für Sub Navigation Left, Shell Sub Navigation höchstens fünf Navigation Items auf Mobile, Control Panel Navigation acht beziehungsweise sieben Navigation Items je Ebene, und Control Panel Actions höchstens eine Hauptaktion und höchstens vier Utility-Aktionen. Offen ist damit nur noch Shell Content Regel 3.

## Foundations

### 11. Auswahlkriterien innerhalb der Skalen ergänzen

Für `border-radius` und `container` ist geregelt, dass ausschließlich Tokens verwendet werden, und bei `border-radius` zusätzlich, dass `full` der Pill-/Kreisfall ist. Offen bleibt, welche Stufe der Skala wann zu wählen ist — das ist eine Design-Entscheidung.

Als Anhaltspunkt, wie Core die Stufen aktuell belegt:

- `border-radius` — `2xs` bei Checkbox, `xs` bei Tag, List Item, Tooltip und Fokusringen, `sm` bei Accordion, Tab, Navigation, Drawer und Card. `3xs` und `md`–`3xl` sind unbelegt.
- `container` — `xs` bei Popover, Tooltip und Navigation-Submenu, `xs`/`lg`/`3xl` als Drawer-Größen. Der Rest ist unbelegt.

## Icons

### 12. Anleitung zur lokalen Einbindung ergänzen

Von Dev: Wie werden Icons lokal eingebunden/installiert (inner source, Font-Setup)?

## Tooling

### 13. `lint:codespell` für die deutschsprachige Wissensbasis klären

Von Dev zu entscheiden, sobald klar ist, wo die Wissensbasis dauerhaft liegt.

Die cspell-Konfiguration (`.config/cspell.config.ts`) bindet kein deutsches Wörterbuch ein und schließt `packages/agent-cli/` nicht aus. Rechtschreibprüfung ist für die Quelldateien damit faktisch nicht vorhanden — allein `components/badge/guidelines.md` und `foundations/colors/guidelines.md` erzeugen 128 Meldungen.

Zwei Optionen:

- deutsches Wörterbuch in die cspell-Konfiguration aufnehmen und die Quelldateien mitprüfen
- das Verzeichnis in `ignorePaths` aufnehmen und die Prüfung auf die generierten Endtexte verlagern

## Generierung und Doku-Konventionen

### 14. Property-Werte in Guidelines konsequent in Backticks setzen

Die Konvention steht bereits in `writing-conventions.md` („Property-Werte werden mit ihrem kanonischen Namen in Backticks referenziert"), ist aber noch nicht überall durchgesetzt. Der generelle Bestand wurde im Language Review unter Finding A4 bereinigt (`custom-select-dropdown`, `transition`).

Offen sind die Guidelines von Shell und Control Panel: dort stehen Variantenwerte wie `Popover`, `Tree`, `Drill Down`, `Flat Icon`, `Fixed`, `Auto`, `Top`, `Left`, `Logozusatz` noch als Fließtextwörter ohne Backticks. Betroffene Dateien: `shell-desktop`, `shell-mobile`, `shell-sub-navigation`, `control-panel` und dessen Sub-Components (`control-panel-flat-icon`, `-brand`, `-desktop`, `-mobile`, `-actions`, `-navigation`, `control-panel-navigation-item`).

Pro Vorkommen entscheiden, nicht pauschal ersetzen: Nur echte Property-Werte bekommen Backticks. Komponentennamen (z. B. Popover als Komponente), Markdown-Links und reine Richtungsangaben bleiben unquotiert. Nach der Umbenennungsrunde im Design sind Variantenwerte und Component-Set-Namen einheitlich mit Leerzeichen geschrieben (`Drill Down`, `Flat Icon`), Doppeldeutigkeiten sind damit weg.

### 15. `documentation.json` für alle Stable- und Beta-Komponenten erstellen

Aktuell nur als Prototyp bei Button vorhanden. Muss für alle Komponenten mit Status `stable` oder `beta` aus der jeweiligen `guidelines.md` generiert werden. Voraussetzung: `guidelines.md` ist ausgearbeitet (nicht `pending`). Vorgehen siehe README-Abschnitt „Generierung der documentation.json".

Ausgenommen sind Komponenten mit `deprecation: "deprecated"` in der `meta.json` (`header`, `navigation`/`navigation-item`, `brand`, `page`) — sie bekommen trotz Status `stable`/`beta` keine `documentation.json` mehr.

Bei Shell und Control Panel hatte `control-panel-brand` als einzige Komponente noch keine `documentation.json`, weil zunächst keine Doku-Seite dafür bekannt war. Die Doku-Seite existiert inzwischen (`pElrqVUyojrzYzSagyJPS6`, Node `4006:3`) und wurde am 2026-08-11 ausgelesen, die Datei ist erzeugt.

### 16. Nachgelagerte Artefakte aus der Wissensbasis erzeugen

Welche Artefakte sich zukünftig aus der Wissensbasis generieren lassen, anstatt parallel gepflegt zu werden — z.B. Storybook-Dokumentation (Props-Tabellen, Controls, Beschreibungen) oder Teile der Plattform-Dokumentation. Voraussetzung: Props, Slots, Events und Guidelines vollständig in der Wissensbasis.

### 17. Accessibility als eigener Bereich in der Komponenten-Doku

Barrierefreiheits-Anforderungen lassen sich oft nicht als Do-Dont-Paar im Layout zeigen, weil sie an Werten hängen, die im Screenshot nicht sichtbar sind. Dafür braucht die Komponenten-Doku einen eigenen Bereich neben Guidelines und Examples, dessen Einträge ohne Visual funktionieren.

Bis dahin bleibt eine Anforderung dieser Art aus den Guidelines heraus. Betroffen ist bei `control-panel-navigation-item` die Regel, für jedes Flat Icon Navigation Item einen beschreibenden Text anzugeben: er dient zugleich als zugängliches Label, und bei ausgeblendetem Label identifiziert der Tooltip den Eintrag als Einziges. Ein Dont-Visual dazu ist in Figma nicht darstellbar, weil der Tooltip bei Hover immer eingeblendet wird — zeigen ließe sich nur das Property-Panel, und das ist Werkzeugwissen und für Entwickler:innen ohne Entsprechung.

Beim Aufbau des Bereichs diese Regel als ersten Eintrag übernehmen und prüfen, welche weiteren Komponenten Anforderungen tragen, die aus demselben Grund bisher fehlen.

### 18. Figma-Learn-Einträge und Verweise darauf

Manche Aussagen sind Werkzeugwissen für Figma und gehören nicht in die Komponenten-Doku, sondern nach Figma Learn. Die Komponentenseite verweist dann darauf, statt den Inhalt zu wiederholen.

- **End Slot des Navigation Items.** Wofür der End Slot gedacht ist, steht bisher nirgends — anders als bei `control-panel-brand`, wo eine Regel den End Slot auf Umgebungs-Informationen begrenzt. Das Floating Item wird in Figma Learn dokumentiert und von der Seite `control-panel-navigation-item` verlinkt. Bis dahin bleibt in der `guidelines.md` nur der Verfügbarkeitsfakt, dass Popover-Items keinen End Slot haben und Tree- und Drill-Down-Items einen.
- **Manuell zu setzende Texte.** In Figma müssen Texte wie das Label des CP Back Buttons oder der Anwendungsname in CP Brand von Hand gesetzt werden, in Dev entstehen sie automatisch. Gleicher Output, anderer Weg — deshalb keine Inkonsistenz im Sinne von `inconsistencies.md`, aber erklärungsbedürftig für Designer:innen.

Beim Anlegen der Learn-Einträge prüfen, welche weiteren Aussagen aus den Guidelines dorthin gehören, statt in `## Zusätzliche Informationen` zu stehen.

## Platform-Repo

### 19. Tonalitätsregeln aus `_platform-steering/` zurückspielen

Der Ordner [`_platform-steering/`](_platform-steering/README.md) enthält eine temporäre Arbeitskopie der Steering-Dateien aus `db-ux-design-system.github.io`. Lücken, die beim Generieren der `documentation.json` auffallen, werden dort ergänzt und gesammelt in das Platform-Repo integriert, statt pro Fund zwischen den Repos zu wechseln.

Offene Änderungen und das Vorgehen beim Zurückspielen stehen im README des Ordners. Nach der Integration entfällt der Ordner samt den beiden Einträgen in `.prettierignore` und `.markdownlintignore`, und der Verweis in `writing-conventions.md` richtet sich wieder auf das Platform-Repo.
