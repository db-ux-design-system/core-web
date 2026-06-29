import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Examples showEmptyOption property',
	storybookNames: ['(Default)', 'showEmptyOption=false'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectExamplesShowEmptyOption() {
	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBSelect
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Label"
					placeholder="(Default)"
				/>
			</div>
			<div style={{ width: '300px' }}>
				<DBSelect
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Label"
					showEmptyOption={false}
					placeholder="showEmptyOption=false"
				/>
			</div>
		</Fragment>
	);
}
