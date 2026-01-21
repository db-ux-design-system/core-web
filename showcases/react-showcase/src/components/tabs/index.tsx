import {
	DBInfotext,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '@components';
import type { DBTabsProps } from '@components/src/components/tabs/model';
import defaultComponentVariants from '../../../../shared/tabs.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getTabs = ({
	children,
	orientation,
	width,
	contentAlignment,
	overflow,
	behavior,
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
			contentAlignment={contentAlignment}
			behavior={behavior}
			initialSelectedIndex={initialSelectedIndex}
			initialSelectedMode={initialSelectedMode}
			arrowScrollDistance={75}>
			<DBTabList>
				<DBTabItem>{children} Tab 1</DBTabItem>
				<DBTabItem>{children} Tab 2</DBTabItem>
				<DBTabItem>{children} Tab 3</DBTabItem>
				{overflow && (
					<>
						<DBTabItem>{children} Tab 4</DBTabItem>
						<DBTabItem>{children} Tab 5</DBTabItem>
					</>
				)}
			</DBTabList>
			<DBTabPanel>{children} Panel 1</DBTabPanel>
			<DBTabPanel>{children} Panel 2</DBTabPanel>
			<DBTabPanel>{children} Panel 3</DBTabPanel>
			{overflow && (
				<>
					<DBTabPanel>{children} Panel 4</DBTabPanel>
					<DBTabPanel>{children} Panel 5</DBTabPanel>
				</>
			)}
		</DBTabs>
	</div>
);

const TabsComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTabs"
			subComponent={props.subComponent}
			variants={getVariants(
				defaultComponentVariants,
				getTabs,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default TabsComponent;
