import { useState } from 'react';
import { DBRadio } from '../../../../../output/react/src';
import FormWrapper from './form-wrapper';

const FormRadios = () => {
	const [controlled, setControlled] = useState('');
	const [uncontrolled, setUncontrolled] = useState('');

	return (
		<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
			<DBRadio
				name="radio-0"
				value="radio-0"
				checked={controlled === 'radio-0'}
				onChange={(event) => {
					setControlled(event.target.value);
				}}>
				Controlled
			</DBRadio>
			<DBRadio
				name="radio-1"
				value="radio-1"
				defaultChecked={uncontrolled === 'radio-1'}
				onChange={(event) => {
					setUncontrolled(event.target.value);
				}}>
				Uncontrolled
			</DBRadio>
		</FormWrapper>
	);
};

export default FormRadios;
