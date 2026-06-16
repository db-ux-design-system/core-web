import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import ShellContent from '../examples/content.example.lite';
import ShellPosition from '../examples/position.example.lite';

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
			<LinkWrapperShowcase exampleName="Content">
				<CardWrapperShowcase>
					<ShellContent />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
