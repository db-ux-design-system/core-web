import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import InputDatalistTypeaheadExamples from '../examples/datalist-typeahead-examples.example.lite';
import InputDensity from '../examples/density.example.lite';
import InputDisabled from '../examples/disabled.example.lite';
import InputExampleFloatingLabel from '../examples/example-floating-label.example.lite';
import InputExampleLength from '../examples/example-length.example.lite';
import InputExampleTypesFloatingLabel from '../examples/example-types-floating-label.example.lite';
import InputExampleTypeswithminandmax from '../examples/example-types-with-min-and-max.example.lite';
import InputReadonly from '../examples/readonly.example.lite';
import InputRequired from '../examples/required.example.lite';
import InputShowIconLeadingTrailing from '../examples/show-icon-leading-trailing.example.lite';
import InputShowIconLeading from '../examples/show-icon-leading.example.lite';
import InputShowIconTrailing from '../examples/show-icon-trailing.example.lite';
import InputShowLabel from '../examples/show-label.example.lite';
import InputShowMessage from '../examples/show-message.example.lite';
import InputShowRequiredAsterisk from '../examples/show-required-asterisk.example.lite';
import InputState from '../examples/state.example.lite';
import InputValidation from '../examples/validation.example.lite';
import InputVariant from '../examples/variant.example.lite';

export default function InputShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBInput"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<InputDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<InputVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<InputShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Message">
				<CardWrapperShowcase>
					<InputShowMessage />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="State">
				<CardWrapperShowcase>
					<InputState />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<InputDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Readonly">
				<CardWrapperShowcase>
					<InputReadonly />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Validation">
				<CardWrapperShowcase>
					<InputValidation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Required">
				<CardWrapperShowcase>
					<InputRequired />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Required Asterisk">
				<CardWrapperShowcase>
					<InputShowRequiredAsterisk />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Leading">
				<CardWrapperShowcase>
					<InputShowIconLeading />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Leading + Trailing">
				<CardWrapperShowcase>
					<InputShowIconLeadingTrailing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Trailing">
				<CardWrapperShowcase>
					<InputShowIconTrailing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example - Length">
				<CardWrapperShowcase>
					<InputExampleLength />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example - Types with min and max">
				<CardWrapperShowcase>
					<InputExampleTypeswithminandmax />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example Floating Label">
				<CardWrapperShowcase>
					<InputExampleFloatingLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example - Types - Floating Label">
				<CardWrapperShowcase>
					<InputExampleTypesFloatingLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Datalist / Typeahead Examples">
				<CardWrapperShowcase>
					<InputDatalistTypeaheadExamples />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
