import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/accordion.json';
import type { DBAccordionProps } from '../../../../../output/react/src/components/accordion/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getAccordion = ({ behaviour, children, variant }: DBAccordionProps) => (
	<>
		<DBInfotext size="small" semantic="informational" icon="none">
			{children}
		</DBInfotext>
		<DBAccordion behaviour={behaviour} variant={variant}>
			<DBAccordionItem headlinePlain="Item 1" content="Content 1" />
			<DBAccordionItem headlinePlain="Item 2" content="Content 2" />
			<DBAccordionItem headlinePlain="Item 3" content="Content 3" />
		</DBAccordion>
	</>
);

const AccordionComponent = (props: BaseComponentProps) => {
	return (
		<div>
			<DefaultComponent
				title="DBAccordion"
				subComponent={props.subComponent}
				variants={getVariants(
					defaultComponentVariants,
					getAccordion,
					props.slotCode
				)}></DefaultComponent>
		</div>
	);
};

export default AccordionComponent;
