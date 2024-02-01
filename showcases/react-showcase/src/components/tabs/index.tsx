import {
	DBTabs,
	DBTabList,
	DBTab,
	DBTabPanel
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tabs.json';
import type { DBTabsProps } from '../../../../../output/react/src/components/tabs/model';
import { getVariants } from '../data';

const getTabs = ({
	children,
	orientation,
	width,
	alignment,
	overflow,
	behaviour
}: DBTabsProps & { overflow: boolean }) => (
	<DBTabs
		orientation={orientation}
		width={width}
		alignment={alignment}
		behaviour={behaviour}>
		<DBTabList>
			<DBTab name={children} index={0}>
				Test 1
			</DBTab>
			<DBTab name={children} index={1}>
				Test 2
			</DBTab>
			<DBTab name={children} index={2}>
				Test 3
			</DBTab>
			{overflow && (
				<>
					<DBTab name={children} index={3}>
						Test 4
					</DBTab>
					<DBTab name={children} index={4}>
						Test 5
					</DBTab>
				</>
			)}
		</DBTabList>
		<DBTabPanel name={children} index={0}>
			{children} Tab Panel 1
		</DBTabPanel>
		<DBTabPanel name={children} index={1}>
			{children} Tab Panel 2
		</DBTabPanel>
		<DBTabPanel name={children} index={2}>
			{children} Tab Panel 3
		</DBTabPanel>
		{overflow && (
			<>
				<DBTabPanel name={children} index={3}>
					{children} Tab Panel 4
				</DBTabPanel>
				<DBTabPanel name={children} index={4}>
					{children} Tab Panel 5
				</DBTabPanel>
			</>
		)}
	</DBTabs>
);

const TabsComponent = () => {
	return (
		<DefaultComponent
			title="DBTabs"
			variants={getVariants(
				defaultComponentVariants,
				getTabs
			)}></DefaultComponent>
	);
};

export default TabsComponent;
