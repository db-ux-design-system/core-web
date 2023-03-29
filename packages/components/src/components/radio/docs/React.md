## React

Load SCSS globally in a `index.scss` file inside `main.tsx`/`main.jsx` within your app:

```SCSS
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
```

Import component:

```typescript
import { DBRadio } from "@db-ui/react-components";

<DBRadio value={value}>Label</DBRadio>;
```
