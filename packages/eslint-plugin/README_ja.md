# @db-ux/core-eslint-plugin

<!-- hy-mt2-i18n:start -->
[English](./README.md) | [中文](./README_zh-CN.md) | **日本語** | [Español](./README_es.md)
<!-- hy-mt2-i18n:end -->


React、Vue、Angularを横断してDB UX Design Systemコンポーネントの正しい使用法を検証するためのESLintプラグインです。

## インストール

```shell
npm install eslint @db-ux/core-eslint-plugin --save-dev
```

**Vueプロジェクトの場合**は、`vue-eslint-parser`もインストールしてください：

```shell
npm install vue-eslint-parser --save-dev
```

**Angularプロジェクトの場合**は、`@angular-eslint/template-parser`もインストールしてください：

```shell
npm install @angular-eslint/template-parser --save-dev
```

**React/TypeScriptプロジェクトの場合**は、`@typescript-eslint/parser`もインストールしてください：

```shell
npm install @typescript-eslint/parser --save-dev
```

## 使用方法

ESLintの設定ファイルに追加してください：

**ESLint 9+ (flat config):**

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

**Vueプロジェクトの場合**は、Vueパーサーを設定してください：

```js
import dbUx from "@db-ux/core-eslint-plugin";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: "latest",
				sourceType: "module"
			}
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

**Angularプロジェクトの場合**は、Angularテンプレートパーサーを設定します：

```js
import dbUx from "@db-ux/core-eslint-plugin";
import angularTemplateParser from "@angular-eslint/template-parser";

export default [
	{
		files: ["**/*.html"],
		languageOptions: {
			parser: angularTemplateParser
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

**または、ルールを個別に有効にする：**

```js
import dbUx from "@db-ux/core-eslint-plugin";

export default [
	{
		plugins: {
			"db-ux": dbUx
		},
		rules: {
			"db-ux/button-no-text-requires-tooltip": "error"
		}
	}
];
```

**React/TypeScriptプロジェクトの場合**、TypeScriptパーサーを設定します：

```js
import dbUx from "@db-ux/core-eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: { jsx: true }
			}
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

## ルール

### `button-no-text-requires-tooltip` 規則

`noText` プロパティを持つボタンに、`icon`（または `iconLeading`/`iconTrailing`）および `DBTooltip` の子要素の両方が存在することを保証します。

**❌ 無効:**

```jsx
// React
<DBButton noText>Save</DBButton>
<DBButton icon="save" noText>Save</DBButton>

// Angular
<db-button [noText]="true">ABC</db-button>
<db-button icon="x" [noText]="true">ABC</db-button>

// Vue
<DBButton :noText="true">ABC</DBButton>
<DBButton icon="x" :noText="true">ABC</DBButton>
```

**✅ 有効:**

```jsx
// React
<DBButton icon="save" noText>
  Save
  <DBTooltip>Save document</DBTooltip>
</DBButton>

// Angular
<db-button icon="x_placeholder" [noText]="true">
  ABC
  <db-tooltip>ABC</db-tooltip>
</db-button>

// Vue
<DBButton icon="x_placeholder" :noText="true">
  ABC
  <DBTooltip>ABC</DBTooltip>
</DBButton>
```

## サポートされているフレームワーク

- React (JSX/TSX)
- Vue (SFC)
- Angular (テンプレート)

このプラグインは、ファイルの拡張子とパーサーに基づいて自動的にフレームワークを検出します。

### `button-type-required`

DBButtonに明示的な`type`属性（submit、button、またはreset）が設定されていることを保証します。

**❌ 無効:**

```jsx
<DBButton>Save</DBButton>
<DBButton>Save</DBButton>
```

**✅ 有効:**

```jsx
<DBButton type="button">保存</DBButton>
<DBButton type="submit">送信</DBButton>
<DBButton type="reset">リセット</DBButton>
```

### `form-label-required`

アクセシビリティのため、フォームコンポーネント（DBInput、DBTextarea、DBSelect、DBCustomSelect、DBCheckbox、DBRadio、DBSwitch）に `label` 属性が存在するようにします。

**❌ 無効:**

```jsx
// React
<DBInput />
<DBCheckbox />
<DBSelect />

// Angular
<db-input></db-input>
<db-checkbox></db-checkbox>

// Vue
<DBInput />
<DBCheckbox />
```

**✅ 有効:**

```jsx
// React
<DBInput label="名前" />
<DBCheckbox label="利用規約に同意する" />
<DBSelect label="国" />

// Angular
<db-input label="名前"></db-input>
<db-checkbox [label]="labelText"></db-checkbox>

// Vue
<DBInput :label="dynamicLabel" />
<DBCheckbox label="利用規約に同意する" />
```

### `prefer-icon-attribute`

アイコン属性をサポートするコンポーネントでは、<DBIcon> サブコンポーネントよりも `icon` 属性の使用を優先してください。

**❌ 無効:**

```jsx
// React
<DBButton><DBIcon icon="save" /></DBButton>
<DBInput><DBIcon icon="search" /></DBInput>

// Angular
<db-button><db-icon icon="save"></db-icon></db-button>

// Vue
<DBLink><DBIcon icon="external" /></DBLink>
```

**✅ 有効:**

```jsx
// React
<DBButton icon="save">保存</DBButton>
<DBInput icon="search" />

// Angular
<db-button icon="save">保存</db-button>

// Vue
<DBLink :icon="iconName">リンク</DBLink>
```

### `text-or-children-required`

コンポーネント（DBAccordionItem、DBBadge、DBButton、DBLink、DBIcon、DBInfotext、DBNavigationItem、DBNotification）が `text` プロパティまたは子要素のいずれかを持つように保証します。

**❌ 無効:**

```jsx
// React
<DBButton />
<DBLink />
<DBBadge />

// Angular
<db-button></db-button>
<db-notification></db-notification>

// Vue
<DBIcon icon="test" />
```

**✅ 有効:**

```jsx
// React
<DBButton text="Save" />
<DBButton>Save</DBButton>
<DBLink>Click here</DBLink>

// Angular
<db-button text="Save"></db-button>
<db-button>Save</db-button>

// Vue
<DBBadge>New</DBBadge>
<DBIcon icon="test">Label</DBIcon>
```

### `no-interactive-tooltip-content`

DBTooltip内のインタラクティブな要素（ボタン、リンク、入力フォーム）を禁止します。インタラクティブなコンテンツにはDBPopoverを使用してください。

**❌ 無効:**

```jsx
// React
<DBTooltip><button>クリック</button></DBTooltip>
<DBTooltip><DBButton>アクション</DBButton></DBTooltip>
<DBTooltip><a href="#">リンク</a></DBTooltip>

// Angular
<db-tooltip><button>クリック</button></db-tooltip>
<db-tooltip><db-button>アクション</db-button></db-tooltip>

// Vue
<DBTooltip><DBLink href="#">リンク</DBLink></DBTooltip>
```

**✅ 有効:**

```jsx
// React
<DBTooltip>単純なテキスト</DBTooltip>
<DBTooltip><span>spanを含むテキスト</span></DBTooltip>
<DBTooltip><p>段落</p></DBTooltip>

// インタラクティブなコンテンツの場合はDBPopoverを使用してください：
<DBPopover><DBButton>アクション</DBButton></DBPopover>
```

### `tooltip-requires-interactive-parent`

アクセシビリティの観点から、DBTooltipがインタラクティブ要素の子要素であることを保証します（ユーザーは親要素にフォーカスできなければなりません）。

**❌ 無効:**

```jsx
// React
<span>Show more<DBTooltip>XXX</DBTooltip></span>
<div>Text<DBTooltip>Info</DBTooltip></div>
<DBBadge>Badge<DBTooltip>Info</DBTooltip></DBBadge>

// Angular
<span>Show more<db-tooltip>XXX</db-tooltip></span>

// Vue
<div>Text<DBTooltip>Info</DBTooltip></div>
```

**✅ 有効:**

```jsx
// React
<button>保存<DBTooltip>文書を保存する</DBTooltip></button>
<DBButton>保存<DBTooltip>文書を保存する</DBTooltip></DBButton>
<a href="#">リンク<DBTooltip>詳細情報</DBTooltip></a>

// Angular
<db-button>保存<db-tooltip>文書を保存する</db-tooltip></db-button>

// Vue
<DBLink href="#">リンク<DBTooltip>詳細情報</DBTooltip></DBLink>
```

### `no-nested-accordion`

ユーザーを混乱させるため、DBAccordionコンポーネントの相互入れ子化を防ぎます。

**❌ 無効:**

```jsx
// React
<DBAccordion><DBAccordion>Nested</DBAccordion></DBAccordion>
<DBAccordion><DBAccordionItem><DBAccordion>Deep</DBAccordion></DBAccordionItem></DBAccordion>

// Angular
<db-accordion><db-accordion>Nested</db-accordion></db-accordion>

// Vue
<DBAccordion><div><DBAccordion>Nested</DBAccordion></div></DBAccordion>
```

**✅ 有効:**

```jsx
// React
<DBAccordion><DBAccordionItem>Item</DBAccordionItem></DBAccordion>
<div><DBAccordion>First</DBAccordion></div>
<DBAccordion>First</DBAccordion><DBAccordion>Second</DBAccordion>
```

### `badge-corner-placement-rules`

角位置を指定するDBBadgeのテキストは最大3文字に制限され、アクセシビリティのためにlabel属性が必須となります。

**❌ 無効:**

```jsx
// React
<DBBadge placement="corner-top-left">9999</DBBadge>
<DBBadge placement="corner-top-right" text="1234" />
<DBBadge placement="corner-top-left">99</DBBadge>

// Angular
<db-badge placement="corner-top-left">9999</db-badge>

// Vue
<DBBadge placement="corner-top-right">Long text</DBBadge>
```

**✅ 有効:**

```jsx
// React
<DBBadge>長いテキストでも問題ありません</DBBadge>
<DBBadge placement="inline">長いテキスト</DBBadge>
<DBBadge placement="corner-top-left" label="新規アイテム">99+</DBBadge>
<DBBadge placement="corner-top-right" text="5" label="通知" />

// 自動修正により以下のように変換されます：
<DBBadge placement="corner-top-left">9999</DBBadge>
// 以下のように：
<DBBadge placement="corner-top-left" label="9999">999</DBBadge>
```

### `badge-no-inline-in-interactive`

インタラクティブ要素（DBButton、DBLink）内で「inline」配置のDBBadgeの使用を禁止します。代わりに「corner」配置を使用してください。

**❌ 無効:**

```jsx
// React
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="inline">Badge</DBBadge>Link</DBLink>

// Angular
<db-button><db-badge placement="inline">Badge</db-badge>Button</db-button>

// Vue
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
```

**✅ 有効:**

```jsx
// React
<DBBadge placement="inline">Badge</DBBadge>
<DBButton><DBBadge placement="corner-top-right" label="New">5</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="corner-top-left" label="Count">3</DBBadge>Link</DBLink>

// 自動修正後の変換結果：
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
// は次のようになります：
<DBButton><DBBadge placement="corner-top-right">Badge</DBBadge>Button</DBButton>
```

### `button-single-icon-attribute`

DBButtonがicon、iconLeading、iconTrailingのうち1つのアイコン属性のみを使用するように保証します。

**❌ 無効:**

```jsx
// React
<DBButton icon="save" iconLeading="save">Save</DBButton>
<DBButton icon="save" iconTrailing="arrow">Save</DBButton>
<DBButton iconLeading="save" iconTrailing="arrow">Save</DBButton>

// Angular
<db-button icon="save" [iconLeading]="iconName">Save</db-button>

// Vue
<DBButton icon="save" :iconTrailing="icon">Save</DBButton>
```

**✅ 有効:**

```jsx
// React
<DBButton icon="save">Save</DBButton>
<DBButton iconLeading="save">Save</DBButton>
<DBButton iconTrailing="arrow">Next</DBButton>

// Angular
<db-button icon="save">Save</db-button>
<db-button [iconLeading]="iconName">Save</db-button>

// Vue
<DBButton :iconTrailing="icon">Next</DBButton>
```

### `link-external-security`

外部リンクに適切なセキュリティ属性（target="\_blank" および referrerPolicy）が設定されていることを保証します。

**❌ 無効:**

# 厳格な制約
1. **構造の維持**：元の Markdown のデータ構造、インデント、見出し階層、表、リンク、URL、バッジ、コードブロック、インラインコードを一切変更しないこと。
2. **選択的翻訳**：ユーザーに表示される可視的な自然言語コンテンツのみを翻訳すること。
3. **変更禁止**：コードタグ、キー名、変数プレースホルダー（{{var}}、${var}、%s、%d など）、コマンド例、ファイルパス、プロジェクト名、API名、パッケージ名、モデル名、識別子、コード記号の翻訳や変更は**厳禁**である。背景情報に対応する訳名が既に記載されている場合を除く。
4. 用語、スタイル、固有名詞の翻訳は、提供された背景情報と一致させること。

**✅ 有効:**

```jsx
// React
<DBLink href="#">内部リンク</DBLink>
<DBLink content="external" target="_blank" referrerPolicy="no-referrer">外部リンク</DBLink>

// Angular
<db-link content="external" target="_blank" referrerPolicy="no-referrer">外部リンク</db-link>

// Vue
<DBLink content="external" target="_blank" :referrerPolicy="policy">外部リンク</DBLink>
```

### `select-requires-options`

DBSelectがoptionsプロパティまたはoption子要素のいずれかを持つように保証します。

**❌ 無効:**

```jsx
// React
<DBSelect label="Country" />
<DBSelect label="Country"></DBSelect>

// Angular
<db-select label="Country"></db-select>

// Vue
<DBSelect label="Country" />
```

**✅ 有効:**

```jsx
// React
<DBSelect label="Country">
  <option value="de">ドイツ</option>
  <option value="us">アメリカ合衆国</option>
</DBSelect>
<DBSelect label="Country" options={countryOptions} />

// Angular
<db-select label="Country">
  <option value="de">ドイツ</option>
</db-select>
<db-select label="Country" [options]="options"></db-select>

// Vue
<DBSelect label="Country" :options="options" />
```

### `close-button-text-required`

閉じるボタンを持つコンポーネントがアクセシビリティのために適切なテキスト属性を持っていることを確認します。

**❌ 無効:**

```jsx
// React
<DBNotification closeable>Message</DBNotification>
<DBDrawerHeader>Title</DBDrawerHeader>
<DBCustomSelect label="Select" />

// Angular
<db-notification closeable>Message</db-notification>
<db-drawer-header Title></db-drawer-header>

// Vue
<DBCustomSelect label="Select" />
<DBDrawerHeader Title></DBDrawerHeader>
```

**✅ 有効:**

```jsx
// React
<DBNotification closeButtonText="閉じる">メッセージ</DBNotification>
<DBDrawerHeader closeButtonText="ドロワーを閉じる">タイトル</DBDrawerHeader>
<DBCustomSelect mobileCloseButtonText="閉じる" label="選択" />

// Angular
<db-notification closeButtonText="閉じる">メッセージ</db-notification>
<db-drawer-header [closeButtonText]="closeText">タイトル</db-drawer-header>

// Vue
<DBCustomSelect :mobileCloseButtonText="closeText" label="選択" />
<DBDrawerHeader :closeButtonText="closeText">タイトル</DBDrawerHeader>
```

### `drawer-header-required`

アクセシビリティの観点から、DBDrawerにDBDrawerHeaderが必ず存在するようにします。このヘッダーには、閉じるボタンとダイアログ用の`aria-labelledby`が設定されます。

**❌ 無効:**

```jsx
// React
<DBDrawer>Content</DBDrawer>
<DBDrawer open={true}>Content</DBDrawer>

// Angular - slot投影に必要な`header`属性が欠落している
<db-drawer><db-drwer-header>Title</db-drwer-header>Content</db-drawer>
<db-drawer>Content</db-drawer>

// Vue - 名前付きスロットが欠落している
<DBDrawer><DBDrawerHeader>Title</DBDrawerHeader>Content</DBDrawer>
<DBDrawer>Content</DBDrawer>
```

**✅ 有効:**

```jsx
// React
<DBDrawer header={<DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader>}>Content</DBDrawer>

// Angular - ng-contentのプロジェクションに`header`属性を使用
<db-drawer><db-drwawer-header header closeButtonText="Close">Title</db-drawer-header>Content</db-drawer>
<db-drawer><ng-container header><db-drawer-header closeButtonText="Close">Title</db-drawer-header></ng-container>Content</db-drawer>

// Vue - 名前付きスロットを使用
<DBDrawer><template v-slot:header><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></template>Content</DBDrawer>
<DBDrawer><template #header><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></template>Content</DBDrawer>
```

### `sub-component-required-parent`

サブコンポーネントが指定された親コンポーネントおよびスロット内で使用されていることを保証します。

**設定済みの関係性:**

| サブコンポーネント | 必須の親コンポーネント | 必須のスロット |
| ----------------- | --------------- | -------------- |
| `DBDrawerHeader`  | `DBDrawer`      | `header`       |
| `DBDrawerFooter`  | `DBDrawer`      | `footer`       |
| `DBAccordionItem` | `DBAccordion`   | （直接子要素） |

**❌ 無効:**

```jsx
// React
<div><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></div>
<div><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></div>

// Angular - slot属性が欠落しているか親要素が間違っている
<div><db-drawer-header closeButtonText="Close">Title</db-drawer-header></div>
<db-drawer><db-drawer-header closeButtonText="Close">Title</db-drawer-header></db-drawer>

// Vue - 名前付きスロットが欠落しているか親要素が間違っている
<div><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></div>
<DBDrawer><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></DBDrawer>
```

**✅ 有効:**

```jsx
// React
<DBDrawer header={<DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader>}>Content</DBDrawer>
<DBAccordion><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></DBAccordion>

// Angular - slot属性を使用
<db-drawer><db-drawer-header header closeButtonText="Close">Title</db-drawer-header></db-drawer>
<db-drawer><ng-container header><db-drawer-header closeButtonText="Close">Title</db-drawer-header></ng-container></db-drawer>
<db-accordion><db-accordion-item headlinePlain="Test">Content</db-accordion-item></db-accordion>

// Vue - 名前付きslotを使用
<DBDrawer><template #header><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></template></DBDrawer>
<DBAccordion><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></DBAccordion>
```

### `header-burger-menu-label-required`

アクセシビリティのため、DBHeader に burgerMenuLabel 属性が含まれていることを保証します。

**❌ 無効:**

# 厳格な制約
1. **構造の維持**：元の Markdown のデータ構造、インデント、見出し階層、表、リンク、URL、バッジ、コードブロック、インラインコードを一切変更しないこと。
2. **選択的翻訳**：ユーザーに表示される可視的な自然言語内容のみを翻訳すること。
3. **変更禁止**：コードのタグ名、キー名、変数プレースホルダー（{{var}}、${var}、%s、%d など）、コマンド例、ファイルパス、プロジェクト名、API 名、パッケージ名、モデル名、識別子、コード記号を**絶対に**翻訳したり変更したりしてはならない。背景情報に既に対応する訳名が示されている場合は除く。
4. 用語、スタイル、固有名詞の翻訳は、提供された背景情報と一致させること。

# 有効な例
**✅ 有効:**

```jsx
// React
<DBHeader burgerMenuLabel="メニュー">Content</DBHeader>
<DBHeader burgerMenuLabel="ナビゲーションを開く">Content</DBHeader>

// Angular
<db-header burgerMenuLabel="メニュー">Content</db-header>
<db-header [burgerMenuLabel]="menuLabel">Content</db-header>

// Vue
<DBHeader :burgerMenuLabel="label">Content</DBHeader>
```

### `navigation-item-back-button-text-required`

DBNavigationItemがアクセシビリティのためにbackButtonText属性を持つように保証します。

**❌ 無効:**

```jsx
// React
<DBNavigationItem>Item</DBNavigationItem>
<DBNavigationItem icon="home">Item</DBNavigationItem>

// Angular
<db-navigation-item>Item</db-navigation-item>

// Vue
<DBNavigationItem>Item</DBNavigationItem>
```

**✅ 有効:**

```jsx
// React
<DBNavigationItem backButtonText="Back">Item</DBNavigationItem>
<DBNavigationItem backButtonText="Go back">Item</DBNavigationItem>

// Angular
<db-navigation-item backButtonText="Back">Item</db-navigation-item>
<db-navigation-item [backButtonText]="backText">Item</db-navigation-item>

// Vue
<DBNavigationItem :backButtonText="text">Item</DBNavigationItem>
```

### `custom-select-tags-remove-text-required`

selectedType="tag" を持つ DBCustomSelect にアクセシビリティのための removeTagsTexts 属性があることを確認します。

**❌ 無効:**

```jsx
// React
<DBCustomSelect label="Select" selectedType="tag" />
<DBCustomSelect label="Select" selectedType="tag" options={opts} />

// Angular
<db-custom-select label="Select" selectedType="tag"></db-custom-select>

// Vue
<DBCustomSelect label="Select" selectedType="tag" />
```

**✅ 有効:**

```jsx
// React
<DBCustomSelect label="Select" />
<DBCustomSelect label="Select" selectedType="text" />
<DBCustomSelect label="Select" selectedType="tag" removeTagsTexts={["Remove A", "Remove B"]} />

// Angular
<db-custom-select label="Select" selectedType="tag" removeTagsTexts="texts"></db-custom-select>

// Vue
<DBCustomSelect label="Select" selectedType="tag" :removeTagsTexts="texts" />
```

### `tag-removable-remove-button-required`

behavior="removable" を持つ DBTag にアクセシビリティのための removeButton 属性が存在するように保証します。

**❌ 無効:**

# 厳格な制約
1. **構造の維持**：元の Markdown のデータ構造、インデント、見出しの階層、表、リンク、URL、バッジ、コードブロック、インラインコードを一切変更しないこと。
2. **選択的翻訳**：ユーザーに表示される可視的な自然言語コンテンツのみを翻訳すること。
3. **変更禁止**：コードのタグ名、キー名、変数のプレースホルダー（{{var}}、${var}、%s、%d など）、コマンド例、ファイルパス、プロジェクト名、API 名、パッケージ名、モデル名、識別子、コード記号を**絶対に**翻訳したり変更したりしてはならない。背景情報に対応する翻訳が既に示されている場合を除く。
4. 用語、スタイル、固有名詞の翻訳は、提供された背景情報と一致させること。

**✅ 有効:**

```jsx
// React
<DBTag>Tag</DBTag>
<DBTag behavior="static">Tag</DBTag>
<DBTag behavior="removable" removeButton="Remove">Tag</DBTag>

// Angular
<db-tag behavior="removable" removeButton="Remove">Tag</db-tag>

// Vue
<DBTag behavior="removable" :removeButton="removeText">Tag</DBTag>
```

### `form-validation-message-required`

バリデーション属性を持つフォームコンポーネントに、ユーザーへのフィードバックとしてinvalidMessageが設定されていることを保証します。

**❌ 無効:**

```jsx
// React
<DBInput label="Name" required />
<DBTextarea label="Text" maxLength={100} />
<DBInput label="Age" min={18} />
<DBInput label="Email" pattern=".*@.*" />

// Angular
<db-input label="Name" required></db-input>

// Vue
<DBInput label="Score" :max="100" />
```

**✅ 有効:**

```jsx
// React
<DBInput label="Name" />
<DBInput label="Name" required invalidMessage="必須" />
<DBTextarea label="Text" maxLength={100} invalidMessage="長すぎます" />
<DBInput label="Age" min={18} invalidMessage="18歳以上でなければなりません" />
<DBInput label="Email" pattern=".*@.*" invalidMessage="有効なメールアドレスではありません" />

// 適用対象: DBInput, DBTextarea, DBSelect, DBCustomSelect, DBCheckbox
// チェック項目: required, maxLength, minLength (Input/Textarea), min, max, pattern (Inputのみ)
```

### `input-type-required`

開発者の体験を向上させるため、DBInput に type 属性を追加することを推奨します。

**❌ 無効:**

# 厳格な制約
1. **構造の維持**：元の Markdown のデータ構造、インデント、見出しの階層、表、リンク、URL、バッジ、コードブロック、インラインコードを一切変更しないこと。
2. **選択的翻訳**：ユーザーに表示される可視的な自然言語コンテンツのみを翻訳すること。
3. **変更禁止**：コードのタグ、キー名、変数プレースホルダー（{{var}}、${var}、%s、%d など）、コマンド例、ファイルパス、プロジェクト名、API名、パッケージ名、モデル名、識別子、コード記号を翻訳したり変更したりすることは**厳禁**である。背景情報に対応する訳名が既に記載されている場合を除く。
4. 用語、スタイル、固有名詞の翻訳は、提供された背景情報と一致させること。

**✅ 有効:**

```jsx
// React
<DBInput label="Name" type="text" />
<DBInput label="Email" type="email" />
<DBInput label="Password" type="password" />

// 自動修正後の内容：
<DBInput label="Name" type="text" />
```

### `input-file-type-validation`

type="file" を持つ DBInput に accept 属性が設定されていることを確認し、ファイル専用の属性を検証します。

**❌ 無効:**

```jsx
// React
<DBInput label="File" type="file" />
<DBInput label="Name" type="text" multiple />
<DBInput label="Name" type="text" accept=".pdf" />

// Angular
<db-input label="File" type="file"></db-input>

// Vue
<DBInput label="Email" type="email" accept=".pdf" multiple />
```

**✅ 有効:**

```jsx
// React
<DBInput label="Name" type="text" />
<DBInput label="File" type="file" accept=".pdf" />
<DBInput label="Files" type="file" accept="image/*" multiple />

// Angular
<db-input label="File" type="file" accept=".jpg"></db-input>

// Vue
<DBInput label="File" type="file" accept="image/*" :multiple="true" />
```
