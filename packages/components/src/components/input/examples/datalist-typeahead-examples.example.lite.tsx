import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Datalist / Typeahead Examples',
	storybookNames: [
		'Simple String List',
		'Regular Variant with Datalist',
		'With Search Icon'
	],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputDatalistTypeaheadExamples() {
	const [dataList] = useState([
		{ value: 'test1', label: 'Test 1' },
		{ value: 'test2', label: 'Test 2' }
	]);
	const [dataListFloating] = useState(['Test 1', 'Test 2']);

	return (
		<Fragment>
			<DBInput
				label="Search Cities"
				placeholder="Type to search..."
				dataList={dataList}
				variant="floating"></DBInput>
			<DBInput
				label="Search Products"
				placeholder="Type to search..."
				dataList={dataList}></DBInput>
			<DBInput
				label="Search Stations"
				placeholder="Type to search..."
				dataList={dataListFloating}
				variant="floating"
				type="search"
				icon="magnifying_glass"
				showIcon={true}></DBInput>
		</Fragment>
	);
}
