import { useState } from 'react';
import { DBButton, DBInput } from '../../../../../output/react/src';

const FormComponent = () => {
	const [input, setInput] = useState('');

	return (
		<div className="form-container">
			<div>
				<form>
					<fieldset>
						<p>DbInput:</p>
						<DBInput
							label="Textinput"
							placeholder="Placeholder"
							description="Description"
							iconBefore="edit"
							name="input-name"
							onChange={(event) => {
								setInput(event.target.value);
							}}
							className="fullWidth"
						/>
						<p>DbButton:</p>
						<DBButton
							type="button"
							variant="primary"
							onClick={(_) => {
								// eslint-disable-next-line no-alert
								alert(
									JSON.stringify({
										input
									})
								);
							}}>
							Hi from Showcase!
						</DBButton>
					</fieldset>
				</form>
			</div>
			<div>
				<h2>Output</h2>
				<dl>
					<dt>inputs value</dt>
					<dd>{input || 'No Input set'}</dd>
				</dl>
			</div>
		</div>
	);
};

export default FormComponent;
