import {
	Fragment,
	useMetadata,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import DBLink from '../../link/link.lite';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

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
	const state = useStore({
		getImage() {
			const basePath: string | undefined = useTarget({
				react: process?.env?.['NEXT_PUBLIC_BASE_PATH'],
				default: undefined
			});
			const showcase = useTarget({
				angular: 'angular',
				react: 'react',
				vue: 'vue',
				stencil: 'stencil'
			});
			const path = basePath ? basePath : `/${showcase}-showcase`;
			return `${path}/assets/images/placeholder.jpg`;
		}
	});
	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBNotification variant="overlay">Text</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification icon="information_circle" variant="overlay">
					Text & Icon
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					image={
						<img
							src={state.getImage()}
							alt="this is a fancy placeholder"
						/>
					}
					variant="overlay">
					Text & Preview Image
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification headline="Headline" variant="overlay">
					Text & Headline
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					variant="overlay"
					linkVariant="inline">
					Text & Textlink Inline
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					variant="overlay"
					linkVariant="block">
					Text & Textlink Block
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					variant="overlay"
					linkVariant="block"
					showTimestamp={true}
					timestamp="10 min ago">
					Text & Textlink Block & Timed
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					headline="Headline"
					link={<DBLink href="#">Textlink</DBLink>}
					variant="overlay"
					closeable={true}
					linkVariant="inline">
					Text & Headline & Textlink Inline & Closeable
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					icon="information_circle"
					headline="Headline"
					link={<DBLink href="#">Textlink</DBLink>}
					variant="overlay"
					closeable={true}
					linkVariant="inline">
					Text & Icon & Headline & Textlink Inline & Closeable
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					variant="overlay"
					showTimestamp={true}
					timestamp="10 min ago">
					Text & Timed
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					variant="overlay"
					closeable={true}
					showTimestamp={true}
					timestamp="10 min ago">
					Text & Timed & Closeable
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					headline="Headline"
					variant="overlay"
					closeable={true}
					showTimestamp={true}
					timestamp="10 min ago">
					Text & Headline & Timed & Closeable
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					icon="information_circle"
					headline="Headline"
					variant="overlay"
					closeable={true}
					showTimestamp={true}
					timestamp="10 min ago">
					Text & Icon & Headline & Timed & Closeable
				</DBNotification>
			</div>
		</Fragment>
	);
}
