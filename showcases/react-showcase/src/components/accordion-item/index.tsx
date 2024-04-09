import { DBAccordionItem } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/accordion-item.json';
import type { DBAccordionItemProps } from '../../../../../output/react/src/components/accordion-item/model';
import { getVariants } from '../data';

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

const AccordionItemComponent = (props: {
	isSubComponent?: boolean;
	componentName?: string;
}) => {
	return (
		<DefaultComponent
			title="DBAccordionItem"
			// Patternhub:isSubComponent={props.isSubComponent}
			// patternhub:componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getAccordionItem
			)}></DefaultComponent>
	);
};

export default AccordionItemComponent;
