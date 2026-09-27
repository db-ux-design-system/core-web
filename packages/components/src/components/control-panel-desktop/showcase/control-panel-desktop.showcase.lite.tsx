import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ControlPanelDesktopDensity from '../examples/density.example.lite';
import ControlPanelDesktopExamples from '../examples/examples.example.lite';
import ControlPanelDesktopOrientation from '../examples/orientation.example.lite';
import ControlPanelDesktopWidth from '../examples/width.example.lite';

export default function ControlPanelDesktopShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBControlPanelDesktop"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<ControlPanelDesktopDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<ControlPanelDesktopWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Orientation">
				<CardWrapperShowcase>
					<ControlPanelDesktopOrientation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples">
				<CardWrapperShowcase>
					<ControlPanelDesktopExamples />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
