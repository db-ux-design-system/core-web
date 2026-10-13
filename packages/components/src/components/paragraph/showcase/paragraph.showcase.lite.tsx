import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ParagraphAttributeForwarding from '../examples/attribute-forwarding.example.lite';
import ParagraphSizes from '../examples/sizes.example.lite';

export default function ParagraphShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBParagraph"
			isPatternhub={props.isPatternhub}>
			<div class="paragraph-showcase" data-text-spacing="false">
				<LinkWrapperShowcase exampleName="Sizes">
					<CardWrapperShowcase>
						<ParagraphSizes />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Forwarded Attributes">
					<CardWrapperShowcase>
						<ParagraphAttributeForwarding />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
			</div>
		</ContainerWrapperShowcase>
	);
}
