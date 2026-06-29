import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../card.lite';
import { StorybookCardArgTypes } from './_card.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: [
		'Level 1 - Interactive',
		'Level 2 - Interactive',
		'Level 3 - Interactive'
	],
	storybookArgTypes: StorybookCardArgTypes
});

export default function CardExample() {
	return (
		<Fragment>
			<button type="button">
				<DBCard elevationLevel="1" behavior="interactive">
					<strong>Level 1 - Interactive</strong>
				</DBCard>
			</button>
			<button type="button">
				<DBCard elevationLevel="2" behavior="interactive">
					<strong>Level 2 - Interactive</strong>
				</DBCard>
			</button>
			<button type="button">
				<DBCard elevationLevel="3" behavior="interactive">
					<strong>Level 3 - Interactive</strong>
				</DBCard>
			</button>
		</Fragment>
	);
}
