import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: ['Long label'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxExample() {
	return (
		<Fragment>
			<div role="group" aria-label="Example">
				<div style={{ width: '100px' }}>
					<DBCheckbox checked={true} name="Example">
						Long label
					</DBCheckbox>
				</div>
			</div>
		</Fragment>
	);
}
