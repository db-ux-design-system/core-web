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
			<DBNotification
				variant="docked"
				headline="Headline"
				icon="information_circle">
				(Default) Docked
			</DBNotification>
			<DBNotification
				variant="standalone"
				headline="Headline"
				icon="information_circle">
				Standalone
			</DBNotification>
			<DBNotification
				variant="overlay"
				headline="Headline"
				icon="information_circle">
				Overlay
			</DBNotification>
		</Fragment>
	);
}
