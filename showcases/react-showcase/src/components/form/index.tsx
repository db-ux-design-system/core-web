import { useState } from 'react';
import {
	DBButton,
	DBInput,
	DBRadio,
	DBSelect,
	DBCheckbox,
	DBTag,
	DBTextarea,
	DBLink
} from '../../../../../output/react/src';
import type { KeyValueType } from '../../../../../output/react/src/shared/model';

const FormComponent = () => {
	const [input, setInput] = useState('');
	const [dateinput, setDateinput] = useState('');
	const [textarea, setTextarea] = useState('default textarea');
	const [textareaChildren, setTextareaChildren] = useState('');
	const [radio, setRadio] = useState('');
	const [select, setSelect] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [checked, setChecked] = useState<boolean[]>([true, false]);

	const dataList: KeyValueType[] = [
		{ key: 'test', value: 'Test' },
		{ key: 'test2' }
	];

	const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, event.target.checked]);
	};

	const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, checked[1]]);
	};

	const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([checked[0], event.target.checked]);
	};

	return (
		<div className="form-container">
			<div>
				<form>
					<fieldset>
						<p>Input:</p>
						<DBInput
							label="Textinput"
							placeholder="Placeholder"
							message="Description"
							icon="account"
							name="input-name"
							value={input}
							dataList={dataList}
							onChange={(evt) => {
								setInput(evt.target.value);
							}}
						/>
						<p>Textarea:</p>
						<DBTextarea
							label="Textarea Controlled"
							value={textarea}
							onChange={(event) => {
								setTextarea(event.target.value);
							}}
						/>
						<DBInput
							label="Date input"
							message="Description"
							name="input-date-name"
							onChange={(event) => {
								setDateinput(event.target.value);
							}}
							type="date"
						/>
						<DBTextarea
							label="Textarea Default value"
							onChange={(event) => {
								setTextareaChildren(event.target.value);
							}}>
							text area default value
						</DBTextarea>
						<p>Radio:</p>
						<ul>
							{['X', 'Y', 'Z'].map((radioName) => (
								<li key={`radio-${radioName}`}>
									<DBRadio
										name="radio-group"
										value={radioName}
										onChange={() => {
											setRadio(radioName);
										}}>
										Radio {radioName}
									</DBRadio>
								</li>
							))}
						</ul>
						<p>Tags:</p>
						<ul>
							{['X', 'Y', 'Z'].map((tag, index) => (
								<li key={`tag-${tag}`}>
									<DBTag
										variant={
											index === 0
												? undefined
												: 'successful'
										}
										emphasis={
											index === 2 ? 'strong' : undefined
										}>
										<DBCheckbox
											onChange={() => {
												if (tags.includes(tag)) {
													setTags(
														tags.filter(
															(t) => t !== tag
														)
													);
												} else {
													setTags([...tags, tag]);
												}
											}}>
											Tag {tag}
										</DBCheckbox>
									</DBTag>
								</li>
							))}
						</ul>
						<p>Checkbox:</p>
						<DBCheckbox
							name="checkbox"
							value="Checkbox checked"
							checked={checked[0] && checked[1]}
							indeterminate={checked[0] !== checked[1]}
							onChange={handleChange1}>
							Checkbox Indeterminate
						</DBCheckbox>
						<fieldset>
							<DBCheckbox
								name="checkbox-1"
								value="Checkbox checked"
								checked={checked[0]}
								onChange={handleChange2}>
								Checkbox
							</DBCheckbox>
							<DBCheckbox
								name="checkbox-2"
								value="Checkbox checked"
								checked={checked[1]}
								onChange={handleChange3}>
								Checkbox
							</DBCheckbox>
							<DBCheckbox
								name="checkbox-3"
								value="Irgendwas"
								defaultChecked={false}>
								DefaultChecked
							</DBCheckbox>
						</fieldset>
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
							onClick={() => {
								setInput('reset');
							}}>
							Reset and Toggle
						</DBButton>
						<DBButton
							type="button"
							variant="primary"
							onClick={(_) => {
								// eslint-disable-next-line no-alert
								alert(
									JSON.stringify({
										input,
										radio,
										select,
										tags
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
					<dt>date inputs value</dt>
					<dd>{dateinput || 'No date input set'}</dd>
					<dt>textarea values</dt>
					<dd>{textarea || 'No Textrea set'}</dd>
					<dd>{textareaChildren || 'No Textrea set'}</dd>
					<dt>radio value</dt>
					<dd>{radio || 'No radio set'}</dd>
					<dt>checkbox (indeterminate) value</dt>
					<dd>{`checkbox ${checked[0] ? '' : 'un'}checked`}</dd>
					<dt>select value</dt>
					<dd>{select || 'No select set'}</dd>
					<dt>tags value</dt>
					<dd>{JSON.stringify(tags)}</dd>
				</dl>
			</div>
		</div>
	);
};

export default FormComponent;
