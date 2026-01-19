import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: ['2nd Test selected', 'nothing selected'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsExamples() {
	return (
		<Fragment>
			<div className="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					2nd Test selected:
				</DBInfotext>
				<DBTabs initialSelectedIndex={1}>
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
					nothing selected:
				</DBInfotext>
				<DBTabs initialSelectedMode="manually">
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
