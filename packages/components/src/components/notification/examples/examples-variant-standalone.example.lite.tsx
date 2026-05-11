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
				<DBNotification variant="standalone">Text</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification icon="information_circle" variant="standalone">
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
					variant="standalone">
					Text & Preview Image
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification headline="Headline" variant="standalone">
					Text & Headline
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					variant="standalone">
					Text & Textlink Block
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					link={<DBLink href="#">Textlink</DBLink>}
					linkVariant="inline"
					variant="standalone">
					Text & Textlink Inline
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					headline="Headline"
					link={<DBLink href="#">Textlink</DBLink>}
					linkVariant="inline"
					variant="standalone"
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
					variant="standalone"
					closeable={true}>
					Text & Icon & Headline & Textlink Inline & Closeable
				</DBNotification>
			</div>
		</Fragment>
	);
}
