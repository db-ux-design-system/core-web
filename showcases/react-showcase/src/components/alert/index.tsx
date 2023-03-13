import { DBAlert } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/alert';
import { type DBAlertProps } from '../../../../../output/react/src/components/alert/model';

const getAlert = ({
	variant,
	icon,
	headline,
	link,
	slotLink,
	type,
	onClick
}: DBAlertProps) => (
	<DBAlert
		variant={variant}
		icon={icon}
		headline={headline}
		link={link}
		slotLink={slotLink}
		type={type}
		onClick={onClick}>
		Alert
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

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{
			example: getDefaultAlert({ type: 'alert' }),
			code: '<DBAlert type="alert" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{
			example: getDefaultAlert({ type: 'inline' }),
			code: '<DBAlert type="inline" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		}
	],
	[
		{
			example: getDefaultAlert({ icon: 'account' }),
			code: '<DBAlert icon="account"  type="alert" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{
			example: getDefaultAlert({ variant: 'critical' }),
			code: '<DBAlert variant="critical" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{
			example: getDefaultAlert({ variant: 'information' }),
			code: '<DBAlert variant="information" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{
			example: getDefaultAlert({ variant: 'success' }),
			code: '<DBAlert variant="success" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{
			example: getDefaultAlert({ variant: 'warning' }),
			code: '<DBAlert variant="warning" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		}
	],
	[
		{
			example: getDefaultAlert({ icon: 'account' }),
			code: '<DBAlert icon="account" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{
			example: getDefaultAlert({}),
			code: '<DBAlert headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{
			example: getAlert({
				slotLink: 'Link',
				link: { href: '#' }
			}),
			code: '<DBAlert link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
		},
		{ example: getAlert({}), code: '<DBAlert>Type Something</DBAlert>' }
	],
	[
		{
			example: getDefaultAlert({
				onClick() {
					/* eslint-disable-next-line no-alert */
					alert('click close button');
				}
			}),
			code: '<DBAlert headline="Headline" link={{ href: "#" }} slotLink="Link" onClick={()=>{alert("click close button")}}>Type Something</DBAlert>'
		}
	]
];

const variants = defaultComponentVariants.map((variant, index) => ({
	...variant,
	examples: variant.examples.map((example, exampleIndex) => ({
		...example,
		...exampleMatrix[index][exampleIndex]
	}))
}));

const AlertComponent = () => {
	return (
		<DefaultComponent
			title={'DBAlert'}
			variants={variants}></DefaultComponent>
	);
};

export default AlertComponent;
