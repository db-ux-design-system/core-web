import { useMetadata, useState, useTarget } from '@builder.io/mitosis';
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
		<div role="group" aria-label="Checked">
			<DBCheckbox name="State" checked={false}>
				(Default) False
			</DBCheckbox>
			<DBCheckbox
				name="State"
				checked={checked}
				{...useTarget({
					react: {
						onChange: (event: any) =>
							setChecked(
								(event.target as HTMLInputElement).checked
							)
					},
					default: {}
				})}>
				True
			</DBCheckbox>
		</div>
	);
}
