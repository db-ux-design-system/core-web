import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Show Timestamp',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationShowTimestamp() {
	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBNotification
					variant="overlay"
					showTimestamp={false}
					timestamp="10 min ago">
					(Default) False
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					variant="overlay"
					showTimestamp={true}
					timestamp="10 min ago">
					True
				</DBNotification>
			</div>
		</Fragment>
	);
}
