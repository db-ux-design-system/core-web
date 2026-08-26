import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import FooterComposition from '../examples/composition.example.lite';
import FooterCopyright from '../examples/copyright.example.lite';
import FooterOptionalAreas from '../examples/optional-areas.example.lite';
import FooterWidth from '../examples/width.example.lite';

export default function FooterShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBFooter"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Composition">
				<CardWrapperShowcase>
					<FooterComposition />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Optional Areas">
				<CardWrapperShowcase>
					<FooterOptionalAreas />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Copyright">
				<CardWrapperShowcase>
					<FooterCopyright />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<FooterWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
