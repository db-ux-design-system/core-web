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
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					linkVariant="block">
					(Default) Block
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					linkVariant="inline">
					Inline
				</DBNotification>
			</div>
		</Fragment>
	);
}
