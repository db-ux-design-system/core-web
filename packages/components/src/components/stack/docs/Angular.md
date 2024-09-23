## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBStack } from '@db-ui/ngx-components';

@Component({
  // ...
	standalone: true,
  imports: [..., DBStack],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-stack>
	<span>Test 1</span>
	<span>Test 2</span>
	<span>Test 3</span>
</db-stack>
```

### Issues with `data-alignment="stretch"`

There might be an issue with data-alignment="stretch" caused by the custom-elements inside your DOM.
If you have components like `<app-my-component>`, `<app-my-table>` you need to add this to your global `.css` or `.scss` file:

```css
.db-stack[data-alignment="stretch"] {
	&[data-direction="row"] {
		& > :is(app-my-component, app-my-table) > * {
			block-size: 100%;
		}
	}
	&:is([data-direction="column"], :not([data-direction])) {
		& > :is(app-my-component, app-my-table) > * {
			inline-size: 100%;
		}
	}
}
```
