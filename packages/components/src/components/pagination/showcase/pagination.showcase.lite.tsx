import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import PaginationCollapsing from '../examples/collapsing.example.lite';
import PaginationControlled from '../examples/controlled.example.lite';
import PaginationDensity from '../examples/density.example.lite';
import PaginationLink from '../examples/link.example.lite';
import PaginationPosition from '../examples/position.example.lite';
import PaginationSize from '../examples/size.example.lite';
import PaginationTruncation from '../examples/truncation.example.lite';

export default function PaginationShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBPagination"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<PaginationDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Controlled">
				<CardWrapperShowcase>
					<PaginationControlled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Position">
				<CardWrapperShowcase>
					<PaginationPosition />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Truncation">
				<CardWrapperShowcase>
					<PaginationTruncation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Link">
				<CardWrapperShowcase>
					<PaginationLink />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Collapsing">
				<CardWrapperShowcase>
					<PaginationCollapsing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<PaginationSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
