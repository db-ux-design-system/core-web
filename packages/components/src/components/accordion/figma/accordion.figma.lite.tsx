import { useMetadata } from '@builder.io/mitosis';
import { DBAccordion } from '../index';
import { FigmaAccordionProps, accordions } from './accordion.figma';

useMetadata({
	figma: accordions
});

export default function AccordionFigmaLite(props: FigmaAccordionProps) {
	return <DBAccordion>{props._children}</DBAccordion>;
}
