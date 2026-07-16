import { DBInput } from '@components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormWrapper from './form-wrapper';

export default function FormInputs() {
	const [controlled, setControlled] = useState('test1');
	const [uncontrolled, setUncontrolled] = useState('test2');
	const [controlledDate, setControlledDate] = useState('2025-01-15');

	const { register, watch } = useForm({
		defaultValues: {
			hookFormDate: '2025-01-15'
		}
	});

	const hookFormDate = watch('hookFormDate');

	return (
		<FormWrapper controlled={controlled} uncontrolled={uncontrolled}>
			<DBInput
				label="Controlled"
				placeholder="Placeholder"
				message="Description"
				icon="x_placeholder"
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
				icon="x_placeholder"
				name="input-name"
				defaultValue={uncontrolled}
				onChange={(event) => {
					setUncontrolled(event.target.value);
				}}
			/>
			<DBInput
				label="Date (controlled)"
				type="date"
				name="input-date-controlled"
				value={controlledDate}
				onChange={(event) => {
					setControlledDate(event.target.value);
				}}
			/>
			<DBInput
				label="Date (react-hook-form register)"
				type="date"
				{...register('hookFormDate')}
			/>
			<p>
				<small>react-hook-form date value: {hookFormDate}</small>
			</p>
		</FormWrapper>
	);
}
