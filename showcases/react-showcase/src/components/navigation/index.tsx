import {
	DBNavigation,
	DBNavigationItem,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/navigation.json';
import type { DBNavigationProps } from '../../../../../output/react/src/components/navigation/model';
import { getVariants } from '../data';
// Patternhub:import NavigationItemComponent from '../navigation-item';

const getNavigation = ({ children }: DBNavigationProps) => {
	const label = `${children}`;
	return (
		<div>
			<DBInfotext
				id={label}
				size="small"
				semantic="informational"
				icon="none">
				{children}
			</DBInfotext>
			<DBNavigation labelledBy={label}>
				<DBNavigationItem
					active
					subNavigation={
						<>
							<DBNavigationItem
								active
								subNavigation={
									<>
										<DBNavigationItem active>
											<a href="#">Sub-Sub-Navi-Item 1</a>
										</DBNavigationItem>
										<DBNavigationItem>
											<a href="#">Sub-Sub-Navi-Item 2</a>
										</DBNavigationItem>
									</>
								}>
								Sub-Navi-Item 1
							</DBNavigationItem>
							<DBNavigationItem>
								<a href="#">Sub-Navi-Item 2</a>
							</DBNavigationItem>
						</>
					}>
					Navi-Item 1
				</DBNavigationItem>
				<DBNavigationItem icon="user">
					<a href="#">Navi-Item 2</a>
				</DBNavigationItem>
				<DBNavigationItem disabled>
					<a href="#">Navi-Item 3</a>
				</DBNavigationItem>
			</DBNavigation>
		</div>
	);
};

const NavigationComponent = () => {
	return (
		<DefaultComponent
			title="DBNavigation"
			// We use this only for patternhub to include an item inside the parent
			// Patternhub:subComponent={<NavigationItemComponent isSubComponent componentName="navigation-item"/>}
			variants={getVariants(
				defaultComponentVariants,
				getNavigation
			)}></DefaultComponent>
	);
};

export default NavigationComponent;
