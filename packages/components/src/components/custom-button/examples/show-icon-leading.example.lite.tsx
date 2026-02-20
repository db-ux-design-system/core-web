import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Leading',
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

export default function CustomButtonShowIconLeading() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) False
			</DBInfotext>
			<DBCustomButton icon="x_placeholder" showIcon={false}>
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" showIcon={false}>
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" showIcon={false}>
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				True
			</DBInfotext>
			<DBCustomButton icon="x_placeholder" showIcon={true}>
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" showIcon={true}>
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" showIcon={true}>
				<a href="#">Link</a>
			</DBCustomButton>
		</Fragment>
	);
}
