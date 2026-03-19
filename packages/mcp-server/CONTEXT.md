# DB UX Design System – MCP Server

## Ziel

Dieser MCP-Server (Model Context Protocol) stellt LLMs (z. B. Amazon Q, GitHub Copilot, Claude) strukturierten Zugriff auf die UI-Komponenten und Code-Beispiele des DB UX Design Systems bereit. Die Kommunikation erfolgt ausschließlich über **stdio**, sodass der Server als lokaler Prozess von jedem MCP-kompatiblen Client gestartet werden kann.

Konkrete Anwendungsfälle:

- Ein LLM fragt nach der API einer Komponente (z. B. `DBButton`) und erhält die Mitosis-Quelldatei sowie generierte Framework-Ausgaben.
- Ein LLM sucht nach Verwendungsbeispielen für eine Komponente in React, Angular oder Vue.
- Ein LLM prüft, welche Komponenten im Design System verfügbar sind.

## Tech-Stack

| Technologie | Zweck |
|---|---|
| **Node.js** (≥ 20) | Laufzeitumgebung |
| **TypeScript** | Typsicherheit, konsistent mit dem restlichen Monorepo |
| **`@modelcontextprotocol/sdk`** | Offizielles MCP SDK – stellt `McpServer`, Transport-Klassen und Tool-/Resource-Primitives bereit |
| **`tsx`** | Entwicklungs-Runner (kein separater Build-Schritt nötig) |
| **`esbuild`** | Produktions-Build zu einem einzelnen CJS/ESM-Bundle |

## Monorepo-Struktur (relevant für diesen Server)

```
core-web/
├── packages/
│   ├── components/          # Mitosis-Quelldateien (framework-agnostisch)
│   │   └── src/
│   │       └── components/
│   │           └── {component}/
│   │               ├── {component}.lite.tsx   # Mitosis-Komponente
│   │               ├── {component}.model.ts   # Props / Typen
│   │               └── examples/              # Verwendungsbeispiele (.example.lite.tsx)
│   └── mcp-server/          # Dieses Paket
│       └── src/
│           └── index.ts
└── output/
    ├── react/               # Generierter React-Code
    │   └── src/lib/
    │       └── {component}/
    ├── angular/             # Generierter Angular-Code
    │   └── src/lib/
    │       └── {component}/
    └── vue/                 # Generierter Vue-Code
        └── src/lib/
            └── {component}/
```

## MCP-Konzepte in diesem Server

### Tools (LLM-aufrufbare Funktionen)

| Tool | Beschreibung |
|---|---|
| `list_components` | Gibt alle verfügbaren Komponentennamen zurück |
| `get_component_source` | Liest die Mitosis-Quelldatei einer Komponente |
| `get_component_examples` | Liest alle Beispieldateien einer Komponente |
| `get_framework_output` | Liest den generierten Code für React / Angular / Vue |

### Resources (statische Inhalte)

Komponentendateien können auch als MCP-Resources exponiert werden, damit Clients sie direkt referenzieren können (URI-Schema: `db-ux://components/{name}`).

## Kommunikation

Der Server verwendet `StdioServerTransport` aus dem MCP SDK. Er wird als Kind-Prozess vom MCP-Client gestartet:

```json
{
  "mcpServers": {
    "db-ux": {
      "command": "node",
      "args": ["packages/mcp-server/build/index.js"]
    }
  }
}
```

Während der Entwicklung kann `tsx` verwendet werden:

```json
{
  "mcpServers": {
    "db-ux": {
      "command": "npx",
      "args": ["tsx", "packages/mcp-server/src/index.ts"]
    }
  }
}
```

## Entwicklung

```bash
# Abhängigkeiten installieren (aus Monorepo-Root)
npm install

# Server direkt starten (Entwicklung)
npm run dev --workspace=@db-ux/mcp-server

# Produktions-Build
npm run build --workspace=@db-ux/mcp-server
```
