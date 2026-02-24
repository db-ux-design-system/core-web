import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
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

export default function CustomButtonDisabled() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) False
			</DBInfotext>
			<DBCustomButton>
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton>
				<label for="checkbox06">
					<input type="checkbox" id="checkbox06" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton>
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				True
			</DBInfotext>
			<DBCustomButton>
				<button type="button" disabled={true}>
					Button
				</button>
			</DBCustomButton>
			<DBCustomButton>
				<label for="checkbox07">
					<input type="checkbox" disabled={true} id="checkbox07" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton>
				<a href="#" tabIndex={-1} aria-disabled="true">
					Link
				</a>
			</DBCustomButton>
		</Fragment>
	);
}
