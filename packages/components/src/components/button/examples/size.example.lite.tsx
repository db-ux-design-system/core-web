import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDivider from '../../divider/divider.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['Medium', 'Small'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonSize() {
	return (
		<Fragment>
			<DBButton onClick={fn} size="medium">
				(Default) Medium
			</DBButton>
			<DBButton onClick={fn} size="small">
				Small
			</DBButton>

			<DBDivider width="full"></DBDivider>

			<DBInfotext size="small" semantic="informational">
				Next Generation
			</DBInfotext>
			<DBButton onClick={fn} size="3xs">
				3XS
			</DBButton>
			<DBButton onClick={fn} size="2xs">
				2XS
			</DBButton>
			<DBButton onClick={fn} size="xs">
				XS
			</DBButton>
			<DBButton onClick={fn} size="sm">
				SM
			</DBButton>
			<DBButton onClick={fn} size="md">
				MD
			</DBButton>
			<DBButton onClick={fn} size="lg">
				LG
			</DBButton>
			<DBButton onClick={fn} size="xl">
				XL
			</DBButton>
			<DBButton onClick={fn} size="2xl">
				2XL
			</DBButton>
		</Fragment>
	);
}
