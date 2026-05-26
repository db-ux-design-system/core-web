import { useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxShowRequiredAsterisk() {
	return (
		<div role="group" aria-label="Show Required Asterisk">
			<DBCheckbox
				name="Asterisk"
				required={true}
				showRequiredAsterisk={true}>
				(Default) True
			</DBCheckbox>
			<DBCheckbox
				name="Asterisk"
				required={true}
				showRequiredAsterisk={false}>
				False
			</DBCheckbox>
		</div>
	);
}
