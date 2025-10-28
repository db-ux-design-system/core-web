import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ButtonDensity from '../examples/density.example.lite';
import ButtonVariant from '../examples/variant.example.lite';

export default function ButtonShowcase() {
	function getComponentPath() {
		return '02/button';
	}

	return (
		<ContainerWrapperShowcase title="DBButton">
			<LinkWrapperShowcase
				exampleName="Density"
				componentPath={getComponentPath()}>
				<CardWrapperShowcase>
					<ButtonDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase
				exampleName="Variant"
				componentPath={getComponentPath()}>
				<CardWrapperShowcase>
					<ButtonVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
