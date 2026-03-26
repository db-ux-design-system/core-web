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
			<div style={{ width: '300px' }}>
				<DBNotification headline="Headline">
					(Default) Adaptive
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification semantic="neutral" headline="Headline">
					Neutral
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification semantic="critical" headline="Headline">
					Critical
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification semantic="informational" headline="Headline">
					Informational
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification semantic="successful" headline="Headline">
					Successful
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification semantic="warning" headline="Headline">
					Warning
				</DBNotification>
			</div>
		</Fragment>
	);
}
