import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TabsDensity from '../examples/density.example.lite';
import TabsExamples from '../examples/examples.example.lite';
import TabsOrientation from '../examples/orientation.example.lite';
import TabsOverflow from '../examples/overflow.example.lite';
import TabsWidth from '../examples/width.example.lite';

export default function TabsShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBTabs"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<TabsDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Orientation">
				<CardWrapperShowcase>
					<TabsOrientation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<TabsWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Overflow">
				<CardWrapperShowcase>
					<TabsOverflow />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples">
				<CardWrapperShowcase>
					<TabsExamples />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
