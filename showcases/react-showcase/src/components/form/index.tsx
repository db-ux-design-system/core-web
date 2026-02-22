import {
	DBAccordion,
	DBAccordionItem,
	DBButton,
	DBCheckbox,
	DBCustomSelect,
	DBDivider,
	DBDrawer,
	DBInfotext,
	DBInput,
	DBLink,
	DBPopover,
	DBRadio,
	DBSelect,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs,
	DBTag,
	DBTextarea,
	DBTooltip
} from '@components';
import type { ChangeEvent, ValueLabelType } from '@components/src/shared/model';
import { useEffect, useState } from 'react';

const FormComponent = () => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [input, setInput] = useState('');
	const [dataInput, setDataInput] = useState('');
	const [textarea, setTextarea] = useState('default textarea');
	const [textareaChildren, setTextareaChildren] = useState('');
	const [radio, setRadio] = useState('');
	const [select, setSelect] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [checked, setChecked] = useState<boolean[]>([true, false]);

	const [accordionItems, setAccordionItems] = useState<ValueLabelType[]>();
	const [tabsTest, setTabsTest] = useState<boolean>(false);

	const [customSelectValue, setCustomSelectValue] = useState<
		string[] | undefined
	>(['o2']);

	useEffect(() => {
		setTimeout(() => {
			setAccordionItems([
				{ value: 'test1', label: 'Test1' },
				{ value: 'test2', label: 'Test2' },
				{ value: 'test3', label: 'Test3' }
			]);
		}, 2000);
	}, []);

	const dataList: ValueLabelType[] = [
		{ value: 'test', label: 'Test' },
		{ value: 'test2' }
	];

	const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, event.target.checked]);
	};

	const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, checked[1]]);
	};

	const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked([checked[0], event.target.checked]);
	};

	return (
		<div className="form-container">
			<div>
				<form>
					<DBTextarea
						label="test"
						placeholder="fieldsizing"
						resize="none"
						fieldSizing="content"></DBTextarea>

					<DBCustomSelect
						options={[
							{ value: 'Option 1' },
							{ value: 'Option 2' },
							{ value: 'Option 3' },
							{ value: 'Option 4' },
							{ value: 'Option 5' }
						]}
						label="Test"
						required
						showSearch
						multiple
						placeholder="Placeholder"
					/>
					<fieldset>
						<p>Input:</p>
						<DBInput
							label="Text Input"
							placeholder="Placeholder"
							message="Description"
							icon="x_placeholder"
							name="input-name"
							value={input}
							dataList={dataList}
							onChange={(event) => {
								setInput(event.target.value);
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
							value={dataInput}
							onChange={(event) => {
								setDataInput(event.target.value);
							}}
							type="date"
						/>
						<DBTextarea
							label="Textarea Default value"
							defaultValue="text area default value"
							onChange={(event) => {
								setTextareaChildren(event.target.value);
							}}
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
										semantic={
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
							{['A', 'B', 'C'].map((tag, index) => (
								<li key={`tag-${tag}`}>
									<DBTag
										semantic={
											index === 0
												? undefined
												: 'informational'
										}
										emphasis={
											index === 2 ? 'strong' : undefined
										}>
										<label htmlFor={`checkbox-${tag}`}>
											<input
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
												}}
												id={`checkbox-${tag}`}
												type="checkbox"
											/>
											Tag {tag}
										</label>
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
								setDataInput('');
							}}>
							Reset and Toggle
						</DBButton>
						<DBButton
							type="button"
							variant="brand"
							onClick={(clickEvent) => {
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
				<h1>Output</h1>
				<dl>
					<dt>inputs value</dt>
					<dd>{input || 'No Input set'}</dd>
					<dt>date inputs value</dt>
					<dd>{dataInput || 'No date input set'}</dd>
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

				<DBDivider />

				<p>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor{' '}
					<DBLink showIcon={false} href="#">
						invidunt
					</DBLink>{' '}
					ut labore et dolore magna aliquyam erat, sed diam voluptua.
					At vero eos et accusam et justo duo dolores et ea rebum.
					Stet clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
					sadipscing elitr, sed diam nonumy eirmod tempor{' '}
					<DBLink showIcon={false} href="#">
						labore et dolore magna aliquyam erat, sed diam voluptua.
						At vero eos et accusam et justo duo dolores et ea rebum.
						Stet
					</DBLink>{' '}
					ut labore et dolore magna aliquyam erat, sed diam voluptua.
					At vero eos et accusam et justo duo dolores et ea rebum.
					Stet clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet.
				</p>

				<DBButton
					onClick={() => {
						setTabsTest(!tabsTest);
					}}>
					TabsTest
				</DBButton>
				<DBTabs>
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						{tabsTest && <DBTabItem>Test 3</DBTabItem>}
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					{tabsTest && <DBTabPanel>Tab Panel 3</DBTabPanel>}
				</DBTabs>

				<DBTabs orientation="vertical">
					<DBTabList>
						<DBTabItem icon="x_placeholder">
							Airplane Button
						</DBTabItem>
						<DBTabItem iconTrailing="cancel">
							Cancel Button
						</DBTabItem>
						<DBTabItem iconTrailing="cancel">
							Long Button Label with a lot of text
						</DBTabItem>
						<DBTabItem icon="x_placeholder" iconTrailing="cancel">
							Another Button Label with a lot of text
						</DBTabItem>
						<DBTabItem
							icon="x_placeholder"
							noText={true}></DBTabItem>
					</DBTabList>
					<DBTabPanel>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum. Stet
						clita kasd gubergren, no sea takimata sanctus est Lorem
						ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt ut labore et dolore magna aliquyam erat,
						sed diam voluptua. At vero eos et accusam et justo duo
						dolores et ea rebum. Stet clita kasd gubergren, no sea
						takimata sanctus est Lorem ipsum dolor sit amet.
					</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
					<DBTabPanel>
						But I must explain to you how all this mistaken idea of
						denouncing pleasure and praising pain was born and I
						will give you a complete account of the system, and
						expound the actual teachings of the great explorer of
						the truth, the master-builder of human happiness. No one
						rejects, dislikes, or avoids pleasure itself, because it
						is pleasure, but because those who do not know how to
						pursue pleasure rationally encounter consequences that
						are extremely painful. Nor again is there anyone who
						loves or pursues or desires to obtain pain of itself,
						because it is pain, but because occasionally
						circumstances occur in which toil and pain can procure
						him some great pleasure. To take a trivial example,
						which of us ever undertakes laborious physical exercise,
						except to obtain some advantage from it? But who has any
						right to find fault with a man who chooses to enjoy a
						pleasure that has no annoying consequences, or one who
						avoids a pain that produces no resultant pleasure?
					</DBTabPanel>
					<DBTabPanel>Tab Panel 5</DBTabPanel>
				</DBTabs>

				<DBDivider />

				<DBAccordion>
					{accordionItems?.map((item, index) => (
						<DBAccordionItem
							key={item.value}
							headlinePlain={item.value}>
							<p>{item.value}</p>
							{index === 0 && (
								<DBCustomSelect
									options={[
										{ value: 'Option 1' },
										{ value: 'Option 2' }
									]}
									label="Test"
									required
									showSearch
									multiple
									placeholder="Placeholder"
								/>
							)}
							{index === 1 && (
								<DBPopover
									trigger={<DBButton>Popover</DBButton>}>
									<ul>
										<li>Content 1</li>
										<li>Content 2</li>
										<li>Content 3</li>
									</ul>
								</DBPopover>
							)}
							{index === 2 && (
								<DBButton>
									Tooltip
									<DBTooltip>Tooltip</DBTooltip>
								</DBButton>
							)}
						</DBAccordionItem>
					))}
				</DBAccordion>

				<DBSelect
					id="select-test"
					value={select}
					label="Label"
					onChange={(event) => {
						setSelect(event.target.value);
					}}
					options={[
						{ label: 'Test1', value: 'Test1' },
						{ label: 'Test2', value: 'Test2' }
					]}
				/>

				<h2>Validations</h2>
				<DBButton>
					Test
					<DBTooltip placement="bottom">
						Open above floating label
					</DBTooltip>
				</DBButton>
				<DBInput
					variant="floating"
					label="Input minlength validation"
					placeholder="Placeholder"
					invalidMessage="Min. 3"
					validMessage="😎"
					minLength={3}
				/>
				<DBInput
					label="Input pattern validation"
					placeholder="Placeholder"
					pattern="\w{3,16}"
					invalidMessage="Pattern \w{3,16}"
					validMessage="😎"
				/>
				<DBInput
					label="Input number"
					placeholder="Placeholder"
					invalidMessage="Type=number"
					validMessage="😎"
					type="number"
				/>
				<DBInput
					label="Input number min"
					placeholder="Placeholder"
					invalidMessage="Type=number min 3"
					validMessage="😎"
					type="number"
					min={3}
				/>
				<DBTextarea
					label="Textarea min 10"
					invalidMessage="Min 10"
					validMessage="😎"
					minLength={10}
				/>

				<DBButton
					onClick={() => {
						setDrawerOpen(true);
					}}>
					Open Drawer
				</DBButton>
				<DBDrawer
					onClose={() => {
						setDrawerOpen(false);
					}}
					open={drawerOpen}
					spacing="none">
					<DBInfotext style={{ margin: '100px', display: 'flex' }}>
						Test infotext
						<DBTooltip placement="bottom-start">
							Test tooltip
						</DBTooltip>
					</DBInfotext>

					<DBCustomSelect
						options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
						label="Test"
						required
						showSearch
						multiple
						placeholder="Placeholder"
					/>
				</DBDrawer>

				<DBTag semantic="neutral" emphasis="strong">
					KUZ
					<DBTooltip id="tooltip-01" placement="right-end">
						Text
					</DBTooltip>
				</DBTag>
				<DBButton>
					KUZ
					<DBTooltip id="tooltip-01" placement="right-end">
						Text
					</DBTooltip>
				</DBButton>

				<form
					onSubmit={(event) => {
						event.preventDefault();

						console.log(event);
					}}>
					<DBCustomSelect
						name="input-multi"
						label="Test"
						options={[
							{ label: 'O1', value: 'o1' },
							{ label: 'O2', value: 'o2' },
							{ label: 'O3', value: 'o3' },
							{ label: 'O4', value: 'o4' },
							{ label: 'O5', value: 'o5' },
							{ label: 'O6', value: 'o6' }
						]}
						placeholder="Test"
						selectAllLabel="Select all"
						searchLabel="Search"
						noResultsText="No matching filter"
						values={customSelectValue}
						onOptionSelected={(value) => {
							setCustomSelectValue(value);
						}}
					/>
					<DBButton
						onClick={() => {
							setCustomSelectValue([]);
						}}>
						Reset CustomSelect
					</DBButton>
					<DBButton type="submit">Submit</DBButton>
				</form>

				<div>
					<DBTag>
						<DBButton>Test</DBButton>
					</DBTag>
					<DBTag>
						<DBLink>Test</DBLink>
					</DBTag>
					<DBTag>
						<DBRadio>Test</DBRadio>
					</DBTag>
					<DBTag>
						<DBCheckbox>Test</DBCheckbox>
					</DBTag>
				</div>
			</div>
		</div>
	);
};

export default FormComponent;
