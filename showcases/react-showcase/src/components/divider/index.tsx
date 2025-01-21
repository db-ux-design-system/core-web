// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { DBDivider, DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/divider.json';
import { type DBDividerProps } from '../../../../../output/react/src/components/divider/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getDivider = ({ variant, emphasis, children, width }: DBDividerProps) => (
	<>
		<DBInfotext size="small" semantic="informational">
			{children}
		</DBInfotext>
		<DBDivider variant={variant} emphasis={emphasis} width={width} />
	</>
);

const DividerComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBDivider"
			variants={getVariants(
				defaultComponentVariants,
				getDivider,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default DividerComponent;
