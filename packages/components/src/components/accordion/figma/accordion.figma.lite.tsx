import { useMetadata } from '@builder.io/mitosis';
import { DBAccordion } from '../index';
import { FigmaAccordionProps, accordions } from './accordion.figma';

useMetadata({
	figma: accordions
});

export default function AccordionFigmaLite(props: FigmaAccordionProps) {
	return (
		<DBAccordion behavior={props.behavior} variant={props.variant}>
			{props.children}
		</DBAccordion>
	);
}
