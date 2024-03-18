import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/accordion.json';
import type { DBAccordionProps } from '../../../../../output/react/src/components/accordion/model';
import { getVariants } from '../data';

const getAccordion = ({ behaviour, children }: DBAccordionProps) => (
	<>
		<DBInfotext size="small" variant="informational" icon="none">
			{children}
		</DBInfotext>
		<DBAccordion behaviour={behaviour}>
			<DBAccordionItem headline="Item 1" content="Content 1" />
			<DBAccordionItem headline="Item 2" content="Content 2" />
			<DBAccordionItem headline="Item 3" content="Content 3" />
		</DBAccordion>
	</>
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
