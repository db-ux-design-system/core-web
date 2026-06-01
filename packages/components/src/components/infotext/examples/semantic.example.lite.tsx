import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../infotext.lite';
import { StorybookInfotextArgTypes } from './_infotext.arg.types';

useMetadata({
	storybookTitle: 'Semantic',
	storybookNames: [
		'(Default) Adaptive',
		'Neutral',
		'Critical',
		'Informational',
		'Successful',
		'Warning'
	],
	storybookArgTypes: StorybookInfotextArgTypes
});

export default function InfotextSemantic() {
	return (
		<Fragment>
			<DBInfotext>(Default) Adaptive</DBInfotext>
			<DBInfotext semantic="neutral">Neutral</DBInfotext>
			<DBInfotext semantic="critical">Critical</DBInfotext>
			<DBInfotext semantic="informational">Informational</DBInfotext>
			<DBInfotext semantic="successful">Successful</DBInfotext>
			<DBInfotext semantic="warning">Warning</DBInfotext>
		</Fragment>
	);
}
