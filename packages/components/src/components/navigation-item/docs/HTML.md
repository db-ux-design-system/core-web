## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

If you want to use sub-navigations for mobile you need to add a `eventListner:click` on the `db-navigation-item-expand-button`. This eventListener should set `aria-expanded` to `true` for the `button`. This will open a static overlay for mobile/tablet devices with your `db-sub-navigation`. For desktop devices it works by default with `:hover`.

```html index.html
<!-- index.html -->
...
<body>
	<!-- Only link	-->
	<li class="db-navigation-item">
		<a href="mypath">NavigationItem</a>
	</li>

	<!-- With Sub-Navigation -->
	<li class="db-navigation-item">
		<button class="db-navigation-item-expand-button" aria-haspopup="true">
			Navi-Item 1
		</button>
		<menu class="db-sub-navigation">
			<a href="mypath">Sub-Navi-Item 1</a>
			<a href="mypath">Sub-Navi-Item 2</a>
		</menu>
	</li>
</body>
```
