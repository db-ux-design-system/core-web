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

## Icons

### 6. Anleitung zur lokalen Einbindung ergänzen

Von Dev: Wie werden Icons lokal eingebunden/installiert (inner source, Font-Setup)?

## Generierung

### 7. Nachgelagerte Artefakte aus der Wissensbasis erzeugen

Welche Artefakte sich zukünftig aus der Wissensbasis generieren lassen, anstatt parallel gepflegt zu werden — z.B. Storybook-Dokumentation (Props-Tabellen, Controls, Beschreibungen) oder Teile der Plattform-Dokumentation. Voraussetzung: Props, Slots, Events und Guidelines vollständig in der Wissensbasis.
