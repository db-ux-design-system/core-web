import { DBAccordionItem } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/accordion-item.json';
import type { DBAccordionItemProps } from '../../../../../output/react/src/components/accordion-item/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

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
