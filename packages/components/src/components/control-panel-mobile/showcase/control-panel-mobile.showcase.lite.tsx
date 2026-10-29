import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ControlPanelMobileCustomHeader from '../examples/custom-header.example.lite';
import ControlPanelMobileExamplesBottom from '../examples/examples-bottom.example.lite';
import ControlPanelMobileExamples from '../examples/examples.example.lite';
import ControlPanelMobileInteraction from '../examples/interaction.example.lite';
import ControlPanelMobilePosition from '../examples/position.example.lite';

export default function ControlPanelMobileShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBControlPanelMobile"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Position">
				<CardWrapperShowcase>
					<ControlPanelMobilePosition />
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
			<LinkWrapperShowcase exampleName="Interaction">
				<CardWrapperShowcase>
					<ControlPanelMobileInteraction />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Custom Header">
				<CardWrapperShowcase>
					<ControlPanelMobileCustomHeader />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
