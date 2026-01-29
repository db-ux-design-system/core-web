import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import TagBehavior from '../examples/behavior.example.lite';
import TagChecked from '../examples/checked.example.lite';
import TagDensity from '../examples/density.example.lite';
import TagDisabled from '../examples/disabled.example.lite';
import TagEmphasis from '../examples/emphasis.example.lite';
import TagExampleStrong from '../examples/example-strong.example.lite';
import TagNoText from '../examples/no-text.example.lite';
import TagOverflow from '../examples/overflow.example.lite';
import TagSemantic from '../examples/semantic.example.lite';
import TagShowCheckState from '../examples/show-check-state.example.lite';
import TagShowIcon from '../examples/show-icon.example.lite';
import TagShowSlot from '../examples/show-slot.example.lite';

export default function TagShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBTag"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<TagDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Emphasis">
				<CardWrapperShowcase>
					<TagEmphasis />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Semantic">
				<CardWrapperShowcase>
					<TagSemantic />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Behavior">
				<CardWrapperShowcase>
					<TagBehavior />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Checked">
				<CardWrapperShowcase>
					<TagChecked />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Disabled">
				<CardWrapperShowcase>
					<TagDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon">
				<CardWrapperShowcase>
					<TagShowIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="No Text">
				<CardWrapperShowcase>
					<TagNoText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Slot">
				<CardWrapperShowcase>
					<TagShowSlot />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Check State">
				<CardWrapperShowcase>
					<TagShowCheckState />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Overflow">
				<CardWrapperShowcase>
					<TagOverflow />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example Strong">
				<CardWrapperShowcase>
					<TagExampleStrong />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
