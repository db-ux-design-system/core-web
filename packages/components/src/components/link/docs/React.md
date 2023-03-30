## React

Load SCSS globally somewhere in your app:

```
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;

```

Import component:

```
import { DBLink } from '@db-ui/react-components';

	<DBLink
		href="#"
		variant={variant}
		disabled={disabled}
		size={size}
		content={content}>
		{children}
</DBLink>
```
