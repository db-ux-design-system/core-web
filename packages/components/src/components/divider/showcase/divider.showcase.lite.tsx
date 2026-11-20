import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import DividerDensity from '../examples/density.example.lite';
import DividerEmphasis from '../examples/emphasis.example.lite';
import DividerVariant from '../examples/variant.example.lite';

export default function DividerShowcase() {
	return (
		<ContainerWrapperShowcase title="DBDivider">
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<DividerDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<DividerVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Emphasis">
				<CardWrapperShowcase>
					<DividerEmphasis />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
