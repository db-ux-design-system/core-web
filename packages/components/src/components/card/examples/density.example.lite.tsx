import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../card.lite';
import { StorybookCardArgTypes } from './_card.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookCardArgTypes
});

export default function CardDensity() {
	return (
		<Fragment>
			<DBCard data-density="functional">Functional</DBCard>
			<DBCard data-density="regular">(Default) Regular</DBCard>
			<DBCard data-density="expressive">Expressive</DBCard>
		</Fragment>
	);
}
