# NEMO Theme Integration Examples

Dieses Verzeichnis enthält praktische Beispiele für die Integration des NEMO-Themes in verschiedene Entwicklungsumgebungen und Frameworks.

## Übersicht

Das NEMO-Theme erweitert das DB UX Design System um spezifische Farben und Komponenten für die RiFF-Anwendung, insbesondere für:

- **Platzeigenschaften im Wagenlayout**: Verfügbar, besetzt, reserviert, nicht verfügbar
- **Wagenklassen-Tags**: 1. Klasse, 2. Klasse, Business
- **Prioritäts-Indikatoren**: Hoch, Mittel, Niedrig, Info

## Beispiel-Struktur

```
examples/nemo-theme/
├── css/
│   └── nemo-theme.css           # Standard CSS Implementation
├── scss/
│   └── nemo-theme.scss          # SCSS Version mit Variablen und Mixins
├── html/
│   └── wagon-layout.html        # Vollständiges HTML-Beispiel
└── frameworks/
    ├── angular/
    │   └── nemo-components.ts   # Angular Komponenten
    ├── react/
    │   └── NemoComponents.tsx   # React Komponenten
    └── vue/
        ├── NemoSeat.vue         # Vue 3 Einzelkomponenten
        ├── NemoClassTag.vue
        ├── NemoPriorityTag.vue
        ├── NemoWagonLayout.vue
        ├── NemoApp.vue
        └── composables/
            └── useNemoTheme.ts  # Vue Composable für Theme-Management
```

## Schnellstart

### 1. HTML/CSS Beispiel

Das einfachste Beispiel ist die HTML-Datei, die alle Features demonstriert:

```bash
# Öffnen Sie die HTML-Datei in einem Browser
open examples/nemo-theme/html/wagon-layout.html
```

**Features:**
- ✅ Interaktives Wagenlayout
- ✅ Theme-Umschalter (Dark/Light Mode)
- ✅ Barrierefreiheit (High Contrast)
- ✅ Responsive Design
- ✅ Theme-Validierung
- ✅ Debug-Informationen

### 2. CSS Integration

```css
/* In Ihrer Haupt-CSS-Datei */
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css";
@import "@db-ux/core-foundations/build/styles/defaults/default-root.css";
@import "@db-ux/core-foundations/build/styles/defaults/default-required.css";

/* NEMO Theme nach dem Standard-Theme laden */
@import "./examples/nemo-theme/css/nemo-theme.css";

/* Komponenten */
@import "@db-ux/core-components/build/components/tag/tag.css";
```

### 3. SCSS Integration

```scss
// In Ihrer Haupt-SCSS-Datei
@import "@db-ux/core-foundations/build/styles/defaults/default-theme.scss";
@import "@db-ux/core-foundations/build/styles/defaults/default-root.scss";
@import "@db-ux/core-foundations/build/styles/defaults/default-required.scss";

// NEMO Theme
@import "./examples/nemo-theme/scss/nemo-theme.scss";

// Verwendung der NEMO SCSS-Funktionen
.custom-seat {
  background-color: nemo-color('seat-available');
  
  &:hover {
    background-color: nemo-color('seat-available', 'dark');
  }
}
```

## Framework-spezifische Beispiele

### Angular

```typescript
// app.module.ts
import { NemoThemeModule } from './examples/nemo-theme/frameworks/angular/nemo-components';

@NgModule({
  imports: [
    // ... andere Imports
    NemoThemeModule
  ],
  // ...
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<nemo-wagon-layout
  wagonNumber="A"
  wagonClass="first"
  [seats]="seats"
  [interactive]="true"
  [showStats]="true"
></nemo-wagon-layout>
```

### React

```tsx
// App.tsx
import { NemoApp } from './examples/nemo-theme/frameworks/react/NemoComponents';

function App() {
  return <NemoApp />;
}

// Oder einzelne Komponenten verwenden
import { NemoSeat, NemoWagonLayout, useNemoTheme } from './examples/nemo-theme/frameworks/react/NemoComponents';

function MyComponent() {
  const { toggleDarkMode, validateTheme } = useNemoTheme();
  
  return (
    <div>
      <button onClick={toggleDarkMode}>Theme wechseln</button>
      <NemoSeat seatNumber="1A" status="available" />
    </div>
  );
}
```

### Vue 3

```vue
<!-- App.vue -->
<template>
  <NemoApp />
</template>

<script setup>
import NemoApp from './examples/nemo-theme/frameworks/vue/NemoApp.vue'
</script>
```

```vue
<!-- Oder einzelne Komponenten verwenden -->
<template>
  <div>
    <button @click="toggleDarkMode">Theme wechseln</button>
    <NemoSeat seat-number="1A" status="available" @seat-click="handleSeatClick" />
  </div>
</template>

<script setup>
import NemoSeat from './examples/nemo-theme/frameworks/vue/NemoSeat.vue'
import { useNemoTheme } from './examples/nemo-theme/frameworks/vue/composables/useNemoTheme'

const { toggleDarkMode } = useNemoTheme()

const handleSeatClick = (seatNumber, status) => {
  console.log(`Seat ${seatNumber} clicked, status: ${status}`)
}
</script>
```

## Verfügbare Komponenten

### NemoSeat

Einzelner Sitzplatz mit Status-Anzeige.

**Props/Attributes:**
- `seatNumber`: String - Platznummer (z.B. "1A")
- `status`: 'available' | 'occupied' | 'reserved' | 'disabled'
- `interactive`: Boolean - Ob der Platz klickbar ist
- `onClick/onSeatClick`: Function - Callback für Klick-Events

### NemoClassTag

Tag für Wagenklassen-Anzeige.

**Props/Attributes:**
- `classType`: 'first' | 'second' | 'business'

### NemoPriorityTag

Tag für Prioritäts-Anzeige.

**Props/Attributes:**
- `priority`: 'high' | 'medium' | 'low' | 'info'

### NemoWagonLayout

Komplettes Wagenlayout mit mehreren Sitzplätzen.

**Props/Attributes:**
- `wagonNumber`: String - Wagon-Bezeichnung
- `wagonClass`: 'first' | 'second' | 'business'
- `seats`: Array - Sitzplatz-Daten
- `interactive`: Boolean - Ob Sitzplätze klickbar sind
- `showStats`: Boolean - Statistiken anzeigen

## CSS Custom Properties

Das NEMO-Theme definiert folgende CSS Custom Properties:

### Sitzplatz-Farben
```css
--nemo-seat-available-bg: #28a745;
--nemo-seat-available-color: #ffffff;
--nemo-seat-occupied-bg: #dc3545;
--nemo-seat-occupied-color: #ffffff;
--nemo-seat-reserved-bg: #ffc107;
--nemo-seat-reserved-color: #212529;
--nemo-seat-disabled-bg: #6c757d;
--nemo-seat-disabled-color: #ffffff;
```

### Wagenklassen-Farben
```css
--nemo-class-first-bg: #6f42c1;
--nemo-class-first-color: #ffffff;
--nemo-class-second-bg: #007bff;
--nemo-class-second-color: #ffffff;
--nemo-class-business-bg: #fd7e14;
--nemo-class-business-color: #ffffff;
```

### Prioritäts-Farben
```css
--nemo-priority-high-bg: #dc3545;
--nemo-priority-high-color: #ffffff;
--nemo-priority-medium-bg: #ffc107;
--nemo-priority-medium-color: #212529;
--nemo-priority-low-bg: #28a745;
--nemo-priority-low-color: #ffffff;
--nemo-priority-info-bg: #17a2b8;
--nemo-priority-info-color: #ffffff;
```

## Barrierefreiheit

Das NEMO-Theme unterstützt:

- **Dark Mode**: Automatische Erkennung über `prefers-color-scheme`
- **High Contrast**: Spezielle Farben für `prefers-contrast: high`
- **Reduced Motion**: Deaktiviert Animationen bei `prefers-reduced-motion: reduce`
- **Keyboard Navigation**: Alle interaktiven Elemente sind per Tastatur bedienbar
- **Screen Reader**: ARIA-Labels für alle Sitzplätze

## Theme-Validierung

Verwenden Sie die JavaScript-Funktionen zur Validierung:

```javascript
// Vanilla JavaScript
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
  
  return {
    isValid: missing.length === 0,
    missingProperties: missing
  };
}

// React Hook
const { validateTheme } = useNemoTheme();
const result = validateTheme();

// Vue Composable
const { validateTheme } = useNemoTheme();
const result = validateTheme();
```

## Responsive Design

Das NEMO-Theme passt sich automatisch an verschiedene Bildschirmgrößen an:

- **Mobile (≤ 768px)**: 2x2 Sitzplatz-Grid, kleinere Tags
- **Tablet (769px - 1199px)**: Standard-Größen
- **Desktop (≥ 1200px)**: Größere Sitzplätze und Tags

## Anpassung

### Eigene Farben definieren

```css
:root {
  /* Überschreiben der Standard-NEMO-Farben */
  --nemo-seat-available-bg: #your-color;
  --nemo-class-first-bg: #your-color;
}
```

### SCSS-Variablen überschreiben

```scss
// Vor dem NEMO-Theme-Import
$nemo-seat-available: #your-color;
$nemo-class-first: #your-color;

@import "./examples/nemo-theme/scss/nemo-theme.scss";
```

### Neue Theme-Varianten

```css
/* Zusätzliche Varianten */
:root {
  --nemo-seat-maintenance-bg: #orange;
  --nemo-class-premium-bg: #gold;
}

[data-nemo-seat-status="maintenance"] {
  background-color: var(--nemo-seat-maintenance-bg);
  color: white;
}

[data-nemo-class="premium"] {
  background-color: var(--nemo-class-premium-bg);
  color: black;
}
```

## Testing

### Visueller Test

1. Öffnen Sie `examples/nemo-theme/html/wagon-layout.html`
2. Testen Sie verschiedene Theme-Modi
3. Prüfen Sie die Responsive-Ansicht
4. Validieren Sie das Theme

### Automatisierte Tests

```javascript
// Jest/Vitest Beispiel
describe('NEMO Theme', () => {
  it('should load all required CSS properties', () => {
    const { isValid, missingProperties } = validateNemoTheme();
    expect(isValid).toBe(true);
    expect(missingProperties).toHaveLength(0);
  });
  
  it('should handle seat status changes', () => {
    const seat = document.querySelector('[data-nemo-seat-status="available"]');
    seat.click();
    expect(seat.getAttribute('data-nemo-seat-status')).toBe('reserved');
  });
});
```

## Troubleshooting

### Theme wird nicht geladen

1. Prüfen Sie die Import-Reihenfolge (NEMO-Theme nach Standard-Theme)
2. Validieren Sie mit `validateNemoTheme()`
3. Überprüfen Sie die Browser-Konsole auf CSS-Fehler

### Farben werden nicht angezeigt

1. Prüfen Sie, ob die CSS Custom Properties definiert sind
2. Verwenden Sie `logNemoThemeValues()` zur Debug-Ausgabe
3. Überprüfen Sie die CSS-Spezifität

### Responsive Design funktioniert nicht

1. Prüfen Sie den Viewport-Meta-Tag
2. Überprüfen Sie die CSS-Media-Queries
3. Testen Sie mit Browser-Entwicklertools

## Support

Bei Fragen zur NEMO-Theme-Integration:

1. **Dokumentation**: Siehe `packages/foundations/docs/CustomThemeIntegration.md`
2. **Beispiele**: Verwenden Sie die Beispiele in diesem Verzeichnis als Referenz
3. **Debugging**: Nutzen Sie die integrierten Validierungs- und Debug-Funktionen

## Beitrag

Wenn Sie Verbesserungen oder zusätzliche Beispiele haben:

1. Folgen Sie den bestehenden Code-Konventionen
2. Testen Sie Ihre Änderungen in verschiedenen Browsern
3. Dokumentieren Sie neue Features
4. Stellen Sie sicher, dass die Barrierefreiheit gewährleistet ist