import { DBAccordion } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/accordion.json';
import type { DBAccordionProps } from '../../../../../output/react/src/components/accordion/model';
import { getVariants } from '../data';

const getAccordion = ({ children }: DBAccordionProps) => (
	<DBAccordion>{children}</DBAccordion>
);

const AccordionComponent = () => {
	return (
		<DefaultComponent
			title="DBAccordion"
			variants={getVariants(
				defaultComponentVariants,
				getAccordion
			)}></DefaultComponent>
	);
};

export default AccordionComponent;
