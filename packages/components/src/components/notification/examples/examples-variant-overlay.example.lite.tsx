import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../../link/link.lite';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';
import { getBasePath } from './base-path';

useMetadata({
	storybookTitle: 'Examples - Variant:Overlay',
	storybookNames: [
		'Text',
		'Text & Icon',
		'Text & Preview Image',
		'Text & Headline',
		'Text & Textlink Inline',
		'Text & Textlink Block',
		'Text & Textlink Block & Timed',
		'Text & Headline & Textlink Inline & Closeable',
		'Text & Icon & Headline & Textlink Inline & Closeable',
		'Text & Timed',
		'Text & Timed & Closeable',
		'Text & Headline & Timed & Closeable',
		'Text & Icon & Headline & Timed & Closeable'
	],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationExamplesVariantOverlay() {
	return (
		<Fragment>
			<DBNotification variant="overlay" headline="Headline">
				Text
			</DBNotification>
			<DBNotification
				icon="information_circle"
				variant="overlay"
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
				variant="overlay"
				headline="Headline">
				Text & Preview Image
			</DBNotification>
			<DBNotification headline="Headline" variant="overlay">
				Text & Headline
			</DBNotification>
			<DBNotification
				link={<DBLink href="#">Textlink</DBLink>}
				variant="overlay"
				linkVariant="inline"
				headline="Headline">
				Text & Textlink Inline
			</DBNotification>
			<DBNotification
				link={<DBLink href="#">Textlink</DBLink>}
				variant="overlay"
				linkVariant="block"
				headline="Headline">
				Text & Textlink Block
			</DBNotification>
			<DBNotification
				link={<DBLink href="#">Textlink</DBLink>}
				variant="overlay"
				linkVariant="block"
				showTimestamp={true}
				timestamp="10 min ago"
				headline="Headline">
				Text & Textlink Block & Timed
			</DBNotification>
			<DBNotification
				headline="Headline"
				link={<DBLink href="#">Textlink</DBLink>}
				variant="overlay"
				closeable={true}
				linkVariant="inline">
				Text & Headline & Textlink Inline & Closeable
			</DBNotification>
			<DBNotification
				icon="information_circle"
				headline="Headline"
				link={<DBLink href="#">Textlink</DBLink>}
				variant="overlay"
				closeable={true}
				linkVariant="inline">
				Text & Icon & Headline & Textlink Inline & Closeable
			</DBNotification>
			<DBNotification
				variant="overlay"
				showTimestamp={true}
				timestamp="10 min ago"
				headline="Headline">
				Text & Timed
			</DBNotification>
			<DBNotification
				variant="overlay"
				closeable={true}
				showTimestamp={true}
				timestamp="10 min ago"
				headline="Headline">
				Text & Timed & Closeable
			</DBNotification>
			<DBNotification
				headline="Headline"
				variant="overlay"
				closeable={true}
				showTimestamp={true}
				timestamp="10 min ago">
				Text & Headline & Timed & Closeable
			</DBNotification>
			<DBNotification
				icon="information_circle"
				headline="Headline"
				variant="overlay"
				closeable={true}
				showTimestamp={true}
				timestamp="10 min ago">
				Text & Icon & Headline & Timed & Closeable
			</DBNotification>
		</Fragment>
	);
}
