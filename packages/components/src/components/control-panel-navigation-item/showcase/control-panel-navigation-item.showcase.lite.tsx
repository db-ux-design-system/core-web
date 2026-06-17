import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ControlPanelNavigationItemActive from '../examples/active.example.lite';
import ControlPanelNavigationItemDensity from '../examples/density.example.lite';
import ControlPanelNavigationItemDisabled from '../examples/disabled.example.lite';
import ControlPanelNavigationItemExpanded from '../examples/expanded.example.lite';
import ControlPanelNavigationItemShowIcon from '../examples/show-icon.example.lite';

export default function ControlPanelNavigationItemShowcase(
	props: PatternhubProps
) {
	return (
		<ContainerWrapperShowcase
			title="DBControlPanelNavigationItem"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<ControlPanelNavigationItemDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<ControlPanelNavigationItemDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Active">
				<CardWrapperShowcase>
					<ControlPanelNavigationItemActive />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Expanded">
				<CardWrapperShowcase>
					<ControlPanelNavigationItemExpanded />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon">
				<CardWrapperShowcase>
					<ControlPanelNavigationItemShowIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
