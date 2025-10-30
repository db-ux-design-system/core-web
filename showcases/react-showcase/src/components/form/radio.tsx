import { DBRadio } from '@db-ux/react-core-components/src';
import { useState } from 'react';
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
				onChange={(event: any) => {
					setControlled(event.target.value);
				}}>
				Controlled
			</DBRadio>
			<DBRadio
				name="radio-1"
				value="radio-1"
				onInput={(event: any) => {
					setUncontrolled(event.target.value);
				}}>
				Uncontrolled
			</DBRadio>
		</FormWrapper>
	);
};

export default FormRadios;
