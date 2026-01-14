import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Closeable',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationCloseable() {
	return (
		<Fragment>
			<DBNotification closeable={false} headline="Headline">
				(Default) False
			</DBNotification>
			<DBNotification closeable={true} headline="Headline">
				True
			</DBNotification>
		</Fragment>
	);
}
