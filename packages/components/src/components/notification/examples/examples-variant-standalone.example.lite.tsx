import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../../link/link.lite';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';
import { getBasePath } from './base-path';

useMetadata({
	storybookTitle: 'Examples - Variant:Standalone',
	storybookNames: [
		'Text',
		'Text & Icon',
		'Text & Preview Image',
		'Text & Headline',
		'Text & Textlink Block',
		'Text & Textlink Inline',
		'Text & Headline & Textlink Inline & Closeable',
		'Text & Icon & Headline & Textlink Inline & Closeable'
	],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationExamplesVariantStandalone() {
	return (
		<Fragment>
			<DBNotification variant="standalone" headline="Headline">
				Text
			</DBNotification>
			<DBNotification
				icon="information_circle"
				variant="standalone"
				headline="Headline">
				Text & Icon
			</DBNotification>
			<DBNotification
				image={
					<img
						src={`${getBasePath()}/assets/images/placeholder.jpg`}
						alt="this is a fancy placeholder"
					/>
				}
				variant="standalone"
				headline="Headline">
				Text & Preview Image
			</DBNotification>
			<DBNotification headline="Headline" variant="standalone">
				Text & Headline
			</DBNotification>
			<DBNotification
				link={<DBLink href="#">Textlink</DBLink>}
				variant="standalone"
				headline="Headline">
				Text & Textlink Block
			</DBNotification>
			<DBNotification
				link={<DBLink href="#">Textlink</DBLink>}
				linkVariant="inline"
				variant="standalone"
				headline="Headline">
				Text & Textlink Inline
			</DBNotification>
			<DBNotification
				headline="Headline"
				link={<DBLink href="#">Textlink</DBLink>}
				linkVariant="inline"
				variant="standalone"
				closeable={true}>
				Text & Headline & Textlink Inline & Closeable
			</DBNotification>
			<DBNotification
				icon="information_circle"
				headline="Headline"
				link={<DBLink href="#">Textlink</DBLink>}
				linkVariant="inline"
				variant="standalone"
				closeable={true}>
				Text & Icon & Headline & Textlink Inline & Closeable
			</DBNotification>
		</Fragment>
	);
}
