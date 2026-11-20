import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ControlPanelBrandContent from '../examples/content.example.lite';
import ControlPanelBrandDensity from '../examples/density.example.lite';
import ControlPanelBrandVariant from '../examples/variant.example.lite';

export default function ControlPanelBrandShowcase() {
	return (
		<ContainerWrapperShowcase title="DBControlPanelBrand">
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<ControlPanelBrandDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<ControlPanelBrandVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Content">
				<CardWrapperShowcase>
					<ControlPanelBrandContent />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
