import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TextAlignment from '../examples/alignment.example.lite';
import TextAttributeForwarding from '../examples/attribute-forwarding.example.lite';
import TextGroup from '../examples/group.example.lite';
import TextInline from '../examples/inline.example.lite';
import TextSizes from '../examples/sizes.example.lite';
import TextVisuallyHidden from '../examples/visually-hidden.example.lite';

export default function TextShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBText"
			isPatternhub={props.isPatternhub}>
			<div class="text-showcase">
				<LinkWrapperShowcase exampleName="Sizes">
					<CardWrapperShowcase>
						<TextSizes />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Inline Text">
					<CardWrapperShowcase>
						<TextInline />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Paragraph Group">
					<CardWrapperShowcase>
						<TextGroup />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Logical Alignment">
					<CardWrapperShowcase>
						<TextAlignment />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Visually Hidden">
					<CardWrapperShowcase>
						<TextVisuallyHidden />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Forwarded Attributes">
					<CardWrapperShowcase>
						<TextAttributeForwarding />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
			</div>
		</ContainerWrapperShowcase>
	);
}
