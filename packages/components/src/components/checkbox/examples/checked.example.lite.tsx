import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Checked',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxChecked() {
	return (
		<Fragment>
			<div role="group">
				<DBCheckbox name="State" checked={false}>
					(Default) False
				</DBCheckbox>
				<DBCheckbox name="State" checked={true}>
					True
				</DBCheckbox>
			</div>
		</Fragment>
	);
}
