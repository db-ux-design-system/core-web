## React

Use `DBShellContent` as the content area of `DBShell`. It owns the `shell-content` grid area and wraps a native `main`, which is the target of the skip-navigation link, so use only one per page.

`startSlot` renders above the content, `endSlot` below it — `endSlot` is where a `DBFooter` belongs. `DBShell` itself has no footer area, so a footer passed as a direct child of `DBShell` is auto-placed by the grid and does not end up below the content.

```tsx App.tsx
import {
	DBFooter,
	DBNotification,
	DBShell,
	DBShellContent
} from "@db-ux/react-core-components";

const App = () => (
	<DBShell>
		{/* Control panels go here */}
		<DBShellContent
			variant="fixed"
			startSlot={<DBNotification>Content above main</DBNotification>}
			endSlot={<DBFooter>...</DBFooter>}
		>
			Main content
		</DBShellContent>
	</DBShell>
);

export default App;
```

`variant` controls the scrolling behaviour. With the default `auto` the whole content area scrolls, and `main` pushes the `endSlot` content to the bottom edge while the content is shorter than the viewport. With `fixed` only `main` scrolls, so both slots stay visible.

Override `mainId` only when the default `main-content` clashes with an existing id, and keep it in sync with the skip-navigation target.
