import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBAccordion from '../accordion.lite';
import { StorybookAccordionArgTypes } from './_accordion.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['Divider', 'Card'],
	storybookArgTypes: StorybookAccordionArgTypes
});

export default function AccordionVariant() {
	return (
		<Fragment>
			<DBInfotext size="small" semantic="informational" icon="none">
				Divider
			</DBInfotext>
			<DBAccordion variant="divider">
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
			<DBInfotext size="small" semantic="informational" icon="none">
				Card
			</DBInfotext>
			<DBAccordion variant="card">
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
