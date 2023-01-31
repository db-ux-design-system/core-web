import './index.scss';
import { useState } from 'react';
import { DBButton, DBInput } from '../../../../../output/react/src';

const FormComponent = () => {
	const [input, setInput] = useState('');

	return (
		<div>
			<div className="form-container">
				<fieldset>
					<form>
						<p>DbInput:</p>
						<DBInput
							label="Infield"
							name="input-name"
							onChange={(event) => {
								setInput(event.target.value);
							}}
							className="fullWidth"
						/>
					</form>
				</fieldset>
				<fieldset>
					<p>DbButton:</p>
					<DBButton
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
					<h2>Output</h2>
					<dl>
						<dt>inputs value</dt>
						<dd>{input || 'No Input set'}</dd>
					</dl>
				</fieldset>
			</div>
		</div>
	);
};

export default FormComponent;
