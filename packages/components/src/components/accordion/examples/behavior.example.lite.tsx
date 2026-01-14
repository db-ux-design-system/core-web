import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBAccordion from '../accordion.lite';
import { StorybookAccordionArgTypes } from './_accordion.arg.types';

useMetadata({
	storybookTitle: 'Behavior',
	storybookNames: ['Multiple', 'Single'],
	storybookArgTypes: StorybookAccordionArgTypes
});

export default function AccordionBehavior() {
	return (
		<Fragment>
			<DBAccordion behavior="multiple">
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
			<DBAccordion behavior="single">
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
