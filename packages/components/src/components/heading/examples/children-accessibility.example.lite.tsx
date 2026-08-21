import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBCustomHeading from '../custom-heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Heading with additional content',
	storybookComponentName: 'DBCustomHeading',
	storybookComponentNames: ['DBCustomHeading'],
	storybookNames: ['Sibling content outside the accessible name'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingChildrenAccessibility() {
	return (
		<Fragment>
			<DBCustomHeading>
				<h2>Current disruptions</h2>
				<DBBadge semantic="critical" emphasis="strong">
					3
				</DBBadge>
			</DBCustomHeading>
		</Fragment>
	);
}
