import { DBTabItem } from '../../tab-item/index';
import { DBTabList } from '../../tab-list/index';
import { DBTabPanel } from '../../tab-panel/index';
import { DBTabs } from '../index';

export default function Tabs() {
	return (
		<>
			<h1>DBTabs Documentation Examples</h1>

			<h2>1. Default Tabs</h2>
			<DBTabs>
				<DBTabList>
					<DBTabItem>Tab 1</DBTabItem>
					<DBTabItem>Tab 2</DBTabItem>
					<DBTabItem>Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Tab Panel 1</DBTabPanel>
				<DBTabPanel>Tab Panel 2</DBTabPanel>
				<DBTabPanel>Tab Panel 3</DBTabPanel>
			</DBTabs>

			<h2>2. Behavior Variants</h2>
			<DBTabs behavior="scrollbar">
				<DBTabList>
					<DBTabItem>Tab 1</DBTabItem>
					<DBTabItem>Tab 2</DBTabItem>
					<DBTabItem>Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Tab Panel 1</DBTabPanel>
				<DBTabPanel>Tab Panel 2</DBTabPanel>
				<DBTabPanel>Tab Panel 3</DBTabPanel>
			</DBTabs>
			<DBTabs behavior="arrows">
				<DBTabList>
					<DBTabItem>Tab 1</DBTabItem>
					<DBTabItem>Tab 2</DBTabItem>
					<DBTabItem>Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Tab Panel 1</DBTabPanel>
				<DBTabPanel>Tab Panel 2</DBTabPanel>
				<DBTabPanel>Tab Panel 3</DBTabPanel>
			</DBTabs>

			<h2>3. Initial Selected Index</h2>
			<DBTabs initialSelectedIndex={1}>
				<DBTabList>
					<DBTabItem>Tab 1</DBTabItem>
					<DBTabItem>Tab 2</DBTabItem>
					<DBTabItem>Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Tab Panel 1</DBTabPanel>
				<DBTabPanel>Tab Panel 2</DBTabPanel>
				<DBTabPanel>Tab Panel 3</DBTabPanel>
			</DBTabs>

			<h2>4. Initial Selected Mode</h2>
			<DBTabs initialSelectedMode="manually">
				<DBTabList>
					<DBTabItem>Tab 1</DBTabItem>
					<DBTabItem>Tab 2</DBTabItem>
					<DBTabItem>Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Tab Panel 1</DBTabPanel>
				<DBTabPanel>Tab Panel 2</DBTabPanel>
				<DBTabPanel>Tab Panel 3</DBTabPanel>
			</DBTabs>
		</>
	);
}
