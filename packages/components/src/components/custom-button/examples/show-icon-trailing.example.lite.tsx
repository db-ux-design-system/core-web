import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Trailing',
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

export default function CustomButtonShowIconTrailing() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) False
			</DBInfotext>
			<DBCustomButton
				iconTrailing="x_placeholder"
				showIconTrailing={false}>
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton
				iconTrailing="x_placeholder"
				showIconTrailing={false}>
				<label for="checkbox15">
					<input type="checkbox" id="checkbox15" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton
				iconTrailing="x_placeholder"
				showIconTrailing={false}>
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				True
			</DBInfotext>
			<DBCustomButton
				iconTrailing="x_placeholder"
				showIconTrailing={true}>
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton
				iconTrailing="x_placeholder"
				showIconTrailing={true}>
				<label for="checkbox16">
					<input type="checkbox" id="checkbox16" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton
				iconTrailing="x_placeholder"
				showIconTrailing={true}>
				<a href="#">Link</a>
			</DBCustomButton>
		</Fragment>
	);
}
