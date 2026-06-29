import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TableComplex from '../examples/complex.example.lite';
import TableContent from '../examples/content.example.lite';
import TableDensity from '../examples/density.example.lite';
import TableDivider from '../examples/divider.example.lite';
import TableHorizontalAlignment from '../examples/horizontal-alignment.example.lite';
import TableInteractiveRow from '../examples/interactive-row.example.lite';
import TableMobileVariant from '../examples/mobile-variant.example.lite';
import TableShowCaption from '../examples/show-caption.example.lite';
import TableSize from '../examples/size.example.lite';
import TableStickyHeader from '../examples/sticky-header.example.lite';
import TableSubHeaderEmphasis from '../examples/sub-header-emphasis.example.lite';
import TableVariant from '../examples/variant.example.lite';
import TableVerticalAlignment from '../examples/vertical-alignment.example.lite';
import TableWidth from '../examples/width.example.lite';

export default function TableShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBTable"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<TableDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Content">
				<CardWrapperShowcase>
					<TableContent />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<TableSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<TableWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Divider">
				<CardWrapperShowcase>
					<TableDivider />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Sub Header Emphasis">
				<CardWrapperShowcase>
					<TableSubHeaderEmphasis />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Caption">
				<CardWrapperShowcase>
					<TableShowCaption />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Horizontal Alignment">
				<CardWrapperShowcase>
					<TableHorizontalAlignment />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Vertical Alignment">
				<CardWrapperShowcase>
					<TableVerticalAlignment />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<TableVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Mobile Variant">
				<CardWrapperShowcase>
					<TableMobileVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Sticky Header">
				<CardWrapperShowcase>
					<TableStickyHeader />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Interactive Row">
				<CardWrapperShowcase>
					<TableInteractiveRow />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Complex Example">
				<CardWrapperShowcase>
					<TableComplex />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
