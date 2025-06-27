import { DBAccordionItem } from '../../../../../output/react/src';
import type { DBAccordionItemProps } from '../../../../../output/react/src/components/accordion-item/model';
import defaultComponentVariants from '../../../../shared/accordion-item.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

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

const AccordionItemComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBAccordionItem"
			isSubComponent={props.isSubComponent}
			componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getAccordionItem,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default AccordionItemComponent;
