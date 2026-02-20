import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'No Text',
	storybookNames: [
		'(Default) False: Button',
		'(Default) False: Checkbox',
		'(Default) False: Link',
		'True: Button',
		'True: Checkbox',
		'True: Link'
	],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonNoText() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) False
			</DBInfotext>
			<DBCustomButton icon="x_placeholder">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder">
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				True
			</DBInfotext>
			<DBCustomButton icon="x_placeholder" noText={true}>
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" noText={true}>
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" noText={true}>
				<a href="#">Link</a>
			</DBCustomButton>
		</Fragment>
	);
}
