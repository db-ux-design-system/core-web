import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import NotificationCloseable from '../examples/closeable.example.lite';
import NotificationDensity from '../examples/density.example.lite';
import NotificationExamplesVariantDocked from '../examples/examples-variant-docked.example.lite';
import NotificationExamplesVariantOverlay from '../examples/examples-variant-overlay.example.lite';
import NotificationExamplesVariantStandalone from '../examples/examples-variant-standalone.example.lite';
import NotificationLinkVariant from '../examples/link-variant.example.lite';
import NotificationSemantic from '../examples/semantic.example.lite';
import NotificationShowHeadline from '../examples/show-headline.example.lite';
import NotificationShowIcon from '../examples/show-icon.example.lite';
import NotificationShowTimestamp from '../examples/show-timestamp.example.lite';
import NotificationVariant from '../examples/variant.example.lite';
import NotificationVisual from '../examples/visual.example.lite';

export default function NotificationShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBNotification"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<NotificationDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Variant">
				<CardWrapperShowcase>
					<NotificationVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Semantic">
				<CardWrapperShowcase>
					<NotificationSemantic />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Closeable">
				<CardWrapperShowcase>
					<NotificationCloseable />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Visual">
				<CardWrapperShowcase>
					<NotificationVisual />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Icon">
				<CardWrapperShowcase>
					<NotificationShowIcon />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Link Variant">
				<CardWrapperShowcase>
					<NotificationLinkVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Headline">
				<CardWrapperShowcase>
					<NotificationShowHeadline />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Timestamp">
				<CardWrapperShowcase>
					<NotificationShowTimestamp />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples - Variant:Docked">
				<CardWrapperShowcase>
					<NotificationExamplesVariantDocked />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples - Variant:Standalone">
				<CardWrapperShowcase>
					<NotificationExamplesVariantStandalone />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples - Variant:Overlay">
				<CardWrapperShowcase>
					<NotificationExamplesVariantOverlay />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
