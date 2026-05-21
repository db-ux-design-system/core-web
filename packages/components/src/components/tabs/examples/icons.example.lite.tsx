import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Icons',
	storybookNames: ['with leading icons', 'with trailing icons', 'icon-only'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsIcons() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					with leading icons:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem icon="house" showIcon={true}>
							Home
						</DBTabItem>
						<DBTabItem icon="magnifying_glass" showIcon={true}>
							Search
						</DBTabItem>
						<DBTabItem icon="calendar" showIcon={true}>
							Calendar
						</DBTabItem>
					</DBTabList>
					<DBTabPanel>Home content</DBTabPanel>
					<DBTabPanel>Search content</DBTabPanel>
					<DBTabPanel>Calendar content</DBTabPanel>
				</DBTabs>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					with trailing icons:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem
							iconTrailing="exclamation_mark_circle"
							showIconTrailing={true}>
							Notifications
						</DBTabItem>
						<DBTabItem
							iconTrailing="information_circle"
							showIconTrailing={true}>
							Info
						</DBTabItem>
						<DBTabItem
							iconTrailing="circular_arrows"
							showIconTrailing={true}>
							Settings
						</DBTabItem>
					</DBTabList>
					<DBTabPanel>Notifications content</DBTabPanel>
					<DBTabPanel>Info content</DBTabPanel>
					<DBTabPanel>Settings content</DBTabPanel>
				</DBTabs>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					icon-only:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem label="Home" icon="house" showIcon={true} />
						<DBTabItem
							label="Search"
							icon="magnifying_glass"
							showIcon={true}
						/>
						<DBTabItem
							label="Calendar"
							icon="calendar"
							showIcon={true}
						/>
					</DBTabList>
					<DBTabPanel>Home content</DBTabPanel>
					<DBTabPanel>Search content</DBTabPanel>
					<DBTabPanel>Calendar content</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
