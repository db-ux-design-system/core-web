import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TabsDensity from '../examples/density.example.lite';
import TabsDisabled from '../examples/disabled.example.lite';
import TabsExamples from '../examples/examples.example.lite';
import TabsIcons from '../examples/icons.example.lite';
import TabsOrientation from '../examples/orientation.example.lite';
import TabsOverflow from '../examples/overflow.example.lite';
import TabsSlotWithBadge from '../examples/slotWithBadge.example.lite';
import TabItemWidth from '../examples/tabItemWidth.example.lite';
import TabsTruncation from '../examples/truncation.example.lite';

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
					<TabItemWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Overflow">
				<CardWrapperShowcase>
					<TabsOverflow />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Truncation">
				<CardWrapperShowcase>
					<TabsTruncation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Icons">
				<CardWrapperShowcase>
					<TabsIcons />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<TabsDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Slot with Badge">
				<CardWrapperShowcase>
					<TabsSlotWithBadge />
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
