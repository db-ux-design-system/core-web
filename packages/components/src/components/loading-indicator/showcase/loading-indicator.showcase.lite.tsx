import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import LoadingIndicatorButton from '../examples/button.example.lite';
import LoadingIndicatorDelay from '../examples/delay.example.lite';
import LoadingIndicatorDensity from '../examples/density.example.lite';
import LoadingIndicatorIndeterminate from '../examples/indeterminate.example.lite';
import LoadingIndicatorOverlay from '../examples/overlay.example.lite';
import LoadingIndicatorShowLabel from '../examples/show-label.example.lite';
import LoadingIndicatorShowProgressText from '../examples/show-progress-text.example.lite';
import LoadingIndicatorSize from '../examples/size.example.lite';
import LoadingIndicatorStateDeterminate from '../examples/state.determinate.example.lite';
import LoadingIndicatorState from '../examples/state.example.lite';
import LoadingIndicatorTimeout from '../examples/timeout.example.lite';

export default function LoadingIndicatorShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBLoadingIndicator"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<LoadingIndicatorDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Indeterminate">
				<CardWrapperShowcase>
					<LoadingIndicatorIndeterminate />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Size">
				<CardWrapperShowcase>
					<LoadingIndicatorSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="State">
				<CardWrapperShowcase>
					<LoadingIndicatorState />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="State: Determinate">
				<CardWrapperShowcase>
					<LoadingIndicatorStateDeterminate />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Label">
				<CardWrapperShowcase>
					<LoadingIndicatorShowLabel />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Show Progress Text">
				<CardWrapperShowcase>
					<LoadingIndicatorShowProgressText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Overlay">
				<CardWrapperShowcase>
					<LoadingIndicatorOverlay />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Delay">
				<CardWrapperShowcase>
					<LoadingIndicatorDelay />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Examples: Button">
				<CardWrapperShowcase>
					<LoadingIndicatorButton />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName="Example: Timeout">
				<CardWrapperShowcase>
					<LoadingIndicatorTimeout />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
