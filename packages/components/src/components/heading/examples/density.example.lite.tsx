import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookComponentName: 'DBHeadingH2',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingDensity() {
	return (
		<Fragment>
			<DBHeadingH2 data-density="functional">Functional</DBHeadingH2>
			<DBHeadingH2 data-density="regular">(Default) Regular</DBHeadingH2>
			<DBHeadingH2 data-density="expressive">Expressive</DBHeadingH2>
		</Fragment>
	);
}
