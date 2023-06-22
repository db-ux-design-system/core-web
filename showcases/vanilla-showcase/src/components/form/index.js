import '../../../../../output/webcomponent/src/components/input/input.js';
import '../../../../../output/webcomponent/src/components/button/button.js';

const getContent = () => {
	window.addEventListener('load', () => {
		const input = document.querySelector('#db-input');
		const button = document.querySelector('#db-button');
		const inputContainer = document.querySelector('#db-input-container');

		if (input) {
			input.props.onChange = (event) => {
				inputContainer.innerHTML = event.target.value;
			};
		}

		if (button) {
			button.props.onClick = () => {
				// eslint-disable-next-line no-alert
				alert(
					JSON.stringify({
						input: input.state._value
					})
				);
			};
		}
	});

	return `
		<div class="form-container">
			<div>
				<form>
					<fieldset>
							<p>db-input:</p>
							<db-input
								id="db-input"
								name="username"
								label="Textinput"
								placeholder="Placeholder"
								description="Description"
								icon="edit"
							></db-input>
						<p>db-button:</p>
						<db-button type="button" id="db-button" variant="primary">
							Hi from Showcase!
						</db-button>

					</fieldset>
				</form>
			</div>
			<div>
			<h2>Output</h2>
					<dl>
						<dt>inputs value</dt>
						<dd id="db-input-container">"No Input set"</dd>
					</dl>
			</div>
		</div>
	`;
};

export default getContent;
