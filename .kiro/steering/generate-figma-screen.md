---
inclusion: manual
---

# DB Designer – Figma Screen generieren

Verwende dieses Skill wenn du einen DB UX Design System v3-konformen Screen in Figma erstellen möchtest.

**Aktivierung:** Schreibe `#generate-figma-screen` oder beginne deine Anfrage mit `DB Designer:` gefolgt von einer Beschreibung und einer Figma-URL mit `node-id`.

**Beispiel:**

```
#generate-figma-screen DB Designer: Erstelle mir ein Dashboard zum Thema Putzmaßnahmen am Bahnhof
https://www.figma.com/design/uI6oKmJ0qDhsEuE0nFah2W/...?node-id=177-1091
```

---

## Pflichtprozess – NIEMALS umgehen

Der Agent darf **keinen** imperativen Figma-Node-Code schreiben (`createFrame`, `createInstance`, `appendChild`, `setBoundVariable` direkt). Jeder Screen läuft ausschließlich über den folgenden Prozess:

1. **Composition Plan (JSON)** erstellen – ein deklaratives Layout-Objekt mit `screen`, `targetNodeId` und `layout[]`.
2. **Render-Runtime** (`db-ux-designer-powers/skills/generate-figma-screen/assets/db-figma-runtime.js`) vollständig und wortgetreu in den `use_figma`-Call einfügen.
3. **`renderPlan(PLAN)`** aufrufen – kein eigener Node-Code.
4. **Audit prüfen** – `res.audit.valid === true`, sonst Plan korrigieren und erneut rendern (max. 3×).

Die vollständige Skill-Anleitung liegt in:

#[[file:packages/agent-cli/db-ux-designer-powers/skills/generate-figma-screen/SKILL.md]]

Die bindenden Design-Regeln (Farbtokens, Typografie, Button-Regeln, Zebra-Pattern, etc.) liegen in:

#[[file:packages/agent-cli/db-ux-designer-powers/context/figma-generation.md]]

## Vorauszuladende Assets

Vor dem Rendern MÜSSEN folgende Dateien gelesen werden:

| Asset | Zweck |
|---|---|
| `assets/db-figma-runtime.js` | Render-Runtime (verbatim in `use_figma` einfügen) |
| `assets/registries/db-component-registry.json` | Gültige Komponenten + Props |
| `assets/registries/db-variable-registry.json` | Farb- und Spacing-Tokens |
| `assets/registries/db-text-style-registry.json` | Registrierte Textstyles |
| `assets/registries/db-library-registry.json` | Library-Zuordnung |
| `assets/examples/dashboard.plan.json` | Referenz-Plan: Dashboard |
| `assets/examples/landingpage.plan.json` | Referenz-Plan: Landingpage |

Alle Pfade relativ zu `packages/agent-cli/db-ux-designer-powers/skills/generate-figma-screen/`.

## Sofort-Stop-Bedingungen

Stoppe und melde den genauen Gap, wenn:

- Eine benötigte Komponente / Variante / Token / Textstyle nicht in den Registries vorkommt.
- Die Figma-URL keine `node-id` enthält → nachfragen.
- `res.audit.valid === false` nach 3 Versuchen.
