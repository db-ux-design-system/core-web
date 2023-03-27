import { DBAlert, DBCard } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/card';
import { getVariants } from '../../utils';
import type { DBCardProps } from '../../../../../output/react/src/components/card/model';

const getCard = ({
	colorVariant,
	direction,
	variant,
	children
}: DBCardProps) => (
	<DBCard colorVariant={colorVariant} direction={direction} variant={variant}>
		<strong>{children}</strong>
		{colorVariant && <span>{colorVariant}</span>}
	</DBCard>
);

const getCardWithExampleImage = ({
	colorVariant,
	direction,
	variant,
	children
}: DBCardProps) => (
	<DBCard colorVariant={colorVariant} direction={direction} variant={variant}>
		<strong>{children}</strong>
		<div
			style={{
				width: '50px',
				height: '50px',
				backgroundColor: 'rgb(222, 224, 227)'
			}}></div>
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
			code: `<DBCard colorVariant="neutral-0" variant="interactive"><strong>Card</strong>
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
	// Direction
	[
		{
			example: getCardWithExampleImage({
				direction: 'column',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard direction="column" variant="interactive">DBCard</DBCard>`
		},
		{
			example: getCardWithExampleImage({
				direction: 'row',
				variant: 'interactive',
				children: exampleName
			}),
			code: `<DBCard direction="row" variant="interactive">DBCard</DBCard>`
		}
	],
	// Variant
	[
		{
			example: getCard({
				variant: 'full-width',
				children: exampleName
			}),
			code: `<DBCard direction="column" variant="interactive">DBCard</DBCard>`
		},
		{
			example: getCard({
				variant: 'interactive',
				children: exampleName
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
