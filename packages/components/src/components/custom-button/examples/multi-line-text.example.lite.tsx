import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Multi Line Text',
	storybookNames: [
		'Automatic Line Breaks: Button',
		'Automatic Line Breaks: Checkbox',
		'Automatic Line Breaks: Link',
		'With Icon: Button',
		'With Icon: Checkbox',
		'With Icon: Link',
		'Small: Button',
		'Small: Checkbox',
		'Small: Link'
	],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

export default function CustomButtonMultiLineText() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Automatic Line Breaks
			</DBInfotext>
			<div style={{ width: '300px' }}>
				<DBCustomButton width="full">
					<button>Multi-line Text With Automatic Line Breaks</button>
				</DBCustomButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBCustomButton width="full">
					<label>
						<input type="checkbox" />
						Multi-line Text With Automatic Line Breaks
					</label>
				</DBCustomButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBCustomButton width="full">
					<a href="#">Multi-line Text With Automatic Line Breaks</a>
				</DBCustomButton>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				With Icon
			</DBInfotext>
			<div style={{ width: '300px' }}>
				<DBCustomButton width="full" icon="x_placeholder">
					<button>
						Multi-line Text With Automatic Line Breaks and Icon
					</button>
				</DBCustomButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBCustomButton width="full" icon="x_placeholder">
					<label>
						<input type="checkbox" />
						Multi-line Text With Automatic Line Breaks and Icon
					</label>
				</DBCustomButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBCustomButton width="full" icon="x_placeholder">
					<a href="#">
						Multi-line Text With Automatic Line Breaks and Icon
					</a>
				</DBCustomButton>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Small
			</DBInfotext>
			<div style={{ width: '300px' }}>
				<DBCustomButton size="small">
					<button>
						Button Small Multi-line Text With Automatic Line Breaks
					</button>
				</DBCustomButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBCustomButton size="small">
					<label>
						<input type="checkbox" />
						Button Small Multi-line Text With Automatic Line Breaks
					</label>
				</DBCustomButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBCustomButton size="small">
					<a href="#">
						Button Small Multi-line Text With Automatic Line Breaks
					</a>
				</DBCustomButton>
			</div>
		</Fragment>
	);
}
