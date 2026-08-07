# @db-ux/core-eslint-plugin 插件

<!-- hy-mt2-i18n:start -->
[English](./README.md) | **中文** | [日本語](./README_ja.md) | [Español](./README_es.md)
<!-- hy-mt2-i18n:end -->


用于在 React、Vue 和 Angular 中验证 DB UX 设计系统组件使用是否正确的 ESLint 插件。

## 安装

```shell
npm install eslint @db-ux/core-eslint-plugin --save-dev
```

**对于 Vue 项目**，还需安装 `vue-eslint-parser`：

```shell
npm install vue-eslint-parser --save-dev
```

**对于 Angular 项目**，还需安装 `@angular-eslint/template-parser`：

```shell
npm install @angular-eslint/template-parser --save-dev
```

**对于 React/TypeScript 项目**，还需安装 `@typescript-eslint/parser`：

```shell
npm install @typescript-eslint/parser --save-dev
```

## 使用方法

在您的 ESLint 配置中添加：

**ESLint 9+（扁平配置）：**

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

**对于 Vue 项目**，需配置 Vue 解析器：

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

**对于 Angular 项目**，需配置 Angular 模板解析器：

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

**或单独启用规则：**

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

**对于 React/TypeScript 项目**，需配置 TypeScript 解析器：

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

## 规则

### `button-no-text-requires-tooltip` 规则

确保带有 `noText` 属性的按钮同时具备 `icon`（或 `iconLeading`/`iconTrailing`）属性以及一个 `DBTooltip` 子元素。

**❌ 无效：**

```jsx
// React
<DBButton noText>保存</DBButton>
<DBButton icon="save" noText>保存</DBButton>

// Angular
<db-button [noText]="true">ABC</db-button>
<db-button icon="x" [noText]="true">ABC</db-button>

// Vue
<DBButton :noText="true">ABC</DBButton>
<DBButton icon="x" :noText="true">ABC</DBButton>
```

**✅ 合规示例：**

```jsx
// React
<DBButton icon="save" noText>
  Save
  <DBTooltip>保存文档</DBTooltip>
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

## 支持的框架

- React（JSX/TSX）
- Vue（SFC）
- Angular（模板）

该插件会根据文件扩展名和解析器自动检测所使用的框架。

### `button-type-required`

确保 DBButton 具有明确的 `type` 属性（submit、button 或 reset）。

**❌ 无效：**

```jsx
<DBButton>Save</DBButton>
<DBButton icon="save">Save</DBButton>
```

**✅ 合法：**

```jsx
<DBButton type="button">保存</DBButton>
<DBButton type="submit">提交</DBButton>
<DBButton type="reset">重置</DBButton>
```

### `form-label-required`

确保表单组件（DBInput、DBTextarea、DBSelect、DBCustomSelect、DBCheckbox、DBRadio、DBSwitch）具备 `label` 属性，以提高无障碍访问能力。

**❌ 无效：**

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

**✅ 合法示例：**

```jsx
// React
<DBInput label="名称" />
<DBCheckbox label="同意条款" />
<DBSelect label="国家" />

// Angular
<db-input label="名称"></db-input>
<db-checkbox [label]="labelText"></db-checkbox>

// Vue
<DBInput :label="dynamicLabel" />
<DBCheckbox label="同意条款" />
```

### `prefer-icon-attribute`

对于支持图标属性的组件，建议优先使用 `icon` 属性，而非 `<DBIcon>` 子组件。

**❌ 无效：**

```jsx
// React
<DBButton><DBIcon icon="save" /></DBButton>
<DBInput><DBIcon icon="search" /></DBInput>

// Angular
<db-button><db-icon icon="save"></db-icon></db-button>

// Vue
<DBLink><DBIcon icon="external" /></DBLink>
```

**✅ 合法：**

```jsx
// React
<DBButton icon="save">保存</DBButton>
<DBInput icon="search" />

// Angular
<db-button icon="save">保存</db-button>

// Vue
<DBLink :icon="iconName">链接</DBLink>
```

### `text-or-children-required`

确保组件（DBAccordionItem、DBBadge、DBButton、DBLink、DBIcon、DBInfotext、DBNavigationItem、DBNotification）要么具有 `text` 属性，要么包含子内容。

**❌ 无效：**

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

**✅ 合规：**

```jsx
// React
<DBButton text="保存">保存</DBButton>
<DBButton>保存</DBButton>
<DBLink>点击此处</DBLink>

// Angular
<db-button text="保存"></db-button>
<db-button>保存</db-button>

// Vue
<DBBadge>新</DBBadge>
<DBIcon icon="test">标签</DBIcon>
```

### `no-interactive-tooltip-content`

禁止在 DBTooltip 中使用交互式元素（按钮、链接、输入框）。如需放置交互式内容，请使用 DBPopover。

**❌ 无效示例：**

```jsx
// React
<DBTooltip><button>点击</button></DBTooltip>
<DBTooltip><DBButton>操作</DBButton></DBTooltip>
<DBTooltip><a href="#">链接</a></DBTooltip>

// Angular
<db-tooltip><button>点击</button></db-tooltip>
<db-tooltip><db-button>操作</db-button></db-tooltip>

// Vue
<DBTooltip><DBLink href="#">链接</DBLink></DBTooltip>
```

**✅ 合法：**

```jsx
// React
<DBTooltip>简单文本</DBTooltip>
<DBTooltip><span>包含 span 的文本</span></DBTooltip>
<DBTooltip><p>段落</p></DBTooltip>

// 对于交互式内容，请使用 DBPopover：
<DBPopover><DBButton>操作</DBButton></DBPopover>
```

### `tooltip-requires-interactive-parent`

该规则可确保 DBTooltip 作为交互式元素的子元素，从而满足无障碍访问要求（用户必须能够将焦点定位到父元素上）。

**❌ 无效：**

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

**✅ 合规：**

```jsx
// React
<button>保存<DBTooltip>保存文档</DBTooltip></button>
<DBButton>保存<DBTooltip>保存文档</DBTooltip></DBButton>
<a href="#">链接<DBTooltip>更多信息</DBTooltip></a>

// Angular
<db-button>保存<db-tooltip>保存文档</db-tooltip></db-button>

// Vue
<DBLink href="#">链接<DBTooltip>更多信息</DBTooltip></DBLink>
```

### `no-nested-accordion`：禁止嵌套 DBAccordion 组件，因为这会令用户产生困惑。

防止 DBAccordion 组件相互嵌套，因为这会让用户感到困惑。

**❌ 无效：**

# 严格约束
1. **结构锁定**：绝对保持原有的 Markdown 数据结构、缩进、标题层级、表格、链接、URL、徽章、代码块和行内代码完全不变。
2. **选择性翻译**：仅翻译面向用户展示的可见自然语言内容。
3. **禁止修改**：**严禁**翻译或更改代码标签、键名、变量占位符（如 {{var}}、${var}、%s、%d 等）、命令示例、文件路径、项目名、API 名、包名、模型名、标识符和代码符号；除非背景信息中已经给出对应译名。
4. 术语、风格、专有名词的译法要与所给背景信息保持一致。

【待翻译片段】
```jsx
// React
<DBAccordion><DBAccordion>Nested</DBAccordion></DBAccordion>
<DBAccordion><DBAccordionItem><DBAccordion>Deep</DBAccordion></DBAccordionItem></DBAccordion>

// Angular
<db-accordion><db-accordion>Nested</db-accordion></db-accordion>

// Vue
<DBAccordion><div><DBAccordion>Nested</DBAccordion></div></DBAccordion>
```

**✅ 合法：**

```jsx
// React
<DBAccordion><DBAccordionItem>项目</DBAccordionItem></DBAccordion>
<div><DBAccordion>第一个</DBAccordion></div>
<DBAccordion>第一个</DBAccordion><DBAccordion>第二个</DBAccordion>
```

### `badge-corner-placement-rules` 规则

确保带有角位属性的 DBBadge 的字符数不超过 3 个，并包含用于无障碍访问的 label 属性。

**❌ 无效：**

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

**✅ 合法：**

```jsx
// React
<DBBadge>长文本是允许的</DBBadge>
<DBBadge placement="inline">长文本</DBBadge>
<DBBadge placement="corner-top-left" label="新项目">99+</DBBadge>
<DBBadge placement="corner-top-right" text="5" label="通知" />

// 自动修复功能会将：
<DBBadge placement="corner-top-left">9999</DBBadge>
// 转换为：
<DBBadge placement="corner-top-left" label="9999">999</DBBadge>
```

### `badge-no-inline-in-interactive` 规则

防止在交互式元素（DBButton、DBLink）内部使用内联位置的 DBBadge，应改用角落位置。

**❌ 无效：**

```jsx
// React
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="inline">Badge</DBBadge>Link</DBLink>

// Angular
<db-button><db-badge placement="inline">Badge</db-badge>Button</db-button>

// Vue
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
```

**✅ 合法：**

```jsx
// React
<DBBadge placement="inline">Badge</DBBadge>
<DBButton><DBBadge placement="corner-top-right" label="New">5</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="corner-top-left" label="Count">3</DBBadge>Link</DBLink>

// 自动修复会将：
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
// 转换为：
<DBButton><DBBadge placement="corner-top-right">Badge</DBBadge>Button</DBButton>
```

### `button-single-icon-attribute` 约束

确保 DBButton 只使用一个图标属性（icon、iconLeading 或 iconTrailing）。

**❌ 无效：**

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

**✅ 合法示例：**

```jsx
// React
<DBButton icon="save">保存</DBButton>
<DBButton iconLeading="save">保存</DBButton>
<DBButton iconTrailing="arrow">下一步</DBButton>

// Angular
<db-button icon="save">保存</db-button>
<db-button [iconLeading]="iconName">保存</db-button>

// Vue
<DBButton :iconTrailing="icon">下一步</DBButton>
```

### `link-external-security` 规则

确保外部链接具备正确的安全属性（target="\_blank" 和 referrerPolicy）。

**❌ 无效：**

```jsx
// React
<DBLink content="external">外部链接</DBLink>
<DBLink content="external" target="_blank">外部链接</DBLink>
<DBLink target="_blank">外部链接</DBLink>

// Angular
<db-link content="external">外部链接</db-link>

// Vue
<DBLink content="external" :target="linkTarget">外部链接</DBLink>
```

**✅ 合法：**

```jsx
// React
<DBLink href="#">内部链接</DBLink>
<DBLink content="external" target="_blank" referrerPolicy="no-referrer">外部链接</DBLink>

// Angular
<db-link content="external" target="_blank" referrerPolicy="no-referrer">外部链接</db-link>

// Vue
<DBLink content="external" target="_blank" :referrerPolicy="policy">外部链接</DBLink>
```

### `select-requires-options` 规则

确保 DBSelect 要么具有 options 属性，要么具有 option 子元素。

**❌ 无效：**

```jsx
// React
<DBSelect label="Country" />
<DBSelect label="Country"></DBSelect>

// Angular
<db-select label="Country"></db-select>

// Vue
<DBSelect label="Country" />
```

**✅ 合法：**

```jsx
// React
<DBSelect label="国家">
  <option value="de">德国</option>
  <option value="us">美国</option>
</DBSelect>
<DBSelect label="国家" options={countryOptions} />

// Angular
<db-select label="国家">
  <option value="de">德国</option>
</db-select>
<db-select label="国家" [options]="options"></db-select>

// Vue
<DBSelect label="国家" :options="options" />
```

### `close-button-text-required`

确保带有关闭按钮的组件具备适当的文本属性，以提高无障碍访问性。

**❌ 无效：**

```jsx
// React
<DBNotification closeable>消息</DBNotification>
<DBDrawerHeader>标题</DBDrawerHeader>
<DBCustomSelect label="选择" />

// Angular
<db-notification closeable>消息</db-notification>
<db-drawer-header>标题</db-drawer-header>

// Vue
<DBCustomSelect label="选择" />
<DBDrawerHeader>标题</DBDrawerHeader>
```

**✅ 合规：**

```jsx
// React
<DBNotification closeButtonText="关闭">消息</DBNotification>
<DBDrawerHeader closeButtonText="关闭抽屉">标题</DBDrawerHeader>
<DBCustomSelect mobileCloseButtonText="关闭" label="选择" />

// Angular
<db-notification closeButtonText="关闭">消息</db-notification>
<db-drawer-header [closeButtonText]="closeText">标题</db-drawer-header>

// Vue
<DBCustomSelect :mobileCloseButtonText="closeText" label="选择" />
<DBDrawerHeader :closeButtonText="closeText">标题</DBDrawerHeader>
```

### `drawer-header-required` 的作用

确保 DBDrawer 包含 DBDrawerHeader 以提高可访问性。该标题栏会为对话框提供关闭按钮以及 `aria-labelledby` 属性。

**❌ 无效：**

```jsx
// React
<DBDrawer>内容</DBDrawer>
<DBDrawer open={true}>内容</DBDrawer>

// Angular - 缺少用于插槽投影的 `header` 属性
<db-drawer><db-drawer-header>标题</db-drawer-header>内容</db-drawer>
<db-drawer>内容</db-drawer>

// Vue - 缺少命名插槽
<DBDrawer><DBDrawerHeader>标题</DBDrawerHeader>内容</DBDrawer>
<DBDrawer>内容</DBDrawer>
```

**✅ 合规：**

```jsx
// React
<DBDrawer header={<DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader>}>Content</DBDrawer>

// Angular - 使用 `header` 属性进行 ng-content 投射
<db-drawer><db-drawer-header header closeButtonText="Close">Title</db-drawer-header>Content</db-drawer>
<db-drawer><ng-container header><db-drawer-header closeButtonText="Close">Title</db-drawer-header></ng-container>Content</db-drawer>

// Vue - 使用命名插槽
<DBDrawer><template v-slot:header><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></template>Content</DBDrawer>
<DBDrawer><template #header><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></template>Content</DBDrawer>
```

### `子组件所需父组件`

确保子组件在指定的父组件及插槽中被正确使用。

**已配置的关联关系：**

| 子组件             | 必需的父组件   | 必需的插槽     |
| ----------------- | --------------- | -------------- |
| `DBDrawerHeader`  | `DBDrawer`      | `header`       |
| `DBDrawerFooter`  | `DBDrawer`      | `footer`       |
| `DBAccordionItem` | `DBAccordion`   | 直接子节点     |

**❌ 无效：**

```jsx
// React
<div><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></div>
<div><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></div>

// Angular - 缺少 slot 属性或父组件错误
<div><db-drawer-header closeButtonText="Close">Title</db-drawer-header></div>
<db-drawer><db-drawer-header closeButtonText="Close">Title</db-drawer-header></db-drawer>

// Vue - 缺少命名插槽或父组件错误
<div><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></div>
<DBDrawer><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader>
```

**✅ 合法用法：**

```jsx
// React
<DBDrawer header={<DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader>}>Content</DBDrawer>
<DBAccordion><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></DBAccordion>

// Angular - 使用 slot 属性
<db-drawer><db-drawer-header header closeButtonText="Close">Title</db-drawer-header></db-drawer>
<db-drawer><ng-container header><db-drawer-header closeButtonText="Close">Title</db-drawer-header></ng-container></db-drawer>
<db-accordion><db-accordion-item headlinePlain="Test">Content</db-accordion-item></db-accordion>

// Vue - 使用命名 slot
<DBDrawer><template #header><DBDrawerHeader closeButtonText="Close">Title</DBDrawerHeader></template></DBDrawer>
<DBAccordion><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></DBAccordion>
```

### `header-burger-menu-label-required`：确保 DBHeader 具有 burgerMenuLabel 属性以提升无障碍性。

确保 DBHeader 具有 burgerMenuLabel 属性，从而提升无障碍访问体验。

**❌ 无效：**

# 严格约束
1. **结构锁定**：绝对保持原有的 Markdown 数据结构、缩进、标题层级、表格、链接、URL、徽章、代码块和行内代码完全不变。
2. **选择性翻译**：仅翻译面向用户展示的可见自然语言内容。
3. **禁止修改**：**严禁**翻译或更改代码标签、键名、变量占位符（如 {{var}}、${var}、%s、%d 等）、命令示例、文件路径、项目名、API 名、包名、模型名、标识符和代码符号；除非背景信息中已经给出对应译名。
4. 术语、风格、专有名词的译法要与所给背景信息保持一致。

【待翻译片段】
```jsx
// React
<DBHeader>Content</DBHeader>
<DBHeader closeButtonText="Close">Content</DBHeader>

// Angular
<db-header>Content</db-header>

// Vue
<DBHeader>Content</DBHeader>
```

**✅ 合规：**

```jsx
// React
<DBHeader burgerMenuLabel="菜单">内容</DBHeader>
<DBHeader burgerMenuLabel="打开导航">内容</DBHeader>

// Angular
<db-header burgerMenuLabel="菜单">内容</db-header>
<db-header [burgerMenuLabel]="menuLabel">内容</db-header>

// Vue
<DBHeader :burgerMenuLabel="label">内容</DBHeader>
```

### `navigation-item-back-button-text-required`

确保 DBNavigationItem 具有 backButtonText 属性，从而提升无障碍访问体验。

**❌ 无效：**

```jsx
// React
<DBNavigationItem>Item</DBNavigationItem>
<DBNavigationItem icon="home">Item</DBNavigationItem>

// Angular
<db-navigation-item>Item</db-navigation-item>

// Vue
<DBNavigationItem>Item</DBNavigationItem>
```

**✅ 合规：**

```jsx
// React
<DBNavigationItem backButtonText="返回">Item</DBNavigationItem>
<DBNavigationItem backButtonText="回到上一页">Item</DBNavigationItem>

// Angular
<db-navigation-item backButtonText="返回">Item</db-navigation-item>
<db-navigation-item [backButtonText]="backText">Item</db-navigation-item>

// Vue
<DBNavigationItem :backButtonText="text">Item</DBNavigationItem>
```

### `custom-select-tags-remove-text-required`

确保 selectedType="tag" 的 DBCustomSelect 具有 removeTagsTexts 属性，以提升无障碍访问体验。

**❌ 无效：**

```jsx
// React
<DBCustomSelect label="选择" selectedType="tag" />
<DBCustomSelect label="选择" selectedType="tag" options={opts} />

// Angular
<db-custom-select label="选择" selectedType="tag"></db-custom-select>

// Vue
<DBCustomSelect label="选择" selectedType="tag" />
```

**✅ 合法示例：**

```jsx
// React
<DBCustomSelect label="选择" />
<DBCustomSelect label="选择" selectedType="text" />
<DBCustomSelect label="选择" selectedType="tag" removeTagsTexts={["移除A", "移除B"]} />

// Angular
<db-custom-select label="选择" selectedType="tag" removeTagsTexts="texts"></db-custom-select>

// Vue
<DBCustomSelect label="选择" selectedType="tag" :removeTagsTexts="texts" />
```

### `tag-removable-remove-button-required`

确保行为为“removable”的DBTag具备removeButton属性，从而提升无障碍访问体验。

**❌ 无效：**

```jsx
// React
<DBTag behavior="removable">标签</DBTag>
<DBTag behavior="removable" semantic="successful">标签</DBTag>

// Angular
<db-tag behavior="removable">标签</db-tag>

// Vue
<DBTag behavior="removable">标签</DBTag>
```

**✅ 合规：**

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

确保带有验证属性的表单组件具备无效消息，以便向用户提供反馈。

**❌ 无效：**

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

**✅ 合法：**

```jsx
// React
<DBInput label="Name" />
<DBInput label="Name" required invalidMessage="必填" />
<DBTextarea label="Text" maxLength={100} invalidMessage="过长" />
<DBInput label="Age" min={18} invalidMessage="必须大于18岁" />
<DBInput label="Email" pattern=".*@.*" invalidMessage="邮箱格式无效" />

// 适用组件：DBInput、DBTextarea、DBSelect、DBCustomSelect、DBCheckbox
// 检查属性：required、maxLength、minLength（Input/Textarea）、min、max、pattern（仅Input）
```

### `input-type-required` 的含义

建议为 DBInput 添加 type 属性，从而提升开发者的使用体验。

**❌ 无效：**

# 严格约束
1. **结构锁定**：绝对保持原有的 Markdown 数据结构、缩进、标题层级、表格、链接、URL、徽章、代码块和行内代码完全不变。
2. **选择性翻译**：仅翻译面向用户展示的可见自然语言内容。
3. **禁止修改**：**严禁**翻译或更改代码标签、键名、变量占位符（如 {{var}}、${var}、%s、%d 等）、命令示例、文件路径、项目名、API 名、包名、模型名、标识符和代码符号；除非背景信息中已经给出对应译名。
4. 术语、风格、专有名词的译法要与所给背景信息保持一致。

```jsx
// React
<DBInput label="Name" />
<DBInput label="Name" placeholder="输入姓名" />

// Angular
<db-input label="Name"></db-input>

// Vue
<DBInput label="Name" />
```

**✅ 合法：**

```jsx
// React
<DBInput label="Name" type="text" />
<DBInput label="Email" type="email" />
<DBInput label="Password" type="password" />

// 自动修复后会添加：
<DBInput label="Name" type="text" />
```

### `input-file-type-validation`

确保类型为“file”的DBInput具备accept属性，并验证仅适用于文件的属性。

**❌ 无效：**

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

**✅ 合法：**

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
