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
			<ul>
				<DBAccordionItem
					data-density="functional"
					headlinePlain="Functional">
					Functional
				</DBAccordionItem>
			</ul>

			<ul>
				<DBAccordionItem
					data-density="regular"
					headlinePlain="(Default) Regular">
					(Default) Regular
				</DBAccordionItem>
			</ul>

			<ul>
				<DBAccordionItem
					data-density="expressive"
					headlinePlain="Expressive">
					Expressive
				</DBAccordionItem>
			</ul>
		</Fragment>
	);
}
