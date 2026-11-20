import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ControlPanelFlatIconDensity from '../examples/density.example.lite';
import ControlPanelFlatIconNoText from '../examples/no-text.example.lite';

export default function ControlPanelFlatIconShowcase() {
	return (
		<ContainerWrapperShowcase title="DBControlPanel FlatIcon">
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<ControlPanelFlatIconDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="No Text">
				<CardWrapperShowcase>
					<ControlPanelFlatIconNoText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
