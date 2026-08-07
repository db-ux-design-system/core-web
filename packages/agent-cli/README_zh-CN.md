# @db-ux/agent-cli

<!-- hy-mt2-i18n:start -->
[English](./README.md) | **中文** | [日本語](./README_ja.md) | [Español](./README_es.md)
<!-- hy-mt2-i18n:end -->


![Apache 2.0 许可证徽章](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![代码格式化工具：prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![常规提交规范](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![欢迎提交 Pull Request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

## 使用方法

我们提供了一个命令行界面（CLI）工具，可将 `@db-ux` 的文档复制到您的仓库中，以便 AI 智能体使用。

### 运行 CLI 工具

在您的仓库中使用此命令：

```shell
npx @db-ux/agent-cli
```

或者使用 pnpm：

```shell
pnpm i @db-ux/agent-cli --save-dev
pnpm exec agent-cli
```

DB UX设计系统文档将会被添加到`.github/copilot-instructions.md`文件中（在后续运行时，例如DB UX设计系统更新后，会替换现有内容）；如果您的代码库中尚不存在该文件，它将会被自动创建。

**注意：** 该工具兼容所有包管理器（npm、yarn、pnpm），并能正确处理 pnpm 的 node_modules 结构中的符号链接包。

### 高级用法

您还可以更改该工具用于查找 `node_modules` 的根路径：

```shell
npx @db-ux/agent-cli packages/frontend
```

在多仓库项目中，如果 DB UX 相关包被安装在特定的工作区目录中，这一功能就非常实用。

### 该工具的功能

1. 扫描项目中的 `node_modules`，查找已安装的 `@db-ux` 包  
2. 根据已安装的版本提取相关文档  
3. 使用组件文档创建或更新 `.github/copilot-instructions.md` 文件  
4. 为 AI 智能体提供有关可用组件及其使用方式的上下文信息

### 最佳实践

使用以下设置时，我们发现 GitHub Copilot 和 Amazon Q 能带来最佳的体验。

- Agent模式最适合用于代码生成，也能带来最佳的开发者体验。  
- 在现有模型中，GPT-4o在“已使用令牌数”与性能之间似乎达到了最佳平衡，不过“Claude Sonnet 4”的表现依然更优，只是使用该模型时令牌消耗速度会较快。  
- 如果您目前主要是想测试这一功能，我们有过不少使用较为复杂且非简单的提示语的经验，比如“能否创建一个带有控制面板的页面？该页面需要包含KPI选择项，每个KPI都应以卡片形式呈现，内含相关信息和按钮。”

## 德国铁路品牌

为全力支持用户与客户在数字化旅程中的需求，即便是在使用本产品附带的代码时，使用德铁品牌及商标也必须遵循明确的准则与限制；尽管我们以 Apache 2.0 许可证免费提供 DB UX Design System 产品的代码并允许其公开使用，但德铁仍保留对该品牌的所有权利。如有更多疑问或涉及品牌相关问题，欢迎访问我们的品牌门户：<https://marketingportal.extranet.deutschebahn.com/>以了解联系方式。

在德铁网站及应用程序之外的任何场景中使用时，您均不得使用任何德铁品牌元素、设计资源，以及受保护的特性和商标，DB主题也不例外。

## 贡献指南

我们非常欢迎大家贡献代码，请参考[贡献指南](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md)。

## 行为准则

作为社区成员、贡献者及领导者，我们承诺让所有人都能在参与我们的社区时免受骚扰——请查阅我们的[贡献者行为准则](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md)。

## 许可证

本项目采用 [Apache-2.0](LICENSE) 许可证进行授权。
