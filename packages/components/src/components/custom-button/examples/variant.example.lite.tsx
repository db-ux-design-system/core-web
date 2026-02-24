import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: [
		'(Default) Outlined: Button',
		'(Default) Outlined: Checkbox',
		'(Default) Outlined: Link',
		'Filled: Button',
		'Filled: Checkbox',
		'Filled: Link',
		'Ghost: Button',
		'Ghost: Checkbox',
		'Ghost: Link',
		'Brand: Button',
		'Brand: Checkbox',
		'Brand: Link'
	],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonVariant() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				(Default) Outlined
			</DBInfotext>
			<DBCustomButton variant="outlined">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton variant="outlined">
				<label for="checkbox19">
					<input type="checkbox" id="checkbox19" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton variant="outlined">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Filled
			</DBInfotext>
			<DBCustomButton variant="filled">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton variant="filled">
				<label for="checkbox20">
					<input type="checkbox" id="checkbox20" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton variant="filled">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Ghost
			</DBInfotext>
			<DBCustomButton variant="ghost">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton variant="ghost">
				<label for="checkbox21">
					<input type="checkbox" id="checkbox21" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton variant="ghost">
				<a href="#">Link</a>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Brand
			</DBInfotext>
			<DBCustomButton variant="brand">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton variant="brand">
				<label for="checkbox22">
					<input type="checkbox" id="checkbox22" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton variant="brand">
				<a href="#">Link</a>
			</DBCustomButton>
		</Fragment>
	);
}
