## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBMainNavigation } from "@db-ui/react-components";

const App = () => (
	<DBMainNavigation>
		<DBNavigationItem
			active
			slotSubNavigation={
				<>
					<DBNavigationItem
						active
						slotSubNavigation={
							<>
								<DBNavigationItem active>
									<a href="#">Sub-Sub-Navi-Item 1</a>
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
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>
);

export default App;
```
