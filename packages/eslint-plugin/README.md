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

### `no-nested-accordion`

Prevents nesting DBAccordion components inside each other as it confuses users.

**❌ Invalid:**

```jsx
// React
<DBAccordion><DBAccordion>Nested</DBAccordion></DBAccordion>
<DBAccordion><DBAccordionItem><DBAccordion>Deep</DBAccordion></DBAccordionItem></DBAccordion>

// Angular
<db-accordion><db-accordion>Nested</db-accordion></db-accordion>

// Vue
<DBAccordion><div><DBAccordion>Nested</DBAccordion></div></DBAccordion>
```

**✅ Valid:**

```jsx
// React
<DBAccordion><DBAccordionItem>Item</DBAccordionItem></DBAccordion>
<div><DBAccordion>First</DBAccordion></div>
<DBAccordion>First</DBAccordion><DBAccordion>Second</DBAccordion>
```

### `badge-corner-placement-rules`

Ensures DBBadge with corner placement has max 3 characters and a label attribute for accessibility.

**❌ Invalid:**

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

**✅ Valid:**

```jsx
// React
<DBBadge>Long text is fine</DBBadge>
<DBBadge placement="inline">Long text</DBBadge>
<DBBadge placement="corner-top-left" label="New items">99+</DBBadge>
<DBBadge placement="corner-top-right" text="5" label="Notifications" />

// Auto-fix converts:
<DBBadge placement="corner-top-left">9999</DBBadge>
// to:
<DBBadge placement="corner-top-left" label="9999">999</DBBadge>
```

### `badge-no-inline-in-interactive`

Prevents DBBadge with inline placement inside interactive elements (DBButton, DBLink). Use corner placement instead.

**❌ Invalid:**

```jsx
// React
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="inline">Badge</DBBadge>Link</DBLink>

// Angular
<db-button><db-badge placement="inline">Badge</db-badge>Button</db-button>

// Vue
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
```

**✅ Valid:**

```jsx
// React
<DBBadge placement="inline">Badge</DBBadge>
<DBButton><DBBadge placement="corner-top-right" label="New">5</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="corner-top-left" label="Count">3</DBBadge>Link</DBLink>

// Auto-fix converts:
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
// to:
<DBButton><DBBadge placement="corner-top-right">Badge</DBBadge>Button</DBButton>
```

### `button-single-icon-attribute`

Ensures DBButton uses only one icon attribute (icon, iconLeading, or iconTrailing).

**❌ Invalid:**

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

**✅ Valid:**

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

Ensures external links have proper security attributes (target="\_blank" and referrerPolicy).

**❌ Invalid:**

```jsx
// React
<DBLink content="external">External</DBLink>
<DBLink content="external" target="_blank">External</DBLink>
<DBLink target="_blank">External</DBLink>

// Angular
<db-link content="external">External</db-link>

// Vue
<DBLink content="external" :target="linkTarget">External</DBLink>
```

**✅ Valid:**

```jsx
// React
<DBLink href="#">Internal link</DBLink>
<DBLink content="external" target="_blank" referrerPolicy="no-referrer">External</DBLink>

// Angular
<db-link content="external" target="_blank" referrerPolicy="no-referrer">External</db-link>

// Vue
<DBLink content="external" target="_blank" :referrerPolicy="policy">External</DBLink>
```

### `select-requires-options`

Ensures DBSelect has either an options property or option children.

**❌ Invalid:**

```jsx
// React
<DBSelect label="Country" />
<DBSelect label="Country"></DBSelect>

// Angular
<db-select label="Country"></db-select>

// Vue
<DBSelect label="Country" />
```

**✅ Valid:**

```jsx
// React
<DBSelect label="Country">
  <option value="de">Germany</option>
  <option value="us">USA</option>
</DBSelect>
<DBSelect label="Country" options={countryOptions} />

// Angular
<db-select label="Country">
  <option value="de">Germany</option>
</db-select>
<db-select label="Country" [options]="options"></db-select>

// Vue
<DBSelect label="Country" :options="options" />
```

### `close-button-text-required`

Ensures components with close buttons have appropriate text attributes for accessibility.

**❌ Invalid:**

```jsx
// React
<DBNotification>Message</DBNotification>
<DBDrawer>Content</DBDrawer>
<DBCustomSelect label="Select" />

// Angular
<db-notification>Message</db-notification>
<db-drawer>Content</db-drawer>

// Vue
<DBCustomSelect label="Select" />
```

**✅ Valid:**

```jsx
// React
<DBNotification closeButtonText="Close">Message</DBNotification>
<DBDrawer closeButtonText="Close drawer">Content</DBDrawer>
<DBCustomSelect mobileCloseButtonText="Close" label="Select" />

// Angular
<db-notification closeButtonText="Close">Message</db-notification>
<db-drawer [closeButtonText]="closeText">Content</db-drawer>

// Vue
<DBCustomSelect :mobileCloseButtonText="closeText" label="Select" />
```

### `header-burger-menu-label-required`

Ensures DBHeader has burgerMenuLabel attribute for accessibility.

**❌ Invalid:**

```jsx
// React
<DBHeader>Content</DBHeader>
<DBHeader closeButtonText="Close">Content</DBHeader>

// Angular
<db-header>Content</db-header>

// Vue
<DBHeader>Content</DBHeader>
```

**✅ Valid:**

```jsx
// React
<DBHeader burgerMenuLabel="Menu">Content</DBHeader>
<DBHeader burgerMenuLabel="Open navigation">Content</DBHeader>

// Angular
<db-header burgerMenuLabel="Menu">Content</db-header>
<db-header [burgerMenuLabel]="menuLabel">Content</db-header>

// Vue
<DBHeader :burgerMenuLabel="label">Content</DBHeader>
```

### `navigation-item-back-button-text-required`

Ensures DBNavigationItem has backButtonText attribute for accessibility.

**❌ Invalid:**

```jsx
// React
<DBNavigationItem>Item</DBNavigationItem>
<DBNavigationItem icon="home">Item</DBNavigationItem>

// Angular
<db-navigation-item>Item</db-navigation-item>

// Vue
<DBNavigationItem>Item</DBNavigationItem>
```

**✅ Valid:**

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

Ensures DBCustomSelect with selectedType="tag" has removeTagsTexts attribute for accessibility.

**❌ Invalid:**

```jsx
// React
<DBCustomSelect label="Select" selectedType="tag" />
<DBCustomSelect label="Select" selectedType="tag" options={opts} />

// Angular
<db-custom-select label="Select" selectedType="tag"></db-custom-select>

// Vue
<DBCustomSelect label="Select" selectedType="tag" />
```

**✅ Valid:**

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

Ensures DBTag with behavior="removable" has removeButton attribute for accessibility.

**❌ Invalid:**

```jsx
// React
<DBTag behavior="removable">Tag</DBTag>
<DBTag behavior="removable" semantic="successful">Tag</DBTag>

// Angular
<db-tag behavior="removable">Tag</db-tag>

// Vue
<DBTag behavior="removable">Tag</DBTag>
```

**✅ Valid:**

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

Ensures form components with validation attributes have invalidMessage for user feedback.

**❌ Invalid:**

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

**✅ Valid:**

```jsx
// React
<DBInput label="Name" />
<DBInput label="Name" required invalidMessage="Required" />
<DBTextarea label="Text" maxLength={100} invalidMessage="Too long" />
<DBInput label="Age" min={18} invalidMessage="Must be 18+" />
<DBInput label="Email" pattern=".*@.*" invalidMessage="Invalid email" />

// Applies to: DBInput, DBTextarea, DBSelect, DBCustomSelect, DBCheckbox
// Checks: required, maxLength, minLength (Input/Textarea), min, max, pattern (Input only)
```

### `input-type-required`

Suggests adding type attribute to DBInput for better developer experience.

**❌ Invalid:**

```jsx
// React
<DBInput label="Name" />
<DBInput label="Name" placeholder="Enter name" />

// Angular
<db-input label="Name"></db-input>

// Vue
<DBInput label="Name" />
```

**✅ Valid:**

```jsx
// React
<DBInput label="Name" type="text" />
<DBInput label="Email" type="email" />
<DBInput label="Password" type="password" />

// Auto-fix adds:
<DBInput label="Name" type="text" />
```

### `input-file-type-validation`

Ensures DBInput with type="file" has accept attribute, and validates file-only attributes.

**❌ Invalid:**

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

**✅ Valid:**

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
