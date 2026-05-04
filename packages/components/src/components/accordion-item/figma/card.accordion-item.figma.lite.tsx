import { useMetadata } from '@builder.io/mitosis';
import { DBAccordionItem } from '../index';
import {
	FigmaAccordionItemProps,
	cardAccordionItems
} from './accordion-item.figma';

useMetadata({
	figma: cardAccordionItems
});

export default function CardAccordionItemFigmaLite(
	props: FigmaAccordionItemProps
) {
	return (
		<DBAccordionItem
			headlinePlain={props.headlinePlain}
			disabled={props.disabled}
			defaultOpen={props.defaultOpen}>
			Content
		</DBAccordionItem>
	);
}
