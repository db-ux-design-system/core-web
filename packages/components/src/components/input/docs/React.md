<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

Load SCSS globally in a `index.scss` file inside `main.tsx`/`main.jsx` within your app:

```scss
@forward "@db-ui/components/build/styles/rollup";
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
