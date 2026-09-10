import { Fragment, Show, useMetadata, useStore } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookNotificationArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/notification/notification-interaction.spec.ts).
 * Reflects the onClose event into observable DOM: the notification is hidden
 * and a marker appears, so the close handler can be verified without reading a
 * JS callback.
 */
export default function NotificationInteraction() {
	const state = useStore({
		closed: false,
		handleClose() {
			state.closed = true;
		}
	});

	return (
		<Fragment>
			<Show when={!state.closed}>
				<div style={{ width: '300px' }}>
					<DBNotification
						data-testid="notification"
						closeable
						onClose={() => state.handleClose()}>
						Test
					</DBNotification>
				</div>
			</Show>
			<Show when={state.closed}>
				<span data-testid="notification-closed">closed</span>
			</Show>
		</Fragment>
	);
}
