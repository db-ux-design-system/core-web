import { DBNotification, DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/notification.json';
import { type DBNotificationProps } from '../../../../../output/react/src/components/notification/model';
import { getVariants } from '../data';
import { getBasePath } from '../../utils/base-path';

const getNotification = ({
	semantic,
	icon,
	headline,
	variant,
	children,
	behaviour,
	link,
	timestamp,
	linkVariant,
	img
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
					alt="Placeholder"
				/>
			) : undefined
		}
		variant={variant}
		behaviour={behaviour}
		linkVariant={linkVariant}
		timestamp={timestamp}
		onClose={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}>
		{children}
	</DBNotification>
);

const NotificationComponent = () => {
	return (
		<DefaultComponent
			title="DBNotification"
			variants={getVariants(
				defaultComponentVariants,
				getNotification
			)}></DefaultComponent>
	);
};

export default NotificationComponent;
