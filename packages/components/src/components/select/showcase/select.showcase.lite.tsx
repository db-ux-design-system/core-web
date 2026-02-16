import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import SelectContent from '../examples/content.example.lite';
import SelectDensity from '../examples/density.example.lite';
import SelectDisabled from '../examples/disabled.example.lite';
import SelectExamplesFloatingLabel from '../examples/examples-floating-label.example.lite';
import SelectOptionGroups from '../examples/option-groups.example.lite';
import SelectRequired from '../examples/required.example.lite';
import SelectShowLabel from '../examples/show-label.example.lite';
import SelectShowMessage from '../examples/show-message.example.lite';
import SelectShowRequiredAsterisk from '../examples/show-required-asterisk.example.lite';
import SelectState from '../examples/state.example.lite';
import SelectValidation from '../examples/validation.example.lite';
import SelectVariant from '../examples/variant.example.lite';

export default function SelectShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBSelect"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<SelectDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<SelectVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<SelectShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Message">
				<CardWrapperShowcase>
					<SelectShowMessage />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="State">
				<CardWrapperShowcase>
					<SelectState />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Validation">
				<CardWrapperShowcase>
					<SelectValidation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<SelectDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Content">
				<CardWrapperShowcase>
					<SelectContent />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Required">
				<CardWrapperShowcase>
					<SelectRequired />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Required Asterisk">
				<CardWrapperShowcase>
					<SelectShowRequiredAsterisk />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Option Groups">
				<CardWrapperShowcase>
					<SelectOptionGroups />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples Floating Label">
				<CardWrapperShowcase>
					<SelectExamplesFloatingLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
