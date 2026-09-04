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

### Footer

- **`width` an Footer Content und Footer Meta** — In Figma tragen `↳ Footer Content` und `↳ Footer Meta` jeweils vier parallele Komponenten (Full/Large/Medium/Small) statt eines gemeinsamen `width`-Property mit der Hauptkomponente `Footer`. Grund ist eine Figma-Plattformgrenze: Die Breite des Containers innerhalb der Unterkomponenten lässt sich nicht von der Hauptkomponente aus steuern, deshalb müssen die vier Varianten pro Unterkomponente einzeln modelliert werden. Im Code existiert `width` ausschließlich an der Elternkomponente `Footer`; `footer-content` und `footer-meta` haben keine eigene `width`-Prop.
- Konsequenz: 1:4-Mapping zwischen den Sub-Component-Varianten in Figma und der einen `width`-Prop im Code. Kein Modellierungsfehler und keine Design-Entscheidung, sondern eine technische Einschränkung von Figma (vergleichbar mit § 8 „Slots für Unterelemente sind pro Variante unterschiedlich integriert" in `design-library.md`).

### Shell

- **Sechs Figma-Sets vs. eine Code-Komponente** — In Figma ist die Shell als sechs parallele Sets modelliert (Desktop 1440×1024, 1024×768, 1920×1080 und Mobile 375×812, 320×568, 768×1024), im Code existiert eine Komponente `DBShell`. Die Breakpoint-Achse ist damit Figma-only; im Code entsteht sie aus CSS.
- **Positions-Properties liegen im Code an der Elternkomponente** — `controlPanelDesktopPosition`, `controlPanelMobilePosition`, `subNavigationDesktopPosition` und `subNavigationMobilePosition` sind Props von `DBShell`. In Figma sitzen sie an den jeweiligen Breakpoint-Sets (`shell-desktop`, `shell-mobile`). Konsequenz: Wer in der Doku bei Shell Desktop oder Shell Mobile nachschlägt, findet das Property dort, im Code muss es an `DBShell` gesetzt werden.
- **`subNavigationMobilePosition` kennt im Code einen Wert mehr** — Figma bietet `Top` und `Bottom`, der Code zusätzlich `none`. Aus Figma lässt sich der dritte Zustand nicht ableiten.
- **`fadeIn` ist code-only** — Opacity-Transition gegen Layout-Shifts beim Font-Loading. In Figma nicht modellierbar und deshalb ohne Entsprechung.
- **`👁️ Show Drawer` ist Figma-only** — Im Code gibt es kein Pendant; der Drawer wird über die mobile Navigation selbst gesteuert.
- **`CP Navigation` ist design-only und in Figma zweifach typisiert** — an den Desktop-Sets ein Instance-Swap, an den Mobile-Sets eine Variante (`(Def) Drawer` / `Flat Icon`). Beides hat kein Code-Pendant, weil im Code die eingesetzte Navigations-Komponente selbst die Ausprägung bestimmt.
- **`mainId` und `target` sind code-only und aneinander gebunden** — `DBShellContent.mainId` ist das Sprungziel des Skip-Navigation-Links, `DBControlPanelSkipNavigation.target` muss dazu passen. Beide Props haben keine Figma-Entsprechung, der Vertrag zwischen ihnen ist dort nicht abbildbar. Zusätzlich sind `mainClass` und `mainLabel` code-only.
- **Sub Navigation: `🔀 Variant` ohne Code-Pendant an der Komponente** — In Figma wird Drill Down vs. Tree am Set `↳ 🔄 Shell Sub Navigation → Desktop - Left` gewählt. Im Code hat `DBShellSubNavigation` kein `variant`; die Wahl erfolgt an der eingebetteten `DBControlPanelNavigation` über `variant`. Die Sets `Desktop - Top` und `Mobile` tragen in Figma überhaupt keine Properties.
- **Tooltips des Expand-Buttons sind code-only** — `expandButtonTooltip` sowie die React-/Vue-spezifischen `expandButtonTooltipFn` und `onExpandButtonTooltipFn` existieren nur im Code.

### Control Panel

- **Vier Figma-Komponenten vs. ein `variant` im Code (Navigation)** — In Figma sind `Popover - Desktop`, `Popover - Mobile`, `Tree` und `Drill Down` vier parallele Komponenten. Im Code wählt `DBControlPanelNavigation.variant` (`popover` / `tree` / `drilldown`) das Interaktionsmodell an einer Komponente. 1:n-Mapping.
- **Zehn Figma-Sets vs. zwei Code-Komponenten (Navigation Item)** — Figma modelliert Item und Item Group je für Popover horizontal, Popover vertikal, Drill Down und Tree, dazu zwei Flat-Icon-Sets. Im Code entsprechen dem `DBControlPanelNavigationItem` und `DBControlPanelNavigationItemGroup`.
- **Die `show*`-Toggles sind design-only** — `👁️ Show Actions` (übergreifender Container für Actions 1 und 2), `👁️ Show Actions 2`, `👁️ Show Meta Navigation`, `👁️ Show Navigation`, `👁️ Show Indicator (only Lvl1)`, `👁️ Show Level 2+`, `👁️ Show Overflow Button Left/Right` und die `Show *Slot`-Toggles haben kein Code-Pendant. Im Code ergibt sich die Sichtbarkeit daraus, ob der zugehörige Slot (`actions1`, `actions2`, `meta`, …) gefüllt ist.
- **Mobile kann `actions2` in Figma nicht schalten** — Die Desktop-Sets tragen `👁️ Show Actions 2`, die Mobile-Sets nicht. Im Code führt `DBControlPanelMobile` den `actions2`-Slot ebenfalls, er wird im Drawer ausgegeben.
- **`position` ist im Code doppelt vorhanden** — `DBShell.controlPanelMobilePosition` und `DBControlPanelMobile.position`. In Figma existiert die Achse nur einmal, am Shell-Mobile-Set.
- **`orientation` ist code-only** — `DBControlPanelDesktop.orientation` (`horizontal` / `vertical`). In Figma ist die Unterscheidung über getrennte Sets (Top vs. Drill Down/Tree Left) modelliert.
- **Overflow-Buttons: Toggle vs. Automatik** — In Figma werden die Chevrons über `👁️ Show Overflow Button Left/Right` manuell eingeblendet. Im Code erscheinen sie automatisch bei Überlauf; steuerbar sind nur `arrowScrollDistance`, `scrollLeftText` und `scrollRightText`, die es in Figma nicht gibt.
- **Flat Icon: Property-Ebene versetzt** — Die Sets `CP → Flat Icon - Desktop/Mobile` tragen in Figma keine Properties; `📦 Children`, `📦 Children No Text` und `🔀 No Text` sitzen eine Ebene tiefer an `↳ CP Navigation → Flat Icon`. Im Code liegen `noText` und der code-only Slot `skipNavigation` an `DBControlPanelFlatIcon`.
- **Brand: Property-Fläche je Figma-Variante unterschiedlich** — `(Def) Custom` trägt `Children`, `Second Line`, `🔀 Text` und `End Slot`, `Logozusatz` trägt `📦 Logo` und `End Slot`, `Short` trägt keine Properties. Im Code hat `DBControlPanelBrand` eine flache Fläche (`secondLine`, `children`, `endSlot`). Bewusste Entscheidung im Design, kein Modellierungsfehler.
- **`📦 Logo` hat kein Code-Pendant** — Der Logo-Slot existiert nur am Figma-Set `Logozusatz`. Bewusste Inkonsistenz auf Figma-Seite; wie das Logo im Code gesetzt wird, ist noch nicht dokumentiert (siehe `TODO.md`).
- **`🔀 Text` an Brand hat kein Code-Pendant** — Die Achse `(Def) No Text` / `Single Line` / `Double Line` ergibt sich im Code implizit daraus, ob `children` und `secondLine` gefüllt sind.
- **Tree-Sets ohne `🔄 Icon` und `👁️ Show Icon`** — Im Tree sind Icons immer eingeblendet, deshalb ist kein Toggle nötig; der Instance-Swap ist nur an einfachen Items möglich, nicht an der Item Group. Der Code bietet `icon` und `showIcon` dagegen an Item und Item Group an. Bewusste Entscheidung im Design.
- **`Expanded` ist in Figma je Set unterschiedlich typisiert** — an Popover horizontal und Tree eine Variante, an Popover vertikal ein Boolean. Die Aufteilung ist Figma-bedingt und bleibt so; im Code ist es ein Prop an `DBControlPanelNavigationItemGroup`.
- **`control-panel-skip-navigation` ist code-only** — `DBControlPanelSkipNavigation` mit `text` und `target` hat keine Figma-Entsprechung. Der Skip-Link ist damit aus Figma nicht ableitbar, obwohl er für die Tastaturbedienung nötig ist.
- **Weitere code-only Properties** — `drawerHeaderText` und `burgerMenuLabel` (`DBControlPanelMobile`), `tooltip` (`DBControlPanelNavigationItem`), `menuId`, `backButtonId` und `backButtonText` (`DBControlPanelNavigationItemGroup`) sowie `showTreeLine` und `behavior` (`DBControlPanelNavigation`). In Figma sind der Back-Button-Text und vergleichbare Texte manuell zu setzen.

## Icons

- **Format** — Figma: SVG-Instanzen (Component Instances). Code: Icon Font (woff2).
- **Library** — Figma: Separate Library `DB UX DS v3 - DB Theme Icons` (fileKey: `5qAIAjuseE3tpqGbtwglSN`). Code: Package `@db-ux/core-foundations` (assets/).
- **Referenzierung** — Figma: Instance Swap auf Icon-Komponente. Code: String-Name über `icon`-Prop.
- **Größensteuerung** — Figma: Property heißt `size`. Code: Property heißt `weight` (steuert font-weight).

Assets sind Inner Source und nicht in diesem Repository enthalten.
