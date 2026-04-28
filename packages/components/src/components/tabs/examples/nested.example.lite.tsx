import { useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Nested Tabs',
	storybookNames: ['Tabs inside a Tab Panel'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsNested() {
	return (
		<div class="fit-content-container">
			<DBInfotext icon="none" size="small" semantic="informational">
				Nested Tabs:
			</DBInfotext>
			<DBTabs name="outer-tabs">
				<DBTabList>
					<DBTabItem>Overview</DBTabItem>
					<DBTabItem>Details</DBTabItem>
					<DBTabItem>Settings</DBTabItem>
				</DBTabList>
				<DBTabPanel>
					<p>Overview content without nested tabs.</p>
				</DBTabPanel>
				<DBTabPanel>
					<DBTabs name="inner-tabs">
						<DBTabList>
							<DBTabItem>Sub-Tab A</DBTabItem>
							<DBTabItem>Sub-Tab B</DBTabItem>
						</DBTabList>
						<DBTabPanel>Content of inner Sub-Tab A</DBTabPanel>
						<DBTabPanel>Content of inner Sub-Tab B</DBTabPanel>
					</DBTabs>
				</DBTabPanel>
				<DBTabPanel>
					<p>Settings content without nested tabs.</p>
				</DBTabPanel>
			</DBTabs>
		</div>
	);
}
