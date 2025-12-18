## HTML

For general installation and configuration take a look at the [wc-core-components](https://www.npmjs.com/package/@db-ux/wc-core-components) package.

### Use component

#### Simple

```html
<db-footer>
	<div slot="main">Footer Navigation</div>
	<div slot="meta">Legal Links</div>
</db-footer>
```

#### With custom content

```html
<db-footer>
	<div slot="main">
		<db-link href="#">About Us</db-link>
		<db-link href="#">Contact</db-link>
		<db-link href="#">Careers</db-link>
	</div>
	<div slot="meta">
		<db-link href="#">Privacy Policy</db-link>
		<db-link href="#">Terms of Service</db-link>
		<db-link href="#">Imprint</db-link>
	</div>
</db-footer>
```

#### Without copyright

```html
<db-footer show-copyright="false">
	<div slot="main">Footer Content</div>
	<div slot="meta">
		<db-link href="#">Privacy</db-link>
		<db-link href="#">Legal</db-link>
	</div>
</db-footer>
```

#### Only meta section

```html
<db-footer show-main="false">
	<div slot="meta">
		<db-link href="#">Privacy</db-link>
		<db-link href="#">Imprint</db-link>
	</div>
</db-footer>
```
