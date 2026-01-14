import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../../link/link.lite';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Link Variant',
	storybookNames: ['(Default) Block', 'Inline'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationLinkVariant() {
	return (
		<Fragment>
			<DBNotification
				link={<DBLink href="#">Textlink</DBLink>}
				linkVariant="block"
				headline="Headline">
				(Default) Block
			</DBNotification>
			<DBNotification
				link={<DBLink href="#">Textlink</DBLink>}
				linkVariant="inline"
				headline="Headline">
				Inline
			</DBNotification>
		</Fragment>
	);
}
