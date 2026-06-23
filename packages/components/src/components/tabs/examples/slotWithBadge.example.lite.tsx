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
	storybookNames: ['tab-items with badges'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsSlotWithBadge() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					tab-items with badges:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem label="Messages">
							<DBBadge semantic="informational">134</DBBadge>
						</DBTabItem>
						<DBTabItem label="Notifications">
							<DBBadge semantic="neutral">433</DBBadge>
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
