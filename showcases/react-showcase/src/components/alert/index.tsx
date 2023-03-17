import { DBAlert } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Type',
		examples: [
			{
				name: '(Default) Alert',
				style: { width: '100%' },
				example: (
					<DBAlert
						type="alert"
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert type="alert" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Inline',
				style: { width: '100%' },
				example: (
					<DBAlert
						type="inline"
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert type="inline" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			}
		]
	},
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive',
				style: { width: '100%' },
				example: (
					<DBAlert
						icon="account"
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert icon="account" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Critical',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="critical"
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert variant="critical" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Information',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="informational"
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert variant="informational" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Success',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="successful"
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert variant="successful" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Warning',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="warning"
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert variant="warning" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: 'Headline & Text & Link & Icon',
				style: { width: '100%' },
				example: (
					<DBAlert
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link"
						icon="account">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert icon="account" headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Headline & Text & Link',
				style: { width: '100%' },
				example: (
					<DBAlert
						headline="Headline"
						link={{ href: '#' }}
						slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert headline="Headline" link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Text & Link',
				style: { width: '100%' },
				example: (
					<DBAlert link={{ href: '#' }} slotLink="Link">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert link={{ href: "#" }} slotLink="Link">Type Something</DBAlert>'
			},
			{
				name: 'Text',
				style: { width: '100%' },
				example: <DBAlert>Type Something</DBAlert>,
				code: '<DBAlert>Type Something</DBAlert>'
			}
		]
	},
	{
		name: 'Behaviour',
		examples: [
			{
				name: 'Closable',
				style: { width: '100%' },
				example: (
					<DBAlert
						headline="Headline"
						onClick={() => {
							/* eslint-disable-next-line no-alert */
							alert('click close button');
						}}>
						Type Something
					</DBAlert>
				),
				code: '<DBAlert headline="Headline" onClick={()=>{alert("click close button")}}>Type Something</DBAlert>'
			},
			{
				name: 'Permanent',
				style: { width: '100%' },
				example: (
					<DBAlert headline="Headline" behaviour="permanent">
						Type Something
					</DBAlert>
				),
				code: '<DBAlert headline="Headline" behaviour="permanent">Type Something</DBAlert>'
			}
		]
	}
];

const AlertComponent = () => {
	return (
		<DefaultComponent
			title={'DBAlert'}
			variants={variants}></DefaultComponent>
	);
};

export default AlertComponent;
