import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ShellContent from '../examples/content.example.lite';
import ShellDeepNavigation from '../examples/deep-navigation.example.lite';
import ShellFlatIcon from '../examples/flat-icon.example.lite';
import ShellPosition from '../examples/position.example.lite';
import ShellSlots from '../examples/slots.example.lite';
import ShellSubNavigation from '../examples/sub-navigation.example.lite';
import ShellTreeNavigation from '../examples/tree-navigation.example.lite';

export default function ShellShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBShell"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Position">
				<CardWrapperShowcase>
					<ShellPosition />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Flat Icon">
				<CardWrapperShowcase>
					<ShellFlatIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Content">
				<CardWrapperShowcase>
					<ShellContent />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Sub Navigation">
				<CardWrapperShowcase>
					<ShellSubNavigation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Deep Navigation">
				<CardWrapperShowcase>
					<ShellDeepNavigation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Slots">
				<CardWrapperShowcase>
					<ShellSlots />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Tree Navigation">
				<CardWrapperShowcase>
					<ShellTreeNavigation />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
