import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import IconDensity from '../examples/density.example.lite';
import IconVariant from '../examples/variant.example.lite';

export default function IconShowcase() {
	return (
		<ContainerWrapperShowcase title="DBIcon">
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<IconDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<IconVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
