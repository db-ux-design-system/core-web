import { DBDrawer } from '../../../../../output/react/src';
import DefaultComponent, { DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [];

const DrawerComponent = () => {
	return (
		<DefaultComponent
			title={'DBDrawer'}
			variants={variants}></DefaultComponent>
	);
};

export default DrawerComponent;
