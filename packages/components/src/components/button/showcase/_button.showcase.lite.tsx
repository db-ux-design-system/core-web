import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ButtonDensity from './density.showcase.lite';
import ButtonVariant from './variant.showcase.lite';

export default function ButtonShowcase() {
	function getComponentPath() {
		return '02/button';
	}

	return (
		<ContainerWrapperShowcase title="DBButton">
			<LinkWrapperShowcase
				exampleName="Density"
				componentPath={getComponentPath()}>
				<ButtonDensity />
			</LinkWrapperShowcase>
			<LinkWrapperShowcase
				exampleName="Variant"
				componentPath={getComponentPath()}>
				<ButtonVariant />
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
