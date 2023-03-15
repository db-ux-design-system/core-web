import { DBAlert } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/alert';
import { type DBAlertProps } from '../../../../../output/react/src/components/alert/model';
import { getVariants } from '../../utils';

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
			example: getDefaultAlert({ children: exampleName, type: 'alert' }),
			code: '<DBAlert type="alert" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getDefaultAlert({ children: exampleName, type: 'inline' }),
			code: '<DBAlert type="inline" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		}
	],
	[
		{
			example: getDefaultAlert({
				children: exampleName,
				icon: 'account'
			}),
			code: '<DBAlert icon="account"  type="alert" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'critical'
			}),
			code: '<DBAlert variant="critical" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'informational'
			}),
			code: '<DBAlert variant="informational" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'successful'
			}),
			code: '<DBAlert variant="successful" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getDefaultAlert({
				children: exampleName,
				variant: 'warning'
			}),
			code: '<DBAlert variant="warning" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		}
	],
	[
		{
			example: getDefaultAlert({
				children: exampleName,
				icon: 'account'
			}),
			code: '<DBAlert icon="account" headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getDefaultAlert({ children: exampleName }),
			code: '<DBAlert headline="Headline" link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getAlert({
				children: exampleName,
				slotLink: 'Link',
				link: { href: '#' }
			}),
			code: '<DBAlert link={{ href: "#" }} slotLink="Link">Alert</DBAlert>'
		},
		{
			example: getAlert({ children: exampleName }),
			code: '<DBAlert>Alert</DBAlert>'
		}
	],
	[
		{
			example: getDefaultAlert({
				onClick() {
					/* eslint-disable-next-line no-alert */
					alert('click close button');
				}
			}),
			code: '<DBAlert headline="Headline" link={{ href: "#" }} slotLink="Link" onClick={()=>{alert("click close button")}}>Alert</DBAlert>'
		},
		{
			example: getDefaultAlert({ behaviour: 'permanent' }),
			code: '<DBAlert headline="Headline" link={{ href: "#" }} slotLink="Link" behaviour="permanent">Alert</DBAlert>'
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
