# Component Tokens

Komponentenspezifische Sizing-Variablen (`🧱 design`) für Fälle, die über die globalen Spacing-/Sizing-Skalen hinausgehen.

## Regeln

1. Component Tokens existieren ausschließlich in Figma (Density Collection) und werden **nicht** als CSS Custom Properties exponiert.
2. Nur für die Komponentenerstellung verwenden — nicht für allgemeine Layouts oder Designs.
3. Naming Pattern: `🧱 design/{component}/{property}/{size}`
4. Deprecated Tokens (`🔗 design/{component}-deprecated/`) nicht in neuen Designs verwenden.
5. Component Tokens verhalten sich adaptiv (density-abhängig). Weitere Details befinden sich in der _principles/adaptive-density.md

## Verfügbare Token-Gruppen

- `shell.json` — Width/Height für die Shell-Komponente (Header/Navigation)
- `resizer.json` — Sizing/Container für die Resizer-Komponente (Drag-Handle)
- `textarea.json` — Height für die Textarea-Komponente (Label-positionsabhängig)
