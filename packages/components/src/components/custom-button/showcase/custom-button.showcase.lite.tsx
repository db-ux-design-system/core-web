import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import CustomButtonCheckbox from '../examples/checkbox.example.lite';
import CustomButtonDensity from '../examples/density.example.lite';
import CustomButtonDisabled from '../examples/disabled.example.lite';
import CustomButtonMultiLineText from '../examples/multi-line-text.example.lite';
import CustomButtonNoText from '../examples/no-text.example.lite';
import CustomButtonShowIconLeading from '../examples/show-icon-leading.example.lite';
import CustomButtonShowIconTrailing from '../examples/show-icon-trailing.example.lite';
import CustomButtonSize from '../examples/size.example.lite';
import CustomButtonVariant from '../examples/variant.example.lite';
import CustomButtonWidth from '../examples/width.example.lite';

export default function CustomButtonShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBCustomButton"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<CustomButtonDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<CustomButtonVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<CustomButtonDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<CustomButtonSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Leading">
				<CardWrapperShowcase>
					<CustomButtonShowIconLeading />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Trailing">
				<CardWrapperShowcase>
					<CustomButtonShowIconTrailing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="No Text">
				<CardWrapperShowcase>
					<CustomButtonNoText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<CustomButtonWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Multi-line Text With Line Breaks">
				<CardWrapperShowcase>
					<CustomButtonMultiLineText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Checkbox Example">
				<CardWrapperShowcase>
					<CustomButtonCheckbox />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
