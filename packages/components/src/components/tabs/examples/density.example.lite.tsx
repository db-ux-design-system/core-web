import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
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
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Functional:
				</DBInfotext>
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
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Regular:
				</DBInfotext>
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
			</div>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					Expressive:
				</DBInfotext>
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
			</div>
		</Fragment>
	);
}
