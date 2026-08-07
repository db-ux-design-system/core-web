import { DBTextarea } from '@components';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

export default function FormTextareas() {
	const [controlled, setControlled] = useState('test1');
	const [uncontrolled, setUncontrolled] = useState('test2');

	return (
		<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
			<DBTextarea
				label="Controlled"
				value={controlled}
				onChange={(event) => {
					setControlled(event.target.value);
				}}
			/>
			<DBTextarea
				label="Uncontrolled"
				defaultValue={uncontrolled}
				onChange={(event) => {
					setUncontrolled(event.target.value);
				}}
			/>
		</FormWrapper>
	);
}
