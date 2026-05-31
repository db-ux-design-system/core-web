## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

#### Simple

```tsx App.tsx
// App.tsx
import { DBFooter } from "@db-ux/react-core-components";

const App = () => (
	<DBFooter
		main={<div>Footer Navigation</div>}
		meta={<div>Legal Links</div>}
	/>
);

export default App;
```

#### With custom content

```tsx App.tsx
// App.tsx
import { DBFooter, DBLink } from "@db-ux/react-core-components";

const App = () => (
	<DBFooter
		main={
			<ul>
				<li>
					<DBLink href="#">About Us</DBLink>
				</li>
				<li>
					<DBLink href="#">Contact</DBLink>
				</li>
				<li>
					<DBLink href="#">Careers</DBLink>
				</li>
			</ul>
		}
		meta={
			<ul>
				<li>
					<DBLink href="#">Privacy Policy</DBLink>
				</li>
				<li>
					<DBLink href="#">Terms of Service</DBLink>
				</li>
				<li>
					<DBLink href="#">Imprint</DBLink>
				</li>
			</ul>
		}
	/>
);

export default App;
```

#### Without copyright

```tsx App.tsx
// App.tsx
import { DBFooter, DBLink } from "@db-ux/react-core-components";

const App = () => (
	<DBFooter
		showCopyright={false}
		main={<div>Footer Content</div>}
		meta={
			<>
				<DBLink href="#">Privacy</DBLink>
				<DBLink href="#">Legal</DBLink>
			</>
		}
	/>
);

export default App;
```

#### Only meta section

```tsx App.tsx
// App.tsx
import { DBFooter, DBLink } from "@db-ux/react-core-components";

const App = () => (
	<DBFooter
		showMain={false}
		meta={
			<>
				<DBLink href="#">Privacy</DBLink>
				<DBLink href="#">Imprint</DBLink>
			</>
		}
	/>
);

export default App;
```

#### Only main section

```tsx App.tsx
// App.tsx
import { DBFooter, DBLink } from "@db-ux/react-core-components";

const App = () => (
	<DBFooter
		showMeta={false}
		main={
			<ul>
				<li>
					<DBLink href="#">About Us</DBLink>
				</li>
				<li>
					<DBLink href="#">Contact</DBLink>
				</li>
				<li>
					<DBLink href="#">Careers</DBLink>
				</li>
			</ul>
		}
	/>
);

export default App;
```

#### Width

```tsx App.tsx
// App.tsx
import { DBFooter, DBLink } from "@db-ux/react-core-components";

const App = () => (
	<DBFooter
		width="full"
		main={<div>Footer Navigation</div>}
		meta={<div>Legal Links</div>}
	/>
);

export default App;
```
