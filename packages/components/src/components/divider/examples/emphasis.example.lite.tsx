import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBDivider from '../divider.lite';
import { StorybookDividerArgTypes } from './_divider.arg.types';

useMetadata({
	storybookTitle: 'Emphasis',
	storybookNames: ['(Default) Weak', 'Strong'],
	storybookArgTypes: StorybookDividerArgTypes
});

export default function DividerEmphasis() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					(Default) Weak
				</DBInfotext>
				<DBDivider width="full"></DBDivider>
			</div>
			<div style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					Strong
				</DBInfotext>
				<DBDivider emphasis="strong" width="full"></DBDivider>
			</div>
		</Fragment>
	);
}
