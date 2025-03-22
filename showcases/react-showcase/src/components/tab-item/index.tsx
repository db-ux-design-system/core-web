// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { DBTabItem, DBTabList } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/tab-item.json';
import type { DBTabItemProps } from '../../../../../output/react/src/components/tab-item/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getTab = ({
	children,
	active,
	noText,
	icon,
	iconAfter,
	disabled
}: DBTabItemProps) => (
	<DBTabList>
		<DBTabItem
			active={active}
			noText={noText}
			icon={icon}
			iconAfter={iconAfter}
			disabled={disabled}>
			{children}
		</DBTabItem>
	</DBTabList>
);

const TabItemComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTabItem"
			isSubComponent={props.isSubComponent}
			componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getTab,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default TabItemComponent;
