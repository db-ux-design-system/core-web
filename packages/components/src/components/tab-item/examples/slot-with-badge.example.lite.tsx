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
				<DBTabItem label="Messages">
					<DBBadge semantic="informational">134</DBBadge>
				</DBTabItem>
			</DBTabList>
			<DBTabList>
				<DBTabItem label="Notifications">
					<DBBadge semantic="neutral">433</DBBadge>
				</DBTabItem>
			</DBTabList>
		</Fragment>
	);
}
