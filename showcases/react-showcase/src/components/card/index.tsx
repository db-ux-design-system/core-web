import { DBCard } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/card.json';
import { getVariants } from '../data';
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
			})
		},
		{
			example: getCard({
				colorVariant: 'neutral-1',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'neutral-3',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'neutral-4',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'primary',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'secondary',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'critical',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'successful',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'warning',
				variant: 'interactive',
				children: exampleName
			})
		},
		{
			example: getCard({
				colorVariant: 'informational',
				variant: 'interactive',
				children: exampleName
			})
		}
	],
	// Spacing
	[
		{
			example: getCardWithSpacing({
				children: exampleName
			})
		},
		{
			example: getCardWithSpacing({
				spacing: 'medium',
				children: exampleName
			})
		},
		{
			example: getCardWithSpacing({
				spacing: 'small',
				children: exampleName
			})
		}
	],
	// Variant
	[
		{
			example: getCardWithSpacing({
				children: exampleName,
				spacing: 'medium'
			})
		},
		{
			example: getCardWithSpacing({
				variant: 'interactive',
				children: exampleName,
				spacing: 'medium'
			})
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
