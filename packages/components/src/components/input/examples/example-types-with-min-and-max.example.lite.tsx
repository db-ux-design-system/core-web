import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Example - Types with min and max',
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
		'Week'
	],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputExampleTypeswithminandmax() {
	return (
		<Fragment>
			<DBInput label="Label" placeholder="(Default) Text"></DBInput>
			<DBInput
				label="Label"
				type="password"
				placeholder="Password"></DBInput>
			<DBInput label="Label" type="search" placeholder="Search"></DBInput>
			<DBInput label="Label" type="email" placeholder="E-Mail"></DBInput>
			<DBInput label="Label" type="tel" placeholder="Tel"></DBInput>
			<DBInput label="Label" type="url" placeholder="URL"></DBInput>
			<DBInput
				label="Label"
				type="date"
				value="2025-01-15"
				min="2023-01-01"
				max="2030-12-31"
				placeholder="Date"></DBInput>
			<DBInput
				label="Label"
				type="datetime-local"
				value="2025-01-15T12:30"
				min="2023-01-01T00:00"
				max="2030-12-31T23:59"
				placeholder="Datetime Local"></DBInput>
			<DBInput
				label="Label"
				type="month"
				value="2025-01"
				min="2023-01"
				max="2030-12"
				placeholder="Month"></DBInput>
			<DBInput
				label="Label"
				type="time"
				value="12:30"
				min="00:00"
				max="23:59"
				placeholder="Time"></DBInput>
			<DBInput
				label="Label"
				type="week"
				value="2025-W03"
				min="2023-W01"
				max="2030-W52"
				placeholder="Week"></DBInput>
		</Fragment>
	);
}
