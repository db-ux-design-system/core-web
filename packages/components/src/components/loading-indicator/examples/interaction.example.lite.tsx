import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLoadingIndicator from '../loading-indicator.lite';
import { StorybookLoadingIndicatorArgTypes } from './_loading-indicator.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookLoadingIndicatorArgTypes
});

/**
 Fixtures for the cross-framework interaction e2e tests
 (see showcases/e2e/loading-indicator/loading-indicator-interaction.spec.ts).

 Each instance is a self-contained scenario ported from the removed component
 test, addressable via its own `data-testid`. They reflect the behavior under
 test into observable DOM (the derived live-region role, the native
 `<progress>` value/max, the `--db-loading-indicator-percentage` custom
 property) so the spec can assert on rendered DOM instead of a JS callback.
 */
export default function LoadingIndicatorInteraction() {
	return (
		<Fragment>
			<div data-testid="default-loading">
				<DBLoadingIndicator>Test</DBLoadingIndicator>
			</div>
			<div data-testid="critical-loading">
				<DBLoadingIndicator state="critical">Test</DBLoadingIndicator>
			</div>
			<div data-testid="role-override-loading">
				<DBLoadingIndicator role="alert">Test</DBLoadingIndicator>
			</div>
			<div data-testid="id-loading">
				<DBLoadingIndicator id="my-loading">Test</DBLoadingIndicator>
			</div>
			<div data-testid="determinate-loading">
				<DBLoadingIndicator
					indeterminate={false}
					value={42}
					max={100}
					progressText="42 of 100">
					Test
				</DBLoadingIndicator>
			</div>
			<div data-testid="clamp-loading">
				<DBLoadingIndicator
					indeterminate={false}
					value={200}
					max={100}
					variant="bar">
					Test
				</DBLoadingIndicator>
			</div>
			<div data-testid="string-false-loading">
				<DBLoadingIndicator indeterminate="false" value={42} max={100}>
					Test
				</DBLoadingIndicator>
			</div>
		</Fragment>
	);
}
