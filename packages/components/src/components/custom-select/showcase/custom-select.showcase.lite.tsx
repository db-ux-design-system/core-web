import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import CustomSelectDensity from '../examples/density.example.lite';
import CustomSelectDisabled from '../examples/disabled.example.lite';
import CustomSelectDropdownWidth from '../examples/dropdown-width.example.lite';
import CustomSelectExampleOtherConfiguration from '../examples/example-other-configuration.example.lite';
import CustomSelectExampletags from '../examples/example-tags.example.lite';
import CustomSelectExamplesFloatinglabel from '../examples/examples-floating-label.example.lite';
import CustomSelectExamplesMultiple from '../examples/examples-multiple.example.lite';
import CustomSelectExamplesSingle from '../examples/examples-single.example.lite';
import CustomSelectFormFieldWidth from '../examples/form-field-width.example.lite';
import CustomSelectMultiple from '../examples/multiple.example.lite';
import CustomSelectPlacement from '../examples/placement.example.lite';
import CustomSelectRequired from '../examples/required.example.lite';
import CustomSelectSelectedtype from '../examples/selected-type.example.lite';
import CustomSelectShowClearSelection from '../examples/show-clear-selection.example.lite';
import CustomSelectShowIcon from '../examples/show-icon.example.lite';
import CustomSelectShowLabel from '../examples/show-label.example.lite';
import CustomSelectShowLoading from '../examples/show-loading.example.lite';
import CustomSelectShowMessage from '../examples/show-message.example.lite';
import CustomSelectShowNoResult from '../examples/show-no-result.example.lite';
import CustomSelectShowRequiredAsterisk from '../examples/show-required-asterisk.example.lite';
import CustomSelectShowSearch from '../examples/show-search.example.lite';
import CustomSelectShowSelectAll from '../examples/show-select-all.example.lite';
import CustomSelectValidation from '../examples/validation.example.lite';
import CustomSelectVariant from '../examples/variant.example.lite';

export default function CustomSelectShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBCustomSelect"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<CustomSelectDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Multiple">
				<CardWrapperShowcase>
					<CustomSelectMultiple />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<CustomSelectVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<CustomSelectShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Message">
				<CardWrapperShowcase>
					<CustomSelectShowMessage />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon">
				<CardWrapperShowcase>
					<CustomSelectShowIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Validation">
				<CardWrapperShowcase>
					<CustomSelectValidation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Required">
				<CardWrapperShowcase>
					<CustomSelectRequired />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Required Asterisk">
				<CardWrapperShowcase>
					<CustomSelectShowRequiredAsterisk />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<CustomSelectDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Form Field Width">
				<CardWrapperShowcase>
					<CustomSelectFormFieldWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Dropdown Width">
				<CardWrapperShowcase>
					<CustomSelectDropdownWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Placement">
				<CardWrapperShowcase>
					<CustomSelectPlacement />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Selected type">
				<CardWrapperShowcase>
					<CustomSelectSelectedtype />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show No Result">
				<CardWrapperShowcase>
					<CustomSelectShowNoResult />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Loading">
				<CardWrapperShowcase>
					<CustomSelectShowLoading />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Search">
				<CardWrapperShowcase>
					<CustomSelectShowSearch />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Select All">
				<CardWrapperShowcase>
					<CustomSelectShowSelectAll />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Clear Selection">
				<CardWrapperShowcase>
					<CustomSelectShowClearSelection />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples Single">
				<CardWrapperShowcase>
					<CustomSelectExamplesSingle />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples Multiple">
				<CardWrapperShowcase>
					<CustomSelectExamplesMultiple />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example tags">
				<CardWrapperShowcase>
					<CustomSelectExampletags />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example: Other configuration">
				<CardWrapperShowcase>
					<CustomSelectExampleOtherConfiguration />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples Floating label">
				<CardWrapperShowcase>
					<CustomSelectExamplesFloatinglabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
