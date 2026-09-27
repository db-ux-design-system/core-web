import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import DrawerHeaderExample from '../examples/example.example.lite';
import DrawerHeaderSlots from '../examples/slots.example.lite';

export default function DrawerHeaderShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBDrawerHeader"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Example">
				<CardWrapperShowcase>
					<DrawerHeaderExample />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Slots">
				<CardWrapperShowcase>
					<DrawerHeaderSlots />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
