import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TextGroupAlignment from '../examples/alignment.example.lite';
import ParagraphAttributeForwarding from '../examples/attribute-forwarding.example.lite';
import ParagraphFontWeight from '../examples/font-weight.example.lite';
import TextGroupMixedContent from '../examples/mixed-content.example.lite';
import TextGroupNestedGroups from '../examples/nested-groups.example.lite';
import ParagraphSizes from '../examples/sizes.example.lite';
import TextGroupTextSpacing from '../examples/text-spacing.example.lite';

export default function ParagraphShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBParagraph"
			isPatternhub={props.isPatternhub}>
			<div class="paragraph-showcase">
				<LinkWrapperShowcase exampleName="Sizes">
					<CardWrapperShowcase>
						<ParagraphSizes />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Font Weight">
					<CardWrapperShowcase>
						<ParagraphFontWeight />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Text Spacing">
					<CardWrapperShowcase>
						<TextGroupTextSpacing />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Logical Alignment">
					<CardWrapperShowcase>
						<TextGroupAlignment />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Mixed Content">
					<CardWrapperShowcase>
						<TextGroupMixedContent />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Nested Groups">
					<CardWrapperShowcase>
						<TextGroupNestedGroups />
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
