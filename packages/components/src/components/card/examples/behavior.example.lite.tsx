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
			<button type="button">
				<DBCard behavior="static">
					<strong>(Default) Static</strong>
				</DBCard>
			</button>
			<button type="button">
				<DBCard behavior="interactive">
					<strong>Interactive</strong>
				</DBCard>
			</button>
		</Fragment>
	);
}
