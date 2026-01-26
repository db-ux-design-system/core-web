import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxShowLabel() {
	return (
		<Fragment>
			<div role="group" aria-label="Show Label">
				<DBCheckbox name="Label" showLabel={true}>
					(Default) True
				</DBCheckbox>
				<DBCheckbox name="Label" showLabel={false}>
					False
				</DBCheckbox>
			</div>
		</Fragment>
	);
}
