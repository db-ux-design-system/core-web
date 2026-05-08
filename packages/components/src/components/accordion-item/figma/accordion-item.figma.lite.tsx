import { useMetadata } from '@builder.io/mitosis';
import { DBAccordionItem } from '../index';
import {
	FigmaAccordionItemProps,
	accordionItems
} from './accordion-item.figma';

useMetadata({
	figma: accordionItems
});

export default function AccordionItemFigmaLite(props: FigmaAccordionItemProps) {
	return (
		<DBAccordionItem
			headlinePlain={props.headlinePlain}
			disabled={props.disabled}
			defaultOpen={props.defaultOpen}>
			{props.content}
		</DBAccordionItem>
	);
}
