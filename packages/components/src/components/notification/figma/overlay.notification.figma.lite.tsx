import { useMetadata } from '@builder.io/mitosis';
import { DBNotification } from '../index';
import {
	FigmaNotificationProps,
	overlayNotifications
} from './notification.figma';

useMetadata({
	figma: overlayNotifications
});

export default function OverlayNotificationFigmaLite(
	props: FigmaNotificationProps
) {
	return (
		<DBNotification
			variant="overlay"
			semantic={props.semantic}
			showHeadline={props.showHeadline}
			headline="Headline">
			Content
		</DBNotification>
	);
}
