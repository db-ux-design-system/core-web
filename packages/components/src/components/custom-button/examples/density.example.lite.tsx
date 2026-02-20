import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: [
		'Functional: Button',
		'Functional: Checkbox',
		'Functional: Link',
		'(Default) Regular: Button',
		'(Default) Regular: Checkbox',
		'(Default) Regular: Link',
		'Expressive: Button',
		'Expressive: Checkbox',
		'Expressive: Link'
	],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonDensity() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Functional
			</DBInfotext>
			<DBCustomButton data-density="functional">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton data-density="functional">
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton data-density="functional">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) Regular
			</DBInfotext>
			<DBCustomButton data-density="regular">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton data-density="regular">
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton data-density="regular">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Expressive
			</DBInfotext>
			<DBCustomButton data-density="expressive">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton data-density="expressive">
				<label>
					<input type="checkbox" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton data-density="expressive">
				<a href="#">Link</a>
			</DBCustomButton>
		</Fragment>
	);
}
