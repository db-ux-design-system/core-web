import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Props Tabs',
	storybookNames: ['Option API (props.tabs)', 'Composition API (children)'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsPropsTabs() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Option API — using the tabs prop with an array of tab
					objects:
				</DBInfotext>
				<DBTabs
					tabs={[
						{ label: 'Home', content: 'Home content' },
						{ label: 'Profile', content: 'Profile content' },
						{ label: 'Settings', content: 'Settings content' }
					]}
				/>
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Composition API — using child components:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem>Home</DBTabItem>
						<DBTabItem>Profile</DBTabItem>
						<DBTabItem>Settings</DBTabItem>
					</DBTabList>
					<DBTabPanel>Home content</DBTabPanel>
					<DBTabPanel>Profile content</DBTabPanel>
					<DBTabPanel>Settings content</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
