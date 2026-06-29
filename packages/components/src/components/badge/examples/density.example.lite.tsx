import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../badge.lite';
import { StorybookBadgeArgTypes } from './_badge.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookBadgeArgTypes
});

export default function BadgeDensity() {
	return (
		<Fragment>
			<DBBadge data-density="functional">Functional</DBBadge>
			<DBBadge data-density="regular">(Default) Regular</DBBadge>
			<DBBadge data-density="expressive">Expressive</DBBadge>
		</Fragment>
	);
}
