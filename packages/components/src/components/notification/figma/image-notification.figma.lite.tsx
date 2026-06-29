import { useMetadata } from '@builder.io/mitosis';
import { DBNotification } from '../index';
import {
	FigmaNotificationProps,
	imageNotifications
} from './notification.figma';

useMetadata({
	figma: imageNotifications
});

export default function ImageNotificationFigmaLite(
	props: FigmaNotificationProps
) {
	return (
		<DBNotification
			image={
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Under-Construction-Bulldozer.gif"
					alt="TODO: Add an alternative text"
				/>
			}>
			{props.text}
			{props._children}
		</DBNotification>
	);
}
