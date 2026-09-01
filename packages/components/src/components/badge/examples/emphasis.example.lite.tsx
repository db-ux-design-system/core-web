import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../badge.lite';
import { StorybookBadgeArgTypes } from './_badge.arg.types';

useMetadata({
	storybookTitle: 'Emphasis',
	storybookNames: ['(Default) Weak', 'Strong'],
	storybookArgTypes: StorybookBadgeArgTypes
});

export default function BadgeEmphasis() {
	return (
		<Fragment>
			<DBBadge>(Default) Weak</DBBadge>
			<DBBadge emphasis="strong">Strong</DBBadge>
		</Fragment>
	);
}
