import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'URL Sync',
	storybookNames: ['initialSelectedIndex via URL', 'value-based URL sync'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsUrlSync() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					3rd tab pre-selected via initialSelectedIndex with a value
					parsed from URL parameter:
				</DBInfotext>
				<DBTabs initialSelectedIndex={2} label="url-sync-index">
					<DBTabList>
						<DBTabItem>Overview</DBTabItem>
						<DBTabItem>Details</DBTabItem>
						<DBTabItem>Settings</DBTabItem>
					</DBTabList>
					<DBTabPanel>Overview content</DBTabPanel>
					<DBTabPanel>Details content</DBTabPanel>
					<DBTabPanel>Settings content</DBTabPanel>
				</DBTabs>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					2nd tab pre-selected with value props and 'onValueChange':
				</DBInfotext>
				<DBTabs initialSelectedIndex={1} label="url-sync-value">
					<DBTabList>
						<DBTabItem value="overview">Overview</DBTabItem>
						<DBTabItem value="details">Details</DBTabItem>
						<DBTabItem value="settings">Settings</DBTabItem>
					</DBTabList>
					<DBTabPanel>Overview content</DBTabPanel>
					<DBTabPanel>Details content</DBTabPanel>
					<DBTabPanel>Settings content</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
