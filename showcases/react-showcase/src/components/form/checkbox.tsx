import { DBCheckbox } from '@db-ux/react-core-components/src';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

const FormCheckboxes = () => {
	const [controlled, setControlled] = useState(true);
	const [uncontrolled, setUncontrolled] = useState(true);

	return (
		<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
			<DBCheckbox
				name="checkbox"
				checked={controlled}
				onChange={(event) => {
					setControlled(event.target.checked);
				}}>
				Controlled
			</DBCheckbox>
			<DBCheckbox
				name="checkbox"
				defaultChecked={uncontrolled}
				onChange={(event) => {
					setUncontrolled(event.target.checked);
				}}>
				Uncontrolled
			</DBCheckbox>
		</FormWrapper>
	);
};

export default FormCheckboxes;
