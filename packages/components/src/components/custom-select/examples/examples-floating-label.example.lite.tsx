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
			<div style={{ width: '200px' }}>
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
					id="id-10300"
					label="Floating"
					listLabel="id-10300-Floating"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
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
					invalidMessage="Invalid Message"
					label="Floating"
					listLabel="id-10301-Floating"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
