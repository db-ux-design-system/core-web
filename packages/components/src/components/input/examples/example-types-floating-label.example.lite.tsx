import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
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
	const [dataListFloating] = useState(['Test 1', 'Test 2']);
	return (
		<Fragment>
			<DBInput
				label="Label"
				variant="floating"
				placeholder="(Default) Text"></DBInput>
			<DBInput
				label="Label"
				type="password"
				variant="floating"
				placeholder="Password"></DBInput>
			<DBInput
				label="Label"
				type="search"
				variant="floating"
				placeholder="Search"></DBInput>
			<DBInput
				label="Label"
				type="email"
				variant="floating"
				placeholder="E-Mail"></DBInput>
			<DBInput
				label="Label"
				type="tel"
				variant="floating"
				placeholder="Tel"></DBInput>
			<DBInput
				label="Label"
				type="url"
				variant="floating"
				placeholder="URL"></DBInput>
			<DBInput
				label="Label"
				type="date"
				variant="floating"
				placeholder="Date"></DBInput>
			<DBInput
				label="Label"
				type="datetime-local"
				variant="floating"
				placeholder="Datetime Local"></DBInput>
			<DBInput
				label="Label"
				type="month"
				variant="floating"
				placeholder="Month"></DBInput>
			<DBInput
				label="Label"
				type="time"
				variant="floating"
				placeholder="Time"></DBInput>
			<DBInput
				label="Label"
				type="week"
				variant="floating"
				placeholder="Week"></DBInput>
			<DBInput
				label="Label"
				variant="floating"
				dataList={dataListFloating}
				placeholder="Datalist"></DBInput>
			<DBInput
				label="Label"
				type="file"
				variant="floating"
				placeholder="File"></DBInput>
		</Fragment>
	);
}
