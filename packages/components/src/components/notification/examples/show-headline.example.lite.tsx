import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Show Headline',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationShowHeadline() {
	return (
		<Fragment>
			<DBNotification headline="Headline" showHeadline={true}>
				(Default) True
			</DBNotification>
			<DBNotification headline="Headline" showHeadline={false}>
				False
			</DBNotification>
		</Fragment>
	);
}
