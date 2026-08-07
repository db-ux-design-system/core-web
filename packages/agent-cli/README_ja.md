# @db-ux/agent-cli

<!-- hy-mt2-i18n:start -->
[English](./README.md) | [中文](./README_zh-CN.md) | **日本語** | [Español](./README_es.md)
<!-- hy-mt2-i18n:end -->


![Apache 2.0 ライセンスバッジ](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![コードスタイル: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRを歓迎](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

## 使用方法

当ツールはコマンドラインインターフェース（CLI）を提供し、`@db-ux`のドキュメントをあなたのリポジトリにコピーしてAIエージェントが利用できるようにします。

### CLIツールの実行方法

リポジトリでこのコマンドを使用してください：

```shell
npx @db-ux/agent-cli
```

または pnpm を使って：

```shell
pnpm i @db-ux/agent-cli --save-dev
pnpm exec agent-cli
```

DB UX Design Systemのドキュメントは、`.github/copilot-instructions.md`ファイルに追加されます（または、DB UX Design Systemが更新された後など、以降の実行時に置き換えられます）。このファイルがまだコードベースに存在しない場合は自動的に作成されます。

**注:** このツールはnpm、yarn、pnpmといったすべてのパッケージマネージャーで動作し、pnpmのnode_modules構造内にあるシンボリックリンク付きパッケージも正しく処理します。

### 詳細な使い方

このツールが`node_modules`を探すルートパスも変更できます：

```shell
npx @db-ux/agent-cli packages/frontend
```

DB UXパッケージが特定のワークスペースディレクトリにインストールされているモノレポ構成では、これは非常に役立ちます。

### このツールの機能

1. プロジェクト内の`node_modules`をスキャンし、インストールされている`@db-ux`パッケージを探します  
2. インストールされているバージョンに基づき、関連するドキュメントを抽出します  
3. コンポーネントのドキュメントを含む`.github/copilot-instructions.md`ファイルを作成または更新します  
4. 利用可能なコンポーネントとその使用法に関する情報をAIエージェントに提供します

### 最良の実践法

以下の設定を使用すると、GitHub CopilotおよびAmazon Qを使った際に最良の体験が得られます：

- Agentモードはコード生成に最適であり、最良の開発者体験も提供してくれる可能性があります。  
- 提供されているモデルに関しては、「使用されるトークン数」とパフォーマンスのバランスが最も良いように思われるのはGPT-4oですが、「Claude Sonnet 4」の方が依然として優れています。ただし、このモデルを使うとトークンがかなり早く使い果たされてしまいます。  
- 現時点で主にこの機能をテストしたい場合、KPIの選択肢を含むダッシュボードを持つ新しいページを作成できるか、といった「簡単すぎず、むしろ複雑な」プロンプトを使用することで、十分な経験値を得ることができます。各KPIは情報とボタンを含むカードとして表示されるべきです。

## Deutsche Bahnブランド

お客様のデジタルな利用体験を最適にサポートするため、本製品で提供するコードを使用している場合であっても、Deutsche Bahnのブランドや商標の使用には明確なガイドラインと制限が設けられています。DB UX Design System製品のコードをApache 2.0ライセンスの下で無料で提供し、公開しているとはいえ、Deutsche Bahnは当該ブランドに関するすべての権利を留保しています。ブランドに関するさらなるご質問やお問い合わせ先については、当社のブランドポータル<https://marketingportal.extranet.deutschebahn.com/>をご覧ください。

Deutsche Bahnのウェブサイトやアプリケーション以外での利用においては、DBテーマを除き、Deutsche Bahnのブランド資産やデザイン要素、また保護された特徴や商標を一切使用することは許可されません。

## 貢献のお願い

ご貢献を心より歓迎します。詳細は[コントリビューションガイド](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md)をご覧ください。

## 行動規範

メンバー、貢献者、リーダーとして、私たちはコミュニティへの参加がすべての人にとってハラスメントのない体験となるよう努めます。詳細は、[Contributor Covenant Code of Conduct](https://github.com/db-ux-design-system/.github/blob/main/CODE-OF-CONDUCT.md)をご覧ください。

## ライセンス

このプロジェクトは、[Apache-2.0](LICENSE) ライセンスの下で提供されています。
