import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import AccordionBehavior from '../examples/behavior.example.lite';
import AccordionDensity from '../examples/density.example.lite';
import AccordionItemDisabled from '../examples/item-disabled.example.lite';
import AccordionItemEndSlot from '../examples/item-end-slot.example.lite';
import AccordionItemOpen from '../examples/item-open.example.lite';
import AccordionSize from '../examples/size.example.lite';
import AccordionVariant from '../examples/variant.example.lite';

export default function AccordionShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBAccordion"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<AccordionDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<AccordionVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Behavior">
				<CardWrapperShowcase>
					<AccordionBehavior />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<AccordionSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Item disabled">
				<CardWrapperShowcase>
					<AccordionItemDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Item open">
				<CardWrapperShowcase>
					<AccordionItemOpen />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Item end slot">
				<CardWrapperShowcase>
					<AccordionItemEndSlot />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
