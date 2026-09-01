import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import StackAlignmentColumn from '../examples/alignment-column.example.lite';
import StackAlignmentRow from '../examples/alignment-row.example.lite';
import StackDensity from '../examples/density.example.lite';
import StackDirection from '../examples/direction.example.lite';
import StackGap from '../examples/gap.example.lite';
import StackJustifyContentColumn from '../examples/justify-content-column.example.lite';
import StackJustifyContentRow from '../examples/justify-content-row.example.lite';
import StackVariant from '../examples/variant.example.lite';
import StackWrap from '../examples/wrap.example.lite';

export default function StackShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBStack"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<StackDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<StackVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Gap">
				<CardWrapperShowcase>
					<StackGap />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Direction">
				<CardWrapperShowcase>
					<StackDirection />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Wrap">
				<CardWrapperShowcase>
					<StackWrap />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Alignment Column">
				<CardWrapperShowcase>
					<StackAlignmentColumn />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Alignment Row">
				<CardWrapperShowcase>
					<StackAlignmentRow />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Justify Content Column">
				<CardWrapperShowcase>
					<StackJustifyContentColumn />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Justify Content Row">
				<CardWrapperShowcase>
					<StackJustifyContentRow />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
