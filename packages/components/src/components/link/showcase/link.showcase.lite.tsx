import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import LinkContent from '../examples/content.example.lite';
import LinkDensity from '../examples/density.example.lite';
import LinkDisabled from '../examples/disabled.example.lite';
import LinkExamples from '../examples/examples.example.lite';
import LinkShowIcon from '../examples/show-icon.example.lite';
import LinkSize from '../examples/size.example.lite';
import LinkVariant from '../examples/variant.example.lite';
import LinkWrap from '../examples/wrap.example.lite';

export default function LinkShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBLink"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<LinkDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<LinkVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<LinkDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<LinkSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Content">
				<CardWrapperShowcase>
					<LinkContent />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon">
				<CardWrapperShowcase>
					<LinkShowIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Wrap">
				<CardWrapperShowcase>
					<LinkWrap />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples">
				<CardWrapperShowcase>
					<LinkExamples />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
