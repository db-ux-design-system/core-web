import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsDensity() {
	return (
		<Fragment>
			<DBTabs data-density="functional">
				<DBTabList>
					<DBTabItem>Test 1</DBTabItem>
					<DBTabItem>Test 2</DBTabItem>
					<DBTabItem>Test 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Test Panel 1</DBTabPanel>
				<DBTabPanel>Test Panel 2</DBTabPanel>
				<DBTabPanel>Test Panel 3</DBTabPanel>
			</DBTabs>
			<DBTabs data-density="regular">
				<DBTabList>
					<DBTabItem>Test 1</DBTabItem>
					<DBTabItem>Test 2</DBTabItem>
					<DBTabItem>Test 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Test Panel 1</DBTabPanel>
				<DBTabPanel>Test Panel 2</DBTabPanel>
				<DBTabPanel>Test Panel 3</DBTabPanel>
			</DBTabs>
			<DBTabs data-density="expressive">
				<DBTabList>
					<DBTabItem>Test 1</DBTabItem>
					<DBTabItem>Test 2</DBTabItem>
					<DBTabItem>Test 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Test Panel 1</DBTabPanel>
				<DBTabPanel>Test Panel 2</DBTabPanel>
				<DBTabPanel>Test Panel 3</DBTabPanel>
			</DBTabs>
		</Fragment>
	);
}
