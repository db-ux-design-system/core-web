import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import FooterShowCopyright from '../examples/show-copyright.example.lite';
import FooterShowMain from '../examples/show-main.example.lite';
import FooterShowMeta from '../examples/show-meta.example.lite';
import FooterWidth from '../examples/width.example.lite';

export default function FooterShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBFooter"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Width">
				<CardWrapperShowcase>
					<FooterWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Copyright">
				<CardWrapperShowcase>
					<FooterShowCopyright />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Main">
				<CardWrapperShowcase>
					<FooterShowMain />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Meta">
				<CardWrapperShowcase>
					<FooterShowMeta />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
