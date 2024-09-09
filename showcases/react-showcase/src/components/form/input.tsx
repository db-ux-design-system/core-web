import { DBInput } from '@db-ui/react-components/src';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

const FormInputs = () => {
	const [controlled, setControlled] = useState('test1');
	const [uncontrolled, setUncontrolled] = useState('test2');

	return (
		<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
			<DBInput
				label="Controlled"
				placeholder="Placeholder"
				message="Description"
				icon="person"
				name="input-name"
				value={controlled}
				onChange={(event) => {
					setControlled(event.target.value);
				}}
			/>
			<DBInput
				label="Uncontrolled"
				placeholder="Placeholder"
				message="Description"
				icon="person"
				name="input-name"
				defaultValue={uncontrolled}
				onChange={(event) => {
					setUncontrolled(event.target.value);
				}}
			/>
		</FormWrapper>
	);
};

export default FormInputs;
