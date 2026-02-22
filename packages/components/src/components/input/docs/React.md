## React

Warning: Date input is not working with iOS Voiceover currently, compare to [React issue](https://github.com/facebook/react/issues/33541) and [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=294649).

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
