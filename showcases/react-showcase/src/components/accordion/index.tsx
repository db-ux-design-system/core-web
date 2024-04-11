import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/accordion.json';
import type { DBAccordionProps } from '../../../../../output/react/src/components/accordion/model';
import { getVariants } from '../data';
// Patternhub:import AccordionItemComponent from '../accordion-item';

const getAccordion = ({ behaviour, children, variant }: DBAccordionProps) => (
	<>
		<DBInfotext size="small" variant="informational" icon="none">
			{children}
		</DBInfotext>
		<DBAccordion behaviour={behaviour} variant={variant}>
			<DBAccordionItem headline="Item 1" content="Content 1" />
			<DBAccordionItem headline="Item 2" content="Content 2" />
			<DBAccordionItem headline="Item 3" content="Content 3" />
		</DBAccordion>
	</>
);

const AccordionComponent = () => {
	return (
		<div>
			<DefaultComponent
				title="DBAccordion"
				// We use this only for patternhub to include an item inside the parent
				// Patternhub:subComponent={<AccordionItemComponent	isSubComponent componentName="accordion-item"/>}
				variants={getVariants(
					defaultComponentVariants,
					getAccordion
				)}></DefaultComponent>
		</div>
	);
};

export default AccordionComponent;
