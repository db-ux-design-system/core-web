<!-- hy-mt2-i18n:start -->
[English](./README.md) | [中文](./README_zh-CN.md) | **日本語** | [Español](./README_es.md)
<!-- hy-mt2-i18n:end -->

<!-- markdownlint-configure-file { "MD013": false, "MD041":false } -->
<!-- markdownlint-disable MD033 MD010 -->

<picture><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.avif" type="image/avif"><source srcset="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.webp" type="image/webp"><img src="https://design-system.deutschebahn.com/images/db-ux-design-system-v3-header.jpg" alt="DB UXデザインシステム v3のアイコン"></img></picture>

# DB UX Design System v3 🚂💖

![DB UX Design Systemの一部（バージョン3）](https://img.shields.io/badge/Part%20of-DB%20UX%20Design%20System%20v3-d7dce1.svg)
[![デフォルトのパイプライン](https://github.com/db-ux-design-system/core-web/actions/workflows/default.yml/badge.svg)](https://github.com/db-ux-design-system/core-web/actions/workflows/default.yml)
![Apache 2.0ライセンスのバッジ](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![コードスタイル：prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XOコードスタイル](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![PRを歓迎](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![コントリビューター契約](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md)

DB UX Design System v3は、堅牢なHTML UIコンポーネントや再利用可能なビジュアルスタイル、そして強力なツールを提供し、開発者、デザイナー、コンテンツ作成者が最高水準のデジタル体験を構築し、保守し、拡張するのをサポートします。

<figure>
	<cite>もはやページをデザインするのではなく、コンポーネントのシステムをデザインしているのだ。</cite>
	<figcaption><a href="https://bradfrost.com/blog/post/bdconf-stephen-hay-presents-responsive-design-workflow/" target="_blank" rel="noopener noreferrer">Stephen Hay</a>. <a href="https://vimeo.com/67476280" title="Brad Frosts at beyond tellerrand conference regarding Atomic Design" target="_blank" rel="noopener noreferrer">beyond tellerrandカンファレンスにおけるBrad Frostの講演で引用されている。</a></figcaption>
</figure>

## パッケージ

| パッケージ                                                                                                       | 内容                                                              | バージョン                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@db-ux/core-foundations](https://github.com/db-ux-design-system/core-web/tree/main/packages/foundations)     | CSS/SCSS/Tailwindのスタイルおよびアセット                                | [![@db-ux/core-foundations on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-foundations "DB UX Design System – on NPM")           |
| [@db-ux/core-components](https://github.com/db-ux-design-system/core-web/tree/main/packages/components)       | コンポーネント用のCSS/SCSSスタイル                                     | [![@db-ux/core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-components "DB UX Design System – on NPM")             |
| [@db-ux/ngx-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/angular)        | ネイティブAngularコンポーネント                                          | [![@db-ux/ngx-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/ngx-core-components "DB UX Design System – on NPM")     |
| [@db-ux/react-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/react)        | ネイティブReactコンポーネント                                            | [![@db-ux/react-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/react-core-components "DB UX Design System – on NPM") |
| [@db-ux/v-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/vue)              | ネイティブVue 3コンポーネント                                            | [![@db-ux/v-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/v-core-components "DB UX Design System – on NPM")         |
| [@db-ux/wc-core-components](https://github.com/db-ux-design-system/core-web/tree/main/output/stencil)         | Web Components                                                     | [![@db-ux/wc-core-components on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/wc-core-components "DB UX Design System – on NPM")       |
| [@db-ux/agent-cli](https://github.com/db-ux-design-system/core-web/tree/main/packages/agent-cli)              | `@db-ux`のドキュメントをリポジトリにコピーするCLIツール               | [![@db-ux/agent-cli on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/agent-cli "DB UX Design System – on NPM")                         |
| [@db-ux/mcp-server](https://github.com/db-ux-design-system/core-web/tree/main/packages/mcp-server)            | Model Context Protocol (MCP)サーバー                                    | [![@db-ux/mcp-server on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fdb-ux-design-system%2Fcore-web%2Freleases%2Flatest&query=%24.tag_name&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/mcp-server "DB UX Design System – on NPM")                       |
| [@db-ux/core-eslint-plugin](https://github.com/db-ux-design-system/core-web/tree/main/packages/eslint-plugin) | コンポーネントの使用を検証するための ESLint プラグイン               | [![@db-ux/core-eslint-plugin on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40db-ux%2Fcore-eslint-plugin%2Flatest&query=%24.version&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-eslint-plugin "DB UX Design System – on NPM")                        |
| [@db-ux/core-stylelint](https://github.com/db-ux-design-system/core-web/tree/main/packages/stylelint)         | CSS/SCSS の使用をチェックするための Stylelint プラグイン             | [![@db-ux/core-stylelint on Npmjs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40db-ux%2Fcore-stylelint%2Flatest&query=%24.version&label=npm&color=ed1c24 "npm version")](https://npmjs.com/package/@db-ux/core-stylelint "DB UX Design System – on NPM")                                    |

### どのパッケージを選べばよいですか？

**JavaScriptフレームワーク専用のコンポーネントを使用する場合**：スタイリングとJavaScriptの動作が含まれている、ご自身が使用するフレームワークのパッケージ（React、Angular、Vue、Web Components）を選択してください。

**その他のユーザー向け**: `@db-ux/core-components` を使用してください。これには必要なものすべて（基盤機能＋コンポーネントスタイル）が含まれています。

**デザイントークンのみを使用する場合**：事前に作成されたコンポーネントスタイルなしで、色や間隔、フォント、アイコンのみが必要な場合は、`@db-ux/core-foundations` を使用してください。

## 使用方法

1. pnpm（またはnpm/yarn）を使って、ご希望のパッケージをインストールしてください：
    - Reactの場合：`pnpm i @db-ux/react-core-components`
    - Angularの場合：`pnpm i @db-ux/ngx-core-components`
    - Vueの場合：`pnpm i @db-ux/v-core-components`
    - Web Componentsの場合：`pnpm i @db-ux/wc-core-components`
    - スタイリングのみが必要な場合（例：純粋なHTMLとの連携時）：`pnpm i @db-ux/core-components`

2. 各パッケージの`README`にある「Styling Dependencies」セクションで説明されている通り、CSSスタイルを含めてください。

> **💡 注意**：すべてのフレームワーク用パッケージには必要な基本スタイルが自動的に含まれているため、`@db-ux/core-foundations` を別途インストールする必要はありません！

さらに、[統合の例](https://github.com/db-ux-design-system/examples)もご用意しています。

## AIエージェントサポート

DB UX Design SystemをGitHub Copilot、Amazon Q、Cursor、ClaudeといったAIコーディングアシスタントに直接統合できる専用のツールも提供しています。

### Model Context Protocol (MCP)サーバー

[Model Context Protocol](https://modelcontextprotocol.io/) をサポートする IDE や AI ツール（例：Claude プラグイン、Cursor、Windsurf）向けに、スタンドアロンの MCP サーバーを提供しています。このサーバーにより、AI は当社の公式ドキュメントやデザイントークン、そして古い v2 コードを最新の v3 標準に自動的にリファクタリングする強力なマイグレーションエンジンを利用できるようになります。

AIアシスタントのMCP設定にこのサーバーを追加してください：

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

### Agent CLI（Copilot用指示）

GitHub Copilotやワークスペースの指示を読み取ることができる類似のツールを使用する開発者向けに、[`@db-ux/agent-cli`](https://www.npmjs.com/package/@db-ux/agent-cli)というツールを提供しています。

リポジトリ内でこのコマンドを実行してください：

```shell
npx @db-ux/agent-cli
```

これにより、インストールされている`@db-ux`パッケージに基づくコンポーネントのドキュメントが含まれた`.github/copilot-instructions.md`が作成または更新され、AIエージェントがより優れた提案を行えるようになります。

📖 **`@db-ux/agent-cli` nodeパッケージの詳細についてはこちら](packages/agent-cli/README.md)**

## コード品質

コードベース内でDB UX Design Systemのコンポーネントが正しく使用されているかを確認しやすくするため、[`@db-ux/core-eslint-plugin`](https://www.npmjs.com/package/@db-ux/core-eslint-plugin)というESLintプラグインを提供しています。

### すぐに始める

プラグインをインストールするには：

```shell
pnpm install eslint @db-ux/core-eslint-plugin --save-dev
```

次に、それをESLintの設定ファイルに追加してください：

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

📖 **[`@db-ux/core-eslint-plugin` nodeパッケージについて詳しく知る](packages/eslint-plugin/README.md)**

## カスタムコンポーネントの作成

アプリケーション内でデザインシステムを拡張するカスタムコンポーネントの作成を目指す開発者のために、詳細なガイドを用意しています：

📖 **[カスタムコンポーネントの作成ガイド](docs/creating-custom-components.md)** – デザインシステムの基盤を活用して独自のコンポーネントを構築する方法を学びましょう。

このガイドでは以下の内容を扱っています：

- **セットアップと設定**：デザインシステムパッケージの使い方入門  
- **デザイン原則**：DB UXデザインシステムのガイドラインおよびベストプラクティスの遵守  
- **コンポーネントパターン**：一貫性のあるコンポーネントを構築するための体系的なアプローチ  
- **コード例**：カード、フォーム、ナビゲーションなどの実用的な実装例  
- **フレームワークサポート**：React、Vue、Angular、および純粋なHTML/CSS向けの具体的なガイダンス  
- **アクセシビリティ**：コンポーネントが包括的かつ規格準拠であることの確保  
- **よくある失敗例**：避けるべき点とデザインシステムの一貫性を維持する方法

### DB Theme

Deutsche Bahn向けのウェブサイトやアプリケーションを構築する場合、さらに[`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme)というnodeパッケージを通じてDB Themeをインストールする必要があります（このパッケージの[README](https://www.npmjs.com/package/@db-ux/db-theme)に記載されているように、inner source nodeパッケージとしても利用可能です）。

## コンポーネント

すべてのコンポーネントについて、[ステータス概要](https://github.com/orgs/db-ux-design-system/projects/4/views/1)を維持しています。

## コア原則

<details>
  <summary><strong>
	一貫性とコンプライアンス
	</strong></summary>

DB UX Design System Core Webは、[DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten)の一部であり、これはPersonenverkehrの顧客向けウェブサイトやDeutsche Bahn Enterpriseのウェブサイト、およびウェブアプリケーションに適用されるガイドラインです。

<details>

<details>
  <summary><strong>アクセシブル</strong></summary>

DB UX Design Systemは、可能な限りセマンティックHTMLやARIAのロール、ステート、プロパティを活用してスタイルを適用することで、正しくかつアクセシブルなマークアップを実現しています。また、[Team Digital Accessibility](https://db.de/8pei5n)と協力して品質チェックも行っています。

</details>
<details>
  <summary><strong>宣言的</strong></summary>

DB UX Design Systemでは、視覚的なヘルパーの代わりに宣言型セレクタを使用することで、HTMLのクラス名や構造が人間にとって読みやすく理解しやすく、シンプルで高性能であり、更新もはるかに容易になります。

</details>
<details>
  <summary><strong>常に最新の状態を維持</strong></summary>

[DB UX Design System](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten)が進化するにつれて、DB UX Design Systemバージョン3も同様に進化します。そのため、アプリケーション側では最新の外観と操作感を維持するために、DB UX Design System Core Webパッケージのみを常に最新版に保つ必要があります。

<details>
  <summary><strong>コア版</strong></summary>

DB UX Design System Coreは、可視的なヘルパーの代わりに宣言型セレクタを使用することで、HTMLのクラス名や構造が人間にとって読みやすく理解しやすく、シンプルで高性能であり、更新もはるかに容易になっています。

## マイグレーション

### DB UI CoreまたはDB UI ElementsからDB UX Design System Coreへ

各コンポーネントのドキュメントに併せて、そのコンポーネントごとの詳細なマイグレーション情報も提供しており、例えば以下のようになっています。
[Buttonのマイグレーション](https://design-system.deutschebahn.com/core-web/review/main/components/action/button/migration)。

DB-UIの全コンポーネントとそれらのマイグレーション状況に関する包括的な概要、特にDB-UX Design System v3に直接的な対応コンポーネントがないものについては、[DB-UIからDB-UX Design System v3へのコンポーネントマイグレーションガイド](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/db-ui-to-db-ux-dsv3.md)をご覧ください。

### DB UX Design System Coreのバージョン間

大きな変更点については、当社のマイグレーションドキュメントをご確認ください：

- [v4.x ➡ v5.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v4.x.x-to-v5.0.0.md)
- [v3.x ➡ v4.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v3.x.x-to-v4.0.0.md)
- [v2.x ➡ v3.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v2.x.x-to-v3.0.0.md)
- [v1.x ➡ v2.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v1.x.x-to-v2.0.0.md)
- [v0.7 ➡ v1.0](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.7.x-to-1.0.0.md)
- [v0.6 ➡ v0.7](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-0.7.x.md)
- [v0.5 ➡ v0.6](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.5.x-to-0.6.x.md)
- v0.4 ➡ v0.5: 移行は不要で、破壊的変更もありません
- [v0.3 ➡ v0.4](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.3.x-to-0.4.x.md)
- [v0.2 ➡ v0.3](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.2.x-to-0.3.x.md)
- [Alpha ➡ Beta](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/alpha-beta.md) (0.0.x➡0.x.x)

## よくある質問

### 予期しない「新しい」色

DB UX Design Systemの安定版(v3)、バージョン1.x以降にアップデートしたため、元々赤色であるはずの色が青色(`514ec7`)に表示されています。

Deutsche Bahn向けのウェブサイトやウェブアプリケーションを開発している場合は、[バージョン0.6.xから0.7.xへのマイグレーションガイド](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v0.6.x-to-0.7.x.md#removed-brand-assets)をご確認ください。DB Themeをインストールし、参照する必要があります。

## ご留意いただきたい点

### コミュニティのために開発され、コミュニティによって推進されています

これは主に、厳選されたコンポーネントの共通基盤となる環境や技術を提供するプラットフォームであり、その開発はコミュニティによって主導され、各プロジェクトでの取り組みやコミュニティから寄せられる多数のフィードバックをもとに進められています。ですので、どのような形でもご支援いただけますと大変感謝いたします！

## 開発や貢献の始め方

DB UX Design Systemの開発者として働いている方や、貢献をしたいと考えている方は（その意欲には心から感謝します！）、関連する[開発ドキュメント](docs/development.md)をご覧ください。また、コード貢献の良い出発点となり得るイシューには、[「good first issue」というタグ](https://github.com/db-ux-design-system/core-web/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22)を付けております。

<!-- markdownlint-disable MD033 -->

## フィードバックをお寄せください！

<!-- markdownlint-disable MD026 -->

<!-- markdownlint-disable MD033 -->

これは当フレームワークの最初のバージョンに過ぎず、皆様からのフィードバックを心よりお待ちしています。<a href="https://db.de/krnm74" target="_blank" rel="noopener noreferrer">Microsoft Teams内のWeb Dev CommunityにあるDB UX Design Systemチャネル（DB社内部のみで利用可能）</a>を通じて、または直接 [db-ux-designsystem@deutschebahn.com](mailto:db-ux-designsystem@deutschebahn.com)までご連絡いただければ幸いです。<!-- markdownlint-disable MD033 --> 特に、各動作の例をできるだけ多く追加し、より明確にすることを強く望んでいます。

## Deutsche Bahnブランド

当社のユーザーや顧客がデジタル上での体験をより良くサポートするため、本製品で提供されるコードを使用している場合であっても、Deutsche Bahnのブランドや商標の利用には明確なガイドラインと制限が適用されます。Apache 2.0ライセンスの下でDB UX Design System製品のコードを無料で提供しているにもかかわらず、Deutsche BahnはDBブランドに関するすべての権利および所有権を留保しています。ブランドに関するその他の質問や連絡先については、当社の[ブランドポータル](https://marketingportal.extranet.deutschebahn.com/)をご覧ください。これらの資料や視覚ガイドラインはDeutsche Bahnのマーケティングポータルから取得されているため、これらを利用する際には["Allgemeine Nutzungsbedingungen für das DB-Marketingportal" (ドイツ語)](https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684#)に同意したことになります。

Deutsche Bahnのウェブサイトやアプリケーション以外でこれらを利用する場合、DBテーマを除き、Deutsche Bahnのブランドやデザイン資産、ならびに保護された特徴や商標を一切使用することは許可されません。

## 貢献の受け入れ

ご貢献を心より歓迎します。詳細は[コントリビューションガイド](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md)をご覧ください。

## 行動規範

メンバー、貢献者、リーダーとして、私たちはコミュニティへの参加がすべての人にとってハラスメントのない体験となるよう努めます。詳細は、[貢献者行動規範](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md)をご覧ください。

## ライセンス

このプロジェクトは、【Apache-2.0】(LICENSE) ライセンスのもとで提供されています。© 2024 DB Systel GmbH.
