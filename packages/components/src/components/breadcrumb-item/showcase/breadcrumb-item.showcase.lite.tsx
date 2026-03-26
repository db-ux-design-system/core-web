import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import BreadcrumbItemBasic from '../examples/basic.example.lite';
import BreadcrumbItemDisabled from '../examples/disabled.example.lite';
import BreadcrumbItemWithIcon from '../examples/with-icon.example.lite';

export default function BreadcrumbItemShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBBreadcrumbItem"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Basic">
				<CardWrapperShowcase>
					<BreadcrumbItemBasic />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="With Icon">
				<CardWrapperShowcase>
					<BreadcrumbItemWithIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<BreadcrumbItemDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
