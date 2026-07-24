# Screen Guidelines – Komposition, visuelle Regeln & Validierung

> Die verbindliche Referenz für KI-Agenten, die DB UX v3 Figma-Screens generieren.
> Beschreibt WAS platziert wird (Komposition) und WIE es aussehen muss (visuelle Regeln).
> Ergänzt den technischen Render-Workflow in `skills/generate-figma-screen/SKILL.md`.
>
> Die maschinenlesbaren Registries liegen unter
> `skills/generate-figma-screen/assets/registries/`: `tokens.json`, `components.json` und
> je ein Ordner pro Seitentyp (`dashboard/`, `landingpage/`).

---

# Teil A — Komposition (WAS wird platziert und in welcher Struktur)

## Grundprinzip

> Designer erstellen die Referenz-Screens und Block-Kataloge in Figma. Die KI folgt dem
> erfassten Katalog pro Seitentyp — das Ergebnis ist geführt, validierbar und wiederholbar.
> Niemals frei Struktur erfinden.

## Das Modell

```
1. Tokens & Komponenten     offizielle DB-Instanzen + gebundene Tokens (tokens.json, components.json)
2. Block                    ein erfasstes, registry-valides Plan-Fragment (blocks.json)
3. Block-Pattern            eine Komposition von Blocks auf Sektions-Ebene (block-patterns.json)
4. Section (Auswahl)        ordnet eine INHALTSFORM/ABSICHT einem Pattern zu (sections.json)
5. Page Template            welche Sections pflicht/optional/verboten sind + Reihenfolge (template.json)
6. Example                  eine DICHTE-/STIL-Referenz — KEIN Skelett zum Kopieren (example.json)
7. Composition Plan         das JSON, das die Runtime rendert (renderPlan)
8. Validierung              Registry-Auflösung + diese Regeln + Runtime-Audit
```

## Seitentyp-Erkennung (erster Schritt)

Aus dem Prompt die Absicht klassifizieren:

- Operativ / KPIs / Störungen / Reporting / Management-Überblick → **`dashboard/`**
- Produkt / Marketing / Event / Service / Storytelling → **`landingpage/`**
- Keines passt → STOP, neuen Seitentyp-Katalog vorschlagen, `requiresHumanReview: true` markieren.

## Kompositions-Workflow (inhaltsgetrieben)

1. **Seitentyp erkennen** und den zugehörigen Ordner unter `registries/<pageType>/` öffnen.
2. **Prompt in Inhaltsgruppen aufteilen** — die verschiedenen Dinge, die gezeigt werden sollen. Jede Gruppe → eine Section.
3. **Jede Gruppe einer Section zuordnen** über `sections.json` → `whenToUse`. Auswählen, nie erfinden. Gruppe ohne Treffer → STOP, `requiresHumanReview: true` markieren.
4. **Sections anordnen** nach `template.json` (Pflicht/Optional/Verboten + Positionsregeln). Die `rules` beachten (Zebra, contentWidth, Action Hierarchy, „keine Mono-Layouts bei heterogenem Inhalt").
5. **Jede Section befüllen** aus ihrem `pattern`/`itemBlock`: `$ref` auflösen, JEDEN `<placeholder>` mit echtem Inhalt füllen, Aktionen über die Action Hierarchy bestimmen. Optionale Nodes NUR weglassen, wenn kein Inhalt zutrifft — nie leere Platzhalter stehenlassen.
6. **Einen Composition Plan zusammensetzen** (Schema in `assets/src/70-edit-engine.js`): Header zuerst, dann die geordneten Sections. `example.json` ist nur eine Dichte-/Stil-Referenz — NICHT die Section-Abfolge kopieren.
7. **Validieren** (siehe Abschnitt Validierung unten), dann über `renderPlan` rendern.

### Ausgabe-Hinweis (vor dem Rendern)

Dokumentiere: erkannter Seitentyp, identifizierte Inhaltsgruppen, gewählte Section pro Gruppe (ID + einzeilige Begründung aus `whenToUse`). Gruppen ohne Treffer oder adaptierte Blocks als `requiresHumanReview: true` markieren.

## Action Hierarchy

Die Art der Aktion ist nie frei wählbar. Erst die _Bedeutung_ der Aktion bestimmen, dann zuordnen:

| Aktionstyp | Wann | Variante |
|------------|------|----------|
| **primary-button** | Wichtigste Aktion der Seite/des Flows | `brand`. EIN Mal pro Viewport, nie pro Card in einem Grid. |
| **equal-item-action** | Mehrere gleichwertige Items mit eigener Aktion | `filled` (oder Link). Alle Items behalten dieselbe Aktion. |
| **link** | Informative / redaktionelle / navigierende Inhalte | Link-Komponente. Standard für „Mehr erfahren", „Details". |
| **button-group** | Mehrere Aktionen auf DEMSELBEN Objekt/Kontext | Max. EINE primäre + sekundäre (`ghost`/`outlined`). |
| **none** | Reine Anzeige-Blocks (Metric Card, Datenzeile) | Kein Aktionselement. |

## Blocks & Block-Patterns

- **`blocks.json`** — atomare Plan-Fragmente mit `<placeholders>` und `source`-Figma-Node-IDs.
- **`block-patterns.json`** — Patterns auf Sektions-Ebene. `level` gibt an, ob es SELBST eine Section IST oder INHALT innerhalb einer Section.
- **`sections.json`** — inhaltsgetriebene Auswahl-Schicht: ordnet Inhaltsform/Absicht (`whenToUse`) einem Pattern + Item-Block + Kardinalität zu.
- **`template.json`** — Page Template: Pflicht-/Optional-/Verboten-Sections, Reihenfolge, seitenweite Regeln.
- Zum Verwenden: Fragment kopieren, `$ref` auflösen, Platzhalter füllen, optionale Nodes (`<...?>`) weglassen, innerhalb von `<a|b|c>` wählen. Erfasste Fragmente NICHT umstrukturieren.
- Fehlender Block (oder `plan: null`-Stub) → STOP und den Gap melden. Nie approximieren.

## Fallback (Human Review)

Zwei Situationen erfordern STOPP:

1. **Kein Seitentyp passt** → neuen Seitentyp-Katalog vorschlagen, `requiresHumanReview: true` markieren.
2. **Benötigter Block fehlt** → genauen Gap melden oder erst aus `source` erfassen (neu erfasste Blocks brauchen Review).

---

# Teil B — Visuelle Regeln (WIE jedes Element aussehen muss)

## Render-Umgebung

- Screens entstehen, indem ein deklarativer **Composition Plan (JSON)** an die gehärtete
  Render-Runtime übergeben wird (Quellcode unter `assets/src/`, gebaut zu
  `db-figma-runtime.min.js`), ausgeführt über das `figma`-MCP-Write-Tool `use_figma`.
- NIEMALS imperativen Figma-Node-Code schreiben. Die Runtime kapselt alle Figma Plugin
  API-Eigenheiten — eigener Code bringt genau die Fehler zurück, die sie verhindert.

## Komponenten

- Alle UI-Elemente (Buttons, Cards, Tags, Inputs, Menus, Navigation, Notifications, Accordion, Badge, Switch, Tooltip, etc.) → ausschließlich offizielle DB-Komponenteninstanzen aus `components.json`.
- NIEMALS ein komponentenartiges Element aus Frames / Rechtecken / Text bauen.
- NIEMALS Fills/Strokes/CornerRadius einer Instanz überschreiben, um eine Variante vorzutäuschen.
- Jeder Screen STARTET mit dem offiziellen `DB Header` (Logo + App-Name) als erstes Child.
- Layout nur über die zugelassenen Primitive: Section, Grid, Container/Stack, Slot.

### Header-Regeln

- Das DB-Logo / der App-Name IST der „Home"-Link. KEINEN `Startseite`/`Home`/`Start`-Navigationspunkt hinzufügen.
- Meta-Navigation und Primary/Secondary Action Icons sind standardmäßig AUS. Nur aktivieren, wenn eine echte, definierte Aktion existiert — nie leere Platzhalter stehenlassen.

## Farbe (nur gebundene Variablen)

- Jede Farbe an eine Figma-Variable binden — nie rohes RGB/HEX.
- `origin`/Brand-Akzent ist NUR AKZENT (Text, Icon, Border). NIEMALS als Hintergrundfläche.
- Große Flächen nutzen nur `color.background.canvas|surface|elevated` (Level-1/2/3).
- Zebra: oberste Section = `color.background.canvas` (Level-1), dann abwechselnd.
- Text-Emphasis: Standard ist `color.text.strong` (100). `weak` (90) / `muted` (80) nur für bewusst abgeschwächten Text. 70 = nur für Icons, nie für Text.

## Typografie (nur Heading/Body-Komponenten — KEIN roher Text)

- **Aller Inhaltstext ist eine offizielle DB-Typografie-KOMPONENTE** — die Concept-Komponente
  `Heading` (`As=h1…h6`) oder `Text` (`Size=Small…3xLarge`).
- Im Composition Plan: `Heading` (Hero=h1, Section-Titel=h2, Card-Titel=h4) und `Body`
  (Caption/Card=Small, Section-Beschreibung=Medium, Hero-Subline=Large). Erfordern Concept-Opt-in.
- **Rohe Text-Nodes sind VERBOTEN.** Die Runtime kennt keinen `Text`-Node-Typ — ein Plan
  damit stoppt hart. Nie `figma.createText()`, nie rohes `fontName`/`fontSize`/`lineHeight`.
- Farbe wird separat über eine Farbvariable gebunden (auf dem inneren Text der Komponente).
- **Heading-Hierarchie**: Section `title` = h2; innere Headings = h3/h4/h5. Nie zwei gleich große Headlines in einer Section.
- **Abstand Section-Titel↔Beschreibung** = `xs`. Nie `2xs`.
- **Gewicht und Farb-Emphasis müssen übereinstimmen**: Bold paart mit `strong` (100). Abschwächung (`weak`/`muted`) paart mit Regular. VERBOTEN: Bold + muted/weak, oder Regular + strong bei beabsichtigter Abschwächung. Meta/Caption = Regular + muted.

## Spacing, Radius, Größen

- Spacing und Border-Radius binden an registrierte DB-Variablen.
- Sections passen sich vertikal an den Inhalt an (HUG) — nie eine feste Höhe.
- Card-/Container-Inhaltsbereiche ebenfalls HUG.
- **Section-Spacing nach Screentyp**: Dashboards/B2B → `spacing: "small"` (kompakt). Marketing/Landing → `medium` oder `large`. Nie mischen auf einem Screen.

## Layout-Breite & Landingpages

- Standard-Content-Sections: volle Breite.
- **Landingpages**: jede Section nutzt eine schmale, zentrierte Spalte. `contentWidth: "Small (768)"` für textlastige Seiten oder `"Medium (1024)"` für mediengeführte. EINE Breite für die ganze Seite.
- **Hero und abschließende CTA**-Sections: zentriert (`align: "center"`).

## Section-Struktur & Gestalt-Gruppierung

- Jede Content-Section MUSS einen `title` tragen (und optionale `description`).
- Seitentitel/Hero und die erste Inhaltsgruppe gehören in DIESELBE obere Section — keine dünnen Titel-only-Sections.
- **Einzelne-Block-Sections vermeiden.** Nur Hero, abschließende CTA und eine einzelne Media/Text-Reihe rechtfertigen eine eigenständige Section. Einzelne Elemente in benachbarte Sections eingliedern.
- **Card-Inhalt ist OBEN ausgerichtet** (`align: "top-left"`). Nur eine abschließende Aktion darf unten rechts sitzen (in eigenem `ContainerVertical` mit `fillHeight: true` + `justify: "end"`).
- **Ein einheitlicher Gap pro Content-Block** — Standard `lg`. Card `spacing` passt zum Block-Gap. Keine verschachtelten engeren `2xs`/`xs`-Untergruppen. Nur horizontale `metaRow` und `spread`-Reihen sind verschachtelte Container.
- Card-Grids mit mehreren Spalten: kürzere Cards nutzen `fillHeight: true` für gleiche Höhe.
- Listen-/Status-Reihen: volle Card-Breite über `spread: true` + abschließendes `hugWidth: true`.

## Button-Nutzung

- Card-Aktion = immer `filled`. Seiten-/Hero-/Abschluss-CTA = `brand`.
- Einzelner `ghost`/`outlined` in einer Card ist VERBOTEN — alleine zu schwach.
- `ghost`/`outlined` nur gültig als sekundäre Aktion direkt neben einem stärkeren Button.
- Die _Art_ der Aktion wird über die Action Hierarchy (Teil A) bestimmt.

## Klickbare Cards, Buttons & Links

- Eine klickbare Card (Link-Card) DARF KEINEN Button oder separaten Link enthalten (keine verschachtelten interaktiven Elemente).
- **Befehl / Zustandsänderung** → expliziter Button, Card NICHT klickbar.
- **Mehrere Aktionen oder zustandsbehaftete Aktionen** → Card NICHT klickbar, explizite Steuerelemente.
- **Genau ein Navigationsziel, die ganze Card beschreibt es** → ganze Card = Link. Kein inneres Steuerelement.
- **Navigation aus nicht-klickbarer Card** → Link verwenden (nicht Button). Navigation = Link, CTA/Befehl = Button.

## Media / Text Module

- Bild + Text-Reihe: Textblock vertikal zentriert zum Bild (`fillHeight: true`, `align: "left"`).
- Grid-Layout: `gridLayout: "50-50"`, `gridGap: "xl"` (nie der Standard-Gap bei Media/Text).
- Abgerundete Ecken binden einen DB-Radius-Token — nie rohe Pixelwerte. `radius: "none"` für eckig.

## Bilder

- MÜSSEN ein Design-System-Seitenverhältnis verwenden: `ratio: "1:1"`, `"3:4"` oder `"16:9"`.
- Breite füllt den Container, Höhe ergibt sich aus dem Ratio. Freie Pixel-Höhe ist VERBOTEN.

## Icons

- Inhaltliche Icons = echte DB `Icon`-Komponente (`{ "type": "Icon", "name": "arrow_right" }`).
- NIEMALS ein Bild-Rechteck, umgefärbte Form oder Emoji.
- Icon-Größe ist intrinsisch über die `Size`-Variante bestimmt — die Instanz HUGt, nie manuell vergrößern.
- Namen werden über `registries/icons.json` aufgelöst. Immer `name` angeben — keine leeren Platzhalter.
- Fehlendes Icon → über `search_design_system` auflösen, zu `icons.json` hinzufügen, mit `node build-runtime.cjs` neu bauen (generiert die Runtime `ICON_KEYS`-Map).

---

# Validierung / Linting

Diese Checkliste vor dem Abschluss durchlaufen.

## Registry-Auflösung (harte Stopps)

- Jede Komponente + Variante löst sich in `components.json` auf.
- Jeder Farb-/Spacing-/Radius-Token und Textstil löst sich in `tokens.json` auf.
- Jede Block-/Pattern-ID löst sich im jeweiligen Seitentyp (`blocks.json` / `block-patterns.json`) auf.

## Kompositions-Regeln

- Seitentyp erkannt und korrekter Ordner geladen.
- Prompt in Inhaltsgruppen aufgeteilt; jede einer Section über `sections.json` → `whenToUse` zugeordnet (ID + Begründung dokumentiert).
- Sections nach `template.json` angeordnet; Pflicht vorhanden, Verbotene absent.
- Kein Mono-Layout: heterogener Inhalt nutzt VERSCHIEDENE Patterns.
- Jeder Block/jedes Pattern aus dem Seitentyp-Katalog — keine erfundenen Fragmente.
- `example.json` nur als Dichte-/Stil-Referenz verwendet, nicht kopiert.
- Gruppen ohne Treffer oder adaptierte Blocks → `requiresHumanReview: true`.

## Visuelle Regeln

- Action Hierarchy: ≤1 `brand`-Button pro Seite; gleichwertige Items teilen eine Aktionsart; keine verschachtelten Interaktionen in klickbaren Cards.
- Typografie: ALLER Text über Heading/Body-Komponenten (kein roher Text); Gewicht/Farbe stimmen überein; Heading-Hierarchie (h2 → h3/h4/h5 innen).
- Section-Struktur: jede Section hat Titel; einheitlicher Gap; keine Single-Block-Sections (außer Hero/CTA/Media-Text); Card-Inhalt oben ausgerichtet.
- Farbe/Dichte/Breite: Header ist erstes Child; erste Section = Canvas (Level-1); Zebra alterniert; Dashboards = `spacing: "small"`; Landingpages = konsistente zentrierte `contentWidth`.
- Komponenten/Bilder/Icons: alles offizielle Instanzen; alle Farben/Spacings/Radii gebunden; Bilder mit Ratio; Icons mit `Icon`-Komponente und spezifischem `name`.

## Runtime-Audit

- `renderPlan(...).audit.valid === true`.

---

# Stopp-Bedingungen (konsolidiert)

STOP und den genauen Gap melden — nie approximieren — wenn:

- Eine benötigte Komponente/Variante/Token/Textstil in den Registries fehlt.
- Kein Seitentyp zum Prompt passt (neuen Katalog vorschlagen).
- Ein benötigter Block fehlt oder nur als `plan: null`-Stub existiert.
- Eine Fläche eine Button-Variante braucht, die nicht existiert.
- Eine Concept-Komponente benötigt wird, aber `concept_components` nicht aktiviert ist.
- Die Figma-URL keine `node-id` enthält.
- `res.audit.valid === false` nach 3 Versuchen.
