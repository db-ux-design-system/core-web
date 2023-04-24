import { useState } from 'react';
import { DBButton, DBInput, DBRadio } from '../../../../../output/react/src';

const FormComponent = () => {
	const [input, setInput] = useState('');
	const [radio, setRadio] = useState('');

	return (
		<div className="form-container">
			<div>
				<form>
					<fieldset>
						<p>DBInput:</p>
						<DBInput
							label="Textinput"
							placeholder="Placeholder"
							description="Description"
							icon="edit"
							name="input-name"
							onChange={(event) => {
								setInput(event.target.value);
							}}
							className="fullWidth"
						/>
						<p>DBRadio:</p>
						<ul>
							{['X', 'Y', 'Z'].map((radioName) => (
								<li key={radioName}>
									<DBRadio
										name="radio-group"
										onChange={() => {
											setRadio(radioName);
										}}>
										Radio {radioName}
									</DBRadio>
								</li>
							))}
						</ul>
						<p>DBButton:</p>
						<DBButton
							type="button"
							variant="primary"
							onClick={(_) => {
								// eslint-disable-next-line no-alert
								alert(
									JSON.stringify({
										input,
										radio
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
					<dt>radio value</dt>
					<dd>{radio || 'No radio set'}</dd>
				</dl>
			</div>
		</div>
	);
};

export default FormComponent;
