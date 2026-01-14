import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Semantic',
	storybookNames: [
		'(Default) Adaptive',
		'Neutral',
		'Critical',
		'Informational',
		'Successful',
		'Warning'
	],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationSemantic() {
	return (
		<Fragment>
			<DBNotification headline="Headline">
				(Default) Adaptive
			</DBNotification>
			<DBNotification semantic="neutral" headline="Headline">
				Neutral
			</DBNotification>
			<DBNotification semantic="critical" headline="Headline">
				Critical
			</DBNotification>
			<DBNotification semantic="informational" headline="Headline">
				Informational
			</DBNotification>
			<DBNotification semantic="successful" headline="Headline">
				Successful
			</DBNotification>
			<DBNotification semantic="warning" headline="Headline">
				Warning
			</DBNotification>
		</Fragment>
	);
}
