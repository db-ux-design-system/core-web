import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBAccordion from '../accordion.lite';
import { StorybookAccordionArgTypes } from './_accordion.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: [
		'3XS',
		'2XS',
		'XS',
		'SM',
		'(Default) MD',
		'LG',
		'XL',
		'2XL'
	],
	storybookArgTypes: StorybookAccordionArgTypes
});

export default function AccordionSize() {
	return (
		<Fragment>
			<DBInfotext size="small" semantic="informational" icon="none">
				Next Generation
			</DBInfotext>
			<DBAccordion size="3xs">
				<DBAccordionItem headlinePlain="3XS">Content</DBAccordionItem>
			</DBAccordion>
			<DBAccordion size="2xs">
				<DBAccordionItem headlinePlain="2XS">Content</DBAccordionItem>
			</DBAccordion>
			<DBAccordion size="xs">
				<DBAccordionItem headlinePlain="XS">Content</DBAccordionItem>
			</DBAccordion>
			<DBAccordion size="sm">
				<DBAccordionItem headlinePlain="SM">Content</DBAccordionItem>
			</DBAccordion>
			<DBAccordion size="md">
				<DBAccordionItem headlinePlain="MD">Content</DBAccordionItem>
			</DBAccordion>
			<DBAccordion size="lg">
				<DBAccordionItem headlinePlain="LG">Content</DBAccordionItem>
			</DBAccordion>
			<DBAccordion size="xl">
				<DBAccordionItem headlinePlain="XL">Content</DBAccordionItem>
			</DBAccordion>
			<DBAccordion size="2xl">
				<DBAccordionItem headlinePlain="2XL">Content</DBAccordionItem>
			</DBAccordion>
		</Fragment>
	);
}
