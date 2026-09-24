import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDivider from '../../divider/divider.lite';
import DBInfotext from '../../infotext/infotext.lite';
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

			<DBDivider width="full"></DBDivider>

			<DBInfotext size="small" semantic="informational">
				Next Generation
			</DBInfotext>
			<DBBadge size="3xs">3XS</DBBadge>
			<DBBadge size="2xs">2XS</DBBadge>
			<DBBadge size="xs">XS</DBBadge>
			<DBBadge size="sm">SM</DBBadge>
			<DBBadge size="md">MD</DBBadge>
			<DBBadge size="lg">LG</DBBadge>
			<DBBadge size="xl">XL</DBBadge>
			<DBBadge size="2xl">2XL</DBBadge>
		</Fragment>
	);
}
