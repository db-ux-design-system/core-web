## React

For installation and configuration, see [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components).

Use `DBFooter` inside `DBPage variant="fixed"`. The default `children` slot is the main area; `meta` contains legal and other meta content. Add semantic, uniquely labelled navigation and lists as needed.

```tsx App.tsx
import { DBFooter, DBLink, DBPage } from "@db-ux/react-core-components";

export const App = () => (
	<DBPage variant="fixed">
		<main>Page content</main>
		<DBFooter
			width="medium"
			meta={
				<nav aria-label="Legal navigation">
					<ul>
						<li>
							<DBLink href="/privacy">Privacy</DBLink>
						</li>
						<li>
							<DBLink href="/imprint">Imprint</DBLink>
						</li>
					</ul>
				</nav>
			}
		>
			<nav aria-label="Footer navigation">
				<ul>
					<li>
						<DBLink href="/about">About us</DBLink>
					</li>
					<li>
						<DBLink href="/contact">Contact</DBLink>
					</li>
				</ul>
			</nav>
		</DBFooter>
	</DBPage>
);
```

`showMain`, `showMeta`, and `showCopyright` default to `true`. Use `id` and `className` for root attributes. `width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.
