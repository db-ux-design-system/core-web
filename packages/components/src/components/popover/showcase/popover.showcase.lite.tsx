import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import PopoverAnimation from '../examples/animation.example.lite';
import PopoverDelay from '../examples/delay.example.lite';
import PopoverDensity from '../examples/density.example.lite';
import PopoverGap from '../examples/gap.example.lite';
import PopoverPlacement from '../examples/placement.example.lite';
import PopoverSpacing from '../examples/spacing.example.lite';
import PopoverWidth from '../examples/width.example.lite';

export default function PopoverShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBPopover"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<PopoverDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Spacing">
				<CardWrapperShowcase>
					<PopoverSpacing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Placement">
				<CardWrapperShowcase>
					<PopoverPlacement />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Gap">
				<CardWrapperShowcase>
					<PopoverGap />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Animation">
				<CardWrapperShowcase>
					<PopoverAnimation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Delay">
				<CardWrapperShowcase>
					<PopoverDelay />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<PopoverWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
