<!-- hy-mt2-i18n:start -->
[English](./README.md) | **中文** | [日本語](./README_ja.md) | [Español](./README_es.md)
<!-- hy-mt2-i18n:end -->

<!-- markdownlint-configure-file { "MD013": false, "MD041":false } -->
<!-- markdownlint-disable MD033 MD010 -->

<picture><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.avif" type="image/avif"><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.webp" type="image/webp"><img src="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.jpg" alt="DB UX设计系统v3标题图"></img></picture>

# DB UX设计系统 v3 🚂💖

![DB UX设计系统（第3版）组件之一](https://img.shields.io/badge/Part%20of-DB%20UX%20Design%20System%20v3-d7dce1.svg)
[![默认流水线](https://github.com/db-ux-design-system/core-web/actions/workflows/default.yml/badge.svg)](https://github.com/db-ux-design-system/core-web/actions/workflows/default.yml)
![Apache 2.0许可证标识](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![代码格式化工具：prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO代码风格标识](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![欢迎提交Pull Request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![贡献者行为准则](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md)

DB UX Design System v3 提供了强大的 HTML UI 组件、可复用的视觉样式以及高效的工具，助力开发人员、设计师和内容创作者构建、维护并扩展一流的数字体验。

<figure>
	<cite>我们不再设计单个页面，而是在设计组件系统。</cite>
	<figcaption><a href="https://bradfrost.com/blog/post/bdconf-stephen-hay-presents-responsive-design-workflow/" target="_blank" rel="noopener noreferrer">Stephen Hay</a>. <a href="https://vimeo.com/67476280" title="Brad Frosts在beyond tellerrand会议上的关于原子设计的演讲中被引用。">引自Brad Frost在beyond tellerrand会议上的演讲。</a></figcaption>
</figure>

## 包

| 包名                                                                                                       | 内容                                                                | 版本                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@db-ux/core-foundations](https://github.com/db-ux-design-system/core-web/tree/main/packages/foundations)     | CSS/SCSS/Tailwind 样式及资源                                    | [![@db-ux/core-foundations 在 Npmjs 上的版本](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm 版本")](https://npmjs.com/package/@db-ux/core-foundations "DB UX Design System – 在 NPM 上")           |
| [@db-ux/core-components](https://github.com/db-ux-design-system/core-web/tree/main/packages/components)       | 组件对应的 CSS/SCSS 样式                                      | [![@db-ux/core-components 在 Npmjs 上的版本](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm 版本")](https://npmjs.com/package/@db-ux/core-components "DB UX Design System – 在 NPM 上")             |
| [@db-ux/ngx-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/angular)        | 原生 Angular 组件                                          | [![@db-ux/ngx-core-components 在 Npmjs 上的版本](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm 版本")](https://npmjs.com/package/@db-ux/ngx-core-components "DB UX Design System – 在 NPM 上")     |
| [@db-ux/react-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/react)        | 原生 React 组件                                            | [![@db-ux/react-core-components 在 Npmjs 上的状态](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/react-core-components "DB UX Design System – 在 NPM 上") |
| [@db-ux/v-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/vue)              | 原生 Vue 3 组件                                            | [![@db-ux/v-core-components 在 Npmjs 上的状态](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/v-core-components "DB UX Design System – 在 NPM 上")         |
| [@db-ux/wc-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/stencil)         | Web Components                                                     | [![@db-ux/wc-core-components 在 Npmjs 上的状态](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/wc-core-components "DB UX Design System – 在 NPM 上")       |
| [@db-ux/agent-cli](https://github.com/db-ux-design-system/core-web/tree/main/packages/agent-cli)              | 用于将 `@db-ux` 的文档复制到您仓库中的 CLI 工具             | [![@db-ux/agent-cli 在 Npmjs 上的状态](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/agent-cli "DB UX Design System – 在 NPM 上")                         |
| [@db-ux/mcp-server](https://github.com/db-ux-design-system/core-web/tree/main/packages/mcp-server)            | 模型上下文协议（MCP）服务器                                    | [![@db-ux/mcp-server 在 Npmjs 上的状态](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/mcp-server "DB UX Design System – 在 NPM 上")                       |
| [@db-ux/core-eslint-plugin](https://github.com/db-ux-design-system/core-web/tree/main/packages/eslint-plugin) | 用于验证组件使用情况的 ESLint 插件                       | [![@db-ux/core-eslint-plugin on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40db-ux%2Fcore-eslint-plugin%2Flatest&query=%24.version&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-eslint-plugin "DB UX Design System – on NPM")                        |
| [@db-ux/core-stylelint](https://github.com/db-ux-design-system/core-web/tree/main/packages/stylelint)         | 用于检查 CSS/SCSS 使用情况的 Stylelint 插件                                | [![@db-ux/core-stylelint on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40db-ux%2Fcore-stylelint%2Flatest&query=%24.version&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-stylelint "DB UX Design System – on NPM")                                    |

### 我应该选择哪个包？

**对于针对 JavaScript 框架的组件**：请选择对应的框架包（React、Angular、Vue、Web Components），这类包同时包含样式处理与 JavaScript 行为逻辑。

**对于其他用户**：使用 `@db-ux/core-components`——它包含了您所需的一切（基础设计元素 + 组件样式）。

**仅需要设计令牌时**：如果您只需要颜色、间距、字体和图标，而无需预先构建好的组件样式，请使用 `@db-ux/core-foundations`。

## 使用方法

1. 通过 pnpm（或 npm/yarn）安装您选择的包：
    - 对于 React：`pnpm i @db-ux/react-core-components`
    - 对于 Angular：`pnpm i @db-ux/ngx-core-components`
    - 对于 Vue：`pnpm i @db-ux/v-core-components`
    - 对于 Web Components：`pnpm i @db-ux/wc-core-components`
    - 仅用于样式需求（例如纯 HTML 集成）：`pnpm i @db-ux/core-components`

2. 按照各包`README`中“样式依赖”部分所述的方式引入CSS样式。

> **💡 注意**：所有框架相关包均已自动包含必要的基础样式——无需单独安装 `@db-ux/core-foundations`！

我们甚至还提供了一些[集成示例](https://github.com/db-ux-design-system/examples)。

## AI 智能体支持

我们提供了专用工具，可帮助您将 DB UX 设计系统直接集成到各类 AI 编码助手中（如 GitHub Copilot、Amazon Q、Cursor 或 Claude）。

### 模型上下文协议（MCP）服务器

对于支持[模型上下文协议](https://modelcontextprotocol.io/)的 IDE 和 AI 工具（例如 Claude 插件、Cursor、Windsurf），我们提供了独立的 MCP 服务器。该服务器可为你的 AI 提供官方文档、设计规范以及强大的迁移引擎，从而自动将旧版的 v2 代码重构为现代化的 v3 标准。

在您的 AI 助手的中控协议配置中添加该服务器：

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

### Agent CLI（Copilot 指令版）

对于使用 GitHub Copilot 或其他能读取工作区指令的类似工具的开发者，我们提供了 [`@db-ux/agent-cli`](https://www.npmjs.com/package/@db-ux/agent-cli) 工具。

在您的仓库中运行此命令：

```shell
npx @db-ux/agent-cli
```

这将根据您已安装的 `@db-ux` 包生成或更新 `.github/copilot-instructions.md` 文件，其中包含组件文档，从而帮助 AI 智能体提供更优质的建议。

📖 **[了解更多关于 `@db-ux/agent-cli` node 包的信息](packages/agent-cli/README.md)**

## 代码质量

为帮助确保在您的代码库中正确使用 DB UX 设计系统组件，我们提供了 [`@db-ux/core-eslint-plugin`](https://www.npmjs.com/package/@db-ux/core-eslint-plugin) 这一 ESLint 插件。

### 快速入门

安装该插件：

```shell
pnpm install eslint @db-ux/core-eslint-plugin --save-dev
```

接着将其添加到你的 ESLint 配置中：

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

📖 **[了解更多关于 `@db-ux/core-eslint-plugin` node 包的信息](packages/eslint-plugin/README.md)**

## 创建自定义组件

对于希望在应用中创建自定义组件以扩展设计系统的开发者，我们提供了详尽的指导：

📖 **[创建自定义组件指南](docs/creating-custom-components.md)** —— 了解如何利用设计系统的基础知识构建属于自己的组件

本指南涵盖以下内容：

- **设置与配置**：快速上手设计系统相关包  
- **设计原则**：遵循 DB UX 设计系统的指导方针与最佳实践  
- **组件模式**：构建一致性组件的结构化方法  
- **代码示例**：卡片、表单、导航等功能的实际实现方案  
- **框架支持**：针对 React、Vue、Angular 以及原生 HTML/CSS 的具体指导  
- **无障碍性**：确保组件具备包容性并符合相关标准  
- **常见误区**：需要避免的问题及维持设计系统一致性的方法

### DB Theme 主题

如果您正在为德铁构建网站或应用程序，还需要通过 [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) 这个 Node 包来安装 DB Theme（该包的 [README](https://www.npmjs.com/package/@db-ux/db-theme) 中也说明了它同时可作为内部源码的 Node 包使用）。

## 组件

我们为所有组件提供了[状态概览](https://github.com/orgs/db-ux-design-system/projects/4/views/1)。

## 核心原则

<details>
  <summary><strong>
	一致性且符合规范
	</strong></summary>

DB UX Design System Core Web 是[DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten)的组成部分，该设计系统为所有Personenverkehr客户以及Deutsche Bahn企业级的网站和网络应用提供了规范指南。

<details>

<details>
  <summary><strong>无障碍性</strong></summary>

DB UX Design System 充分利用语义化 HTML、ARIA 角色、状态及属性，在可能的情况下应用相应的样式，从而确保标记的正确性与无障碍性。同时，我们还会与[数字无障碍团队](https://db.de/8pei5n)携手对相关内容进行质量检测。

</details>
<details>
  <summary><strong>声明式</strong></summary>

DB UX Design System采用声明式选择器而非视觉辅助工具，以此确保HTML类名与结构既便于人类阅读理解，又简洁高效，同时还大大简化了更新流程。

</details>
<details>
  <summary><strong>持久更新</strong></summary>

随着[DB UX设计系统](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten)的不断迭代，DB UX设计系统3版本也会随之更新，因此应用只需保持其DB UX设计系统核心Web包的更新，即可获得最新的视觉效果与交互体验。

</details>

## 迁移指南

### 从 DB UI Core 或 DB UI Elements 过渡到 DB UX Design System Core

我们已在每个组件的文档旁提供了详细的迁移指南，例如：
[按钮组件迁移](https://design-system.deutschebahn.com/core-web/review/main/components/action/button/migration)。

如需全面了解所有 DB-UI 组件及其迁移状态，包括那些在 DB-UX Design System v3 中没有直接对应组件的情况，请参阅我们的[DB-UI 到 DB-UX Design System v3 组件迁移指南](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/db-ui-to-db-ux-dsv3.md)。

### DB UX Design System Core 版本之间的过渡

请查阅我们的迁移文档以了解重大变更：

- [v4.x ➡ v5.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v4.x.x-to-v5.0.0.md)
- [v3.x ➡ v4.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v3.x.x-to-v4.0.0.md)
- [v2.x ➡ v3.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v2.x.x-to-v3.0.0.md)
- [v1.x ➡ v2.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v1.x.x-to-v2.0.0.md)
- [v0.7 ➡ v1.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.7.x-to-v1.0.0.md)
- [v0.6 ➡ v0.7](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-0.7.x.md)
- [v0.5 ➡ v0.6](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.5.x-to-0.6.x.md)
- v0.4 ➡ v0.5：无需迁移，无破坏性变更
- [v0.3 ➡ v0.4](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.3.x-to-0.4.x.md)
- [v0.2 ➡ v0.3](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.2.x-to-0.3.x.md)
- [Alpha ➡ Beta](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/alpha-beta.md) (0.0.x➡0.x.x)

## 常见问题

### 意外的“新”颜色

我们已升级到稳定版的 DB UX Design System（v3），版本号不低于 1.x，因此原本应为红色的颜色现在显示为蓝色（`514ec7`）。

请查看[从 0.6.x 版本到 0.7.x 版本的迁移指南](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-v0.7.x.md#removed-brand-assets)，如果您正在为德国铁路公司构建网站或 Web 应用程序，就需要安装并引用 DB Theme。

## 需要留意的事项

### 由社区共同开发并推动发展

这主要是一个为精心筛选的组件提供基础框架与技术支撑的平台；这些组件的开发主要由社区推动，基于各项目中的成果以及我们从社区获得的海量反馈进行优化。因此，请尽您所能给予支持，我们万分感激！

## 如何开始开发/贡献

如果您是作为开发者参与 DB UX Design System 的开发工作，或是希望为之做出贡献（这样的行为值得高度赞扬！），请查阅相关的[开发文档](docs/development.md)。我们还会通过[“good first issue”标签](https://github.com/db-ux-design-system/core-web/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22)标记出那些非常适合新手开始编写代码贡献的议题。

<!-- markdownlint-disable MD033 -->

## 给我们留下您的反馈吧！

<!-- markdownlint-disable MD033 -->

<!-- markdownlint-disable MD033 -->

这仅仅是我们的框架的第一版，我们非常希望得到您的反馈——您可以通过<a href="https://db.de/krnm74" target="_blank" rel="noopener noreferrer">Microsoft Teams 中 Web Dev Community 的 DB UX Design System 频道（仅限 DB 内部人员使用）</a>提交，或直接发送邮件至 [db-ux-designsystem@deutschebahn.com](mailto:db-ux-designsystem@deutschebahn.com)。<!-- markdownlint-disable MD033 -->我们尤其希望能为各种行为添加尽可能多的示例，以便进一步加以说明。

## 德国铁路品牌

为在用户的数字旅程中提供最佳支持，即便使用本产品提供的代码，使用德铁品牌及商标也必须遵循明确的规范与限制。尽管我们依据 Apache 2.0 许可证免费提供 DB UX Design System 产品的代码，但德铁仍保留该品牌相关的所有权利与所有权。如有更多疑问或需了解品牌相关的问题联系方式，请访问我们的[品牌门户](https://marketingportal.extranet.deutschebahn.com/)。由于这些资产及视觉规范均来自德铁营销门户，因此在使用时即视为您已同意[“DB营销门户通用使用条款”（德语）](https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684#)。

在德铁网站及应用程序之外的任何使用场景中，您均不得使用任何德铁品牌与设计资源，以及受保护的特性和商标，DB主题也不例外。

## 贡献指南

我们非常欢迎大家贡献代码，请参阅[贡献指南](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md)。

## 行为准则

作为社区成员、贡献者及领导者，我们承诺让所有人都能在参与我们的社区时免受骚扰——请查阅我们的[贡献者行为准则](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md)。

## 许可证

本项目采用 [Apache-2.0](LICENSE) 许可证进行授权。© 2024 DB Systel GmbH.
