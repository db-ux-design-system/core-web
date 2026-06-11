import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Above', 'Floating'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectVariant() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '4lj8zr5b1' },
						{ value: 'Option 2', id: 'uurfm7y2y' },
						{ value: 'Option 3', id: 'uurfm7y3y' },
						{ value: 'Option 4', id: 'uurfm7y4y' },
						{ value: 'Option 5', id: 'uurfm7y5y' }
					]}
					label="(Default) Above"
					listLabel="id-10211-(Default) Above"></DBCustomSelect>
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
					label="Floating"
					listLabel="id-10212-Floating"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
