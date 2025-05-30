## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBTag } from "@db-ux/react-core-components";

const App = () => (
	<>
		<DBTag>
			<button type="button">Tag as Button</button>
		</DBTag>
		<DBTag>
			<a href="#">Tag as Link</a>
		</DBTag>
		<DBTag>
			<label for="checkbox01">
				<input id="checkbox01" type="checkbox" />
				Tag as Checkbox
			</label>
		</DBTag>
		<DBTag>
			<label for="radio01">
				<input name="radio01" id="radio01" type="radio" />
				Tag as Radio
			</label>
		</DBTag>
		<DBTag>Static Tag</DBTag>
		<DBTag overflow={true}>
			<span>Static Tag with overflow</span>
		</DBTag>
	</>
);

export default App;
```
