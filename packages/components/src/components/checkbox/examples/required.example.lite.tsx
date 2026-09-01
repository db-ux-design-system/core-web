import { useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxRequired() {
	return (
		<div role="group" aria-label="Required">
			<DBCheckbox name="Requirement" required={false}>
				(Default) False
			</DBCheckbox>
			<DBCheckbox name="Requirement" required={true}>
				True
			</DBCheckbox>
		</div>
	);
}
