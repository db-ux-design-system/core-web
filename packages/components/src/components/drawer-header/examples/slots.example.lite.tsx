import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBDrawer from '../../drawer/drawer.lite';
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
				<DBDrawer
					position="absolute"
					backdrop="none"
					open
					header={
						<DBDrawerHeader
							closeButtonText="Close"
							endSlot={<DBBadge>New</DBBadge>}>
							With end slot
						</DBDrawerHeader>
					}>
					Content
				</DBDrawer>
			</div>
			<div>
				<DBDrawer
					position="absolute"
					backdrop="none"
					open
					header={
						<DBDrawerHeader
							closeButtonText="Close"
							startSlot={<DBIcon icon="account" />}>
							With start slot
						</DBDrawerHeader>
					}>
					Content
				</DBDrawer>
			</div>
		</Fragment>
	);
}
