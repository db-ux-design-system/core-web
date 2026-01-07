import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Multi Line Text',
	storybookNames: [
		'Automatic Line Breaks',
		'Automatic Line Breaks and Icon',
		'Small Automatic Line Breaks'
	],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonMultiLineText() {
	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBButton width="full">
					Multi-line Text With Automatic Line Breaks
				</DBButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBButton width="full" icon="x_placeholder">
					Multi-line Text With Automatic Line Breaks and Icon
				</DBButton>
			</div>
			<div style={{ width: '300px' }}>
				<DBButton size="small">
					Button Small Multi-line Text With Automatic Line Breaks
				</DBButton>
			</div>
		</Fragment>
	);
}
