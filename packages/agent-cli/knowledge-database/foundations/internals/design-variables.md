# Design Variables (Intern)

Komponentenspezifische Figma-Variablen in der Density Collection, gekennzeichnet mit dem Prefix `🧱 design`.

## Überblick

Für bestimmte Komponenten wurden zusätzliche Figma-Variablen erstellt, die spezifisches Design-Verhalten oder visuelle Ausprägungen ermöglichen, die über das Standard-Token-System hinausgehen. Diese sind intern in der Design-Library und werden nicht als CSS Custom Properties exponiert.

## Zweck

- Komponentenspezifisches Sizing oder Spacing, das nicht in die globale Skala passt
- Figma-spezifische Layout-Verhaltensweisen (z.B. fixe interne Paddings, Icon-Positionen)
- Ermöglicht Designern, Komponenten-Interna anzupassen ohne Instanzen zu lösen

## Ort in Figma

- **Collection**: Density
- **Gruppe**: `🧱 design/...`
- **Scope**: Komponentenintern, nicht für allgemeine Nutzung

## Dokumentation

Diese Variablen werden pro Komponente in der Component Knowledge Database (`components/{name}/figma.json`) dokumentiert, da sie komponentenspezifisch sind.
