import { useState } from 'react';
import {
	DBButton,
	DBInput,
	DBRadio,
	DBSelect,
	DBCheckbox,
	DBTag
} from '../../../../../output/react/src';
import type { KeyValueType } from '../../../../../output/react/src/shared/model';

const FormComponent = () => {
	const [input, setInput] = useState('');
	const [radio, setRadio] = useState('');
	const [select, setSelect] = useState('');
	const [checkbox, setCheckbox] = useState('');
	const [tags, setTags] = useState<string[]>([]);

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
							dataList={dataList}
						/>
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
										type={
											index === 2 ? 'strong' : undefined
										}
										behaviour="interactive"
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
									</DBTag>
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
					<dt>radio value</dt>
					<dd>{radio || 'No radio set'}</dd>
					<dt>checkbox value</dt>
					<dd>{`checkbox ${checkbox ? '' : 'un'}checked`}</dd>
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
