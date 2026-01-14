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
			<DBNotification
				variant="overlay"
				showTimestamp={false}
				timestamp="10 min ago"
				headline="Headline">
				(Default) False
			</DBNotification>
			<DBNotification
				variant="overlay"
				showTimestamp={true}
				timestamp="10 min ago"
				headline="Headline">
				True
			</DBNotification>
		</Fragment>
	);
}
