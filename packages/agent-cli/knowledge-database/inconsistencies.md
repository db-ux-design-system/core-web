# Inconsistencies

Tracking von Unterschieden zwischen Figma und Code sowie bekannte Gaps.

## Abgrenzung

Hierher gehören ausschließlich Abweichungen zwischen Figma und Code sowie offene Befunde. Drei Arten von Wissen werden regelmäßig fälschlich hier abgelegt:

- **Verhalten und Property-Fläche einer Komponente** — gehört in die jeweilige `guidelines.md`. Auch fehlende Properties gehören dorthin, weil Konsumenten sie kennen müssen. Wer in Figma einen Toggle sucht und ihn nicht findet, braucht die Information in der Doku, nicht in einer internen Notiz.
- **Modellierungsentscheidungen der Figma-Library** — gehören in das Steering `design-library.md` der Design Power des Core Teams. Sie betreffen fast immer mehrere Komponenten und werden unter einer Komponentenüberschrift wiederholt als Befund aufgeworfen.
- **Was nach einem Figma-Release zu verifizieren ist** — gehört in die `TODO.md`.
- **Noch nicht geklärte Beobachtungen aus dem Auslesen der Figma-Library** — gehören in die [figma-findings.md](figma-findings.md) und wandern erst nach der Klärung an ihren Zielort.

Die Leitfrage: **Weichen Figma und Code voneinander ab?** Nur dann ist es ein Eintrag in dieser Datei.

Ein anderer Weg zum gleichen Ergebnis ist keine Abweichung. Entscheidend ist, ob das erreichbare Ergebnis unterschiedlich ist oder ob sich aus Figma etwas ableiten lässt, das im Code nicht existiert. Ein Rückstand im Code, der noch aufgeholt wird, ist ebenfalls keine Abweichung.

## Figma-only tokens (no CSS custom property equivalent)

### Opacity

- **`db-opacity/none`** — Value is 0. In code use `opacity: 0` directly. Figma Key: `f06e98ba2930b3e2c2ce64024ef407bacaee89c2`

### Spacing

- **`db-spacing/fixed/none`** — Value is 0. In code use `gap: 0` / `padding: 0` directly. Figma Key: `1bc966c4ce29569a4d65020e0fc9439341553db7`

## Code-only tokens (no Figma variable equivalent)

### Transition

- **`--db-transition-duration-*`** — All duration tokens (extra-fast, fast, medium, slow, extra-slow)
- **`--db-transition-timing-*`** — All timing tokens (emotional, functional, show, hide)
- **`--db-transition-straight-*`** — All composed shorthand transitions

### Colors

- **`--db-adaptive-on-origin-hovered`** — No Figma equivalent. Accessibility (contrast) cannot be guaranteed for this state.
- **`--db-adaptive-on-origin-pressed`** — No Figma equivalent. Accessibility (contrast) cannot be guaranteed for this state.

## Structural differences

### Elevation

- In Figma: Effect Styles (not variables). In Code: CSS custom properties (`--db-elevation-sm/md/lg`). Different mechanism, same intent.

### Density collection scope

- In Figma liegen `sizing`, `spacing-fixed`, `spacing-responsive`, `border-width`, `border-radius`, `opacity`, `container`, `screen` und `typography` in der Density Collection und haben je drei Mode-Varianten.
- In Code skaliert die Density-Ebene (`packages/foundations/scss/density/`) nur `sizing`, `spacing-fixed`, `spacing-responsive` und `typography`. Für `border-width`, `border-radius`, `opacity`, `container` und `screen` existieren keine Density-Overrides — diese Tokens sind dort konstant.
- Konsequenz: Ein Density-Wechsel ändert diese fünf Kategorien in Figma, im Browser nicht. Klärungsbedarf mit Design und Dev, welche Seite die Zielrichtung vorgibt.

### Theme collection

- In Figma: Palette primitives (0–14 steps), internal. In Code: CSS custom properties (`--db-{variant}-0` to `-14`). Theme collection is internal in Figma, not for direct design use.

## Component Gaps

### Custom Select

- **Custom Select List** — No dedicated subcomponent in Figma. Review during refactoring.
- **Property-Verteilung Dev vs. Design** — In Figma liegen Properties wie der Clear Selection Button, die Label-Variante und die Anzeige der ausgewählten Werte am Sub-Component **Custom Select Form Field**. Im Code liegen sie als `showClearSelection`, `variant` und `selectedType` an der Elternkomponente `DBCustomSelect`. Bis zum geplanten Refactoring sind die Regeln dort dokumentiert, wo sie fachlich hingehören (Form Field), mit Hinweis auf die Elternkomponente als Ablageort des Properties.

### Tag

- **Interaktivität: Component Sets vs. Komposition** — In Figma sind vier Component Sets modelliert (Static, Interactive, Interactive Toggle, Removable). Im Code gibt es dafür nur `behavior` mit `static | removable`; dieses Property schaltet ausschließlich den Entfernen-Button. Interaktive Tags entstehen über das eingebettete Element (`<input type="checkbox">` / `<input type="radio">` im `<label>`, `<a>`, `<button>`), siehe `behavior.example` und `example-strong.example`. Beide Achsen sind kombinierbar, in Figma sind sie es nicht.
- Konsequenz: Ein 1:n-Mapping zwischen Figma-Sets und Code-Property. Werte wie `behavior="link"` oder `behavior="button"` existieren nicht und dürfen nicht aus den Set-Namen abgeleitet werden.

## Icons

- **Format** — Figma: SVG-Instanzen (Component Instances). Code: Icon Font (woff2).
- **Library** — Figma: Separate Library `DB UX DS v3 - DB Theme Icons` (fileKey: `5qAIAjuseE3tpqGbtwglSN`). Code: Package `@db-ux/core-foundations` (assets/).
- **Referenzierung** — Figma: Instance Swap auf Icon-Komponente. Code: String-Name über `icon`-Prop.
- **Größensteuerung** — Figma: Property heißt `size`. Code: Property heißt `weight` (steuert font-weight).

Assets sind Inner Source und nicht in diesem Repository enthalten.
