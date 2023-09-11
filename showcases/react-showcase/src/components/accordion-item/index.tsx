import { useState } from 'react';
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
}: DBAccordionItemProps) => {
	const [openAcc, setOpenAcc] = useState<boolean>(open ?? false);
	return (
		<DBAccordionItem
			title={title}
			disabled={disabled}
			open={openAcc}
			onToggle={setOpenAcc}>
			{children}
		</DBAccordionItem>
	);
};

const AccordionItemComponent = () => {
	return (
		<DefaultComponent
			title="DBAccordionItem"
			variants={getVariants(
				defaultComponentVariants,
				getAccordionItem
			)}></DefaultComponent>
	);
};

export default AccordionItemComponent;
