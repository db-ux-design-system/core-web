import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import DialogBackdrop from '../examples/backdrop.example.lite';
import DialogContainerSize from '../examples/container-size.example.lite';
import DialogDensity from '../examples/density.example.lite';
import DialogEvents from '../examples/events.example.lite';

export default function DialogShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBDialog"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<DialogDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Container Size">
				<CardWrapperShowcase>
					<DialogContainerSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Backdrop">
				<CardWrapperShowcase>
					<DialogBackdrop />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Areas">
				<CardWrapperShowcase>
					<DialogAreas />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Events">
				<CardWrapperShowcase>
					<DialogEvents />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
