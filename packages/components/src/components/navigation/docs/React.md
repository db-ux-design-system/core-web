## React

For general installation and configuration look at
the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBNavigation, DBNavigationItem } from "@db-ui/react-components";

const App = () => (
	<DBNavigation>
		<DBNavigationItem
			slotSubNavigation={
				<>
					<DBNavigationItem
						subNavigation={
							<>
								<DBNavigationItem>
									<a href="#" aria-current="page">
										Sub-Sub-Navi-Item 1
									</a>
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}
					>
						Sub-Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBNavigationItem>
		<DBNavigationItem icon="person">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBNavigation>
);

export default App;
```

### Active handling

Usually, a `NavigationItem` is implicitly set to active by setting the attribute `aria-current="page"` to the anchor it
contains.

For other purposes, `NavigationItems` themselves can also be set to active with their prop `active`. However, this does
not guarantee correct a11y.
