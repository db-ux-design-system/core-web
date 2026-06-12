import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ControlPanelMobileDensity from '../examples/density.example.lite';
import ControlPanelMobileExamplesBottom from '../examples/examples-bottom.example.lite';
import ControlPanelMobileExamples from '../examples/examples.example.lite';
import ControlPanelMobilePosition from '../examples/position.example.lite';
import ControlPanelMobileVariant from '../examples/variant.example.lite';

export default function ControlPanelMobileShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBControlPanelMobile"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<ControlPanelMobileDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Position">
				<CardWrapperShowcase>
					<ControlPanelMobilePosition />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<ControlPanelMobileVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples">
				<CardWrapperShowcase>
					<ControlPanelMobileExamples />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples Bottom">
				<CardWrapperShowcase>
					<ControlPanelMobileExamplesBottom />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
