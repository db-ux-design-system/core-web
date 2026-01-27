import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Checked',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxChecked() {
	const [checked, setChecked] = useState<boolean>(true);
	return (
		<Fragment>
			<div role="group" aria-label="Checked">
				<DBCheckbox name="State" checked={false}>
					(Default) False
				</DBCheckbox>
				<DBCheckbox
					name="State"
					checked={checked}
					onChange={(event) =>
						setChecked((event.target as HTMLInputElement).checked)
					}>
					True
				</DBCheckbox>
			</div>
		</Fragment>
	);
}
