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
