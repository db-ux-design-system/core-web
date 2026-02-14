import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import CardBehavior from '../examples/behavior.example.lite';
import CardDensity from '../examples/density.example.lite';
import CardElevationLevel from '../examples/elevation-level.example.lite';
import CardExample from '../examples/example.example.lite';
import CardSpacing from '../examples/spacing.example.lite';

export default function CardShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBCard"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<CardDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Elevation Level">
				<CardWrapperShowcase>
					<CardElevationLevel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Spacing">
				<CardWrapperShowcase>
					<CardSpacing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Behavior">
				<CardWrapperShowcase>
					<CardBehavior />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example">
				<CardWrapperShowcase>
					<CardExample />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
