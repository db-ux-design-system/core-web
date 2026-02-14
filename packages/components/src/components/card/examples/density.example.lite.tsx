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
			<DBCard data-density="functional">
				<strong>Functional</strong>
			</DBCard>
			<DBCard data-density="regular">
				<strong>(Default) Regular</strong>
			</DBCard>
			<DBCard data-density="expressive">
				<strong>Expressive</strong>
			</DBCard>
		</Fragment>
	);
}
