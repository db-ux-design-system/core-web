import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Above', 'Floating Label'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectVariant() {
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
					placeholder="(Default) Above"
				/>
			</div>
			<div style={{ width: '300px' }}>
				<DBSelect
					options={[
						{ value: 'Floating', selected: true },
						{ value: 'Option 2' }
					]}
					label="Label"
					variant="floating"
					value="Floating"
					placeholder="Floating"
				/>
			</div>
		</Fragment>
	);
}
