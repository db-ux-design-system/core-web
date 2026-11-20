import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import NavigationDensity from '../examples/density.example.lite';
import NavigationInteraction from '../examples/interaction.example.lite';

export default function NavigationShowcase() {
	return (
		<ContainerWrapperShowcase title="DBNavigation">
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<NavigationDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Interaction">
				<CardWrapperShowcase>
					<NavigationInteraction />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
