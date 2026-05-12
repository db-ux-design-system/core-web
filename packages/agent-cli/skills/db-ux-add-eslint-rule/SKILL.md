---
name: db-ux-add-eslint-rule
description: Adds a new ESLint rule to @db-ux/core-eslint-plugin. Use when the user asks to add, create, or implement a new lint rule for a DB UX component. Covers the full workflow: rule file, tests for all three frameworks (React, Angular, Vue), constants, index registration, and README documentation.
disable-model-invocation: false
---

# Add ESLint Rule

## Skill Boundaries

- Use this skill when the deliverable is a new rule in `packages/eslint-plugin/`.
- If the user wants to build UI using DB UX components, switch to [db-ux-implement-component](../db-ux-implement-component/SKILL.md).
- If the user wants to add a new component to the design system, switch to [db-ux-develop-component](../db-ux-develop-component/SKILL.md).

## Repository Structure

```text
packages/eslint-plugin/
├── src/
│   ├── rules/{component}/          ← rule files go here
│   ├── shared/
│   │   ├── constants.ts            ← COMPONENTS, MESSAGES, MESSAGE_IDS
│   │   └── utils.ts                ← isDBComponent, getAttributeValue, etc.
│   └── index.ts                    ← register rule + add to recommended config
└── test/
    ├── rules/{component}/          ← test files go here
    └── frameworks/
        ├── react-test.tsx          ← add framework integration example
        ├── angular-test.html       ← add framework integration example
        └── vue-test.vue            ← add framework integration example
```

## Required Workflow

### Step 1: Understand the Rule

Read the relevant component's `model.ts` to understand its props:

```text
packages/components/src/components/{component}/model.ts
```

Check existing rules in `src/rules/{component}/` for patterns to follow.

### Step 2: Add Constants

In `src/shared/constants.ts`, add:

1. A new entry to `MESSAGES` with the error message string
2. A new entry to `MESSAGE_IDS` with the message ID key

```typescript
// MESSAGES
YOUR_RULE_MESSAGE: 'DBComponent must have X for Y',

// MESSAGE_IDS
YOUR_RULE: 'yourRuleId',
```

**Never use hardcoded strings in rule files** — always reference `MESSAGES` and `MESSAGE_IDS`.

### Step 3: Write the Rule File

Create `src/rules/{component}/{rule-name}.ts`.

**Critical patterns:**

#### Boolean attribute checks — always use `=== null`, never falsy

```typescript
// ❌ WRONG — fails for Angular empty-string boolean attributes
if (!value) return;

// ✅ CORRECT
if (value === null || value === "") {
	/* report */
}
```

#### Multiple components — collect ALL Angular visitors before returning

```typescript
// ❌ WRONG — early return drops subsequent components
for (const comp of COMPONENTS_TO_CHECK) {
	const visitors = createAngularVisitors(context, comp, handler);
	if (visitors) return visitors; // ← drops the rest
}

// ✅ CORRECT
const angularVisitors: any = {};
for (const comp of COMPONENTS_TO_CHECK) {
	const visitors = createAngularVisitors(context, comp, handler);
	if (visitors) Object.assign(angularVisitors, visitors);
}
if (Object.keys(angularVisitors).length > 0) return angularVisitors;
```

#### Element type checks — always include fallbacks

```typescript
// ✅ CORRECT — covers JSX, Vue, Angular (Element + Element$1)
if (
  parent.type === 'JSXElement' ||
  parent.type === 'VElement' ||
  parent.type === 'Element' ||
  parent.type === 'Element$1'
) { ... }
```

#### Rule skeleton

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
		messages: {
			[MESSAGE_IDS.YOUR_RULE]: MESSAGES.YOUR_RULE_MESSAGE
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const value = getAttributeValue(node, "prop");
			if (value === null || value === "") {
				context.report({
					loc: parserServices.convertNodeSourceSpanToLoc(
						node.sourceSpan
					),
					messageId: MESSAGE_IDS.YOUR_RULE,
					data: { component: node.name }
				});
			}
		};

		const angularVisitors = createAngularVisitors(
			context,
			COMPONENTS.DBComponent,
			angularHandler
		);
		if (angularVisitors) return angularVisitors;

		const checkComponent = (node: any) => {
			const openingElement = node.openingElement || node;
			if (!isDBComponent(openingElement, COMPONENTS.DBComponent)) return;

			const value = getAttributeValue(openingElement, "prop");
			if (value === null || value === "") {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.YOUR_RULE,
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

### Step 4: Write Tests

Create `test/rules/{component}/{rule-name}.spec.ts`.

**Must cover all three frameworks:**

```typescript
import { RuleTester } from "@typescript-eslint/rule-tester";
import { RuleTester as AngularRuleTester } from "@angular-eslint/test-utils";
import rule from "../../../src/rules/{component}/{rule-name}.js";

const ruleTester = new RuleTester({
	languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } }
});
const angularRuleTester = new AngularRuleTester();

describe("{rule-name}", () => {
	it("should validate rule (React/Vue)", () => {
		ruleTester.run("{rule-name}", rule, {
			valid: [
				{ code: '<DBComponent prop="value">React</DBComponent>' },
				{ code: '<DBComponent :prop="value">Vue</DBComponent>' }
			],
			invalid: [
				{
					code: "<DBComponent>React</DBComponent>",
					errors: [{ messageId: MESSAGE_IDS.YOUR_RULE }]
				}
			]
		});
	});

	it("should validate rule (Angular)", () => {
		angularRuleTester.run("{rule-name}", rule, {
			valid: [
				{ code: '<db-component prop="value">Angular</db-component>' },
				{ code: '<db-component [prop]="value">Angular</db-component>' }
			],
			invalid: [
				{
					code: "<db-component>Angular</db-component>",
					errors: [{ messageId: MESSAGE_IDS.YOUR_RULE }]
				}
			]
		});
	});
});
```

### Step 5: Add Framework Integration Examples

Add a violation example to each framework test file (with a comment naming the rule):

**`test/frameworks/react-test.tsx`:**

```tsx
{
	/* db-ux/{rule-name} */
}
<DBComponent>Missing required prop</DBComponent>;
```

**`test/frameworks/angular-test.html`:**

```html
<!-- db-ux/{rule-name} -->
<db-component>Missing required prop</db-component>
```

**`test/frameworks/vue-test.vue`:**

```vue
<!-- db-ux/{rule-name} -->
<DBComponent>Missing required prop</DBComponent>
```

### Step 6: Register in `src/index.ts`

1. Add import at the top
2. Add to `plugin.rules` object
3. Add to `recommended.rules` config (use `'error'` or `'warn'` as appropriate)

### Step 7: Update README.md

Add a section with:

- Rule name and description
- Invalid examples for React, Angular, Vue
- Valid examples for React, Angular, Vue

## Checklist

- [ ] `MESSAGES` and `MESSAGE_IDS` added to `constants.ts`
- [ ] Rule file uses `as const` on `type` (and `fixable` if present)
- [ ] All attribute checks use `=== null` (not `!value`)
- [ ] Required text attributes check `=== null || === ''`
- [ ] Multiple-component rules use `Object.assign()` for Angular visitors
- [ ] Parent/child type checks include `Element` and `Element$1` fallbacks
- [ ] Tests cover React (PascalCase), Angular (kebab-case + `[prop]`), Vue (PascalCase + `:prop`)
- [ ] Framework integration examples added to all three test files
- [ ] Rule imported and registered in `src/index.ts`
- [ ] Rule added to `recommended` config
- [ ] README.md updated

## Common Issues

**Angular test fails with "no visitors"** → `createAngularVisitors` returned null because the parser wasn't detected. Ensure the test uses `AngularRuleTester` from `@angular-eslint/test-utils`.

**Boolean attribute always reports error in Angular** → Angular boolean attributes return `''` (empty string), not `true`. Check for `=== null || === ''`, not `!value`.

**Multiple components: only first component validated in Angular** → Early `return` inside the loop. Use `Object.assign()` to collect all visitors before returning.

**Child/parent type check misses Angular elements** → Angular template parser uses both `Element` and `Element$1`. Always include both in type checks.
