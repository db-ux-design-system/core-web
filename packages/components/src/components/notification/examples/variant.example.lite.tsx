import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Docked', 'Standalone', 'Overlay'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationVariant() {
	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBNotification
					variant="docked"
					headline="Headline"
					icon="information_circle">
					(Default) Docked
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					variant="standalone"
					headline="Headline"
					icon="information_circle">
					Standalone
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					variant="overlay"
					headline="Headline"
					icon="information_circle">
					Overlay
				</DBNotification>
			</div>
		</Fragment>
	);
}
