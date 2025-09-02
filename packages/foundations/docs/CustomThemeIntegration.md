# Anleitung für Entwicklungsintegration eines eigenen Themes

Diese Anleitung beschreibt, wie Sie ein eigenes Theme in das DB UX Design System v3 integrieren können. Dies ist besonders relevant für Projekte wie NEMO im RiFF-System, die eigene Farbdefinitionen für spezifische Anwendungsfälle benötigen.

## Übersicht

Das DB UX Design System basiert auf CSS Custom Properties (CSS-Variablen), die in verschiedenen Theme-Dateien definiert sind. Sie können diese Standardwerte überschreiben oder erweitern, um Ihr eigenes Theme zu erstellen.

### Grundlegendes Konzept

- **Standard-Theme**: Enthält alle DB-spezifischen Design-Tokens
- **Eigenes Theme**: Überschreibt oder erweitert die Standard-Tokens
- **Komponenten**: Verwenden die CSS Custom Properties aus dem aktiven Theme

## Schritt 1: Theme-Struktur verstehen

### Standard-Theme-Dateien

Das DB UX Design System stellt folgende Theme-Dateien zur Verfügung:

```css
/* Basis-Theme mit allen Standard-Tokens */
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css";

/* Zusätzliche Standard-Komponenten */
@import "@db-ux/core-foundations/build/styles/defaults/default-root.css";
@import "@db-ux/core-foundations/build/styles/defaults/default-required.css";
```

### Theme-Struktur

Alle CSS Custom Properties folgen einem einheitlichen Namensschema:

```css
--db-{kategorie}-{eigenschaft}-{variante}-{zustand}
```

**Beispiele:**
- `--db-neutral-bg-basic-level-1-default` (Hintergrundfarbe)
- `--db-informational-bg-level-1-default` (Informative Hintergrundfarbe)
- `--db-successful-on-bg-basic-emphasis-100-default` (Erfolg-Textfarbe)

## Schritt 2: Eigenes Theme erstellen

### 2.1 Theme-Datei anlegen

Erstellen Sie eine neue CSS-Datei für Ihr eigenes Theme:

```css
/* nemo-theme.css */

:root {
  /* NEMO-spezifische Farben für Platzeigenschaften */
  
  /* Beispiel: Sitzplatz-Status Farben */
  --nemo-seat-available-bg: #28a745;
  --nemo-seat-occupied-bg: #dc3545;
  --nemo-seat-reserved-bg: #ffc107;
  --nemo-seat-disabled-bg: #6c757d;
  
  /* Beispiel: Wagenklassen */
  --nemo-class-first-bg: #6f42c1;
  --nemo-class-second-bg: #007bff;
  --nemo-class-business-bg: #fd7e14;
  
  /* Erweiterte Informational-Farben für Tags */
  --nemo-priority-high-bg: #dc3545;
  --nemo-priority-medium-bg: #ffc107;
  --nemo-priority-low-bg: #28a745;
  --nemo-priority-info-bg: #17a2b8;
  
  /* Überschreiben von Standard-DB-Tokens (falls gewünscht) */
  --db-informational-bg-level-1-default: var(--nemo-priority-info-bg);
  --db-successful-bg-level-1-default: var(--nemo-priority-low-bg);
  --db-warning-bg-level-1-default: var(--nemo-priority-medium-bg);
  --db-critical-bg-level-1-default: var(--nemo-priority-high-bg);
}

/* Dark Mode Unterstützung */
@media (prefers-color-scheme: dark) {
  :root {
    /* NEMO Dark Mode Farben */
    --nemo-seat-available-bg: #155724;
    --nemo-seat-occupied-bg: #721c24;
    --nemo-seat-reserved-bg: #856404;
    --nemo-seat-disabled-bg: #495057;
    
    --nemo-class-first-bg: #4a2c6b;
    --nemo-class-second-bg: #004085;
    --nemo-class-business-bg: #b8610a;
  }
}

/* Spezifische Datenattribute für NEMO */
[data-nemo-seat-status="available"] {
  background-color: var(--nemo-seat-available-bg);
  color: white;
}

[data-nemo-seat-status="occupied"] {
  background-color: var(--nemo-seat-occupied-bg);
  color: white;
}

[data-nemo-seat-status="reserved"] {
  background-color: var(--nemo-seat-reserved-bg);
  color: black;
}

[data-nemo-seat-status="disabled"] {
  background-color: var(--nemo-seat-disabled-bg);
  color: white;
}

[data-nemo-class="first"] {
  background-color: var(--nemo-class-first-bg);
  color: white;
}

[data-nemo-class="second"] {
  background-color: var(--nemo-class-second-bg);
  color: white;
}

[data-nemo-class="business"] {
  background-color: var(--nemo-class-business-bg);
  color: white;
}
```

### 2.2 SCSS-Version (falls bevorzugt)

```scss
// nemo-theme.scss

// NEMO-spezifische Variablen
$nemo-seat-available: #28a745;
$nemo-seat-occupied: #dc3545;
$nemo-seat-reserved: #ffc107;
$nemo-seat-disabled: #6c757d;

$nemo-class-first: #6f42c1;
$nemo-class-second: #007bff;
$nemo-class-business: #fd7e14;

:root {
  // NEMO-spezifische CSS Custom Properties
  --nemo-seat-available-bg: #{$nemo-seat-available};
  --nemo-seat-occupied-bg: #{$nemo-seat-occupied};
  --nemo-seat-reserved-bg: #{$nemo-seat-reserved};
  --nemo-seat-disabled-bg: #{$nemo-seat-disabled};
  
  --nemo-class-first-bg: #{$nemo-class-first};
  --nemo-class-second-bg: #{$nemo-class-second};
  --nemo-class-business-bg: #{$nemo-class-business};
  
  // Überschreiben von DB-Tokens
  --db-informational-bg-level-1-default: #{$nemo-class-second};
}
```

## Schritt 3: Integration in verschiedene Bundler

### 3.1 Webpack / Rollup / Vite

```javascript
// main.js oder main.ts

// 1. Standard DB UX Design System laden
import '@db-ux/core-foundations/build/styles/defaults/default-theme.css';
import '@db-ux/core-foundations/build/styles/defaults/default-root.css';
import '@db-ux/core-foundations/build/styles/defaults/default-required.css';

// 2. NEMO Theme nach dem Standard-Theme laden (überschreibt Werte)
import './styles/nemo-theme.css';

// 3. Komponenten-Styles
import '@db-ux/core-components/build/styles/relative.css';

// Oder spezifische Komponenten
import '@db-ux/core-components/build/components/tag/tag.css';
import '@db-ux/core-components/build/components/button/button.css';
```

### 3.2 CSS-Import

```css
/* main.css */

/* 1. Standard-Theme */
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css";
@import "@db-ux/core-foundations/build/styles/defaults/default-root.css";
@import "@db-ux/core-foundations/build/styles/defaults/default-required.css";

/* 2. NEMO Theme */
@import "./nemo-theme.css";

/* 3. Komponenten */
@import "@db-ux/core-components/build/components/tag/tag.css";
@import "@db-ux/core-components/build/components/button/button.css";
```

### 3.3 SCSS-Import

```scss
// main.scss

// 1. Standard-Theme
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.scss";
@import "@db-ux/core-foundations/build/styles/defaults/default-root.scss";
@import "@db-ux/core-foundations/build/styles/defaults/default-required.scss";

// 2. NEMO Theme
@import "./nemo-theme.scss";

// 3. Komponenten
@import "@db-ux/core-components/build/components/tag/tag.scss";
@import "@db-ux/core-components/build/components/button/button.scss";
```

## Schritt 4: Verwendung in Komponenten

### 4.1 HTML mit NEMO-Attributen

```html
<!-- Wagenlayout -->
<div class="train-layout">
  <!-- Sitzplätze mit NEMO-Attributen -->
  <div data-nemo-seat-status="available">1A</div>
  <div data-nemo-seat-status="occupied">1B</div>
  <div data-nemo-seat-status="reserved">1C</div>
  <div data-nemo-seat-status="disabled">1D</div>
</div>

<!-- Wagenklassen-Tags -->
<div class="wagon-info">
  <div data-nemo-class="first">1. Klasse</div>
  <div data-nemo-class="business">Business</div>
  <div data-nemo-class="second">2. Klasse</div>
</div>
```

### 4.2 DB UX Tags mit NEMO-Farben

```html
<!-- Standard DB Tags mit NEMO-Theme -->
<db-tag variant="informational">Info</db-tag>
<db-tag variant="successful">Verfügbar</db-tag>
<db-tag variant="warning">Reserviert</db-tag>
<db-tag variant="critical">Besetzt</db-tag>

<!-- Eigene Tags mit CSS Custom Properties -->
<db-tag style="background-color: var(--nemo-class-first-bg); color: white;">
  1. Klasse
</db-tag>
```

### 4.3 JavaScript/TypeScript Integration

```typescript
// nemo-theme.ts
export const NemoTheme = {
  seats: {
    available: 'var(--nemo-seat-available-bg)',
    occupied: 'var(--nemo-seat-occupied-bg)',
    reserved: 'var(--nemo-seat-reserved-bg)',
    disabled: 'var(--nemo-seat-disabled-bg)'
  },
  classes: {
    first: 'var(--nemo-class-first-bg)',
    second: 'var(--nemo-class-second-bg)',
    business: 'var(--nemo-class-business-bg)'
  }
};

// Verwendung
function setSeatColor(element: HTMLElement, status: string) {
  element.style.backgroundColor = NemoTheme.seats[status];
}
```

## Schritt 5: Framework-spezifische Integration

### 5.1 Angular

```typescript
// angular.json
{
  "styles": [
    "node_modules/@db-ux/core-foundations/build/styles/defaults/default-theme.css",
    "src/styles/nemo-theme.css",
    "node_modules/@db-ux/core-components/build/styles/relative.css"
  ]
}

// oder in styles.css
@import '~@db-ux/core-foundations/build/styles/defaults/default-theme.css';
@import './nemo-theme.css';
@import '~@db-ux/core-components/build/styles/relative.css';
```

```typescript
// nemo-seat.component.ts
@Component({
  selector: 'nemo-seat',
  template: `
    <div [attr.data-nemo-seat-status]="status" 
         [class]="'seat ' + additionalClasses">
      {{ seatNumber }}
    </div>
  `
})
export class NemoSeatComponent {
  @Input() status: 'available' | 'occupied' | 'reserved' | 'disabled' = 'available';
  @Input() seatNumber: string = '';
  @Input() additionalClasses: string = '';
}
```

### 5.2 React

```jsx
// index.js oder App.js
import '@db-ux/core-foundations/build/styles/defaults/default-theme.css';
import './styles/nemo-theme.css';
import '@db-ux/core-components/build/styles/relative.css';

// NemoSeat.jsx
const NemoSeat = ({ status, seatNumber, className = '' }) => {
  return (
    <div 
      data-nemo-seat-status={status}
      className={`seat ${className}`}
    >
      {seatNumber}
    </div>
  );
};

export default NemoSeat;
```

### 5.3 Vue.js

```vue
<!-- App.vue -->
<style>
@import '@db-ux/core-foundations/build/styles/defaults/default-theme.css';
@import './styles/nemo-theme.css';
@import '@db-ux/core-components/build/styles/relative.css';
</style>

<!-- NemoSeat.vue -->
<template>
  <div 
    :data-nemo-seat-status="status"
    :class="`seat ${additionalClass}`"
  >
    {{ seatNumber }}
  </div>
</template>

<script>
export default {
  name: 'NemoSeat',
  props: {
    status: {
      type: String,
      default: 'available',
      validator: value => ['available', 'occupied', 'reserved', 'disabled'].includes(value)
    },
    seatNumber: String,
    additionalClass: {
      type: String,
      default: ''
    }
  }
}
</script>
```

## Schritt 6: Erweiterte Konfiguration

### 6.1 Theme-Switching zur Laufzeit

```javascript
// theme-switcher.js
class NemoThemeManager {
  static themes = {
    default: {
      '--nemo-seat-available-bg': '#28a745',
      '--nemo-seat-occupied-bg': '#dc3545',
      // ... weitere Werte
    },
    highContrast: {
      '--nemo-seat-available-bg': '#000000',
      '--nemo-seat-occupied-bg': '#ffffff',
      // ... weitere Werte
    }
  };
  
  static applyTheme(themeName) {
    const theme = this.themes[themeName];
    if (!theme) return;
    
    const root = document.documentElement;
    Object.entries(theme).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }
}

// Verwendung
NemoThemeManager.applyTheme('highContrast');
```

### 6.2 CSS-in-JS Integration (Styled Components, Emotion)

```javascript
// styled-components
import styled from 'styled-components';

const NemoSeat = styled.div`
  background-color: ${props => {
    switch(props.status) {
      case 'available': return 'var(--nemo-seat-available-bg)';
      case 'occupied': return 'var(--nemo-seat-occupied-bg)';
      case 'reserved': return 'var(--nemo-seat-reserved-bg)';
      default: return 'var(--nemo-seat-disabled-bg)';
    }
  }};
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
`;
```

### 6.3 Responsive Design mit NEMO-Theme

```css
/* Responsive NEMO-Anpassungen */
@media (max-width: 768px) {
  :root {
    /* Kleinere Größen für mobile Ansicht */
    --nemo-seat-size: 24px;
    --nemo-seat-font-size: 10px;
  }
  
  [data-nemo-seat-status] {
    width: var(--nemo-seat-size);
    height: var(--nemo-seat-size);
    font-size: var(--nemo-seat-font-size);
  }
}

@media (min-width: 1200px) {
  :root {
    /* Größere Größen für Desktop */
    --nemo-seat-size: 40px;
    --nemo-seat-font-size: 14px;
  }
}
```

## Schritt 7: Testing und Debugging

### 7.1 Theme-Validierung

```javascript
// theme-validator.js
function validateNemoTheme() {
  const requiredProperties = [
    '--nemo-seat-available-bg',
    '--nemo-seat-occupied-bg',
    '--nemo-seat-reserved-bg',
    '--nemo-seat-disabled-bg'
  ];
  
  const root = getComputedStyle(document.documentElement);
  const missing = requiredProperties.filter(prop => 
    !root.getPropertyValue(prop).trim()
  );
  
  if (missing.length > 0) {
    console.warn('Missing NEMO theme properties:', missing);
    return false;
  }
  
  console.log('✅ NEMO theme successfully loaded');
  return true;
}

// Nach dem Laden des Themes aufrufen
validateNemoTheme();
```

### 7.2 Browser DevTools

```javascript
// Hilfsfunktion für DevTools
function logNemoThemeValues() {
  const root = getComputedStyle(document.documentElement);
  const nemoProps = [
    '--nemo-seat-available-bg',
    '--nemo-seat-occupied-bg',
    '--nemo-seat-reserved-bg',
    '--nemo-seat-disabled-bg',
    '--nemo-class-first-bg',
    '--nemo-class-second-bg',
    '--nemo-class-business-bg'
  ];
  
  console.table(
    nemoProps.reduce((acc, prop) => {
      acc[prop] = root.getPropertyValue(prop).trim();
      return acc;
    }, {})
  );
}

// In der Browser-Konsole ausführen
logNemoThemeValues();
```

## Schritt 8: Best Practices

### 8.1 Namenskonventionen

- **Prefix verwenden**: Alle eigenen Variablen mit `--nemo-` beginnen
- **Konsistente Struktur**: `--nemo-{komponente}-{eigenschaft}-{zustand}`
- **Semantische Namen**: Bedeutungsvolle Namen wie `available`, `occupied` statt `green`, `red`

### 8.2 Performance-Optimierung

```css
/* Nur benötigte Eigenschaften überschreiben */
:root {
  /* ✅ Gut: Spezifische NEMO-Eigenschaften */
  --nemo-seat-available-bg: #28a745;
  
  /* ❌ Vermeiden: Unnötige Überschreibungen */
  --db-neutral-bg-basic-level-1-default: #28a745;
}
```

### 8.3 Dokumentation

```css
/**
 * NEMO Theme für RiFF-Anwendung
 * 
 * Definiert spezifische Farben für:
 * - Sitzplatz-Status im Wagenlayout
 * - Wagenklassen-Tags
 * - Prioritäts-Indikatoren
 * 
 * @version 1.0.0
 * @author NEMO Development Team
 */
```

## Schritt 9: Wartung und Updates

### 9.1 Versionskontrolle

```json
// package.json
{
  "dependencies": {
    "@db-ux/core-foundations": "^3.0.0",
    "@db-ux/core-components": "^3.0.0"
  },
  "devDependencies": {
    "nemo-theme-validator": "^1.0.0"
  }
}
```

### 9.2 Update-Strategie

1. **Vor DB UX Updates**: Theme-Kompatibilität prüfen
2. **Nach Updates**: Visuelle Regression-Tests durchführen
3. **Theme-Versionierung**: Eigene Theme-Versionen parallel zu DB UX verwalten

### 9.3 Migration bei Breaking Changes

```javascript
// nemo-theme-migration.js
const migrationRules = {
  'v3.0.0': {
    // Änderungen von v2 zu v3
    '--old-nemo-property': '--new-nemo-property'
  }
};

function migrateTheme(version) {
  const rules = migrationRules[version];
  if (!rules) return;
  
  // Migration durchführen
  Object.entries(rules).forEach(([oldProp, newProp]) => {
    // Automatische Migration der CSS-Dateien
  });
}
```

## Ressourcen und weiterführende Links

- [DB UX Design System Foundations](https://www.npmjs.com/package/@db-ux/core-foundations)
- [DB UX Design System Components](https://www.npmjs.com/package/@db-ux/core-components)
- [Color Usage Guide](https://design-system.deutschebahn.com/core-web/version/v3.0.8/foundations/colors/readme)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS @layer (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

## Beispiel-Repository

Für ein vollständiges Beispiel der NEMO-Theme-Integration siehe:
```
examples/
├── nemo-theme/
│   ├── css/
│   │   └── nemo-theme.css
│   ├── scss/
│   │   └── nemo-theme.scss
│   ├── html/
│   │   └── wagon-layout.html
│   └── frameworks/
│       ├── angular/
│       ├── react/
│       └── vue/
```

## Support

Bei Fragen zur Theme-Integration wenden Sie sich an:
- **DB UX Design System Team**: [GitHub Issues](https://github.com/db-ux-design-system/core-web/issues)
- **NEMO Development Team**: Interne Dokumentation im RiFF-Projekt