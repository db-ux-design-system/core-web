import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectDensity() {
	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBSelect
					data-density="functional"
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Label"
					placeholder="Functional"
				/>
			</div>
			<div style={{ width: '300px' }}>
				<DBSelect
					data-density="regular"
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Label"
					placeholder="(Default) Regular"
				/>
			</div>
			<div style={{ width: '300px' }}>
				<DBSelect
					data-density="expressive"
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Label"
					placeholder="Expressive"
				/>
			</div>
		</Fragment>
	);
}
