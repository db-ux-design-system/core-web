import { useMetadata } from '@builder.io/mitosis';
import { DBAccordionItem } from '../../accordion-item/index';
import { DBAccordion } from '../index';
import { FigmaAccordionProps, accordions } from './accordion.figma';

useMetadata({
	figma: accordions
});

export default function AccordionFigmaLite(props: FigmaAccordionProps) {
	return (
		<DBAccordion behavior={props.behavior} variant={props.variant}>
			<DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
			<DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
		</DBAccordion>
	);
}
