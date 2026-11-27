import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Icon',
	storybookNames: [
		'Medium Brand: Button',
		'Medium Brand: Link',
		'Medium Outlined: Button',
		'Medium Outlined: Link',
		'Medium Outlined: Checkbox',
		'Medium Outlined: Checkbox Checked',
		'Small Brand: Button',
		'Small Brand: Link',
		'Small Outlined: Button',
		'Small Outlined: Link',
		'Small Outlined: Checkbox',
		'Small Outlined: Checkbox Checked'
	],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonIcon() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Medium: icon size and color for brand, checkbox and checked
				checkbox. Hover each one to check the icon color.
			</DBInfotext>
			<DBCustomButton icon="x_placeholder" variant="brand">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" variant="brand">
				<a href="#">Link</a>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder">
				<a href="#">Link</a>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder">
				<label for="checkbox30">
					<input type="checkbox" id="checkbox30" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder">
				<label for="checkbox31">
					<input type="checkbox" checked id="checkbox31" />
					Checkbox
				</label>
			</DBCustomButton>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Small
			</DBInfotext>
			<DBCustomButton icon="x_placeholder" size="small" variant="brand">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" size="small" variant="brand">
				<a href="#">Link</a>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" size="small">
				<button type="button">Button</button>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" size="small">
				<a href="#">Link</a>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" size="small">
				<label for="checkbox32">
					<input type="checkbox" id="checkbox32" />
					Checkbox
				</label>
			</DBCustomButton>
			<DBCustomButton icon="x_placeholder" size="small">
				<label for="checkbox33">
					<input type="checkbox" checked id="checkbox33" />
					Checkbox
				</label>
			</DBCustomButton>
		</Fragment>
	);
}
