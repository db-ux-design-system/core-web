import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBAccordion from '../accordion.lite';
import { StorybookAccordionArgTypes } from './_accordion.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', 'Regular', 'Expressive'],
	storybookArgTypes: StorybookAccordionArgTypes
});

export default function AccordionDensity() {
	return (
		<Fragment>
			<DBAccordion data-density="functional">
				<DBAccordionItem headlinePlain="Item 1">
					Content 1
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Item 2">
					Content 2
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Item 3">
					Content 3
				</DBAccordionItem>
			</DBAccordion>
			<DBAccordion data-density="regular">
				<DBAccordionItem headlinePlain="Item 1">
					Content 1
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Item 2">
					Content 2
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Item 3">
					Content 3
				</DBAccordionItem>
			</DBAccordion>
			<DBAccordion data-density="expressive">
				<DBAccordionItem headlinePlain="Item 1">
					Content 1
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Item 2">
					Content 2
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Item 3">
					Content 3
				</DBAccordionItem>
			</DBAccordion>
		</Fragment>
	);
}
