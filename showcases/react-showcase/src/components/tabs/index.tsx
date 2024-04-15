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
		<DBInfotext icon="none" size="small" semantic="informational">
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
				<DBTab>Test 1</DBTab>
				<DBTab>Test 2</DBTab>
				<DBTab>Test 3</DBTab>
				{overflow && (
					<>
						<DBTab>Test 4</DBTab>
						<DBTab>Test 5</DBTab>
					</>
				)}
			</DBTabList>
			<DBTabPanel>Tab Panel 1</DBTabPanel>
			<DBTabPanel>Tab Panel 2</DBTabPanel>
			<DBTabPanel>Tab Panel 3</DBTabPanel>
			{overflow && (
				<>
					<DBTabPanel>Tab Panel 4</DBTabPanel>
					<DBTabPanel>Tab Panel 5</DBTabPanel>
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
