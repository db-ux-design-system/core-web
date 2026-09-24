import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import AccordionItemDisabled from '../../accordion/examples/item-disabled.example.lite';
import AccordionItemEndSlot from '../../accordion/examples/item-end-slot.example.lite';
import AccordionItemOpen from '../../accordion/examples/item-open.example.lite';

export default function AccordionItemShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBAccordionItem"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<AccordionItemDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Open">
				<CardWrapperShowcase>
					<AccordionItemOpen />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="End slot">
				<CardWrapperShowcase>
					<AccordionItemEndSlot />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
