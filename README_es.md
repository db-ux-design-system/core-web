<!-- hy-mt2-i18n:start -->
[English](./README.md) | [中文](./README_zh-CN.md) | [日本語](./README_ja.md) | **Español**
<!-- hy-mt2-i18n:end -->

<!-- markdownlint-configure-file { "MD013": false, "MD041":false } -->
<!-- markdownlint-disable MD033 MD010 -->

<picture><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.avif" type="image/avif"><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.webp" type="image/webp"><img src="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.jpg" alt=""></img></picture>

# Sistema de Diseño UX de Deutsche Bahn v3 🚂💖

![Parte del DB UX Design System (Versión 3)](https://img.shields.io/badge/Part%20of-DB%20UX%20Design%20System%20v3-d7dce1.svg)
[![Pipeline predeterminado](https://github.com/db-ux-design-system/core-web/actions/workflows/default.yml/badge.svg)](https://github.com/db-ux-design-system/core-web/actions/workflows/default.yml)
![Insignia de licencia Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![Estilo de código: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Estilo de código XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Bienvenidos a las PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Acuerdo para colaboradores](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md)

El DB UX Design System v3 ofrece componentes de interfaz HTML sólidos, estilos visuales reutilizables y herramientas potentes que ayudan a desarrolladores, diseñadores y autores de contenido a crear, mantener y escalar experiencias digitales de primera categoría.

<figure>
	<cite>Ya no estamos diseñando páginas. Estamos diseñando sistemas de componentes.</cite>
	<figcaption><a href="https://bradfrost.com/blog/post/bdconf-stephen-hay-presents-responsive-design-workflow/" target="_blank" rel="noopener noreferrer">Stephen Hay</a>. <a href="https://vimeo.com/67476280" title="Brad Frosts en la conferencia beyond tellerrand sobre diseño atómico" target="_blank" rel="noopener noreferrer">Citado en una presentación de Brad Frost en la conferencia beyond tellerrand.</a></figcaption>
</figure>

## Paquetes

| Paquete                                                                                                       | Contenido                                                            | Versión                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@db-ux/core-foundations](https://github.com/db-ux-design-system/core-web/tree/main/packages/foundations)     | Estilos y recursos CSS/SCSS/Tailwind                                | [![@db-ux/core-foundations en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión en npm")](https://npmjs.com/package/@db-ux/core-foundations "DB UX Design System – en NPM")           |
| [@db-ux/core-components](https://github.com/db-ux-design-system/core-web/tree/main/packages/components)       | Estilos CSS/SCSS para componentes                                     | [![@db-ux/core-components en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión en npm")](https://npmjs.com/package/@db-ux/core-components "DB UX Design System – en NPM")             |
| [@db-ux/ngx-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/angular)        | Componentes nativos de Angular                                          | [![@db-ux/ngx-core-components en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión en npm")](https://npmjs.com/package/@db-ux/ngx-core-components "DB UX Design System – en NPM")     |
| [@db-ux/react-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/react)        | Componentes nativos de React                                            | [![@db-ux/react-core-components en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión npm")](https://npmjs.com/package/@db-ux/react-core-components "Sistema de diseño UX de DB – en NPM") |
| [@db-ux/v-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/vue)              | Componentes nativos de Vue 3                                            | [![@db-ux/v-core-components en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión npm")](https://npmjs.com/package/@db-ux/v-core-components "Sistema de diseño UX de DB – en NPM")         |
| [@db-ux/wc-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/stencil)         | Componentes web                                                     | [![@db-ux/wc-core-components en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión npm")](https://npmjs.com/package/@db-ux/wc-core-components "Sistema de diseño UX de DB – en NPM")       |
| [@db-ux/agent-cli](https://github.com/db-ux-design-system/core-web/tree/main/packages/agent-cli)              | Herramienta CLI que copia la documentación de `@db-ux` a tu repositorio | [![@db-ux/agent-cli en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión npm")](https://npmjs.com/package/@db-ux/agent-cli "Sistema de diseño UX de DB – en NPM")                         |
| [@db-ux/mcp-server](https://github.com/db-ux-design-system/core-web/tree/main/packages/mcp-server)            | Servidor del Protocolo de Contexto de Modelo (MCP)                                | [![@db-ux/mcp-server en Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "versión npm")](https://npmjs.com/package/@db-ux/mcp-server "Sistema de diseño UX de DB – en NPM")                       |
| [@db-ux/core-eslint-plugin](https://github.com/db-ux-design-system/core-web/tree/main/packages/eslint-plugin) | Plugin de ESLint para la validación del uso de componentes                     | [![@db-ux/core-eslint-plugin on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40db-ux%2Fcore-eslint-plugin%2Flatest&query=%24.version&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-eslint-plugin "DB UX Design System – en NPM")                        |
| [@db-ux/core-stylelint](https://github.com/db-ux-design-system/core-web/tree/main/packages/stylelint)         | Plugin de Stylelint para el uso de CSS/SCSS                                | [![@db-ux/core-stylelint on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40db-ux%2Fcore-stylelint%2Flatest&query=%24.version&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-stylelint "DB UX Design System – en NPM")                                    |

### ¿Qué paquete debo elegir?

**Para componentes específicos de frameworks de JavaScript**: Elija el paquete correspondiente a su framework (React, Angular, Vue, Web Components), que incluye estilos y comportamiento en JavaScript.

**Para otros usuarios**: Utilice `@db-ux/core-components`, ya que incluye todo lo necesario (elementos básicos + estilos de componentes).

**Para tokens de diseño únicamente**: Utilice `@db-ux/core-foundations` si solo necesita colores, espaciado, fuentes e íconos, sin estilos de componentes ya predefinidos.

## Cómo usarlo

1. **Instale el paquete que prefiera** mediante pnpm (o npm/yarn):  
    - Para React: `pnpm i @db-ux/react-core-components`  
    - Para Angular: `pnpm i @db-ux/ngx-core-components`  
    - Para Vue: `pnpm i @db-ux/v-core-components`  
    - Para Web Components: `pnpm i @db-ux/wc-core-components`  
    - Solo para estilos (por ejemplo, para integraciones puras en HTML): `pnpm i @db-ux/core-components`

2. **Incluya los estilos CSS** según lo descrito en la sección “Dependencias de estilo” del `README` de cada paquete.

> **💡 Nota**: Todos los paquetes de framework incluyen automáticamente los estilos básicos necesarios; ¡no es necesario instalar `@db-ux/core-foundations` por separado!

Incluso ofrecemos algunos [ejemplos de integración](https://github.com/db-ux-design-system/examples).

## Soporte para agentes de IA

Ofrecemos herramientas especializadas para integrar directamente el sistema de diseño DB UX en sus asistentes de codificación basados en IA (como GitHub Copilot, Amazon Q, Cursor o Claude).

### Servidor Model Context Protocol (MCP)

Para IDEs y herramientas de IA que soportan el [Model Context Protocol](https://modelcontextprotocol.io/) (por ejemplo, complementos para Claude, Cursor, Windsurf), ofrecemos un servidor MCP independiente. Este servidor proporciona a su IA nuestra documentación oficial, tokens de diseño y un potente motor de migración para refactorizar automáticamente el código antiguo de la versión v2 según los estándares modernos de v3.

Agregue el servidor a la configuración MCP de su asistente de IA:

```json
{
	"mcpServers": {
		"db-ux": {
			"command": "npx",
			"args": ["-y", "@db-ux/mcp-server", "db-ux-mcp"]
		}
	}
}
```

### Agent CLI (Instrucciones para Copilot)

Para los desarrolladores que utilizan GitHub Copilot u otras herramientas similares capaces de leer instrucciones del espacio de trabajo, ofrecemos la herramienta [`@db-ux/agent-cli`](https://www.npmjs.com/package/@db-ux/agent-cli).

Ejecuta este comando en tu repositorio:

```shell
npx @db-ux/agent-cli
```

Esto creará o actualizará el archivo `.github/copilot-instructions.md` con documentación de los componentes basada en los paquetes `@db-ux` que tenga instalados, lo que ayudará a los agentes de inteligencia artificial a ofrecer sugerencias más precisas.

📖 **[Obtenga más información sobre el paquete Node `@db-ux/agent-cli`](packages/agent-cli/README.md)**

## Calidad del código

Para ayudar a garantizar el uso correcto de los componentes del sistema de diseño DB UX en su código, ofrecemos el complemento ESLint [`@db-ux/core-eslint-plugin`](https://www.npmjs.com/package/@db-ux/core-eslint-plugin).

### Inicio rápido

Instale el plugin:

```shell
pnpm install eslint @db-ux/core-eslint-plugin --save-dev
```

Luego, agréguelo a su configuración de ESLint:

```js
// eslint.config.js
import dbUx from "@db-ux/core-eslint-plugin";

export default [
	{
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

📖 **[Obtenga más información sobre el paquete Node `@db-ux/core-eslint-plugin`](packages/eslint-plugin/README.md)**

## Creación de componentes personalizados

Para los desarrolladores que desean crear componentes personalizados para ampliar el sistema de diseño en sus aplicaciones, ofrecemos una guía completa:

📖 **[Guía para crear componentes personalizados](docs/creating-custom-components.md)** - Aprenda cómo desarrollar sus propios componentes utilizando las bases del sistema de diseño

Esta guía abarca:

- **Configuración e instalación**: Primeros pasos con los paquetes del sistema de diseño  
- **Principios de diseño**: Seguir las pautas y buenas prácticas del sistema de diseño DB UX  
- **Patrones de componentes**: Enfoques estructurados para crear componentes coherentes  
- **Ejemplos de código**: Implementaciones prácticas para tarjetas, formularios, navegación y más  
- **Soporte para frameworks**: Orientación específica para React, Vue, Angular y HTML/CSS estándar  
- **Accesibilidad**: Asegurar que sus componentes sean inclusivos y cumplan con las normas  
- **Errores comunes**: Qué evitar y cómo mantener la coherencia del sistema de diseño

### DB Theme

Si está desarrollando un sitio web o una aplicación para Deutsche Bahn, también deberá instalar el tema DB a través del paquete Node [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) (que además está disponible como paquete de fuente interna, según se describe en su [README](https://www.npmjs.com/package/@db-ux/db-theme)).

## Componentes

Mantenemos un [resumen del estado](https://github.com/orgs/db-ux-design-system/projects/4/views/1) para todos los componentes.

## Principios fundamentales

<details>
  <summary><strong>
	Coherente y conforme
	</strong></summary>

Core Web de DB UX Design System forma parte del [DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten), que constituyen las pautas para cualquier sitio web y aplicación web de clientes de Personenverkehr así como de Deutsche Bahn Enterprise.

<details>

<details>
  <summary><strong>Accesible</strong></summary>

DB UX Design System utiliza HTML semántico, roles, estados y propiedades ARIA para aplicar nuestros estilos siempre que sea posible, lo que garantiza un marcado correcto y accesible. Además, realizamos controles de calidad en colaboración con el [Team Digital Accessibility](https://db.de/8pei5n).

</details>
<details>
  <summary><strong>Declarativo</strong></summary>

DB UX Design System utiliza selectores declarativos en lugar de herramientas visuales para garantizar que los nombres de las clases y la estructura del HTML sean fáciles de leer y comprender para los usuarios, estén optimizados, tengan un buen rendimiento y sean mucho más sencillos de actualizar.

</details>
<details>
  <summary><strong>Permanente</strong></summary>

A medida que [DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten) evoluciona, lo mismo ocurre con la versión 3 de DB UX Design System; por lo tanto, las aplicaciones solo necesitan mantener actualizado su paquete DB UX Design System Core Web para asegurarse de contar con el aspecto y la sensación más recientes.

<details>
  <summary><strong>Restricciones estrictas</strong></summary>

## Migración

### De DB UI Core o DB UI Elements a DB UX Design System Core

Ofrecemos una guía detallada de migración para cada componente junto con su documentación, como por ejemplo:
[Migración de Button](https://design-system.deutschebahn.com/core-web/review/main/components/action/button/migration).

Para obtener una visión general completa de todos los componentes de DB-UI y su estado de migración, incluidos aquellos que no tienen equivalentes directos en DB-UX Design System v3, consulte nuestra [Guía de migración de componentes de DB-UI a DB-UX Design System v3](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/db-ui-to-db-ux-dsv3.md).

### Entre versiones de DB UX Design System Core

Consulte nuestra documentación de migración para conocer los cambios significativos:

- [v4.x ➡ v5.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v4.x.x-to-v5.0.0.md)
- [v3.x ➡ v4.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v3.x.x-to-v4.0.0.md)
- [v2.x ➡ v3.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v2.x.x-to-v3.0.0.md)
- [v1.x ➡ v2.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v1.x.x-to-v2.0.0.md)
- [v0.7 ➡ v1.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.7.x-to-v1.0.0.md)
- [v0.6 ➡ v0.7](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-0.7.x.md)
- [v0.5 ➡ v0.6](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.5.x-to-0.6.x.md)
- v0.4 ➡ v.0.5: no se necesita migración, sin cambios que rompan la compatibilidad
- [v0.3 ➡ v0.4](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.3.x-to-v0.4.x.md)
- [v0.2 ➡ v0.3](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.2.x-to-v0.3.x.md)
- [Alpha ➡ Beta](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/alpha-beta.md) (0.0.x➡0.x.x)

## Preguntas frecuentes

### Colores “nuevos” inesperados

Hemos actualizado al versión estable del DB UX Design System (v3) con versión >= 1.x, y ahora los colores que deberían ser rojos se muestran en azul (`514ec7`).

Por favor, consulte la [guía de migración de la versión 0.6.x a la versión 0.7.x](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-v0.7.x.md#removed-brand-assets); si está desarrollando un sitio web o una aplicación web para Deutsche Bahn, es necesario que instale y haga referencia al tema DB.

## Aspectos a tener en cuenta

### Desarrollado por y dirigido por la comunidad

Se trata principalmente de una plataforma que ofrece el espacio y la tecnología necesarios para crear una base común de componentes cuidadosamente seleccionados; su desarrollo es impulsado en gran medida por la comunidad, basándose en el trabajo realizado en los proyectos y en la enorme cantidad de comentarios que recibimos de ellos. Por lo tanto, ¡por favor cuéntenos con todo tipo de apoyo, ¡lo agradeceríamos mucho!

## Cómo comenzar a desarrollar o contribuir

Si trabajas como desarrollador en el DB UX Design System o deseas contribuir (¡muchos aplausos por ello!), por favor echa un vistazo a la documentación de desarrollo correspondiente [docs/development.md]. Incluso marcamos los problemas que podrían ser un buen punto de partida para realizar contribuciones de código mediante la [etiqueta “good first issue”](https://github.com/db-ux-design-system/core-web/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22).

<!-- markdownlint-disable MD033 -->

## ¡Déjenos sus comentarios!

<!-- markdownlint-disable MD033 -->

<!-- markdownlint-disable MD033 -->

Esta es solo la primera versión de nuestro framework y realmente queremos recibir sus comentarios, ya sea a través del <a href="https://db.de/krnm74" target="_blank" rel="noopener noreferrer">canal del DB UX Design System en la comunidad de desarrolladores web de Microsoft Teams (disponible únicamente para empleados de DB)</a>, o directamente a [db-ux-designsystem@deutschebahn.com](mailto:db-ux-designsystem@deutschebahn.com). <!-- markdownlint-disable MD033 --> Estamos especialmente interesados en agregar tantos ejemplos como sea posible sobre los comportamientos para aclararlos aún más.

## La marca Deutsche Bahn

Para brindar un soporte óptimo a nuestros usuarios y clientes en su experiencia digital, el uso de la marca y las marcas registradas de Deutsche Bahn está sujeto a directrices y restricciones claras, incluso cuando se emplean con el código proporcionado por este producto. Aunque ofrecemos el código de los productos DB UX Design System de forma gratuita bajo la licencia Apache 2.0, Deutsche Bahn se reserva todos los derechos y la propiedad relacionados con su marca. Para consultas adicionales o datos de contacto sobre cuestiones relacionadas con la marca, visite nuestro [portal de la marca](https://marketingportal.extranet.deutschebahn.com/). Dado que estos recursos y pautas visuales provienen de nuestro Deutsche Bahn Marketingportal, usted aceptará las ["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (en alemán)](https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684#) al utilizarlos.

Para cualquier uso fuera de los sitios web y aplicaciones de Deutsche Bahn, no se le permite utilizar ningún elemento de la marca ni diseño de Deutsche Bahn, así como características protegidas y marcas registradas, incluido el tema DB.

## Contribuciones

Agradecemos mucho las contribuciones; consulte la [guía de contribución](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md).

## Código de conducta

Nosotros, como miembros, colaboradores y líderes, nos comprometemos a garantizar que la participación en nuestra comunidad sea una experiencia libre de acoso para todos; consulte nuestro [Código de Conducta del Pacto de Colaboradores](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md).

## Licencia

Este proyecto está licenciado bajo la licencia [Apache-2.0](LICENSE). © 2024 DB Systel GmbH.
