## React

Load SCSS globally somewhere in your app:

```SCSS
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;
```

Import component:

```typescript
import { DBRadio } from "@db-ui/react-components";
<DBRadio label={label} value={value}></DBRadio>;
```
