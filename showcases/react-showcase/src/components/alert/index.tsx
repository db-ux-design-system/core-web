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
		{ example: getDefaultAlert({ type: 'alert' }) },
		{ example: getDefaultAlert({ type: 'inline' }) }
	],
	[
		{ example: getDefaultAlert({ icon: 'account' }) },
		{ example: getDefaultAlert({ variant: 'critical' }) },
		{ example: getDefaultAlert({ variant: 'information' }) },
		{ example: getDefaultAlert({ variant: 'success' }) },
		{ example: getDefaultAlert({ variant: 'warning' }) }
	],
	[
		{ example: getDefaultAlert({ icon: 'account' }) },
		{ example: getDefaultAlert({}) },
		{
			example: getAlert({
				slotLink: 'Link',
				link: { href: '#' }
			})
		},
		{ example: getAlert({}) }
	],
	[
		{
			example: getDefaultAlert({
				onClick() {
					/* eslint-disable-next-line no-alert */
					alert('click close button');
				}
			})
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
