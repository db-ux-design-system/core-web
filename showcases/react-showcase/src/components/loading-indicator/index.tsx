import {
	DBButton,
	DBCard,
	DBInfotext,
	DBLoadingIndicator,
	DBLoadingIndicatorProps,
	LoadingIndicatorVariantType
} from '@components';
import defaultComponentVariants from '../../../../shared/loading-indicator.json';
import type { BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const indicators: {
	variant: LoadingIndicatorVariantType;
	progressText: string;
	progressTextState: string;
	label: string;
}[] = [
	{
		variant: 'inline',
		progressText: '0 of 42',
		progressTextState: '42 of 42',
		label: 'Inline'
	},
	{
		variant: 'onsite',
		progressText: '42%',
		progressTextState: '100%',
		label: 'Onsite'
	},
	{
		variant: 'progress-bar',
		progressText: '0 of 42',
		progressTextState: '42 of 42',
		label: 'Progress'
	}
];

const getLoadingIndicator = ({
	children,
	overlay,
	example,
	state,
	...props
}: DBLoadingIndicatorProps & { example: 'button' }) => {
	if (example === 'button') {
		return (
			<DBButton icon="x_placeholder">
				<DBLoadingIndicator
					progressText="0 of 42"
					overlay={overlay}
					state={state}
					{...props}>
					Loading
				</DBLoadingIndicator>
				{children}
			</DBButton>
		);
	}

	return (
		<div className="loading-indicator-grid">
			<DBInfotext size="small" semantic="informational" icon="none">
				{children}
			</DBInfotext>
			{indicators.map((indicator) => {
				const progressText =
					state === 'critical' || state === 'successful'
						? indicator.progressTextState
						: indicator.progressText;

				const loadingsElement = (
					<DBLoadingIndicator
						key={`${indicator.variant}-${children}`}
						variant={indicator.variant}
						progressText={progressText}
						overlay={overlay}
						state={state}
						{...props}>
						{indicator.label}
					</DBLoadingIndicator>
				);

				if (overlay) {
					return (
						<DBCard key={`${indicator.variant}-${children}-card`}>
							{loadingsElement}
							<p>Content 1</p>
							<p>Content 2</p>
							<p>Content 3</p>
						</DBCard>
					);
				}

				return loadingsElement;
			})}
		</div>
	);
};

const LoadingIndicatorComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBLoadingIndicator"
			variants={getVariants(
				defaultComponentVariants,
				getLoadingIndicator
			)}></DefaultComponent>
	);
};

export default LoadingIndicatorComponent;
