<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBPopover, DBButton } from "@db-ui/v-components";
</script>

<template>
	<DBPopover>
		<template v-slot:trigger>
			<DBButton> Hover on me to open Popover </DBButton>
		</template>
		Use any html code here like e.g. a <code>button</code>:
		<button type="button">Test</button>
	</DBPopover>
</template>
```
