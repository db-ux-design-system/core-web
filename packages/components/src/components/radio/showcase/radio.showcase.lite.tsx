import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import RadioChecked from '../examples/checked.example.lite';
import RadioDensity from '../examples/density.example.lite';
import RadioDisabled from '../examples/disabled.example.lite';
import RadioRequired from '../examples/required.example.lite';
import RadioShowLabel from '../examples/show-label.example.lite';
import RadioShowRequiredAsterisk from '../examples/show-required-asterisk.example.lite';
import RadioSize from '../examples/size.example.lite';
import RadioValidation from '../examples/validation.example.lite';

export default function RadioShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBRadio"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<RadioDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<RadioDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Checked">
				<CardWrapperShowcase>
					<RadioChecked />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Validation">
				<CardWrapperShowcase>
					<RadioValidation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<RadioSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Required">
				<CardWrapperShowcase>
					<RadioRequired />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<RadioShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Required Asterisk">
				<CardWrapperShowcase>
					<RadioShowRequiredAsterisk />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
