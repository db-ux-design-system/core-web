import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import BreadcrumbCollapsed from '../examples/collapsed.example.lite';
import BreadcrumbIcons from '../examples/icons.example.lite';
import BreadcrumbSeparator from '../examples/separator.example.lite';
import BreadcrumbSize from '../examples/size.example.lite';

export default function BreadcrumbShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBBreadcrumb"
			isPatternhub={props.isPatternhub}>
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
			<LinkWrapperShowcase exampleName="Collapsed">
				<CardWrapperShowcase>
					<BreadcrumbCollapsed />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Icons">
				<CardWrapperShowcase>
					<BreadcrumbIcons />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
