import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'Slot with Badge',
	storybookNames: ['Messages with Badge', 'Notifications with Badge'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemSlotWithBadge() {
	return (
		<Fragment>
			<DBTabList>
				<DBTabItem>
					<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						Messages
						<DBBadge semantic="informational">3</DBBadge>
					</span>
				</DBTabItem>
			</DBTabList>
			<DBTabList>
				<DBTabItem>
					<span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						Notifications
						<DBBadge semantic="neutral">4</DBBadge>
					</span>
				</DBTabItem>
			</DBTabList>
		</Fragment>
	);
}