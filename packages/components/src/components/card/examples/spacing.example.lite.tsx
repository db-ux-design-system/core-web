import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../card.lite';
import { StorybookCardArgTypes } from './_card.arg.types';

useMetadata({
	storybookTitle: 'Spacing',
	storybookNames: ['(Default) Small', 'Medium', 'Large', 'None'],
	storybookArgTypes: StorybookCardArgTypes
});

export default function CardSpacing() {
	return (
		<Fragment>
			<DBCard spacing="small">(Default) Small</DBCard>
			<DBCard spacing="medium">Medium</DBCard>
			<DBCard spacing="large">Large</DBCard>
			<DBCard spacing="none">None</DBCard>
		</Fragment>
	);
}
