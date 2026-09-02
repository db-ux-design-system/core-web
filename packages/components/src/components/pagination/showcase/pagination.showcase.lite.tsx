import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import PaginationControlled from '../examples/controlled.example.lite';
import PaginationDensity from '../examples/density.example.lite';
import PaginationSize from '../examples/size.example.lite';

export default function PaginationShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBPagination"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Controlled">
				<CardWrapperShowcase>
					<PaginationControlled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<PaginationSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<PaginationDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
