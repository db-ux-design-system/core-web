import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxDisabled() {
	return (
		<Fragment>
			<div role="group" aria-label="Disabled">
				<DBCheckbox name="Disabled" disabled={false}>
					(Default) False
				</DBCheckbox>
				<DBCheckbox name="Disabled" disabled={true}>
					True
				</DBCheckbox>
			</div>
		</Fragment>
	);
}
