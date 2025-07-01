import {
	DBNavigation,
	DBNavigationItem,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/navigation.json';
import type { DBNavigationProps } from '../../../../../output/react/src/components/navigation/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getNavigation = ({ children }: DBNavigationProps) => {
	const labelID = `${children.replaceAll(/\W/g, '_').toLowerCase()}`;
	return (
		<div>
			<DBInfotext
				id={labelID}
				size="small"
				semantic="informational"
				icon="none">
				{children}
			</DBInfotext>
			<DBNavigation labelledBy={labelID}>
				<DBNavigationItem
					subNavigation={
						<>
							<DBNavigationItem
								subNavigation={
									<>
										<DBNavigationItem>
											<a href="#" aria-current="page">
												Sub-Sub-Navi-Item 1
											</a>
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
				<DBNavigationItem icon="x_placeholder">
					<a href="#">Navi-Item 2</a>
				</DBNavigationItem>
				<DBNavigationItem disabled>
					<a href="#">Navi-Item 3</a>
				</DBNavigationItem>
			</DBNavigation>
		</div>
	);
};

const NavigationComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBNavigation"
			subComponent={props.subComponent}
			variants={getVariants(
				defaultComponentVariants,
				getNavigation,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default NavigationComponent;
