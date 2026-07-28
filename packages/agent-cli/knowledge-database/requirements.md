# Requirements: Zentrale Design System Wissensbasis

## Ziel

Die Wissensbasis bildet die zentrale, strukturierte Quelle für alle Inhalte des DB Design Systems.

Sie verbindet fachliche Guidelines mit den zugehörigen Design und Code Artefakten. Dadurch soll jederzeit nachvollziehbar sein:

1. Welche Inhalte zum Design System gehören
2. Welche Figma und Code Artefakte denselben Inhalt repräsentieren
3. Welche Properties, Varianten und Zustände verfügbar sind
4. Wo sich Design und Code unterscheiden
5. Welche Regeln für Nutzung, Kombination und Umsetzung gelten

Die Wissensbasis dient sowohl Menschen als auch AI gestützten Tools als verlässliche Grundlage.

## Anwendungsfälle

Die Inhalte sollen unter anderem verwendet werden für:

* Design System MCP und weitere AI Tools
* Generierung der Dokumentation auf der Design System Plattform
* Generierung und Ergänzung von Storybook Dokumentationen
* Unterstützung bei der Erstellung von Designs und Interfaces
* Unterstützung bei der Implementierung mit Design System Komponenten
* Prüfung von Konsistenz zwischen Figma, Code und Dokumentation
* Erkennung veralteter oder fehlender Dokumentationen

## Grundprinzipien

### Zentrale Quelle

Guidelines und Zuordnungen werden zentral gepflegt und von den verschiedenen Ausgabekanälen konsumiert.

Plattform, Storybook und AI Tools sollen keine voneinander unabhängigen Versionen derselben Information verwalten.

### Eindeutige Identität

Jeder Inhalt erhält eine stabile und systemübergreifende ID. Für Komponenten ist diese ID der **kebab-case Komponentenname** (z. B. `badge`, `custom-select`, `accordion-item`). Dieser Name ist bereits in allen Systemen konsistent verankert:

| System | Ableitung aus ID |
|--------|-----------------|
| Knowledge Database | Ordnername: `components/{id}/` |
| Code | Ordnername: `packages/components/src/components/{id}/` |
| CSS | Klasse: `.db-{id}` |
| MCP Server | Tool-Parameter: `get_component_props("{id}")` |
| Figma | Page-Name: PascalCase/Title-Case-Ableitung (z. B. "Badge", "Custom Select") |
| Storybook | Story-Pfad: `Components/{PascalCase}` |
| Plattform-URL | Pfad: `/documentation/components/{id}` |

Diese ID verbindet:

* Dokumentation
* Figma Komponenten und Properties
* Code Komponenten und Properties
* Storybook Stories
* Plattformseiten

Eine separate UUID oder ein künstlicher Identifier ist nicht notwendig, da Komponentennamen im Design System stabil sind — eine Umbenennung wäre ein Breaking Change und erfordert ohnehin eine Migration.

### Explizite Zuordnung zwischen Design und Code

Design und Code müssen nicht technisch identisch aufgebaut sein. Zwischen Figma Properties und Code Properties besteht grundsätzlich ein Gap:

**Figma Properties ohne Code-Äquivalent:**
Properties wie `🔀 Interaction State` existieren nur im Design zur visuellen Darstellung von Zuständen. Im Code werden diese über CSS-Pseudoklassen (`:hover`, `:focus`) oder Events abgebildet — es gibt keine explizite Prop dafür.

**Code Properties ohne Figma-Äquivalent:**
Properties wie Event-Handler (`onChange`, `onClick`), technische Form-Attribute (`form`, `name`, `value`) oder Framework-spezifische Props existieren nur im Code. Sie lassen sich in Figma nicht sinnvoll darstellen.

**Code Connect Properties als Bindeglied:**
Die `⚙️ Code Connect` Properties in Figma sind das explizite Mapping zwischen Design-Entscheidungen und Code. Sie dokumentieren, welche Figma-Konfigurationen direkt auf eine Code-Prop abgebildet werden und wie die Werte übersetzt werden (z. B. `⚙️ Placement` → `placement`).

Die Wissensbasis muss deshalb explizit dokumentieren:

* welche Artefakte fachlich zusammengehören
* welche Properties einander entsprechen
* welche Properties nur in Figma oder nur im Code existieren
* welche Code Connect Properties das Bindeglied zwischen Design und Code bilden
* welche Unterschiede durch Figma, Frameworks oder technische Einschränkungen entstehen
* wie eine Design Konfiguration in Code übersetzt wird

### Menschenlesbar und maschinenlesbar

Inhalte bestehen aus:

1. Menschenlesbarer Dokumentation in Markdown
2. Maschinenlesbaren Metadaten in einem definierten Format, beispielsweise JSON oder YAML

Freitext darf nicht die einzige Quelle für Informationen sein, die von Tools zuverlässig ausgewertet werden müssen.

## Inhaltstypen

Die Wissensbasis muss unterschiedliche Arten von Design System Inhalten unterstützen, beispielsweise:

* Foundations
* Components
* Patterns
* Layout Guidelines
* Design Laws
* Content Guidelines
* Extensions
* Templates

Alle Inhaltstypen verwenden ein gemeinsames Grundmodell und können zusätzliche typenspezifische Daten enthalten.

## Mindestinformationen pro Inhalt

Jeder Inhalt muss mindestens folgende Informationen enthalten:

### Allgemeine Informationen

* stabile ID
* Name
* Inhaltstyp
* kurze Beschreibung
* Status
* verantwortliches Team oder Owner
* Version oder Änderungsdatum

### Guidelines

* Zweck
* Einsatzbereiche
* Nutzungsempfehlungen
* Einschränkungen
* relevante Accessibility Anforderungen
* bekannte Fehlanwendungen

### Design Referenzen

* Figma File ID
* Node oder Component Set IDs
* Name der Figma Library
* Figma Properties und mögliche Werte
* Varianten und Zustände

### Code Referenzen

* Repository
* Package
* Component oder API Name
* Code Properties und mögliche Werte
* relevante Storybook Referenzen
* Framework oder Plattform

### Mapping

* Zuordnung zwischen Figma und Code Artefakten
* Zuordnung zwischen Figma und Code Properties
* dokumentierte Unterschiede
* Regeln für Transformation oder Interpretation
