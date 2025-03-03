// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { DBNavigationItem, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/navigation-item.json';
import type { DBNavigationItemProps } from '../../../../../output/react/src/components/navigation-item/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getNavigationItem = ({
	children,
	icon,
	disabled,
	active,
	width,
	areaPopup,
	showIcon
}: DBNavigationItemProps & { areaPopup: boolean }) => (
	<ul className="nav-item-list">
		<DBNavigationItem
			icon={icon}
			disabled={disabled}
			active={active}
			width={width}
			onClick={() => {
				// eslint-disable-next-line no-alert
				alert(children.toString());
			}}
			showIcon={showIcon}
			subNavigation={
				areaPopup && (
					<ul>
						<DBNavigationItem>
							<a href="#">Test1</a>
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Test2</a>
						</DBNavigationItem>
					</ul>
				)
			}>
			{areaPopup ? children : <a href="#">{children}</a>}
		</DBNavigationItem>
	</ul>
);

const NavigationItemComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBNavigationItem"
			isSubComponent={props.isSubComponent}
			componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getNavigationItem,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default NavigationItemComponent;
