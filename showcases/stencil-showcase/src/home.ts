const CUSTOM_SELECT_OPTIONS = [
	{ value: 'combobox-0', id: 'combobox-0' },
	{ value: 'combobox-1', id: 'combobox-1' },
	{ value: 'combobox-2', id: 'combobox-2' }
];

/**
 * Initialize custom-select elements by setting options programmatically.
 * The db-custom-select component requires options to be set via JS properties.
 */
function initCustomSelects(container: HTMLElement): void {
	const customSelects =
		container.querySelectorAll<HTMLElement>('db-custom-select');

	for (const customSelect of customSelects) {
		const element = customSelect as any;
		element.options = CUSTOM_SELECT_OPTIONS;
		element.values = ['combobox-2'];
	}
}

/**
 * Render the home page content into the main content area.
 * Mirrors the form test tabs from other showcases (react, vue, angular).
 */
export function renderHomePage(container: HTMLElement): void {
	container.innerHTML = `
		<db-tabs data-testid="tabs">
			<db-tab-list>
				<db-tab-item>All</db-tab-item>
				<db-tab-item data-testid="tab-inputs">Input</db-tab-item>
				<db-tab-item data-testid="tab-textareas">Textarea</db-tab-item>
				<db-tab-item data-testid="tab-selects">Select</db-tab-item>
				<db-tab-item data-testid="tab-checkboxes">Checkbox</db-tab-item>
				<db-tab-item data-testid="tab-radios">Radios</db-tab-item>
				<db-tab-item data-testid="tab-custom-selects">Custom Selects</db-tab-item>
				<db-tab-item data-testid="tab-switches">Switches</db-tab-item>
			</db-tab-list>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-input label="Input" placeholder="Placeholder" message="Description" icon="x_placeholder" name="input-name" value="test1"></db-input>
							<db-textarea label="Textarea" placeholder="Placeholder" message="Description" icon="x_placeholder" name="textarea-name" value="test1"></db-textarea>
							<db-select label="Select" message="Description" name="select-name" value="test2">
								<option value="test1">Test1</option>
								<option value="test2">Test2</option>
								<option value="test3">Test3</option>
							</db-select>
							<db-checkbox label="Checkbox" name="checkbox-name" checked="true"></db-checkbox>
							<db-radio label="Radio X" name="radio-group" value="X"></db-radio>
							<db-radio label="Radio Y" name="radio-group" value="Y"></db-radio>
							<db-radio label="Radio Z" name="radio-group" value="Z"></db-radio>
							<db-custom-select label="Custom Select" id="custom-select-all"></db-custom-select>
							<db-switch label="Switch" name="switch-name"></db-switch>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-input label="Input 1" placeholder="Placeholder" message="Description" icon="x_placeholder" name="input-name" value="test1"></db-input>
							<db-input label="Input 2" placeholder="Placeholder" message="Description" icon="x_placeholder" name="input-name-2" value="test2"></db-input>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-textarea label="Textarea 1" placeholder="Placeholder" message="Description" icon="x_placeholder" name="textarea-name" value="test1"></db-textarea>
							<db-textarea label="Textarea 2" placeholder="Placeholder" message="Description" icon="x_placeholder" name="textarea-name-2" value="test2"></db-textarea>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-select label="Select 1" message="Description" name="select-name" value="test2">
								<option value="test1">Test1</option>
								<option value="test2">Test2</option>
								<option value="test3">Test3</option>
							</db-select>
							<db-select label="Select 2" message="Description" name="select-name-2" value="test1">
								<option value="test1">Test1</option>
								<option value="test2">Test2</option>
								<option value="test3">Test3</option>
							</db-select>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-checkbox label="Checkbox 1" name="checkbox-name" checked="true"></db-checkbox>
							<db-checkbox label="Checkbox 2" name="checkbox-name-2"></db-checkbox>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-radio label="Radio X" name="radio-group" value="X"></db-radio>
							<db-radio label="Radio Y" name="radio-group" value="Y"></db-radio>
							<db-radio label="Radio Z" name="radio-group" value="Z"></db-radio>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-custom-select label="Custom Select 1" id="custom-select-1"></db-custom-select>
							<db-custom-select label="Custom Select 2" id="custom-select-2"></db-custom-select>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
			<db-tab-panel>
				<div class="form-container">
					<form>
						<fieldset>
							<db-switch label="Switch 1" name="switch-name" checked="true"></db-switch>
							<db-switch label="Switch 2" name="switch-name-2"></db-switch>
						</fieldset>
						<db-button type="reset" data-testid="reset-button">Reset</db-button>
					</form>
				</div>
			</db-tab-panel>
		</db-tabs>
	`;

	// Initialize custom-select elements programmatically
	initCustomSelects(container);
}
