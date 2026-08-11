import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Semantic and visual decoupling',
	storybookNames: ['h6 rendered at 2xl', 'h2 rendered at 3xs'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAsSize() {
	return (
		<Fragment>
			<DBHeading as="h6" size="2xl">
				Semantic h6, visual 2xl
			</DBHeading>
			<DBHeading as="h2" size="3xs">
				Semantic h2, visual 3xs
			</DBHeading>
		</Fragment>
	);
}
