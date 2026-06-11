import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../infotext.lite';
import { StorybookInfotextArgTypes } from './_infotext.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookInfotextArgTypes
});

export default function InfotextSize() {
	return (
		<Fragment>
			<DBInfotext>(Default) Medium</DBInfotext>
			<DBInfotext size="small">Small</DBInfotext>
		</Fragment>
	);
}
