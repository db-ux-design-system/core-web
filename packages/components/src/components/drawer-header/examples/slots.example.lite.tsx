import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBIcon from '../../icon/icon.lite';
import DBDrawerHeader from '../drawer-header.lite';
import { StorybookDrawerHeaderArgTypes } from './_drawer-header.arg.types';

useMetadata({
	storybookTitle: 'Slots',
	storybookNames: ['With end slot', 'With start slot'],
	storybookArgTypes: StorybookDrawerHeaderArgTypes
});

export default function DrawerHeaderSlots() {
	return (
		<Fragment>
			<div>
				<DBDrawerHeader endSlot={<DBBadge>New</DBBadge>}>
					With end slot
				</DBDrawerHeader>
			</div>
			<div>
				<DBDrawerHeader startSlot={<DBIcon icon="account" />}>
					With start slot
				</DBDrawerHeader>
			</div>
		</Fragment>
	);
}
