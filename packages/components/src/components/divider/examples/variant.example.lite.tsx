import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBDivider from '../divider.lite';
import { StorybookDividerArgTypes } from './_divider.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Adaptive - Horizontal', 'Adaptive - Vertical'],
	storybookArgTypes: StorybookDividerArgTypes
});

export default function DividerVariant() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					(Default) Adaptive - Horizontal
				</DBInfotext>
				<DBDivider width="full"></DBDivider>
			</div>
			<div style={{ height: '100px' }}>
				<DBInfotext size="small" semantic="informational">
					Adaptive - Vertical
				</DBInfotext>
				<DBDivider variant="vertical" width="full"></DBDivider>
			</div>
		</Fragment>
	);
}
