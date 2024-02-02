import {
	DBTabs,
	DBTabList,
	DBTab,
	DBTabPanel,
	DBInfotext
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
	behaviour,
	initialSelectedMode,
	initialSelectedIndex
}: DBTabsProps & { overflow: boolean }) => (
	<div className="w-full">
		<DBInfotext icon="none" size="small" variant="informational">
			{children}:
		</DBInfotext>
		<DBTabs
			orientation={orientation}
			width={width}
			alignment={alignment}
			behaviour={behaviour}
			initialSelectedIndex={initialSelectedIndex}
			initialSelectedMode={initialSelectedMode}
			arrowScrollDistance={75}>
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
				Tab Panel 1
			</DBTabPanel>
			<DBTabPanel name={children} index={1}>
				Tab Panel 2
			</DBTabPanel>
			<DBTabPanel name={children} index={2}>
				Tab Panel 3
			</DBTabPanel>
			{overflow && (
				<>
					<DBTabPanel name={children} index={3}>
						Tab Panel 4
					</DBTabPanel>
					<DBTabPanel name={children} index={4}>
						Tab Panel 5
					</DBTabPanel>
				</>
			)}
		</DBTabs>
	</div>
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
