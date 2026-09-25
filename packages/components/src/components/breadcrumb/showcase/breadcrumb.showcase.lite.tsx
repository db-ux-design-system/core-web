import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import BreadcrumbApi from '../examples/api.example.lite';
import BreadcrumbDensity from '../examples/density.example.lite';
import BreadcrumbDisabled from '../examples/disabled.example.lite';
import BreadcrumbLength from '../examples/length.example.lite';
import BreadcrumbNoText from '../examples/no-text.example.lite';
import BreadcrumbSeparator from '../examples/separator.example.lite';
import BreadcrumbSize from '../examples/size.example.lite';
import BreadcrumbTruncation from '../examples/truncation.example.lite';

export default function BreadcrumbShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBBreadcrumb"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<BreadcrumbDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<BreadcrumbSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Separator">
				<CardWrapperShowcase>
					<BreadcrumbSeparator />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Length">
				<CardWrapperShowcase>
					<BreadcrumbLength />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="API">
				<CardWrapperShowcase>
					<BreadcrumbApi />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<BreadcrumbDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="No text">
				<CardWrapperShowcase>
					<BreadcrumbNoText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Truncation">
				<CardWrapperShowcase>
					<BreadcrumbTruncation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
