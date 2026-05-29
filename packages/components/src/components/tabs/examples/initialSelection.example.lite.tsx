import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Initial Selection',
	storybookNames: [
		'Pre-selected via initialSelectedIndex',
		'Pre-selected with value props'
	],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsInitialSelection() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					3rd tab pre-selected via initialSelectedIndex (also supports
					deep linking via URL hash, e.g.
					#tabs-initial-selection-tab-1):
				</DBInfotext>
				<DBTabs initialSelectedIndex={2} label="initial-selection">
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
				<DBTabs initialSelectedIndex={1} label="value-selection">
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
