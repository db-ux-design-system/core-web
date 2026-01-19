import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBDivider from '../divider.lite';
import { StorybookDividerArgTypes } from './_divider.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookDividerArgTypes
});

export default function DividerDensity() {
	return (
		<Fragment>
			<div data-density="functional" style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					Functional
				</DBInfotext>
				<DBDivider data-density="functional" width="full"></DBDivider>
			</div>
			<div data-density="regular" style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					(Default) Regular
				</DBInfotext>
				<DBDivider data-density="regular" width="full"></DBDivider>
			</div>
			<div data-density="expressive" style={{ width: '200px' }}>
				<DBInfotext size="small" semantic="informational">
					Expressive
				</DBInfotext>
				<DBDivider data-density="expressive" width="full"></DBDivider>
			</div>
		</Fragment>
	);
}
