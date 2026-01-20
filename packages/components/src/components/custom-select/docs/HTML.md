## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ui/components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div
		class="db-custom-select"
		aria-invalid="false"
		data-custom-validity="no-validation"
		data-selected-type="text"
	>
		<select hidden>
			<option value="Option 1">Option 1</option>
			<option value="Option 2">Option 2</option>
			<option value="Option 3">Option 3</option>
			<option value="Option 4">Option 4</option>
			<option value="Option 5">Option 5</option>
		</select>
		<label>Label</label>
		<details>
			Functional
			<summary class="db-custom-select-form-field">
				<!-- Add selected options here with JS-->
			</summary>
			<article
				data-spacing="none"
				class="db-custom-select-dropdown db-card"
			>
				<section class="db-custom-select-list">
					<ul>
						<li class="db-custom-select-list-item db-radio">
							<label for="option-1">
								<input
									class="db-custom-select-list-item-checkbox"
									id="option-1"
									type="radio"
									name="multi-select"
									value="Option 1"
									data-disable-focus="true"
								/>
								Option 1
							</label>
						</li>
						<li class="db-custom-select-list-item db-radio">
							<label for="option-2">
								<input
									class="db-custom-select-list-item-checkbox"
									id="option-2"
									type="radio"
									name="multi-select"
									value="Option 2"
									data-disable-focus="true"
								/>
								Option 2
							</label>
						</li>
						<li class="db-custom-select-list-item db-radio">
							<label for="option-3">
								<input
									class="db-custom-select-list-item-checkbox"
									id="option-3"
									type="radio"
									name="multi-select"
									value="Option 3"
									data-disable-focus="true"
								/>
								Option 3
							</label>
						</li>
						<li class="db-custom-select-list-item db-radio">
							<label for="option-4">
								<input
									class="db-custom-select-list-item-checkbox"
									id="option-4"
									type="radio"
									name="multi-select"
									value="Option 4"
									data-disable-focus="true"
								/>
								Option 4
							</label>
						</li>
						<li class="db-custom-select-list-item db-radio">
							<label for="option-5">
								<input
									class="db-custom-select-list-item-checkbox"
									id="option-5"
									type="radio"
									name="multi-select"
									value="Option 5"
									data-disable-focus="true"
								/>
								Option 5
							</label>
						</li>
					</ul>
				</section>
				<div>
					<button
						class="db-button"
						type="button"
						data-icon="cross"
						data-size="small"
						data-width="full"
						data-variant="ghost"
					>
						Close
					</button>
				</div>
			</article>
		</details>
		<span aria-hidden="true">Placeholder</span
		><span class="db-infotext" data-semantic="successful" data-size="small"
			>TODO: Add a validMessage</span
		><span class="db-infotext" data-semantic="critical" data-size="small"
			>TODO: Add an invalidMessage</span
		><span data-visually-hidden="true" role="status"></span>
	</div>
</body>
```
