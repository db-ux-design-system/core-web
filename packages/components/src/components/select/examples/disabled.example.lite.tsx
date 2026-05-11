import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectDisabled() {
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
					disabled={false}
					placeholder="(Default) False"
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
					disabled={true}
					placeholder="True"
				/>
			</div>
		</Fragment>
	);
}
