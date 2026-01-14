import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Show Icon',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationShowIcon() {
	return (
		<Fragment>
			<DBNotification icon="information_circle" showIcon={true}>
				(Default) True
			</DBNotification>
			<DBNotification icon="information_circle" showIcon={false}>
				False
			</DBNotification>
		</Fragment>
	);
}
