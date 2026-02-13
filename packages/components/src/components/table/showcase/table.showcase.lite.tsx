import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TableAlignment from '../examples/alignment.example.lite';
import TableContent from '../examples/content.example.lite';
import TableDensity from '../examples/density.example.lite';
import TableDivider from '../examples/divider.example.lite';
import TableRowStyle from '../examples/row-style.example.lite';
import TableShowCaption from '../examples/show-caption.example.lite';
import TableSize from '../examples/size.example.lite';
import TableSubHeaderEmphasis from '../examples/sub-header-emphasis.example.lite';
import TableVariant from '../examples/variant.example.lite';
import TableMobileVariant from '../examples/mobile-variant.example.lite';

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
			<LinkWrapperShowcase exampleName="Row Style">
				<CardWrapperShowcase>
					<TableRowStyle />
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
			<LinkWrapperShowcase exampleName="Alignment">
				<CardWrapperShowcase>
					<TableAlignment />
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
		</ContainerWrapperShowcase>
	);
}
