import { useState } from 'react';
import { DBButton, DBDrawer } from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/drawer.json';
import type { DBDrawerProps } from '../../../../../output/react/src/components/drawer/model';
import DefaultComponent from '../index';
import { getVariants } from '../data';

type AdditionalDrawerProps = {
	openDrawer: string;
	setOpenDrawer: (id?: string) => void;
};
const getDrawer = ({
	id,
	width,
	rounded,
	noBackdrop,
	withCloseButton,
	spacing,
	openDrawer,
	setOpenDrawer,
	direction,
	children
}: DBDrawerProps & AdditionalDrawerProps) => (
	<div>
		<DBDrawer
			noBackdrop={noBackdrop}
			withCloseButton={withCloseButton}
			rounded={rounded}
			width={width}
			spacing={spacing}
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

const DrawerComponent = () => {
	const [openDrawer, setOpenDrawer] = useState<string | undefined>(undefined);
	return (
		<DefaultComponent
			title="DBDrawer"
			variants={getVariants(defaultComponentVariants, (props: any) =>
				getDrawer({
					...props,
					openDrawer,
					setOpenDrawer
				})
			)}></DefaultComponent>
	);
};

export default DrawerComponent;
