import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TextareaDensity from '../examples/density.example.lite';
import TextareaDisabled from '../examples/disabled.example.lite';
import TextareaExamplesFloatingLabel from '../examples/examples-floating-label.example.lite';
import TextareaFieldSizing from '../examples/field-sizing.example.lite';
import TextareaReadonly from '../examples/readonly.example.lite';
import TextareaRequired from '../examples/required.example.lite';
import TextareaRows from '../examples/rows.example.lite';
import TextareaShowLabel from '../examples/show-label.example.lite';
import TextareaShowMessage from '../examples/show-message.example.lite';
import TextareaShowRequiredAsterisk from '../examples/show-required-asterisk.example.lite';
import TextareaShowResizer from '../examples/show-resizer.example.lite';
import TextareaState from '../examples/state.example.lite';
import TextareaValidation from '../examples/validation.example.lite';
import TextareaVariant from '../examples/variant.example.lite';

export default function TextareaShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBTextarea"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<TextareaDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<TextareaVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<TextareaShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Message">
				<CardWrapperShowcase>
					<TextareaShowMessage />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="State">
				<CardWrapperShowcase>
					<TextareaState />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<TextareaDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Readonly">
				<CardWrapperShowcase>
					<TextareaReadonly />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Validation">
				<CardWrapperShowcase>
					<TextareaValidation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Required">
				<CardWrapperShowcase>
					<TextareaRequired />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Required Asterisk">
				<CardWrapperShowcase>
					<TextareaShowRequiredAsterisk />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Rows">
				<CardWrapperShowcase>
					<TextareaRows />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Resizer">
				<CardWrapperShowcase>
					<TextareaShowResizer />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Field Sizing">
				<CardWrapperShowcase>
					<TextareaFieldSizing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples Floating Label">
				<CardWrapperShowcase>
					<TextareaExamplesFloatingLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
