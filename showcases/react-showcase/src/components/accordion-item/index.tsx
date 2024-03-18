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
	headline
}: DBAccordionItemProps & { open: boolean }) => {
	return (
		<DBAccordionItem
			headline={headline}
			disabled={disabled}
			defaultOpen={open}>
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
