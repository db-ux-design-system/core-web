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
			<div style={{ width: '300px' }}>
				<DBNotification closeable={false}>
					(Default) False
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification closeable={true}>True</DBNotification>
			</div>
		</Fragment>
	);
}
