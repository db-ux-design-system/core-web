import { DBCustomSelect } from '@db-ux/react-core-components/src';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

const FormCustomSelects = () => {
	const [controlled, setControlled] = useState(['combobox-2']);
	const [uncontrolled, setUncontrolled] = useState(['combobox-2']);

	const options = [
		{ value: 'combobox-0', id: 'combobox-0' },
		{ value: 'combobox-1', id: 'combobox-1' },
		{ value: 'combobox-2', id: 'combobox-2' }
	];

	return (
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
	);
};

export default FormCustomSelects;
