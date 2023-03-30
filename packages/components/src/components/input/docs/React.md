## React

Load SCSS globally in a `index.scss` file inside `main.tsx`/`main.jsx` within your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
```

Import component:

```typescript
import { DBInput } from "@db-ui/react-components";

<DBInput
	label={label}
	placeholder={description}
	description={description}
	onChange={handleChange}
></DBInput>;
```
