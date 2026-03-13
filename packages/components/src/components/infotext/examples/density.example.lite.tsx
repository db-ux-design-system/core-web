import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../infotext.lite';
import { StorybookInfotextArgTypes } from './_infotext.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookInfotextArgTypes
});

export default function InfotextDensity() {
	return (
		<Fragment>
			<DBInfotext data-density="functional">Functional</DBInfotext>
			<DBInfotext data-density="regular">(Default) Regular</DBInfotext>
			<DBInfotext data-density="expressive">Expressive</DBInfotext>
		</Fragment>
	);
}
