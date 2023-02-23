import { DBSelect } from '../../../../../output/react/src';
import DefaultComponent, { DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [];

const SelectComponent = () => {
	return (
		<DefaultComponent
			title={'DBSelect'}
			variants={variants}></DefaultComponent>
	);
};

export default SelectComponent;
