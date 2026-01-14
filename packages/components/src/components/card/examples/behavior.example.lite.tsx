import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../card.lite';
import { StorybookCardArgTypes } from './_card.arg.types';

useMetadata({
	storybookTitle: 'Behavior',
	storybookNames: ['(Default) Static', 'Interactive'],
	storybookArgTypes: StorybookCardArgTypes
});

export default function CardBehavior() {
	return (
		<Fragment>
			<DBCard behavior="static">(Default) Static</DBCard>
			<DBCard behavior="interactive">Interactive</DBCard>
		</Fragment>
	);
}
