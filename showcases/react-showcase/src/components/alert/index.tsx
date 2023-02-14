import { DBAlert } from '../../../../../output/react/src';
import { LinkProps } from '../../../../../output/react/src/shared/model';
import DefaultComponent, { DefaultComponentVariants } from '../index';

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
