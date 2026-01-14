import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Examples Floating label',
	storybookNames: ['Floating', 'Floating'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectExamplesFloatinglabel() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'otbjunoyx' },
					{ value: 'Option 2', id: 'ju53v02yg' },
					{ value: 'Option 3', id: 'ju53v03yg' },
					{ value: 'Option 4', id: 'ju53v04yg' },
					{ value: 'Option 5', id: 'ju53v05yg' }
				]}
				variant="floating"
				values={['Floating Label']}
				id="id-10300">
				Floating
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'otbjunoyx' },
					{ value: 'Option 2', id: 'ju53v02yg' },
					{ value: 'Option 3', id: 'ju53v03yg' },
					{ value: 'Option 4', id: 'ju53v04yg' },
					{ value: 'Option 5', id: 'ju53v05yg' }
				]}
				variant="floating"
				id="id-10301"
				validation="invalid"
				invalidMessage="Invalid Message">
				Floating
			</DBCustomSelect>
		</Fragment>
	);
}
