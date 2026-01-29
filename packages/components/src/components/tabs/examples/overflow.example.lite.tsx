import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
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
			<div style={{ width: '300px' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					no overflow:
				</DBInfotext>
				<DBTabs width="auto">
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
			<div style={{ width: '300px' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					with overflow - behavior: arrows:
				</DBInfotext>
				<DBTabs behavior="arrows">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
						<DBTabItem>Test 4</DBTabItem>
						<DBTabItem>Test 5</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
					<DBTabPanel>Tab Panel 4</DBTabPanel>
					<DBTabPanel>Tab Panel 5</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '300px' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					with overflow - behavior: scrollbar:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
						<DBTabItem>Test 4</DBTabItem>
						<DBTabItem>Test 5</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
					<DBTabPanel>Tab Panel 4</DBTabPanel>
					<DBTabPanel>Tab Panel 5</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
