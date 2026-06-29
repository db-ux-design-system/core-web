import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TooltipAnimation from '../examples/animation.example.lite';
import TooltipDelay from '../examples/delay.example.lite';
import TooltipDensity from '../examples/density.example.lite';
import TooltipEmphasis from '../examples/emphasis.example.lite';
import TooltipPlacement from '../examples/placement.example.lite';
import TooltipShowArrow from '../examples/show-arrow.example.lite';
import TooltipWidth from '../examples/width.example.lite';

export default function TooltipShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBTooltip"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<TooltipDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Arrow">
				<CardWrapperShowcase>
					<TooltipShowArrow />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Emphasis">
				<CardWrapperShowcase>
					<TooltipEmphasis />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Placement">
				<CardWrapperShowcase>
					<TooltipPlacement />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<TooltipWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Animation">
				<CardWrapperShowcase>
					<TooltipAnimation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Delay">
				<CardWrapperShowcase>
					<TooltipDelay />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
