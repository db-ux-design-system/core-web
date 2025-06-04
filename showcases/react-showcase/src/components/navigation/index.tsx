import {
	DBNavigation,
	DBNavigationItem,
	DBInfotext,
	DBNavigationItemGroup
} from '@components';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/navigation.json';
import type { DBNavigationProps } from '@components/src/components/navigation/model';
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
				<DBNavigationItemGroup groupTitle="Navi-Item 1">
					<DBNavigationItemGroup groupTitle="Sub-Navi-Item 1">
						<DBNavigationItem>
							<a href="#" aria-current="page">
								Sub-Sub-Navi-Item 1
							</a>
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</DBNavigationItem>
					</DBNavigationItemGroup>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</DBNavigationItemGroup>
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
