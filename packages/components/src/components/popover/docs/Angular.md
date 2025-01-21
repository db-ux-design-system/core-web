<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBPopover } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBPopover],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-popover>
	<db-button trigger> Hover on me to open Popover </db-button>
	Use any html code here like e.g. a <code>button</code>:
	<button type="button">Test</button>
</db-popover>
```
