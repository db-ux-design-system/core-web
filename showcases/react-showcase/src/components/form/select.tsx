import { DBSelect } from '@db-ux/react-core-components/src';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

const FormSelects = () => {
	const [controlled, setControlled] = useState('combobox-2');
	const [uncontrolled, setUncontrolled] = useState('combobox-2');

	return (
		<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
			<DBSelect
				value={controlled}
				label="Controlled"
				onChange={(event) => {
					setControlled(event.target.value);
				}}>
				<option value="combobox-0">combobox-0</option>
				<option value="combobox-1">combobox-1</option>
				<option value="combobox-2">combobox-2</option>
			</DBSelect>
			<DBSelect
				value={uncontrolled}
				label="Uncontrolled"
				onChange={(event) => {
					setUncontrolled(event.target.value);
				}}>
				<option value="combobox-0">combobox-0</option>
				<option value="combobox-1">combobox-1</option>
				<option value="combobox-2">combobox-2</option>
			</DBSelect>
		</FormWrapper>
	);
};

export default FormSelects;
