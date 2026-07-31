# Foundations — Offene Punkte

## 1. Figma-spezifische Anwendungshinweise — wohin?

Aktuell in `tokens.json` verteilt (`usage`, `note`, `figmaLookup`, `figmaUsage`). Gehört nicht in `tokens.json` (reine Token-Daten) und nicht in `guidelines.md` (Token-Nutzungsregeln, tool-agnostisch).

Mögliche Ziele:

- **Option A:** In `principles/` als eigenes Dokument (z.B. `principles/figma-usage.md`)
- **Option B:** Pro Kategorie eine eigene `figma.md` (z.B. `colors/figma.md`, `elevation/figma.md`)
- **Option C:** Eigenes Top-Level-Kapitel `figma/` neben `principles/` und `internals/`

Betrifft: colors, elevation, transition, typography.

## 2. `scale`-Property — behalten oder ableiten?

Bei einfachen Kategorien ist die Scale aus den Tokennamen ableitbar. Nur bei figmaOnly-Tokens (opacity/none, spacing/fixed/none) bietet sie Mehrwert. Entfernen oder als explizite Referenz behalten?

## 3. `figmaLookup`-Felder — Agent-Instruktion oder Datenbeschreibung?

`figmaLookup` erklärt dem Agent wie er `search_design_system` aufrufen soll. Gehört das in die Knowledge-Database oder eher in ein Steering/Prompt?
