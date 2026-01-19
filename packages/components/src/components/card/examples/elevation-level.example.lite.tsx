import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../card.lite';
import { StorybookCardArgTypes } from './_card.arg.types';

useMetadata({
	storybookTitle: 'Elevation Level',
	storybookNames: ['(Default) 1', '2', '3'],
	storybookArgTypes: StorybookCardArgTypes
});

export default function CardElevationLevel() {
	return (
		<Fragment>
			<DBCard elevationLevel="1">
				<strong>(Default) 1</strong>
			</DBCard>
			<DBCard elevationLevel="2">
				<strong>2</strong>
			</DBCard>
			<DBCard elevationLevel="3">
				<strong>3</strong>
			</DBCard>
		</Fragment>
	);
}
