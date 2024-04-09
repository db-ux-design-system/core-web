import type { DBAccordionItemProps } from '@db-ui/react-components/src/components/accordion-item/model';
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

const getAccordionItem = ({
	children,
	disabled,
	open,
	title
}: DBAccordionItemProps & { open: boolean }) => {
	return (
		<DBAccordionItem title={title} disabled={disabled} defaultOpen={open}>
			{children}
		</DBAccordionItem>
	);
};

const AccordionComponent = () => {
	return (
		<div>
			<DefaultComponent
				title="DBAccordion"
				variants={[
					...getVariants(
						defaultComponentVariants,
						getAccordion
						// Placeholder_tags
					),
					...getVariants(
						defaultComponentVariantsItem,
						getAccordionItem
						// Placeholder_tags
					)
				]}></DefaultComponent>
		</div>
	);
};

export default AccordionComponent;
