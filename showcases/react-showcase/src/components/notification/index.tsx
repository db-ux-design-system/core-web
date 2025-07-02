import { DBLink, DBNotification } from '../../../../../output/react/src';
import { type DBNotificationProps } from '../../../../../output/react/src/components/notification/model';
import defaultComponentVariants from '../../../../shared/notification.json';
import { getBasePath } from '../../utils/base-path';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getNotification = ({
	semantic,
	icon,
	headline,
	variant,
	children,
	closeable,
	link,
	timestamp,
	linkVariant,
	img,
	showIcon,
	showHeadline,
	showTimestamp
}: DBNotificationProps & { link: boolean; img: boolean }) => (
	<DBNotification
		semantic={semantic}
		icon={icon}
		headline={headline}
		link={link ? <DBLink href="#">Textlink</DBLink> : undefined}
		image={
			img ? (
				<img
					src={`${getBasePath()}/assets/images/placeholder.jpg`}
					alt="this is a fancy placeholder"
				/>
			) : undefined
		}
		variant={variant}
		closeable={closeable}
		linkVariant={linkVariant}
		timestamp={timestamp}
		showTimestamp={showTimestamp}
		onClose={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}
		showIcon={showIcon}
		showHeadline={showHeadline}>
		{children}
	</DBNotification>
);

const NotificationComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBNotification"
			variants={getVariants(
				defaultComponentVariants,
				getNotification,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default NotificationComponent;
