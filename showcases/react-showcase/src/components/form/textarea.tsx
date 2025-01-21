// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { DBTextarea } from '@db-ui/react-components/src';
import { useState } from 'react';
import FormWrapper from './form-wrapper';

const FormTextareas = () => {
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
};

export default FormTextareas;
