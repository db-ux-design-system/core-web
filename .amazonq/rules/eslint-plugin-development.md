# ESLint Plugin Development Rules

When developing new ESLint rules for @db-ux/core-eslint-plugin:

## Rule Structure

- Place rule files in `packages/eslint-plugin/src/rules/{component}/` folder
- Place test files in `packages/eslint-plugin/test/rules/{component}/` folder
- Use standard rule format (not `ESLintUtils.RuleCreator`)
- Import shared utilities from `../../shared/utils.js`
- Import constants from `../../shared/constants.js`

## Framework Support

Every rule MUST support all three frameworks:

- **React**: PascalCase components (e.g., `<DBButton>`)
- **Angular**: kebab-case with binding syntax (e.g., `<db-button [prop]="value">`)
- **Vue**: PascalCase with binding syntax (e.g., `<DBButton :prop="value">`)

### Shared Utilities

- `isDBComponent(node, COMPONENTS.DBButton)` - matches both `DBButton` and `db-button`
- `getAttributeValue(node, 'prop')` - matches `prop`, `[prop]`, `:prop`, and handles empty string for boolean attributes
- `hasChildOfType(node, COMPONENTS.DBTooltip)` - matches both `DBTooltip` and `db-tooltip`
- `createAngularVisitors(context, COMPONENTS.DBButton, handler)` - creates Angular-specific visitors with parser services
- `defineTemplateBodyVisitor(context, templateVisitor, scriptVisitor)` - handles Vue, Angular, and JSX

### Constants

- Use `COMPONENTS` from `constants.js` for component names (e.g., `COMPONENTS.DBButton`)
- Use `MESSAGES` from `constants.js` for error messages
- Use `MESSAGE_IDS` from `constants.js` for message identifiers

## Critical: Attribute Value Checks

### Boolean Attributes

**ALWAYS** check for `null` instead of falsy values:

```typescript
// ❌ WRONG - fails for empty strings and false positives
if (!value) return;
if (!attribute) {
	/* report error */
}

// ✅ CORRECT - handles Angular boolean attributes (empty strings)
if (value === null) return;
if (attribute === null || attribute === "") {
	/* report error */
}
```

**Why**: Angular boolean attributes return `''` (empty string), which is falsy but valid.

### String Attributes

For required text attributes, check both `null` and empty string:

```typescript
// ✅ CORRECT
if (textAttribute === null || textAttribute === "") {
	context.report({
		/* error */
	});
}
```

### Numeric/Expression Attributes

For attributes that can have falsy values (0, false), only check `null`:

```typescript
// ✅ CORRECT - allows text={0}
if (text === null && !hasChildren) {
	context.report({
		/* error */
	});
}
```

## Critical: Element Type Checks

### Parent/Child Traversal

When checking parent or child element types, **ALWAYS** include fallback types:

```typescript
// ❌ WRONG - misses Element$1 and Element fallbacks
if (parent.type === 'JSXElement' || parent.type === 'VElement') {

// ✅ CORRECT - includes all possible types
if (
	parent.type === 'JSXElement' ||
	parent.type === 'VElement' ||
	parent.type === 'Element' ||
	child.type === "Element$1"
) {
```

### Angular Element Types

Angular template parser uses both `Element` and `Element$1`:

```typescript
// ❌ WRONG
if (parent.type === 'Element' && isDBComponent(parent, COMPONENTS.DBAccordion)) {

// ✅ CORRECT
if ((parent.type === 'Element' || parent.type === 'Element$1') && isDBComponent(parent, COMPONENTS.DBAccordion)) {
```

### Child Element Checks

```typescript
// ✅ CORRECT - includes all child types
const iconChild = node.children?.find(
	(child: any) =>
		(child.type === "JSXElement" ||
			child.type === "VElement" ||
			child.type === "Element" ||
			child.type === "Element$1") &&
		isDBComponent(child.openingElement || child, "DBIcon")
);
```

## Rule Implementation Pattern

### Single Component Rule

```typescript
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from "../../shared/utils.js";
import { COMPONENTS, MESSAGES, MESSAGE_IDS } from "../../shared/constants.js";

export default {
	meta: {
		type: "problem" as const,
		docs: {
			description: "Rule description",
			url: "https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#rule-name"
		},
		fixable: "code" as const, // optional
		messages: {
			[MESSAGE_IDS.YOUR_MESSAGE_ID]: MESSAGES.YOUR_MESSAGE
		},
		schema: []
	},
	create(context: any) {
		// Angular handler with parser services
		const angularHandler = (node: any, parserServices: any) => {
			const value = getAttributeValue(node, "prop");
			// CRITICAL: Use === null for boolean checks
			if (value === null || value === "") {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.YOUR_MESSAGE_ID,
					data: { component: node.name } // Use node.name for kebab-case
				});
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBButton,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		// React/Vue handler
		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBButton)) return;

			const value = getAttributeValue(openingElement, "prop");
			// CRITICAL: Use === null for boolean checks
			if (value === null || value === "") {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.YOUR_MESSAGE_ID,
					data: {
						component:
							openingElement.name?.name || openingElement.rawName
					}
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkComponent, Element: checkComponent },
			{ JSXElement: checkComponent }
		);
	}
};
```

### Multiple Components Rule

**CRITICAL**: When checking multiple components, collect ALL Angular visitors before returning:

```typescript
const COMPONENTS_TO_CHECK = ["DBButton", "DBLink", "DBInput"];

export default {
	meta: {
		/* ... */
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const component = COMPONENTS_TO_CHECK.find((comp) =>
				isDBComponent(node, comp)
			);
			if (!component) return;

			// Your validation logic here
		};

		// ❌ WRONG - Returns after first component, others never registered
		for (const comp of COMPONENTS_TO_CHECK) {
			const angularVisitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (angularVisitors) return angularVisitors; // ❌ Early return!
		}

		// ✅ CORRECT - Collects all visitors before returning
		const angularVisitors: any = {};
		for (const comp of COMPONENTS_TO_CHECK) {
			const visitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (visitors) {
				Object.assign(angularVisitors, visitors);
			}
		}
		if (Object.keys(angularVisitors).length > 0) return angularVisitors;

		const checkComponent = (node: any) => {
			// React/Vue handler
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkComponent, Element: checkComponent },
			{ JSXElement: checkComponent }
		);
	}
};
```

## Adding New Messages

1. Add message to `MESSAGES` object in `src/shared/constants.ts`
2. Add corresponding ID to `MESSAGE_IDS` object
3. Use the constant in your rule: `[MESSAGE_IDS.YOUR_ID]: MESSAGES.YOUR_MESSAGE`

**NEVER** use hardcoded strings like `messageId: 'noInteractive'`

## Test Requirements

Every rule MUST have tests covering:

1. **Valid cases** for all three frameworks:
    - React example with PascalCase
    - Angular example with kebab-case and `[prop]="value"`
    - Vue example with PascalCase and `:prop="value"`

2. **Invalid cases** for all three frameworks:
    - React example
    - Angular example
    - Vue example

3. **Framework integration tests** in `test/frameworks/`:
    - Add example to `react-test.tsx`
    - Add example to `angular-test.html`
    - Add example to `vue-test.vue`
    - Include comment with rule name (e.g., `{/* db-ux/rule-name */}`)
    - Examples should demonstrate rule violations for snapshot testing

## Documentation Requirements

When adding a new rule:

1. Add rule to `src/index.ts` imports
2. Add rule to `plugin.rules` object in `src/index.ts`
3. Add rule to `recommended.rules` config in `src/index.ts`
4. Update `README.md` with:
    - Rule name and description
    - Invalid examples for React, Angular, and Vue
    - Valid examples for React, Angular, and Vue

## Example Test Pattern

```typescript
valid: [
  { code: '<DBButton type="button">React</DBButton>' },
  { code: '<db-button type="button">Angular</db-button>' },
  { code: '<db-button [type]="buttonType">Angular</db-button>' },
  { code: '<DBButton :type="buttonType">Vue</DBButton>' }
],
invalid: [
  { code: '<DBButton>React</DBButton>', errors: [...] },
  { code: '<db-button>Angular</db-button>', errors: [...] },
  { code: '<DBButton>Vue</DBButton>', errors: [...] }
]
```

## Important Notes

- Angular boolean attributes return empty string `''` - handle with `attr.value === null || attr.value === ''`
- Use `createAngularVisitors` for Angular support - it handles kebab-case conversion for components starting with `DB`
- **CRITICAL**: When checking multiple components, collect ALL Angular visitors using `Object.assign()` before returning
- Always use `COMPONENTS` constants instead of hardcoded strings
- Always use `MESSAGE_IDS` and `MESSAGES` from constants
- For Angular, use `parserServices.convertNodeSourceSpanToLoc(node.sourceSpan)` for location
- For Angular, use `node.name` in error data to preserve kebab-case (e.g., `db-button`)
- For React/Vue, use `node: openingElement` for location
- For React/Vue, use `openingElement.name?.name || openingElement.rawName` for component name
- Angular template parser uses both `Element` and `Element$1` types
- Vue sometimes uses `Element` as fallback instead of `VElement`
- When traversing parents/children, always check for `JSXElement`, `VElement`, and `Element` types

## TypeScript Type Assertions

All rule metadata must use `as const` assertions for TypeScript compatibility:

```typescript
export default {
	meta: {
		type: "problem" as const, // REQUIRED: Use 'as const'
		fixable: "code" as const // REQUIRED if fixable is present
		// ...
	}
};
```

## Test Configuration

Test files should separate Angular tests from React/Vue tests:

```typescript
import { RuleTester } from "@typescript-eslint/rule-tester";
import { RuleTester as AngularRuleTester } from "@angular-eslint/test-utils";

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe("rule-name", () => {
	it("should validate rule", () => {
		ruleTester.run("rule-name", rule, {
			valid: [
				/* React/Vue cases */
			],
			invalid: [
				/* React/Vue cases */
			]
		});
	});

	it("should validate rule (Angular)", () => {
		angularRuleTester.run("rule-name", rule, {
			valid: [
				/* Angular cases with <db- */
			],
			invalid: [
				/* Angular cases with <db- */
			]
		});
	});
});
```

## Checklist

Before submitting a new rule:

- [ ] Rule file created in `src/rules/{component}/`
- [ ] Test file created in `test/rules/{component}/`
- [ ] Messages added to `src/shared/constants.ts`
- [ ] Rule uses `COMPONENTS` constants
- [ ] Rule uses `MESSAGE_IDS` and `MESSAGES` constants (not hardcoded strings)
- [ ] Rule `type` uses `as const` assertion
- [ ] Rule `fixable` uses `as const` assertion (if present)
- [ ] Test uses `languageOptions` configuration (not `parser` property)
- [ ] Angular support via `createAngularVisitors`
- [ ] **If checking multiple components**: Angular visitors collected with `Object.assign()` before returning
- [ ] Angular error data uses `node.name` for kebab-case component names
- [ ] Vue/React support via `defineTemplateBodyVisitor`
- [ ] All attribute checks use `=== null` (not `!value`)
- [ ] Required text attributes check `=== null || === ''`
- [ ] Parent/child type checks include `Element` fallback
- [ ] Angular type checks include both `Element` and `Element$1`
- [ ] Tests include React (PascalCase) examples
- [ ] Tests include Angular (kebab-case + `[prop]`) examples
- [ ] Tests include Vue (PascalCase + `:prop`) examples
- [ ] Framework test example added to `test/frameworks/react-test.tsx`
- [ ] Framework test example added to `test/frameworks/angular-test.html`
- [ ] Framework test example added to `test/frameworks/vue-test.vue`
- [ ] Rule imported in `src/index.ts`
- [ ] Rule added to `plugin.rules` object
- [ ] Rule added to `recommended` config
- [ ] README.md updated with all three framework examples
