import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Overflow',
	storybookNames: [
		'no overflow',
		'with overflow - behavior: arrows',
		'with overflow - behavior: scrollbar'
	],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsOverflow() {
	return (
		<Fragment>
			<DBTabs width="auto">
				<DBTabList>
					<DBTabItem>Test 1</DBTabItem>
					<DBTabItem>Test 2</DBTabItem>
					<DBTabItem>Test 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Test Panel 1</DBTabPanel>
				<DBTabPanel>Test Panel 2</DBTabPanel>
				<DBTabPanel>Test Panel 3</DBTabPanel>
			</DBTabs>
			<DBTabs behavior="arrows">
				<DBTabList>
					<DBTabItem>Test 1</DBTabItem>
					<DBTabItem>Test 2</DBTabItem>
					<DBTabItem>Test 3</DBTabItem>
					<DBTabItem>Test 4</DBTabItem>
					<DBTabItem>Test 5</DBTabItem>
				</DBTabList>
				<DBTabPanel>Test Panel 1</DBTabPanel>
				<DBTabPanel>Test Panel 2</DBTabPanel>
				<DBTabPanel>Test Panel 3</DBTabPanel>
				<DBTabPanel>Test Panel 4</DBTabPanel>
				<DBTabPanel>Test Panel 5</DBTabPanel>
			</DBTabs>
			<DBTabs>
				<DBTabList>
					<DBTabItem>Test 1</DBTabItem>
					<DBTabItem>Test 2</DBTabItem>
					<DBTabItem>Test 3</DBTabItem>
					<DBTabItem>Test 4</DBTabItem>
					<DBTabItem>Test 5</DBTabItem>
				</DBTabList>
				<DBTabPanel>Test Panel 1</DBTabPanel>
				<DBTabPanel>Test Panel 2</DBTabPanel>
				<DBTabPanel>Test Panel 3</DBTabPanel>
				<DBTabPanel>Test Panel 4</DBTabPanel>
				<DBTabPanel>Test Panel 5</DBTabPanel>
			</DBTabs>
		</Fragment>
	);
}
