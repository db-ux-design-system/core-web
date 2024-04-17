import { DBAccordionItem } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/accordion-item.json';
import type { DBAccordionItemProps } from '../../../../../output/react/src/components/accordion-item/model';
import { getVariants } from '../data';
import { type PatternhubComponentProps } from '../../../../shared/default-component-data';

const getAccordionItem = ({
	children,
	disabled,
	open,
	headlinePlain
}: DBAccordionItemProps & { open: boolean }) => {
	return (
		<DBAccordionItem
			headlinePlain={headlinePlain}
			disabled={disabled}
			defaultOpen={open}>
			{children}
		</DBAccordionItem>
	);
};

const AccordionItemComponent = (props: PatternhubComponentProps) => {
	return (
		<DefaultComponent
			title="DBAccordionItem"
			// Patternhub:isSubComponent={props.isSubComponent}
			// Patternhub:componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getAccordionItem
			)}></DefaultComponent>
	);
};

export default AccordionItemComponent;
