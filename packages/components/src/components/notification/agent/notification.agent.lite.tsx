import { DBNotification } from '../index';

export default function Notification() {
	return (
		<>
			<h1>DBNotification Documentation Examples</h1>

			<h2>1. Default Notification</h2>
			<DBNotification>Default Notification</DBNotification>

			<h2>2. Semantic Variants</h2>
			<DBNotification semantic="adaptive">Adaptive</DBNotification>
			<DBNotification semantic="neutral">Neutral</DBNotification>
			<DBNotification semantic="critical">Critical</DBNotification>
			<DBNotification semantic="informational">
				Informational
			</DBNotification>
			<DBNotification semantic="warning">Warning</DBNotification>
			<DBNotification semantic="successful">Successful</DBNotification>

			<h2>3. Variants</h2>
			<DBNotification variant="docked">Docked</DBNotification>
			<DBNotification variant="standalone">Standalone</DBNotification>
			<DBNotification variant="overlay">Overlay</DBNotification>

			<h2>4. Closeable</h2>
			<DBNotification closeable>Closeable Notification</DBNotification>

			<h2>5. Headline</h2>
			<DBNotification headline="Important Update">
				Notification with Headline
			</DBNotification>

			<h2>6. Timestamp</h2>
			<DBNotification timestamp="10:30 AM">
				Notification with Timestamp
			</DBNotification>

			<h2>7. Icon Support</h2>
			<DBNotification icon="info">Notification with Icon</DBNotification>

			<h2>8. Custom Class</h2>
			<DBNotification className="my-custom-class">
				Custom Class
			</DBNotification>
		</>
	);
}
