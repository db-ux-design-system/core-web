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
					<DBTabItem>Def Tab 1</DBTabItem>
					<DBTabItem>Def Tab 2</DBTabItem>
					<DBTabItem>Def Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Def Panel 1</DBTabPanel>
				<DBTabPanel>Def Panel 2</DBTabPanel>
				<DBTabPanel>Def Panel 3</DBTabPanel>
			</DBTabs>

			<h2>2. Behavior Variants</h2>
			<DBTabs behavior="scrollbar">
				<DBTabList>
					<DBTabItem>Scroll Tab 1</DBTabItem>
					<DBTabItem>Scroll Tab 2</DBTabItem>
					<DBTabItem>Scroll Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Scroll Panel 1</DBTabPanel>
				<DBTabPanel>Scroll Panel 2</DBTabPanel>
				<DBTabPanel>Scroll Panel 3</DBTabPanel>
			</DBTabs>
			<DBTabs behavior="arrows">
				<DBTabList>
					<DBTabItem>Arrow Tab 1</DBTabItem>
					<DBTabItem>Arrow Tab 2</DBTabItem>
					<DBTabItem>Arrow Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Arrow Panel 1</DBTabPanel>
				<DBTabPanel>Arrow Panel 2</DBTabPanel>
				<DBTabPanel>Arrow Panel 3</DBTabPanel>
			</DBTabs>

			<h2>3. Initial Selected Index</h2>
			<DBTabs initialSelectedIndex={1}>
				<DBTabList>
					<DBTabItem>InitIdx Tab 1</DBTabItem>
					<DBTabItem>InitIdx Tab 2</DBTabItem>
					<DBTabItem>InitIdx Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>InitIdx Panel 1</DBTabPanel>
				<DBTabPanel>InitIdx Panel 2</DBTabPanel>
				<DBTabPanel>InitIdx Panel 3</DBTabPanel>
			</DBTabs>

			<h2>4. Initial Selected Mode</h2>
			<DBTabs initialSelectedMode="manually">
				<DBTabList>
					<DBTabItem>Manually Tab 1</DBTabItem>
					<DBTabItem>Manually Tab 2</DBTabItem>
					<DBTabItem>Manually Tab 3</DBTabItem>
				</DBTabList>
				<DBTabPanel>Manually Panel 1</DBTabPanel>
				<DBTabPanel>Manually Panel 2</DBTabPanel>
				<DBTabPanel>Manually Panel 3</DBTabPanel>
			</DBTabs>
		</>
	);
}
