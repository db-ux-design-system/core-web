<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## HTML

Load SCSS globally somewhere in your app:

```scss
@forward "@db-ui/components/build/styles/relative";
```

Use it:

```html
<div class="db-input">
	<label for="username">Label</label>
	<input type="text" name="username" id="username" />
</div>
```
