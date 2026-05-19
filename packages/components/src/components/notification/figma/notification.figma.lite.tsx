import { useMetadata } from '@builder.io/mitosis';
import { DBNotification } from '../index';
import { FigmaNotificationProps, notifications } from './notification.figma';

useMetadata({
	figma: notifications
});

export default function NotificationFigmaLite(props: FigmaNotificationProps) {
	return <DBNotification link={props.link}>{props.text}</DBNotification>;
}
