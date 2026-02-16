import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../infotext.lite';
import { StorybookInfotextArgTypes } from './_infotext.arg.types';

useMetadata({
	storybookTitle: 'Show Icon',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookInfotextArgTypes
});

export default function InfotextShowIcon() {
	return (
		<Fragment>
			<DBInfotext showIcon={true}>(Default) True</DBInfotext>
			<DBInfotext showIcon={false}>False</DBInfotext>
		</Fragment>
	);
}
