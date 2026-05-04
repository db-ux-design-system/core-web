import { useMetadata } from '@builder.io/mitosis';
import { DBAccordionItem } from '../index';
import {
	FigmaAccordionItemProps,
	dividerAccordionItems
} from './accordion-item.figma';

useMetadata({
	figma: dividerAccordionItems
});

export default function DividerAccordionItemFigmaLite(
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
