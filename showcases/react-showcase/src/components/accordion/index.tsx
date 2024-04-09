import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/accordion.json';
import defaultComponentVariantsItem from '../../../../shared/accordion-item.json';
import type { DBAccordionProps } from '../../../../../output/react/src/components/accordion/model';
import { getVariants } from '../data';
// Patternhub:import AccordionItemComponent from '../accordion-item';

const getAccordion = ({ behaviour, children, variant }: DBAccordionProps) => (
	<>
		<DBInfotext size="small" variant="informational" icon="none">
			{children}
		</DBInfotext>
		<DBAccordion behaviour={behaviour} variant={variant}>
			<DBAccordionItem title="Item 1" content="Content 1" />
			<DBAccordionItem title="Item 2" content="Content 2" />
			<DBAccordionItem title="Item 3" content="Content 3" />
		</DBAccordion>
	</>
);

const AccordionComponent = () => {
	return (
		<div>
			<DefaultComponent
				title="DBAccordion"
				// Patternhub:subComponent={
				// patternhub:	<AccordionItemComponent
				// patternhub:		isSubComponent={true}
				// patternhub:		componentName="accordion-item"
				// patternhub:	/>
				// patternhub:}
				variants={getVariants(
					defaultComponentVariants,
					getAccordion
				)}></DefaultComponent>
		</div>
	);
};

export default AccordionComponent;
