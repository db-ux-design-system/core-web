import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TextGroupAlignment from '../examples/alignment.example.lite';
import TextGroupComponents from '../examples/components.example.lite';
import TextGroupMixedContent from '../examples/mixed-content.example.lite';
import TextGroupNestedGroups from '../examples/nested-groups.example.lite';
import TextGroupTextSpacing from '../examples/text-spacing.example.lite';

export default function TextGroupShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBTextGroup"
			isPatternhub={props.isPatternhub}>
			<div class="text-group-showcase">
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
				<LinkWrapperShowcase exampleName="With Components">
					<CardWrapperShowcase>
						<TextGroupComponents />
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
			</div>
		</ContainerWrapperShowcase>
	);
}
