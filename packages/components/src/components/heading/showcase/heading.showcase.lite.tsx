import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import HeadingAlignment from '../examples/alignment.example.lite';
import HeadingAsSize from '../examples/as-size.example.lite';
import HeadingAttributeForwarding from '../examples/attribute-forwarding.example.lite';
import HeadingChildrenAccessibility from '../examples/children-accessibility.example.lite';
import HeadingDensity from '../examples/density.example.lite';
import HeadingFontWeight from '../examples/font-weight.example.lite';
import HeadingParagraphSpacing from '../examples/paragraph-spacing.example.lite';
import HeadingSemanticLevels from '../examples/semantic-levels.example.lite';
import HeadingSizes from '../examples/sizes.example.lite';

export default function HeadingShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBHeading"
			isPatternhub={props.isPatternhub}>
			<div class="heading-showcase">
				<LinkWrapperShowcase exampleName="Semantic Levels">
					<CardWrapperShowcase>
						<HeadingSemanticLevels />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Visual Sizes">
					<CardWrapperShowcase>
						<HeadingSizes />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Semantic And Visual Decoupling">
					<CardWrapperShowcase>
						<HeadingAsSize />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Font Weight">
					<CardWrapperShowcase>
						<HeadingFontWeight />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Alignment">
					<CardWrapperShowcase>
						<HeadingAlignment />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Paragraph Spacing">
					<CardWrapperShowcase>
						<HeadingParagraphSpacing />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Density">
					<CardWrapperShowcase>
						<HeadingDensity />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Forwarded ID, Class, ARIA, Data And Style">
					<CardWrapperShowcase>
						<HeadingAttributeForwarding />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
				<LinkWrapperShowcase exampleName="Accessible Children">
					<CardWrapperShowcase>
						<HeadingChildrenAccessibility />
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
			</div>
		</ContainerWrapperShowcase>
	);
}
