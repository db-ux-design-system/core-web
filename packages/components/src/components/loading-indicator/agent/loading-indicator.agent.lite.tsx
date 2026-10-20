import { DBLoadingIndicator } from '../index';

export default function LoadingIndicator() {
	return (
		<>
			<h1>DBLoadingIndicator Documentation Examples</h1>

			<h2>1. Default (indeterminate circular spinner)</h2>
			<DBLoadingIndicator>Loading</DBLoadingIndicator>

			<h2>2. Variants</h2>
			<DBLoadingIndicator variant="circular">Circular</DBLoadingIndicator>
			<DBLoadingIndicator variant="bar">Bar</DBLoadingIndicator>

			<h2>3. Orientation (circular)</h2>
			<DBLoadingIndicator variant="circular" orientation="horizontal">
				Horizontal
			</DBLoadingIndicator>
			<DBLoadingIndicator variant="circular" orientation="vertical">
				Vertical
			</DBLoadingIndicator>

			<h2>4. Sizes</h2>
			<DBLoadingIndicator size="small">Small</DBLoadingIndicator>
			<DBLoadingIndicator size="medium">Medium</DBLoadingIndicator>

			<h2>5. Determinate progress</h2>
			<DBLoadingIndicator
				indeterminate={false}
				value={42}
				max={100}
				progressText="42 of 100">
				Uploading
			</DBLoadingIndicator>

			<h2>6. States</h2>
			<DBLoadingIndicator state="inactive">Inactive</DBLoadingIndicator>
			<DBLoadingIndicator state="active">Active</DBLoadingIndicator>
			<DBLoadingIndicator state="successful">
				Successful
			</DBLoadingIndicator>
			<DBLoadingIndicator state="critical">Critical</DBLoadingIndicator>

			<h2>7. Overlay</h2>
			<DBLoadingIndicator overlay={true}>
				Loading overlay
			</DBLoadingIndicator>

			<h2>8. Delay before showing</h2>
			<DBLoadingIndicator delay="slow">Delayed (slow)</DBLoadingIndicator>
			<DBLoadingIndicator delay="fast">Delayed (fast)</DBLoadingIndicator>

			<h2>9. Show progress text</h2>
			<DBLoadingIndicator
				indeterminate={false}
				value={42}
				max={100}
				showProgressText={true}
				progressText="42 of 100">
				With progress text
			</DBLoadingIndicator>
		</>
	);
}
