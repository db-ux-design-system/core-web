import { DBAlert } from '../../../../../output/react/src';
import { type LinkProps } from '../../../../../output/react/src/shared/model';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const defaultHeadline = 'Headline';
const defaultText = 'Type Something';

const defaultLink = 'Link';
const defaultLinkProps: LinkProps = { href: '#' };

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
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Inline',
				style: { width: '100%' },
				example: (
					<DBAlert
						type="inline"
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
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
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Critical',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="critical"
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Information',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="information"
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Success',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="success"
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Warning',
				style: { width: '100%' },
				example: (
					<DBAlert
						variant="warning"
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
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
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}
						icon="account">
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Headline & Text & Link',
				style: { width: '100%' },
				example: (
					<DBAlert
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Text & Link',
				style: { width: '100%' },
				example: (
					<DBAlert link={defaultLinkProps} slotLink={defaultLink}>
						{defaultText}
					</DBAlert>
				)
			},
			{
				name: 'Text',
				style: { width: '100%' },
				example: <DBAlert>{defaultText}</DBAlert>
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
						headline={defaultHeadline}
						link={defaultLinkProps}
						slotLink={defaultLink}
						onClick={() => {
							/* eslint-disable-next-line no-alert */
							alert('click close button');
						}}>
						{defaultText}
					</DBAlert>
				)
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
