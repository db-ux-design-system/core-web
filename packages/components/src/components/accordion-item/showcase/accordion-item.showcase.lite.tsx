import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import AccordionItemDensity from '../examples/density.example.lite';
import AccordionItemDisabled from '../examples/disabled.example.lite';
import AccordionItemOpen from '../examples/open.example.lite';

export default function AccordionItemShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBAccordionItem"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<AccordionItemDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
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
		</ContainerWrapperShowcase>
	);
}
