import { useState } from 'react';
import { DBButton, DBDrawer } from '../../../../../output/react/src';
import type { DBDrawerProps } from '../../../../../output/react/src/components/drawer/model';
import defaultComponentVariants from '../../../../shared/drawer.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

type AdditionalDrawerProperties = {
	openDrawer: string;
	setOpenDrawer: (id?: string) => void;
};
const getDrawer = ({
	id,
	width,
	rounded,
	spacing,
	openDrawer,
	setOpenDrawer,
	direction,
	children,
	backdrop,
	variant
}: DBDrawerProps & AdditionalDrawerProperties) => (
	<div>
		<DBButton
			onClick={() => {
				setOpenDrawer(id);
			}}>
			Open: {children}
		</DBButton>
		<DBDrawer
			rounded={rounded}
			width={width}
			spacing={spacing}
			backdrop={backdrop}
			direction={direction}
			variant={variant}
			open={openDrawer === id}
			onClose={() => {
				setOpenDrawer(undefined);
			}}>
			{children}
		</DBDrawer>
	</div>
);

const DrawerComponent = (props: BaseComponentProps) => {
	const [openDrawer, setOpenDrawer] = useState<string | undefined>(undefined);
	return (
		<DefaultComponent
			title="DBDrawer"
			variants={getVariants(
				defaultComponentVariants,
				(properties: any) =>
					getDrawer({
						...properties,
						openDrawer,
						setOpenDrawer
					}),
				props.slotCode
			)}></DefaultComponent>
	);
};

export default DrawerComponent;
