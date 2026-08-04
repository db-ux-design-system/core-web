# Adaptive Density

Das Density-System steuert, wie kompakt oder großzügig UI-Elemente gerendert werden. Es beeinflusst Sizing, Spacing, Border-Dimensionen und Opacity-Tokens.

## Modi

- **expressive** — Größere Werte, mehr Raum. Für Marketing-Seiten, Landing Pages, content-lastige Layouts.
- **regular** — Standard-Werte. Für Standard-Anwendungen.
- **functional** — Kleinere Werte, kompakter. Für datenintensive UIs, Dashboards, Admin-Panels.

## Funktionsweise

Alle numerischen Tokens in der **Density Collection** (`sizing`, `spacing`, `border-width`, `border-radius`, `opacity`, `container`, `screen`, `typography`) sind mit drei Mode-Varianten definiert. Der aktive Mode bestimmt, welcher Wertesatz verwendet wird.

## Aktivierung

### In Figma

Den **Layer Mode** eines Frames auf einen der Density-Modi setzen (expressive, regular, functional). Alle Kind-Layer, die Density-Collection-Variablen verwenden, lösen automatisch zu den Werten dieses Modus auf.

### Im Code

`data-density`-Attribut auf einem Eltern-Container setzen:

```html
<div data-density="functional">
	<!-- Alle Kinder rendern in funktionaler Density -->
</div>
```

Gültige Werte: `expressive`, `regular` (Standard), `functional`.

## Betroffene Token-Kategorien

- `sizing` — Komponenten-Höhen/Breiten
- `spacing` — feste Abstände und Paddings (Gruppe `fixed`), Viewport-skalierende Abstände (Gruppe `responsive`)
- `border-width` — Strichstärken
- `border-radius` — Eckenradien
- `opacity` — Transparenzwerte
- `container` — Max-Width-Beschränkungen
- `screen` — Breakpoint-Werte
- `typography` — font-size, line-height, paragraph-spacing

## Figma Variable Collection

- **Collection**: Density
- **variableSetKey**: `9cf60e6c6b13febe2d21fb3cd3b088bdcd4039b7`
- **Mode-Variable**: `adaptive-density` (Key: `2a264797df9b3094f3a1813eed3afb8634558f93`)
