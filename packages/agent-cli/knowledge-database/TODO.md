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
