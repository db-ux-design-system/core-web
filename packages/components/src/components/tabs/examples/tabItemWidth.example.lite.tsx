import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Tab-Item-Width',
	storybookNames: [
		'auto',
		'full - alignment: start',
		'full - alignment: center',
		'full - alignment: end'
	],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabItemWidth() {
	return (
		<Fragment>
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					auto:
				</DBInfotext>
				<DBTabs tabItemWidth="auto">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					full - alignment: start:
				</DBInfotext>
				<DBTabs tabItemWidth="full">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					full - alignment: center:
				</DBInfotext>
				<DBTabs tabItemWidth="full" tabItemAlignment="center">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					full - alignment: end:
				</DBInfotext>
				<DBTabs tabItemWidth="full" tabItemAlignment="end">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
