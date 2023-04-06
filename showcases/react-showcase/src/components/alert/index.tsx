import { DBAlert } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/alert.json';
import { type DBAlertProps } from '../../../../../output/react/src/components/alert/model';
import { getVariants } from '../data';

const getAlert = ({
	variant,
	icon,
	headline,
	link,
	slotLink,
	type,
	onClick,
	children,
	behaviour
}: DBAlertProps) => (
	<DBAlert
		variant={variant}
		icon={icon}
		headline={headline}
		link={link}
		slotLink={slotLink}
		type={type}
		behaviour={behaviour}
		onClick={onClick}>
		{children}
	</DBAlert>
);

const getDefaultAlert = (props: DBAlertProps) => {
	return getAlert({
		...props,
		headline: 'Headline',
		slotLink: 'Link',
		link: { href: '#' }
	});
};

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getDefaultAlert({ children: exampleName, type: 'alert' })
		},
		{
			example: getDefaultAlert({ children: exampleName, type: 'inline' })
		}
	],
	[
		{
			example: getDefaultAlert({
				children: exampleName,
				icon: 'account'
			})
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'critical'
			})
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'informational'
			})
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'successful'
			})
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'warning'
			})
		}
	],
	[
		{
			example: getDefaultAlert({
				children: exampleName,
				icon: 'account'
			})
		},
		{
			example: getDefaultAlert({ children: exampleName })
		},
		{
			example: getAlert({
				children: exampleName,
				slotLink: 'Link',
				link: { href: '#' }
			})
		},
		{
			example: getAlert({ children: exampleName })
		}
	],
	[
		{
			example: getDefaultAlert({
				onClick() {
					/* eslint-disable-next-line no-alert */
					alert('click close button');
				}
			})
		},
		{
			example: getDefaultAlert({ behaviour: 'permanent' })
		}
	]
];

const AlertComponent = () => {
	return (
		<DefaultComponent
			title={'DBAlert'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default AlertComponent;
