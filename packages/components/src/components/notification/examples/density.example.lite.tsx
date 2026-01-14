import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['functional', 'regular (Default)', 'expressive'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationDensity() {
	return (
		<Fragment>
			<DBNotification
				data-density="functional"
				headline="Headline"
				icon="information_circle">
				functional
			</DBNotification>
			<DBNotification
				data-density="regular"
				headline="Headline"
				icon="information_circle">
				regular (Default)
			</DBNotification>
			<DBNotification
				data-density="expressive"
				headline="Headline"
				icon="information_circle">
				expressive
			</DBNotification>
		</Fragment>
	);
}
