import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import DrawerBackdrop from '../examples/backdrop.example.lite';
import DrawerDensity from '../examples/density.example.lite';
import DrawerDirection from '../examples/direction.example.lite';
import DrawerExample from '../examples/example.example.lite';
import DrawerRounded from '../examples/rounded.example.lite';
import DrawerSize from '../examples/size.example.lite';
import DrawerSpacing from '../examples/spacing.example.lite';

export default function DrawerShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBDrawer"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<DrawerDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<DrawerSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Rounded">
				<CardWrapperShowcase>
					<DrawerRounded />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Spacing">
				<CardWrapperShowcase>
					<DrawerSpacing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Backdrop">
				<CardWrapperShowcase>
					<DrawerBackdrop />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Direction">
				<CardWrapperShowcase>
					<DrawerDirection />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example">
				<CardWrapperShowcase>
					<DrawerExample />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
