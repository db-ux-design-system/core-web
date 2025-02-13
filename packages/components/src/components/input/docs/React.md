## React

Load SCSS globally in a `index.scss` file inside `main.tsx`/`main.jsx` within your app:

```scss
@forward "@db-ux/core-components/build/styles/rollup";
```

Import component:

```typescript
import { DBInput } from "@db-ux/react-core-components";

<DBInput
	label={label}
	placeholder={description}
	description={description}
	onChange={handleChange}
></DBInput>;
```
