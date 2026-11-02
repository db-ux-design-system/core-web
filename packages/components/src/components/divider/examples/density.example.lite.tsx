import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBDivider from '../divider.lite';
import { StorybookDividerHorizontalArgTypes } from './_divider.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookDividerHorizontalArgTypes
});

export default function DividerDensity() {
	return (
		<Fragment>
			<div data-density="functional" style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					Functional
				</DBInfotext>
				<DBDivider width="full"></DBDivider>
			</div>
			<div data-density="regular" style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					(Default) Regular
				</DBInfotext>
				<DBDivider width="full"></DBDivider>
			</div>
			<div data-density="expressive" style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					Expressive
				</DBInfotext>
				<DBDivider width="full"></DBDivider>
			</div>
		</Fragment>
	);
}
