import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: [
		'(Default) Auto: Button',
		'(Default) Auto: Checkbox',
		'(Default) Auto: Link',
		'Full: Button',
		'Full: Checkbox',
		'Full: Link'
	],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonWidth() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) Auto
			</DBInfotext>
			<DBCustomButton width="auto">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton width="auto">
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton width="auto">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Full
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '500px' }}>
				<DBCustomButton width="full">
					<button type="button">Button</button>
				</DBCustomButton>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '500px' }}>
				<DBCustomButton width="full">
					<label>
						<input type="checkbox" />
						Checkbox
					</label>
				</DBCustomButton>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '500px' }}>
				<DBCustomButton width="full">
					<a href="#">Link</a>
				</DBCustomButton>
			</div>
		</Fragment>
	);
}
