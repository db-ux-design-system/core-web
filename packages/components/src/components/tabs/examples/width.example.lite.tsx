import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: [
		'auto',
		'full - alignment: start',
		'full - alignment: center'
	],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsWidth() {
	return (
		<Fragment>
			<div style={{ width: '100%' }} className="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					auto:
				</DBInfotext>
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
			</div>
			<div style={{ width: '100%' }} className="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					full - alignment: start:
				</DBInfotext>
				<DBTabs width="full">
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
			<div style={{ width: '100%' }} className="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					full - alignment: center:
				</DBInfotext>
				<DBTabs width="full" alignment="center">
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
