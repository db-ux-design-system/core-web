import { useMetadata } from '@builder.io/mitosis';
import { DBNotification } from '../index';
import {
	FigmaNotificationProps,
	dockedNotifications
} from './notification.figma';

useMetadata({
	figma: dockedNotifications
});

export default function DockedNotificationFigmaLite(
	props: FigmaNotificationProps
) {
	return (
		<DBNotification
			variant="docked"
			semantic={props.semantic}
			showHeadline={props.showHeadline}
			headline="Headline">
			Content
		</DBNotification>
	);
}
