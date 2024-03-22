import {
	DBMainNavigation,
	DBNavigationItem
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/main-navigation.json';
import type { DBMainNavigationProps } from '../../../../../output/react/src/components/main-navigation/model';
import { getVariants } from '../data';

const getMainNavigation = ({ children }: DBMainNavigationProps) => (
	<div>
		<h6>{children}:</h6>
		<DBMainNavigation>
			<DBNavigationItem
				active
				slotSubNavigation={
					<>
						<DBNavigationItem
							active
							slotSubNavigation={
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
			<DBNavigationItem icon="account">
				<a href="#">Navi-Item 2</a>
			</DBNavigationItem>
			<DBNavigationItem disabled>
				<a href="#">Navi-Item 3</a>
			</DBNavigationItem>
		</DBMainNavigation>
	</div>
);

const MainNavigationComponent = () => {
	return (
		<DefaultComponent
			title="DBMainNavigation"
			variants={getVariants(
				defaultComponentVariants,
				getMainNavigation
			)}></DefaultComponent>
	);
};

export default MainNavigationComponent;
