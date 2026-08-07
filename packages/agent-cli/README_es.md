# @db-ux/agent-cli

<!-- hy-mt2-i18n:start -->
[English](./README.md) | [中文](./README_zh-CN.md) | [日本語](./README_ja.md) | **Español**
<!-- hy-mt2-i18n:end -->


![Insignia de licencia Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![Estilo de código: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Bienvenidos a las PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

## Uso

Ofrecemos una herramienta de interfaz de línea de comandos (CLI) que copia la documentación de `@db-ux` a su repositorio, poniéndola a disposición de los agentes de IA.

### Ejecutar la herramienta CLI

Utilice este comando en su repositorio:

```shell
npx @db-ux/agent-cli
```

O con pnpm:

```shell
pnpm i @db-ux/agent-cli --save-dev
pnpm exec agent-cli
```

La documentación del Sistema de Diseño DB UX se añadirá a (o se reemplazará en ejecuciones posteriores, por ejemplo, tras una actualización del Sistema de Diseño DB UX) en el archivo `.github/copilot-instructions.md` (si este archivo aún no existe en tu repositorio, se creará).

**Nota:** La herramienta funciona con todos los gestores de paquetes (npm, yarn, pnpm) y maneja correctamente los paquetes mediante enlaces simbólicos en la estructura node_modules de pnpm.

### Uso avanzado

También puede cambiar la ruta raíz en la que la herramienta debe buscar en `node_modules`:

```shell
npx @db-ux/agent-cli packages/frontend
```

Esto es útil en configuraciones de monorepo donde los paquetes DB UX podrían estar instalados en un directorio de espacio de trabajo específico.

### Qué hace la herramienta

1. **Escanea los node_modules de tu proyecto** en busca de los paquetes `@db-ux` instalados.  
2. **Extrae la documentación relevante** según las versiones instaladas.  
3. **Crea o actualiza** el archivo `.github/copilot-instructions.md` con la documentación de los componentes.  
4. **Proporciona a los agentes de IA** información sobre los componentes disponibles y sus patrones de uso.

### Mejores prácticas

Hemos tenido la mejor experiencia con GitHub Copilot y Amazon Q al utilizar los siguientes ajustes:

- El modo Agente funciona mejor para la generación de código y también puede ofrecer la mejor experiencia de desarrollo.  
- En cuanto a los modelos proporcionados, GPT-4o parece lograr el mejor equilibrio entre los “tokens utilizados” y el rendimiento, aunque “Claude Sonnet 4” sigue siendo superior. Sin embargo, con este modelo se agotan los tokens con bastante rapidez.  
- Si en este momento su principal interés es probar esta funcionalidad, contamos con amplia experiencia utilizando un prompt que sea al mismo tiempo sencillo pero no trivial, y bastante complejo, como por ejemplo: “¿Puede crear una nueva página con un panel de control? Debe contener opciones para indicadores clave de rendimiento. Cada indicador será una tarjeta que incluya información y botones”.

## La marca Deutsche Bahn

Dado que deseamos brindar un soporte óptimo a nuestros usuarios y clientes en su viaje digital, el uso de la marca y las marcas registradas de Deutsche Bahn está sujeto a pautas y restricciones claras, incluso cuando se emplee con el código que proporcionamos junto con este producto; Deutsche Bahn se reserva todos los derechos relacionados con su marca, a pesar de que ofrecemos el código de los productos del DB UX Design System para su uso gratuito bajo la licencia Apache 2.0.  
Visite nuestro portal de marca en <https://marketingportal.extranet.deutschebahn.com/> si tiene más preguntas o necesita saber a quién contactar en caso de problemas relacionados con la marca.

Para cualquier uso fuera de los sitios web y aplicaciones de Deutsche Bahn, no se le permite utilizar ningún elemento de la marca ni recursos de diseño de Deutsche Bahn, así como características protegidas y marcas comerciales, incluido el tema DB.

## Contribuciones

Agradecemos mucho las contribuciones; consulte la [guía de contribución](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md).

## Código de conducta

Nosotros, como miembros, colaboradores y líderes, nos comprometemos a garantizar que la participación en nuestra comunidad sea una experiencia libre de acoso para todos; consulte nuestro [Código de Conducta del Pacto de Colaboradores](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md).

## Licencia

Este proyecto está licenciado bajo [Apache-2.0](LICENSE).
