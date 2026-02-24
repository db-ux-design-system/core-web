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
				<label for="checkbox01">
					<input type="checkbox" id="checkbox01" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton>
				<label for="checkbox02">
					<input type="checkbox" checked id="checkbox02" />
					Checkbox
				</label>
			</DBCustomButton>
		</Fragment>
	);
}
