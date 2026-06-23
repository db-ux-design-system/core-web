import {
	Fragment,
	useMetadata,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import DBNotification from '../notification.lite';
import { StorybookNotificationArgTypes } from './_notification.arg.types';

useMetadata({
	storybookTitle: 'Visual',
	storybookNames: ['(Default) Icon', 'Image'],
	storybookArgTypes: StorybookNotificationArgTypes
});

export default function NotificationVisual() {
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
				<DBNotification icon="information_circle">
					(Default) Icon
				</DBNotification>
			</div>
			<div style={{ width: '300px' }}>
				<DBNotification
					image={
						<img
							src={state.getImage()}
							alt="this is a fancy placeholder"
						/>
					}>
					Image
				</DBNotification>
			</div>
		</Fragment>
	);
}
