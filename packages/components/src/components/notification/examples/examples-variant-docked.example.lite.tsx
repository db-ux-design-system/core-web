import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../../link/link.lite';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';
import { getBasePath } from './base-path';

useMetadata({
	storybookTitle: 'Examples - Variant:Docked',
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

export default function NotificationExamplesVariantDocked() {
	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBNotification headline="Headline">Text</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification icon="information_circle" headline="Headline">
					Text & Icon
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					image={
						<img
							src={`${getBasePath()}/assets/images/placeholder.jpg`}
							alt="this is a fancy placeholder"
						/>
					}
					headline="Headline">
					Text & Preview Image
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification headline="Headline">
					Text & Headline
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					headline="Headline">
					Text & Textlink Block
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					linkVariant="inline"
					headline="Headline">
					Text & Textlink Inline
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					headline="Headline"
					link={<DBLink href="#">Textlink</DBLink>}
					linkVariant="inline"
					closeable={true}>
					Text & Headline & Textlink Inline & Closeable
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					icon="information_circle"
					headline="Headline"
					link={<DBLink href="#">Textlink</DBLink>}
					linkVariant="inline"
					closeable={true}>
					Text & Icon & Headline & Textlink Inline & Closeable
				</DBNotification>
			</div>
		</Fragment>
	);
}
