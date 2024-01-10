import { DBTabBar } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tab-bar.json';
import type { DBTabBarProps } from '../../../../../output/react/src/components/tab-bar/model';
import { getVariants } from '../data';

const getTabBar = ({ children }: DBTabBarProps) => (
	<DBTabBar>
		{children}
	</DBTabBar>
);

const TabBarComponent = () => {
	return (
		<DefaultComponent
			title="DBTabBar"
			variants={getVariants(
                     				defaultComponentVariants,
                     				getTabBar
                     			)}></DefaultComponent>
	);
};

export default TabBarComponent;
