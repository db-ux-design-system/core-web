import { DBCustomSelect } from '@db-ux/react-core-components/src';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

const FormCustomSelects = () => {
	const [controlled, setControlled] = useState(['combobox-1']);
	const [uncontrolled, setUncontrolled] = useState(['combobox-1']);

	const options = [
		{ value: 'combobox-0', id: 'combobox-0' },
		{ value: 'combobox-1', id: 'combobox-1' }
	];

	return (
		<div>
			<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
				<DBCustomSelect
					options={options}
					values={controlled}
					label="Controlled"
					onOptionSelected={(values) => {
						setControlled(values);
					}}
				/>
				<DBCustomSelect
					options={options}
					values={uncontrolled}
					label="Uncontrolled"
					onOptionSelected={(values) => {
						setUncontrolled(values);
					}}
				/>
			</FormWrapper>
			
			{/* Form Reset Test */}
			<div style={{marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px'}}>
				<h3>Form Reset Test</h3>
				<form>
					<div style={{margin: '10px 0'}}>
						<label>Regular Input:</label>
						<input type="text" name="testInput" placeholder="Type something" style={{marginLeft: '10px'}} />
					</div>
					
					<div style={{margin: '10px 0'}}>
						<DBCustomSelect
							options={options}
							label="Test Custom Select"
							name="testCustomSelect"
							onOptionSelected={(values) => {
								console.log('Test custom select changed:', values);
							}}
						/>
					</div>
					
					<div style={{margin: '15px 0'}}>
						<button type="button" onClick={() => {
							const form = document.querySelector('form');
							const input = form.querySelector('input[name="testInput"]');
							if (input) input.value = 'Test value';
							
							// Try to set value on custom select
							const customSelect = form.querySelector('[name="testCustomSelect"]');
							if (customSelect && customSelect.onOptionSelected) {
								// Simulate selecting an option
								console.log('Setting custom select value programmatically');
							}
						}}>
							Fill Form
						</button>
						
						<button type="reset" style={{marginLeft: '10px'}}>
							Reset Form
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormCustomSelects;
