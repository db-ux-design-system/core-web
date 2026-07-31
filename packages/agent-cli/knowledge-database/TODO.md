# Knowledge-Database — Offene Punkte

## Foundations

### 1. Figma-spezifische Anwendungshinweise — wohin?

Aktuell in `tokens.json` verteilt (`usage`, `note`, `figmaLookup`, `figmaUsage`). Gehört nicht in `tokens.json` (reine Token-Daten) und nicht in `guidelines.md` (Token-Nutzungsregeln, tool-agnostisch).

Mögliche Ziele:

- **Option A:** In `principles/` als eigenes Dokument (z.B. `principles/figma-usage.md`)
- **Option B:** Pro Kategorie eine eigene `figma.md` (z.B. `colors/figma.md`, `elevation/figma.md`)
- **Option C:** Eigenes Top-Level-Kapitel `figma/` neben `principles/` und `internals/`

Betrifft: colors, elevation, transition, typography.

### 2. `figmaLookup`-Felder — Agent-Instruktion oder Datenbeschreibung?

`figmaLookup` erklärt dem Agent wie er `search_design_system` aufrufen soll. Gehört das in die Knowledge-Database oder eher in ein Steering/Prompt?

---

## Components

### 4. `code.json` für alle Komponenten ausrollen

Aktuell nur als Prototyp bei Button vorhanden. Muss von Dev für alle Komponenten angelegt werden.

### 5. Backdrop — Code-Umsetzung dokumentieren

Backdrop ist figma-only (eigene Komponente in Figma), wird im Code aber anders umgesetzt (CSS-Pattern innerhalb von Drawer). Die Code-Umsetzung muss in der Knowledge-Database dokumentiert werden — z.B. im `backdrop/properties.json` als Verweis auf Drawer.
