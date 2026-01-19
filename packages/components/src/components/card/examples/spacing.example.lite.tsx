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
			<DBCard spacing="small">
				<strong>(Default) Small</strong>
			</DBCard>
			<DBCard spacing="medium">
				<strong>Medium</strong>
			</DBCard>
			<DBCard spacing="large">
				<strong>Large</strong>
			</DBCard>
			<DBCard spacing="none">
				<strong>None</strong>
			</DBCard>
		</Fragment>
	);
}
