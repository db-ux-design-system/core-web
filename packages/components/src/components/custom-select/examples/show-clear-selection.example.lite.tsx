import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Clear Selection',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowClearSelection() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '9zfvu9noy' },
						{ value: 'Option 2', id: 'cox90a0q8' },
						{ value: 'Option 3', id: 'cox80a0q8' },
						{ value: 'Option 4', id: 'cox70a0q8' },
						{ value: 'Option 5', id: 'cox60a0q8' }
					]}
					showClearSelection={true}
					multiple={true}
					id="id-10258"
					label="(Default) True"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'ln9ms4fjy' },
						{ value: 'Option 2', id: 'dta90rteq' },
						{ value: 'Option 3', id: 'dta80rteq' },
						{ value: 'Option 4', id: 'dta70rteq' },
						{ value: 'Option 5', id: 'dta60rteq' }
					]}
					showClearSelection={false}
					multiple={true}
					id="id-10259"
					label="False"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
