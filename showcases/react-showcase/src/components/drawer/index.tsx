import { useState } from 'react';
import { DBButton, DBDrawer } from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/drawer.json';
import type { DBDrawerProps } from '../../../../../output/react/src/components/drawer/model';
import DefaultComponent from '../default-component';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

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
	backdrop
}: DBDrawerProps & AdditionalDrawerProperties) => (
	<div>
		<DBDrawer
			rounded={rounded}
			width={width}
			spacing={spacing}
			backdrop={backdrop}
			direction={direction}
			open={openDrawer === id}
			onClose={() => {
				setOpenDrawer(undefined);
			}}>
			{children}
		</DBDrawer>
		<DBButton
			onClick={() => {
				setOpenDrawer(id);
			}}>
			Open: {children}
		</DBButton>
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
