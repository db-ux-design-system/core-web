import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../accordion-item.lite';
import { StorybookAccordionItemArgTypes } from './_accordion-item.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookAccordionItemArgTypes
});

export default function AccordionItemDensity() {
	return (
		<Fragment>
			<DBAccordionItem
				data-density="functional"
				headlinePlain="Functional">
				Functional
			</DBAccordionItem>
			<DBAccordionItem
				data-density="regular"
				headlinePlain="(Default) Regular">
				(Default) Regular
			</DBAccordionItem>
			<DBAccordionItem
				data-density="expressive"
				headlinePlain="Expressive">
				Expressive
			</DBAccordionItem>
		</Fragment>
	);
}
