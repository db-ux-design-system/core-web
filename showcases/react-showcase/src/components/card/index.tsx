import { DBCard } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/card';
import { getVariants } from '../../utils';
import type { DBCardProps } from '../../../../../output/react/src/components/card/model';

const getCard = ({ colorVariant, variant, children }: DBCardProps) => (
	<DBCard colorVariant={colorVariant} variant={variant} spacing="small">
		<strong>{children}</strong>
		{colorVariant && <span>{colorVariant}</span>}
	</DBCard>
);

const getCardWithSpacing = ({ variant, children, spacing }: DBCardProps) => (
	<DBCard colorVariant="neutral-0" variant={variant} spacing={spacing}>
		<strong>{children}</strong>
	</DBCard>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getCard({
				colorVariant: 'neutral-0',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="neutral-0" variant="interactive" spacing="small"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'neutral-1',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'neutral-3',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'neutral-4',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'primary',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'secondary',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'critical',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'successful',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive">DBCard</DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'warning',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive">DBCard</DBCard>`
		},
		{
			example: getCard({
				colorVariant: 'informational',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive">DBCard</DBCard>`
		}
	],
	// Spacing
	[
		{
			example: getCardWithSpacing({
				children: exampleName
			}),
			code: `<DBCard>DBCard</DBCard>`
		},
		{
			example: getCardWithSpacing({
				spacing: 'medium',
				children: exampleName
			}),
			code: `<DBCard spacing="medium">DBCard</DBCard>`
		},
		{
			example: getCardWithSpacing({
				spacing: 'small',
				children: exampleName
			}),
			code: `<DBCard spacing="small">DBCard</DBCard>`
		}
	],
	// Variant
	[
		{
			example: getCardWithSpacing({
				children: exampleName,
				spacing: 'medium'
			}),
			code: `<DBCard direction="column" variant="interactive">DBCard</DBCard>`
		},
		{
			example: getCardWithSpacing({
				variant: 'interactive',
				children: exampleName,
				spacing: 'medium'
			}),
			code: `<DBCard direction="row" variant="interactive">DBCard</DBCard>`
		}
	]
];

const CardComponent = () => {
	return (
		<DefaultComponent
			title={'DBCard'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default CardComponent;
