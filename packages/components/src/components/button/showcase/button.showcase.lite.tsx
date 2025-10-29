import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ButtonDensity from '../examples/density.example.lite';
import ButtonDisabled from '../examples/disabled.example.lite';
import ButtonNoText from '../examples/no-text.example.lite';
import ButtonShowIconLeading from '../examples/show-icon-leading.example.lite';
import ButtonShowIconTrailing from '../examples/show-icon-trailing.example.lite';
import ButtonSize from '../examples/size.example.lite';
import ButtonVariant from '../examples/variant.example.lite';
import ButtonWidth from '../examples/width.example.lite';

export default function ButtonShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBButton"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<ButtonDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<ButtonVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<ButtonDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<ButtonSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Leading">
				<CardWrapperShowcase>
					<ButtonShowIconLeading />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon Trailing">
				<CardWrapperShowcase>
					<ButtonShowIconTrailing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="No Text">
				<CardWrapperShowcase>
					<ButtonNoText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<ButtonWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
