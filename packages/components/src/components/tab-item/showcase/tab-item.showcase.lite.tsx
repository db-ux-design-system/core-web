import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TabItemBehavior from '../examples/behavior.example.lite';
import TabItemContentAlignmentFullWidth from '../examples/content-alignment-full-width.example.lite';
import TabItemDensity from '../examples/density.example.lite';
import TabItemShowIconLeading from '../examples/show-icon-leading.example.lite';
import TabItemShowIconTrailing from '../examples/show-icon-trailing.example.lite';
import TabItemStates from '../examples/states.example.lite';

export default function TabItemShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBTabItem"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<TabItemDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="States">
				<CardWrapperShowcase>
					<TabItemStates />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Leading">
				<CardWrapperShowcase>
					<TabItemShowIconLeading />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Trailing">
				<CardWrapperShowcase>
					<TabItemShowIconTrailing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Behavior">
				<CardWrapperShowcase>
					<TabItemBehavior />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Content Alignment Full Width">
				<CardWrapperShowcase>
					<TabItemContentAlignmentFullWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
