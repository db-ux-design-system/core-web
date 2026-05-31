import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import SwitchChecked from '../examples/checked.example.lite';
import SwitchDensity from '../examples/density.example.lite';
import SwitchDisabled from '../examples/disabled.example.lite';
import SwitchExamples from '../examples/examples.example.lite';
import SwitchRequired from '../examples/required.example.lite';
import SwitchShowLabel from '../examples/show-label.example.lite';
import SwitchShowMessage from '../examples/show-message.example.lite';
import SwitchShowRequiredAsterisk from '../examples/show-required-asterisk.example.lite';
import SwitchSize from '../examples/size.example.lite';
import SwitchValidation from '../examples/validation.example.lite';
import SwitchVariant from '../examples/variant.example.lite';
import SwitchVisualAid from '../examples/visual-aid.example.lite';

export default function SwitchShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBSwitch"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<SwitchDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Checked">
				<CardWrapperShowcase>
					<SwitchChecked />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<SwitchDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Visual Aid">
				<CardWrapperShowcase>
					<SwitchVisualAid />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<SwitchSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<SwitchVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<SwitchShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Required">
				<CardWrapperShowcase>
					<SwitchRequired />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Required Asterisk">
				<CardWrapperShowcase>
					<SwitchShowRequiredAsterisk />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Validation">
				<CardWrapperShowcase>
					<SwitchValidation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Message">
				<CardWrapperShowcase>
					<SwitchShowMessage />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples">
				<CardWrapperShowcase>
					<SwitchExamples />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
