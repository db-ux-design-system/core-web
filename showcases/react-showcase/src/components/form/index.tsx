import { useState } from 'react';
import { DBButton, DBInput, DBRadio } from '../../../../../output/react/src';
import type { KeyValueType } from '../../../../../output/react/src/shared/model';

const FormComponent = () => {
	const [input, setInput] = useState('');
	const [radio, setRadio] = useState('');

	const dataList: KeyValueType[] = [
		{ key: 'test', value: 'Test' },
		{ key: 'test2' }
	];

	return (
		<div className="form-container">
			<div>
				<form>
					<fieldset>
						<p>Input:</p>
						<DBInput
							label="Textinput"
							placeholder="Placeholder"
							description="Description"
							icon="account"
							name="input-name"
							onChange={(event) => {
								setInput(event.target.value);
							}}
							className="fullWidth"
							dataList={dataList}
						/>
						<p>Radio:</p>
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
						<p>Button:</p>
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
				</dl>
				<dl>
					<dt>radio value</dt>
					<dd>{radio || 'No radio set'}</dd>
				</dl>
			</div>
		</div>
	);
};

export default FormComponent;
