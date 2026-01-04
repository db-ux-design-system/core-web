import { DBSwitch } from '@db-ux/react-core-components/src';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

const FormSwitches = () => {
	const [controlled, setControlled] = useState(true);
	const [uncontrolled, setUncontrolled] = useState(true);

	return (
		<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
			<DBSwitch
				name="switch"
				checked={controlled}
				onChange={(event) => {
					setControlled(event.target.checked);
				}}>
				Controlled
			</DBSwitch>
			<DBSwitch
				name="switch"
				defaultChecked={uncontrolled}
				onChange={(event) => {
					setUncontrolled(event.target.checked);
				}}>
				Uncontrolled
			</DBSwitch>
		</FormWrapper>
	);
};

export default FormSwitches;
