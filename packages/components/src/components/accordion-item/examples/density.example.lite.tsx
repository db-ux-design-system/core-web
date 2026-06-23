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
			<div>
				<DBAccordionItem
					data-density="functional"
					headlinePlain="Functional">
					Functional
				</DBAccordionItem>
			</div>

			<div>
				<DBAccordionItem
					data-density="regular"
					headlinePlain="(Default) Regular">
					(Default) Regular
				</DBAccordionItem>
			</div>

			<div>
				<DBAccordionItem
					data-density="expressive"
					headlinePlain="Expressive">
					Expressive
				</DBAccordionItem>
			</div>
		</Fragment>
	);
}
