import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Controlled',
	storybookNames: ['Controlled Tabs (External State)'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsControlled() {
	const state = useStore({
		activeTabIndex: 0
	});

	return (
		<Fragment>
			<div class="fit-content-container">
				<div data-sb-replace="Use external buttons to control active tab">
					<DBButton
						variant="outlined"
						onClick={() => (state.activeTabIndex = 0)}>
						Select Tab 1
					</DBButton>
					<DBButton
						variant="outlined"
						onClick={() => (state.activeTabIndex = 1)}>
						Select Tab 2
					</DBButton>
					<DBButton
						variant="outlined"
						onClick={() => (state.activeTabIndex = 2)}>
						Select Tab 3
					</DBButton>
				</div>
				<DBTabs
					activeIndex={state.activeTabIndex}
					onIndexChange={(index) => (state.activeTabIndex = index)}>
					<DBTabList>
						<DBTabItem>Tab 1</DBTabItem>
						<DBTabItem>Tab 2</DBTabItem>
						<DBTabItem>Tab 3</DBTabItem>
					</DBTabList>
					<DBTabPanel>Content of Tab 1</DBTabPanel>
					<DBTabPanel>Content of Tab 2</DBTabPanel>
					<DBTabPanel>Content of Tab 3</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
