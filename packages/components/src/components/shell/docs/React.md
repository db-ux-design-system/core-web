## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import {
	DBShell,
	DBShellContent,
	DBControlPanelDesktop,
	DBControlPanelBrand
} from "@db-ux/react-core-components";

const App = () => (
	<DBShell>
		<DBControlPanelDesktop
			brand={<DBControlPanelBrand>My App</DBControlPanelBrand>}
		>
			{/* Navigation goes here */}
		</DBControlPanelDesktop>
		<DBShellContent>Main Content</DBShellContent>
	</DBShell>
);

export default App;
```

### Add a footer

`DBShell` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only. There is no footer area, so a footer must not be a direct child of `DBShell` — it would be auto-placed by the grid instead of ending up below the content. Pass it to the `endSlot` of `DBShellContent`:

```tsx App.tsx
// App.tsx
import {
	DBShell,
	DBShellContent,
	DBControlPanelDesktop,
	DBControlPanelBrand,
	DBFooter,
	DBFooterMeta
} from "@db-ux/react-core-components";

const App = () => (
	<DBShell>
		<DBControlPanelDesktop
			brand={<DBControlPanelBrand>My App</DBControlPanelBrand>}
		>
			{/* Navigation goes here */}
		</DBControlPanelDesktop>
		<DBShellContent
			endSlot={
				<DBFooter width="medium">
					<DBFooterMeta copyright="My Company" />
				</DBFooter>
			}
		>
			Main Content
		</DBShellContent>
	</DBShell>
);

export default App;
```

With the default `variant="auto"` the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With `variant="fixed"` only `main` scrolls, so the footer stays visible. The same slot also takes any other content that should sit below `main`, for example a cookie banner. Use `startSlot` for content above `main`.
