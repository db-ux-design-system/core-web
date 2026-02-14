import { useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxDensity() {
	return (
		<div role="group" aria-label="Density">
			<DBCheckbox data-density="functional" name="Density">
				Functional
			</DBCheckbox>
			<DBCheckbox data-density="regular" name="Density">
				(Default) Regular
			</DBCheckbox>
			<DBCheckbox data-density="expressive" name="Density">
				Expressive
			</DBCheckbox>
		</div>
	);
}
