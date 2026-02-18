import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Checkbox',
	storybookNames: ['Unchecked', 'Checked'],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonCheckbox() {
	return (
		<Fragment>
			<DBCustomButton>
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton>
				<label>
					<input type="checkbox" checked />
					Checkbox
				</label>
			</DBCustomButton>
		</Fragment>
	);
}
