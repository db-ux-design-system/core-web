import { Fragment, Show, useMetadata, useStore } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookNotificationArgTypes
});

/**
 Fixture for the cross-framework interaction e2e tests
 (see showcases/e2e/notification/notification-interaction.spec.ts).
 Reflects the onClose event into observable DOM: the notification is hidden
 and a marker appears, so the close handler can be verified without reading a
 JS callback.
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
			<div style={{ width: '300px' }}>
				<Show when={!state.closed}>
					<DBNotification
						data-testid="notification"
						closeable
						onClose={() => {
							state.handleClose();
						}}>
						Test
					</DBNotification>
				</Show>
				{/* Excluded from story generation: `<Show>` does not carry
				 * arbitrary JSX attributes into the compiled node the way a
				 * real element does, so `data-sb-ignore` has to sit on a
				 * wrapping element instead - this closed-state marker has no
				 * nested DBNotification, and the Storybook plugin's component
				 * lookup for this story would otherwise fail on it. */}
				<div data-sb-ignore="true">
					<Show when={state.closed}>
						<span data-testid="notification-closed">closed</span>
					</Show>
				</div>
			</div>
		</Fragment>
	);
}
