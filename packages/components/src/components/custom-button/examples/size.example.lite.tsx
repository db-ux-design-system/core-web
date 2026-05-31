import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: [
		'(Default) Medium: Button',
		'(Default) Medium: Checkbox',
		'(Default) Medium: Link',
		'Small: Button',
		'Small: Checkbox',
		'Small: Link'
	],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonSize() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) Medium
			</DBInfotext>
			<DBCustomButton size="medium">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton size="medium">
				<label for="checkbox17">
					<input type="checkbox" id="checkbox17" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton size="medium">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Small
			</DBInfotext>
			<DBCustomButton size="small">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton size="small">
				<label for="checkbox18">
					<input type="checkbox" id="checkbox18" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton size="small">
				<a href="#">Link</a>
			</DBCustomButton>
		</Fragment>
	);
}
