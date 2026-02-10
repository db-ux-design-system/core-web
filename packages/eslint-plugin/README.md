# @db-ux/eslint-plugin

ESLint plugin to validate correct usage of DB UX Design System components across React, Vue, and Angular.

## Installation

```shell
npm install eslint @db-ux/eslint-plugin --save-dev
```

## Usage

Add to your ESLint config:

**ESLint 9+ (flat config):**

```js
import dbUx from "@db-ux/eslint-plugin";

export default [
	{
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

**Or enable rules individually:**

```js
import dbUx from "@db-ux/eslint-plugin";

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

## Rules

### `button-no-text-requires-tooltip`

Ensures that buttons with `noText` prop have both an `icon` (or `iconLeading`/`iconTrailing`) and a `DBTooltip` child.

**❌ Invalid:**

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

**✅ Valid:**

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

## Supported Frameworks

- React (JSX/TSX)
- Vue (SFC)
- Angular (Templates)

The plugin automatically detects the framework based on file extension and parser.

### `button-type-required`

Ensures that DBButton has an explicit `type` attribute (submit, button, or reset).

**❌ Invalid:**

```jsx
<DBButton>Save</DBButton>
<db-button>Save</db-button>
```

**✅ Valid:**

```jsx
<DBButton type="button">Save</DBButton>
<DBButton type="submit">Submit</DBButton>
<DBButton type="reset">Reset</DBButton>
```

### `form-label-required`

Ensures that form components (DBInput, DBTextarea, DBSelect, DBCustomSelect, DBCheckbox, DBRadio, DBSwitch) have a `label` attribute for accessibility.

**❌ Invalid:**

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

**✅ Valid:**

```jsx
// React
<DBInput label="Name" />
<DBCheckbox label="Accept terms" />
<DBSelect label="Country" />

// Angular
<db-input label="Name"></db-input>
<db-checkbox [label]="labelText"></db-checkbox>

// Vue
<DBInput :label="dynamicLabel" />
<DBCheckbox label="Accept terms" />
```

### `prefer-icon-attribute`

Prefer using the `icon` attribute over `<DBIcon>` child component for components that support icon attributes.

**❌ Invalid:**

```jsx
// React
<DBButton><DBIcon icon="save" /></DBButton>
<DBInput><DBIcon icon="search" /></DBInput>

// Angular
<db-button><db-icon icon="save"></db-icon></db-button>

// Vue
<DBLink><DBIcon icon="external" /></DBLink>
```

**✅ Valid:**

```jsx
// React
<DBButton icon="save">Save</DBButton>
<DBInput icon="search" />

// Angular
<db-button icon="save">Save</db-button>

// Vue
<DBLink :icon="iconName">Link</DBLink>
```

### `text-or-children-required`

Ensures that components (DBAccordionItem, DBBadge, DBButton, DBLink, DBIcon, DBInfotext, DBNavigationItem, DBNotification) have either a `text` property or children content.

**❌ Invalid:**

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

**✅ Valid:**

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

Prevents interactive elements (buttons, links, inputs) inside DBTooltip. Use DBPopover for interactive content.

**❌ Invalid:**

```jsx
// React
<DBTooltip><button>Click</button></DBTooltip>
<DBTooltip><DBButton>Action</DBButton></DBTooltip>
<DBTooltip><a href="#">Link</a></DBTooltip>

// Angular
<db-tooltip><button>Click</button></db-tooltip>
<db-tooltip><db-button>Action</db-button></db-tooltip>

// Vue
<DBTooltip><DBLink href="#">Link</DBLink></DBTooltip>
```

**✅ Valid:**

```jsx
// React
<DBTooltip>Simple text</DBTooltip>
<DBTooltip><span>Text with span</span></DBTooltip>
<DBTooltip><p>Paragraph</p></DBTooltip>

// For interactive content, use DBPopover:
<DBPopover><DBButton>Action</DBButton></DBPopover>
```

### `tooltip-requires-interactive-parent`

Ensures DBTooltip is a child of an interactive element for accessibility (users must be able to focus the parent).

**❌ Invalid:**

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

**✅ Valid:**

```jsx
// React
<button>Save<DBTooltip>Save document</DBTooltip></button>
<DBButton>Save<DBTooltip>Save document</DBTooltip></DBButton>
<a href="#">Link<DBTooltip>More info</DBTooltip></a>

// Angular
<db-button>Save<db-tooltip>Save document</db-tooltip></db-button>

// Vue
<DBLink href="#">Link<DBTooltip>More info</DBTooltip></DBLink>
```
