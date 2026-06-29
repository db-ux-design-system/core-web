import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import CheckboxChecked from '../examples/checked.example.lite';
import CheckboxDensity from '../examples/density.example.lite';
import CheckboxDisabled from '../examples/disabled.example.lite';
import CheckboxExample from '../examples/example.example.lite';
import CheckboxIndeterminate from '../examples/indeterminate.example.lite';
import CheckboxRequired from '../examples/required.example.lite';
import CheckboxShowLabel from '../examples/show-label.example.lite';
import CheckboxShowRequiredAsterisk from '../examples/show-required-asterisk.example.lite';
import CheckboxSize from '../examples/size.example.lite';
import CheckboxValidation from '../examples/validation.example.lite';

export default function CheckboxShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBCheckbox"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<CheckboxDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<CheckboxDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Checked">
				<CardWrapperShowcase>
					<CheckboxChecked />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Indeterminate">
				<CardWrapperShowcase>
					<CheckboxIndeterminate />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Validation">
				<CardWrapperShowcase>
					<CheckboxValidation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<CheckboxSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Required">
				<CardWrapperShowcase>
					<CheckboxRequired />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<CheckboxShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example">
				<CardWrapperShowcase>
					<CheckboxExample />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Required Asterisk">
				<CardWrapperShowcase>
					<CheckboxShowRequiredAsterisk />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
