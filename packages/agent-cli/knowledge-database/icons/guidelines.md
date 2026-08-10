# Icons

Visuelle Symbole zur Unterstützung von Text, Navigation und Aktionen. Im Code über einen Icon Font (inner source) bereitgestellt, in Figma als Assets aus einer separaten Library (`DB UX DS v3 - DB Theme Icons`) platziert.

## Regeln

1. Bei Icon-Text-Kombinationen die Icon-Größe an die Zeilenhöhe des Texts angleichen.

## Verfügbare Icon-Namen

Siehe `icon-names.json` für die vollständige Liste aller verfügbaren Icon-Identifier.

## Erweiterbarkeit

Consuming Apps können eigene Icons über das TypeScript-Interface hinzufügen:

```typescript
declare module "@db-ux/core-foundations" {
	interface OverwriteIcons {
		types: "my-custom-icon" | "another-icon";
	}
}
```
