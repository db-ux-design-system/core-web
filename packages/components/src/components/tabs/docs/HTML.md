## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-tabs">
		<div
			role="tablist"
			class="db-tab-list"
			data-alignment="start"
			data-width="auto"
		>
			<ul>
				<li role="tab" class="db-tab-item">
					<label
						for="my-tabs-tab-0"
						aria-controls="my-tabs-tab-panel-0"
					>
						<input
							type="radio"
							id="my-tabs-tab-0"
							name="my-tabs"
						/>Test 1
					</label>
				</li>
				<li role="tab" class="db-tab-item">
					<label
						for="my-tabs-tab-1"
						aria-controls="my-tabs-tab-panel-1"
					>
						<input
							type="radio"
							id="my-tabs-tab-1"
							name="my-tabs"
						/>Test 2
					</label>
				</li>
				<li role="tab" class="db-tab-item">
					<label
						for="my-tabs-tab-2"
						aria-controls="my-tabs-tab-panel-2"
					>
						<input
							type="radio"
							id="my-tabs-tab-2"
							name="my-tabs"
						/>Test 3
					</label>
				</li>
			</ul>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>
</body>
```
