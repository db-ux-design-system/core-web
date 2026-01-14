import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';
import { getBasePath } from './base-path';

useMetadata({
	storybookTitle: 'Visual',
	storybookNames: ['(Default) Icon', 'Image'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationVisual() {
	return (
		<Fragment>
			<DBNotification icon="information_circle" headline="Headline">
				(Default) Icon
			</DBNotification>
			<DBNotification
				image={
					<img
						src={`${getBasePath()}/assets/images/placeholder.jpg`}
						alt="this is a fancy placeholder"
					/>
				}
				headline="Headline">
				Image
			</DBNotification>
		</Fragment>
	);
}
