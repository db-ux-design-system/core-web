import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ControlPanelMobileExamplesBottom from '../examples/examples-bottom.example.lite';
import ControlPanelMobileExamples from '../examples/examples.example.lite';
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
		</ContainerWrapperShowcase>
	);
}
