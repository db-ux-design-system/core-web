import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Orientation',
	storybookNames: ['horizontal', 'vertical'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsOrientation() {
	return (
		<Fragment>
			<div className="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					horizontal:
				</DBInfotext>
				<DBTabs orientation="horizontal">
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
			<div className="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					vertical:
				</DBInfotext>
				<DBTabs orientation="vertical">
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
