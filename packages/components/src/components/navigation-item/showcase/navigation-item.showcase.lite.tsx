import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import NavigationItemActive from '../examples/active.example.lite';
import NavigationItemDensity from '../examples/density.example.lite';
import NavigationItemDisabled from '../examples/disabled.example.lite';
import NavigationItemExpanded from '../examples/expanded.example.lite';
import NavigationItemShowIcon from '../examples/show-icon.example.lite';
import NavigationItemWidth from '../examples/width.example.lite';
import NavigationItemWrap from '../examples/wrap.example.lite';

export default function NavigationItemShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBNavigationItem"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<NavigationItemDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<NavigationItemDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Active">
				<CardWrapperShowcase>
					<NavigationItemActive />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Expanded">
				<CardWrapperShowcase>
					<NavigationItemExpanded />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon">
				<CardWrapperShowcase>
					<NavigationItemShowIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<NavigationItemWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Wrap">
				<CardWrapperShowcase>
					<NavigationItemWrap />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
