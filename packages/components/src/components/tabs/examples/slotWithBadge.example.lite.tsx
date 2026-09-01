import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Slot with Badge',
	storybookNames: ['Horizontal', 'Vertical'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsSlotWithBadge() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Horizontal:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem
							endSlot={
								<DBBadge semantic="informational">134</DBBadge>
							}>
							Messages
						</DBTabItem>
						<DBTabItem
							endSlot={<DBBadge semantic="neutral">433</DBBadge>}>
							Notifications and very long content
						</DBTabItem>
						<DBTabItem>Settings</DBTabItem>
					</DBTabList>
					<DBTabPanel>Messages content</DBTabPanel>
					<DBTabPanel>Notifications content</DBTabPanel>
					<DBTabPanel>Settings content</DBTabPanel>
				</DBTabs>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Vertical:
				</DBInfotext>
				<DBTabs orientation="vertical">
					<DBTabList>
						<DBTabItem
							endSlot={
								<DBBadge semantic="informational">134</DBBadge>
							}>
							Messages
						</DBTabItem>
						<DBTabItem
							endSlot={<DBBadge semantic="neutral">433</DBBadge>}>
							Notifications and very long content
						</DBTabItem>
						<DBTabItem>Settings</DBTabItem>
					</DBTabList>
					<DBTabPanel>Messages content</DBTabPanel>
					<DBTabPanel>Notifications content</DBTabPanel>
					<DBTabPanel>Settings content</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
