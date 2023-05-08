import { useState } from 'react';
import {
	DBButton,
	DBInput,
	DBRadio,
	DBSelect,
	DBCheckbox
} from '../../../../../output/react/src';
import type { KeyValueType } from '../../../../../output/react/src/shared/model';

const FormComponent = () => {
	const [input, setInput] = useState('');
	const [radio, setRadio] = useState('');
	const [select, setSelect] = useState('');
	const [checkbox, setCheckbox] = useState('');

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
						<p>Checkbox:</p>
						<DBCheckbox
							name="checkbox"
							value="Checkbox checked"
							onChange={(event) => {
								setCheckbox(event.target.checked);
							}}>
							Checkbox
						</DBCheckbox>
						<p>DBSelect:</p>
						<DBSelect
							value={select}
							label="Label"
							onChange={(event) => {
								setSelect(event.target.value);
							}}>
							<option value="test1">Test1</option>
							<option value="test2">Test2</option>
						</DBSelect>
						<p>Button:</p>
						<DBButton
							type="button"
							variant="primary"
							onClick={(_) => {
								// eslint-disable-next-line no-alert
								alert(
									JSON.stringify({
										input,
										radio,
										checkbox,
										select
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
					<dt>checkbox value</dt>
					<dd>{`checkbox ${checkbox ? '' : 'un'}checked`}</dd>
					<dt>select value</dt>
					<dd>{select || 'No select set'}</dd>
				</dl>
			</div>
		</div>
	);
};

export default FormComponent;
