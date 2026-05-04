import { useMetadata } from '@builder.io/mitosis';
import { DBNotification } from '../index';
import {
	FigmaNotificationProps,
	standaloneNotifications
} from './notification.figma';

useMetadata({
	figma: standaloneNotifications
});

export default function StandaloneNotificationFigmaLite(
	props: FigmaNotificationProps
) {
	return (
		<DBNotification
			variant="standalone"
			semantic={props.semantic}
			showHeadline={props.showHeadline}
			headline="Headline">
			Content
		</DBNotification>
	);
}
