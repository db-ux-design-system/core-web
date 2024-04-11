import {
	DBNavigation,
	DBNavigationItem
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/navigation.json';
import type { DBNavigationProps } from '../../../../../output/react/src/components/navigation/model';
import { getVariants } from '../data';

const getNavigation = ({ children }: DBNavigationProps) => (
	<div>
		<h6>{children}:</h6>
		<DBNavigation>
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
			<DBNavigationItem icon="account">
				<a href="#">Navi-Item 2</a>
			</DBNavigationItem>
			<DBNavigationItem disabled>
				<a href="#">Navi-Item 3</a>
			</DBNavigationItem>
		</DBNavigation>
	</div>
);

const NavigationComponent = () => {
	return (
		<DefaultComponent
			title="DBNavigation"
			variants={getVariants(
				defaultComponentVariants,
				getNavigation
			)}></DefaultComponent>
	);
};

export default NavigationComponent;
