# How to Test with DB UX Components

This guide provides recommendations for testing applications that use DB UX Design System components. Since different frameworks have different testing approaches, we've organized this guide by framework.

## Table of Contents

- [General Testing Principles](#general-testing-principles)
- [React Testing](#react-testing)
- [Vue Testing](#vue-testing)
- [Angular Testing](#angular-testing)
- [Stencil/Web Components Testing](#stencilweb-components-testing)
- [Common Testing Scenarios](#common-testing-scenarios)
- [Troubleshooting](#troubleshooting)

## General Testing Principles

### When Testing Components vs. Applications

This guide focuses on testing **your applications** that use DB UX components, not testing the components themselves. For component development testing, see [packages/components/test/README.md](../packages/components/test/README.md).

### Global Setup Considerations

When testing applications with DB UX components, you typically need to:

1. **Import CSS styles** - Components require proper styling to function correctly
2. **Set up component libraries** - Import the framework-specific component packages
3. **Configure test environments** - Ensure proper DOM environments for component rendering
4. **Handle icons and assets** - Mock or provide icon assets if needed

---

## React Testing

### Package Installation

```bash
npm install @db-ux/react-core-components @db-ux/core-foundations
```

### Test Setup with React Testing Library

#### Global Test Setup (`setupTests.ts`)

```typescript
import "@testing-library/jest-dom";
// Import DB UX styles
import "@db-ux/core-components/build/styles/rollup.css";

// Optional: Mock DB UX icons globally if not using real assets
jest.mock("@db-ux/core-foundations/build/styles/icons", () => ({}));
```

#### Component Testing Example

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { DBButton, DBInput } from "@db-ux/react-core-components";
import MyComponent from "./MyComponent";

describe("MyComponent with DB UX components", () => {
	test("should render button and handle click", () => {
		const handleClick = jest.fn();

		render(
			<DBButton onClick={handleClick} variant="brand">
				Click me
			</DBButton>
		);

		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toBeInTheDocument();

		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test("should type in DB input field", () => {
		const handleChange = jest.fn();

		render(
			<DBInput
				label="Test Input"
				value=""
				onChange={handleChange}
				data-testid="test-input"
			/>
		);

		const input = screen.getByTestId("test-input");
		fireEvent.change(input, { target: { value: "test value" } });

		expect(handleChange).toHaveBeenCalledWith(
			expect.objectContaining({
				target: expect.objectContaining({
					value: "test value"
				})
			})
		);
	});
});
```

#### Mocking DB UX Components

For unit tests where you want to mock DB UX components:

```tsx
// __mocks__/@db-ux/react-core-components.tsx
export const DBButton = jest.fn(({ children, onClick, ...props }) => (
	<button onClick={onClick} {...props}>
		{children}
	</button>
));

export const DBInput = jest.fn((props) => <input {...props} />);
```

#### Playwright Testing with React

```typescript
import { test, expect } from '@playwright/experimental-ct-react';
import { DBButton } from '@db-ux/react-core-components';

test('DBButton interaction', async ({ mount }) => {
  let clicked = false;

  const component = await mount(
    <DBButton onClick={() => clicked = true}>
      Test Button
    </DBButton>
  );

  await component.click();
  expect(clicked).toBe(true);
});
```

---

## Vue Testing

### Package Installation

```bash
npm install @db-ux/v-core-components @db-ux/core-foundations
```

### Test Setup with Vue Test Utils

#### Global Test Setup (`vitest.config.ts` or test setup file)

```typescript
import { createApp } from "vue";
import { config } from "@vue/test-utils";

// Import DB UX styles
import "@db-ux/core-components/build/styles/rollup.css";

// Global component registration (optional)
import { DBButton, DBInput } from "@db-ux/v-core-components";

config.global.components = {
	DBButton,
	DBInput
};
```

#### Component Testing Example

```typescript
import { mount } from "@vue/test-utils";
import { DBButton, DBInput } from "@db-ux/v-core-components";
import MyComponent from "./MyComponent.vue";

describe("MyComponent with DB UX components", () => {
	test("should render button and handle click", async () => {
		const wrapper = mount(DBButton, {
			props: {
				variant: "brand"
			},
			slots: {
				default: "Click me"
			}
		});

		expect(wrapper.text()).toContain("Click me");

		await wrapper.trigger("click");
		expect(wrapper.emitted("click")).toHaveLength(1);
	});

	test("should handle input changes", async () => {
		const wrapper = mount(DBInput, {
			props: {
				label: "Test Input",
				modelValue: ""
			}
		});

		const input = wrapper.find("input");
		await input.setValue("test value");

		expect(wrapper.emitted("update:modelValue")).toEqual([["test value"]]);
	});
});
```

#### Mocking DB UX Components in Vue

```typescript
// Create mock components
const mockDBButton = {
	name: "DBButton",
	template: "<button @click=\"$emit('click', $event)\"><slot /></button>",
	emits: ["click"]
};

const mockDBInput = {
	name: "DBInput",
	template:
		"<input @input=\"$emit('update:modelValue', $event.target.value)\" />",
	emits: ["update:modelValue"]
};

// Use in tests
const wrapper = mount(MyComponent, {
	global: {
		components: {
			DBButton: mockDBButton,
			DBInput: mockDBInput
		}
	}
});
```

---

## Angular Testing

### Package Installation

```bash
npm install @db-ux/ngx-core-components @db-ux/core-foundations
```

### Test Setup with Angular Testing Utilities

#### Global Test Setup (`test.ts` or `karma.conf.js`)

```typescript
// Import DB UX styles in your angular.json or component styles
// Or in src/styles.css:
// @import '@db-ux/core-components/build/styles/rollup.css';
```

#### Module Setup for Testing

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DBButton, DBInput } from "@db-ux/ngx-core-components";
import { MyComponent } from "./my-component.component";

describe("MyComponent", () => {
	let component: MyComponent;
	let fixture: ComponentFixture<MyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DBButton, DBInput, MyComponent] // Using standalone components
		}).compileComponents();

		fixture = TestBed.createComponent(MyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test("should create", () => {
		expect(component).toBeTruthy();
	});
});
```

#### Component Testing Example

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DBButton } from "@db-ux/ngx-core-components";

describe("DBButton Integration", () => {
	let component: TestHostComponent;
	let fixture: ComponentFixture<TestHostComponent>;

	@Component({
		template: `
			<db-button
				[variant]="variant"
				(click)="handleClick($event)"
				data-testid="test-button"
			>
				Test Button
			</db-button>
		`,
		standalone: true,
		imports: [DBButton]
	})
	class TestHostComponent {
		variant = "brand";
		clickCount = 0;

		handleClick() {
			this.clickCount++;
		}
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TestHostComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TestHostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test("should handle button click", () => {
		const button = fixture.debugElement.query(
			By.css('[data-testid="test-button"]')
		);

		button.triggerEventHandler("click", null);

		expect(component.clickCount).toBe(1);
	});
});
```

#### Mocking DB UX Components in Angular

```typescript
// Create mock components
@Component({
	selector: "db-button",
	template:
		'<button (click)="click.emit($event)"><ng-content></ng-content></button>',
	standalone: true
})
class MockDBButton {
	@Input() variant: string = "";
	@Output() click = new EventEmitter();
}

// Use in tests
await TestBed.configureTestingModule({
	imports: [MockDBButton] // Instead of real DBButton
}).compileComponents();
```

---

## Stencil/Web Components Testing

### Package Installation

```bash
npm install @db-ux/wc-core-components @db-ux/core-foundations
```

### Test Setup

```typescript
import { newSpecPage } from "@stencil/core/testing";
import "@db-ux/core-components/build/styles/rollup.css";

// Define custom elements if needed
import { defineCustomElements } from "@db-ux/wc-core-components/dist/loader/index.js";
defineCustomElements();
```

#### Component Testing Example

```typescript
describe("Web Components Integration", () => {
	test("should render db-button", async () => {
		const page = await newSpecPage({
			html: `<db-button variant="brand">Test Button</db-button>`
		});

		expect(page.root).toEqualHtml(`
      <db-button variant="brand">
        <button class="db-button" data-variant="brand">
          Test Button
        </button>
      </db-button>
    `);
	});
});
```

---

## Common Testing Scenarios

### Testing Form Interactions

#### React Example

```tsx
test("form submission with DB components", async () => {
	const handleSubmit = jest.fn();

	render(
		<form onSubmit={handleSubmit}>
			<DBInput
				label="Email"
				type="email"
				data-testid="email-input"
				required
			/>
			<DBButton type="submit">Submit</DBButton>
		</form>
	);

	const emailInput = screen.getByTestId("email-input");
	const submitButton = screen.getByRole("button", { name: /submit/i });

	fireEvent.change(emailInput, { target: { value: "test@example.com" } });
	fireEvent.click(submitButton);

	expect(handleSubmit).toHaveBeenCalled();
});
```

### Testing Navigation Components

#### Vue Example

```typescript
test("navigation item click", async () => {
	const wrapper = mount(DBNavigation, {
		props: {
			items: [
				{ href: "/home", label: "Home" },
				{ href: "/about", label: "About" }
			]
		}
	});

	const homeLink = wrapper.find('[href="/home"]');
	await homeLink.trigger("click");

	expect(wrapper.emitted("navigate")).toBeTruthy();
});
```

### Testing Accessibility

#### Playwright Example

```typescript
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("accessibility with DB components", async ({ page }) => {
	await page.goto("/your-page-with-db-components");

	const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

	expect(accessibilityScanResults.violations).toEqual([]);
});
```

### Testing Component State Changes

#### Angular Example

```typescript
test("toggle component state", async () => {
	const fixture = TestBed.createComponent(TestHostComponent);
	const component = fixture.componentInstance;

	// Test initial state
	expect(component.isToggled).toBe(false);

	// Trigger toggle
	const toggleButton = fixture.debugElement.query(By.css("db-button"));
	toggleButton.triggerEventHandler("click", null);
	fixture.detectChanges();

	expect(component.isToggled).toBe(true);
});
```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Styling Issues in Tests

**Problem**: Components don't render with proper styles

**Solution**: Make sure to import CSS files in your test setup:

```typescript
// React
import '@db-ux/core-components/build/styles/rollup.css';

// Vue
import '@db-ux/core-components/build/styles/rollup.css';

// Angular - Add to angular.json or styles.css
@import '@db-ux/core-components/build/styles/rollup.css';
```

#### 2. Icon Loading Issues

**Problem**: Icons don't load in test environment

**Solution**: Mock icon dependencies:

```typescript
// Jest
jest.mock("@db-ux/core-foundations/build/styles/icons", () => ({}));

// Or provide a test icon set
```

#### 3. Custom Element Registration (Web Components)

**Problem**: Custom elements not recognized

**Solution**: Define custom elements in test setup:

```typescript
import { defineCustomElements } from "@db-ux/wc-core-components/dist/loader/index.js";
defineCustomElements();
```

#### 4. TypeScript Type Issues

**Problem**: TypeScript can't find component types

**Solution**: Install and import type definitions:

```typescript
import type { DBButtonProps } from "@db-ux/react-core-components";
// or
import type { DBButtonProps } from "@db-ux/v-core-components";
// or
import type { DBButtonProps } from "@db-ux/ngx-core-components";
```

#### 5. Event Handling Differences

**Problem**: Events work differently across frameworks

**React**: Use `onClick`, `onChange`, etc.

```tsx
<DBButton onClick={handleClick}>Button</DBButton>
```

**Vue**: Use `@click`, `@change`, etc.

```vue
<DBButton @click="handleClick">Button</DBButton>
```

**Angular**: Use `(click)`, `(change)`, etc.

```html
<db-button (click)="handleClick()">Button</db-button>
```

### Performance Considerations

- **Shallow rendering**: Use shallow rendering when testing component logic without full DOM
- **Mock heavy components**: Mock complex DB components when testing your business logic
- **Async operations**: Always await async operations in tests
- **Memory leaks**: Clean up event listeners and timers in test teardown

### Best Practices

1. **Use data-testid attributes** for reliable element selection
2. **Test user interactions** rather than implementation details
3. **Mock external dependencies** that aren't part of your component logic
4. **Test accessibility** using tools like @axe-core/playwright
5. **Keep tests focused** - test one behavior per test case
6. **Use page object models** for complex interaction flows

For more information about component development and internal testing, see:

- [How to develop a component](./how-to-develop-a-component.md)
- [Component testing README](../packages/components/test/README.md)
