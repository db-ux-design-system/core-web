# Adaptive Farben

Das adaptive Farbsystem stellt kontextabhängige Farben bereit, die sich basierend auf der aktiven Variante und dem Farbschema (hell/dunkel) ändern.

## Collections-Überblick

| Collection            | Zweck                                            | Aktivierung                                |
| --------------------- | ------------------------------------------------ | ------------------------------------------ |
| **Color** (adaptiv)   | Farben passen sich dem Eltern-Variant-Kontext an | Automatisch via `data-variant` auf Vorfahr |
| **Mode** (absolut)    | Feste Variant-Farbe, kontextunabhängig           | Direkte Variablen-Bindung                  |
| **Theme** (Primitive) | Interne Roh-Palettenwerte                        | NICHT im Design-Kontext verwenden          |

## Funktionsweise

### Adaptiv (Color Collection)

Wenn `db-adaptive/origin/default` auf ein Element angewendet wird, hängt die aufgelöste Farbe von der aktiven Variante ab. Innerhalb eines `data-variant="brand"`-Containers wird es die Brand-Farbe. Innerhalb von `data-variant="successful"` wird es die Successful-Farbe.

### Absolut (Mode Collection)

Wenn `db-brand/origin/default` angewendet wird, ist es **immer** die Brand-Farbe des aktiven Themes, unabhängig davon welcher Variant-Kontext auf dem Eltern-Element aktiv ist. Verwenden wenn eine explizite Farbe benötigt wird, die sich nicht ändern soll.

## Aktivierung

### In Figma

- **Adaptive Farben**: Aus der Color Collection anwenden. Der aufgelöste Wert ändert sich, wenn der Layer Mode des übergeordneten Frames auf eine andere Variante gesetzt wird.
- **Absolute Farben**: Aus der Mode Collection anwenden. Farbe bleibt fix.

### Im Code

`data-variant` auf einem Container-Element setzen:

```html
<div data-variant="brand">
	<!-- Alle adaptiven Farben lösen zur Brand-Variante auf -->
</div>
```

Gültige Varianten: `neutral`, `brand`, `critical`, `successful`, `warning`, `informational`.

Für Farbschema (hell/dunkel):

```html
<div data-color-scheme="dark">
	<!-- Dunkle Farben -->
</div>
```

## Verfügbare Varianten

### Semantisch (für Komponenten-Einfärbung)

`neutral`, `brand`, `critical`, `successful`, `warning`, `informational`

### Additional (für Datenvisualisierung, Illustrationen)

`yellow`, `orange`, `red`, `pink`, `violet`, `blue`, `cyan`, `turquoise`, `green`, `light-green`, `burgundy`

## Token-Gruppen (adaptiv)

- `bg/basic` — Hintergrundflächen (level-1, level-2, level-3, transparent-full, transparent-semi)
- `on-bg/basic` — Text/Vordergrund auf Basic-Hintergründen (emphasis 100–50)
- `bg/inverted` — Invertierte Flächen (contrast-max, contrast-high, contrast-low)
- `on-bg/inverted` — Text auf invertierten Flächen
- `origin` — Primäre Aktionsfarbe
- `on-origin` — Text auf Origin
- `bg/vibrant` — Akzent-Hintergründe
- `on-bg/vibrant` — Text auf Vibrant-Hintergründen

Alle Gruppen unterstützen States: `default`, `hovered`, `pressed`.

## Figma Variable Collections

- **Color** (adaptiv): variableSetKey `e255d2d5a638d561cb353e2a1c6b99bf8e5c6f05`
- **Mode** (absolut): variableSetKey `d6c69d4b85c3314fa0dcaa78a03eaec7d1026877`
- **Theme** (Primitive, intern): variableSetKey `a4c4f9c0165c6197d09f1fe1706e8595f29da567`
