import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Example - Types - Floating Label',
	storybookNames: [
		'(Default) Text',
		'Password',
		'Search',
		'E-Mail',
		'Tel',
		'URL',
		'Date',
		'Datetime Local',
		'Month',
		'Time',
		'Week',
		'Datalist',
		'File'
	],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputExampleTypesFloatingLabel() {
	const dataListFloating = ['Test 1', 'Test 2'];
	return (
		<Fragment>
			<DBInput label="Label" variant="floating">
				(Default) Text
			</DBInput>
			<DBInput label="Label" type="password" variant="floating">
				Password
			</DBInput>
			<DBInput label="Label" type="search" variant="floating">
				Search
			</DBInput>
			<DBInput label="Label" type="email" variant="floating">
				E-Mail
			</DBInput>
			<DBInput label="Label" type="tel" variant="floating">
				Tel
			</DBInput>
			<DBInput label="Label" type="url" variant="floating">
				URL
			</DBInput>
			<DBInput label="Label" type="date" variant="floating">
				Date
			</DBInput>
			<DBInput label="Label" type="datetime-local" variant="floating">
				Datetime Local
			</DBInput>
			<DBInput label="Label" type="month" variant="floating">
				Month
			</DBInput>
			<DBInput label="Label" type="time" variant="floating">
				Time
			</DBInput>
			<DBInput label="Label" type="week" variant="floating">
				Week
			</DBInput>
			<DBInput
				label="Label"
				variant="floating"
				dataList={dataListFloating}>
				Datalist
			</DBInput>
			<DBInput label="Label" type="file" variant="floating">
				File
			</DBInput>
		</Fragment>
	);
}
