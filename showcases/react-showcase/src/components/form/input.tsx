import { DBButton, DBInput } from '@components';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

export default function FormInputs() {
	const [controlled, setControlled] = useState('test1');
	const [uncontrolled, setUncontrolled] = useState('test2');
	/**
	 * Regression fixture for
	 * https://github.com/db-ux-design-system/core-web/issues/6147 -- a consumer
	 * clears a controlled field. In React that means binding `value` to `''`,
	 * not `undefined`: React binds `props.value` alone, so `value={undefined}`
	 * makes the element uncontrolled instead of clearing it.
	 */
	const [resettable, setResettable] = useState('reset-me');

	return (
		<>
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
			</FormWrapper>
			<fieldset>
				<legend>Reset to empty</legend>
				<DBInput
					label="Undefined reset"
					value={resettable}
					onChange={(event) => {
						setResettable(event.target.value);
					}}
				/>
				<DBButton
					data-testid="unset-value-button"
					onClick={() => {
						setResettable('');
					}}>
					Set value to empty
				</DBButton>
			</fieldset>
		</>
	);
}
