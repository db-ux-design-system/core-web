import { DBAlert } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/alert.json';
import { type DBAlertProps } from '../../../../../output/react/src/components/alert/model';
import { getVariants } from '../data';

const getAlert = ({
	variant,
	icon,
	headline,
	link,
	type,
	children,
	behaviour
}: DBAlertProps) => (
	<DBAlert
		variant={variant}
		icon={icon}
		headline={headline}
		link={link}
		type={type}
		behaviour={behaviour}
		onClick={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}>
		{children}
	</DBAlert>
);

const AlertComponent = () => {
	return (
		<DefaultComponent
			title="DBAlert"
			variants={getVariants(
				defaultComponentVariants,
				getAlert
			)}></DefaultComponent>
	);
};

export default AlertComponent;
