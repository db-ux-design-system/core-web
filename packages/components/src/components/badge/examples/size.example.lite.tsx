import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../badge.lite';
import { StorybookBadgeArgTypes } from './_badge.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Small', 'Medium'],
	storybookArgTypes: StorybookBadgeArgTypes
});

export default function BadgeSize() {
	return (
		<Fragment>
			<DBBadge>(Default) Small</DBBadge>
			<DBBadge size="medium">Medium</DBBadge>
		</Fragment>
	);
}
