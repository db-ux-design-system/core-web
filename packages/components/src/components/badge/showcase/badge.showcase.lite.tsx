import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import BadgeContent from '../examples/content.example.lite';
import BadgeDensity from '../examples/density.example.lite';
import BadgeEmphasis from '../examples/emphasis.example.lite';
import BadgeExamples from '../examples/examples.example.lite';
import BadgePlacement from '../examples/placement.example.lite';
import BadgeSemantic from '../examples/semantic.example.lite';
import BadgeSize from '../examples/size.example.lite';

export default function BadgeShowcase() {
	return (
		<ContainerWrapperShowcase title="DBBadge">
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<BadgeDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Emphasis">
				<CardWrapperShowcase>
					<BadgeEmphasis />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Semantic">
				<CardWrapperShowcase>
					<BadgeSemantic />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<BadgeSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Content">
				<CardWrapperShowcase>
					<BadgeContent />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Placement">
				<CardWrapperShowcase>
					<BadgePlacement />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples">
				<CardWrapperShowcase>
					<BadgeExamples />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
