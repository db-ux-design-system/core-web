// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	DBStack,
	DBInfotext,
	DBDivider
} from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/stack.json';
import type { DBStackProps } from '../../../../../output/react/src/components/stack/model';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';
import type { BaseComponentProps } from '../base-component-data';

const getStack = ({
	children,
	gap,
	alignment,
	wrap,
	variant,
	direction,
	justifyContent
}: DBStackProps) => (
	<DBStack>
		<DBInfotext size="small" icon="none" semantic="informational">
			{children}
		</DBInfotext>
		<DBStack
			className={
				(justifyContent ?? alignment)
					? 'stack-container stack-show-alignment'
					: 'stack-container'
			}
			gap={gap}
			alignment={alignment}
			wrap={wrap}
			variant={variant}
			direction={direction}
			justifyContent={justifyContent}>
			<span className="dummy-component">
				<a href="#">Content 1</a>
			</span>
			{variant === 'divider' && <DBDivider />}
			<span className="dummy-component">Content 2</span>
			{variant === 'divider' && <DBDivider />}
			<span className="dummy-component">Content 3</span>
		</DBStack>
	</DBStack>
);

const StackComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBStack"
			variants={getVariants(
				defaultComponentVariants,
				getStack,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default StackComponent;
