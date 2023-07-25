import { DBCard } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/card.json';
import { getVariants } from '../data';
import type { DBCardProps } from '../../../../../output/react/src/components/card/model';

const getCard = ({ colorVariant, variant, children, spacing }: DBCardProps) => (
	<DBCard colorVariant={colorVariant} variant={variant} spacing={spacing}>
		<strong>{children}</strong>
		{colorVariant && <span>{colorVariant}</span>}
	</DBCard>
);

const CardComponent = () => {
	return (
		<DefaultComponent
			title={'DBCard'}
			variants={getVariants(
				defaultComponentVariants,
				getCard
			)}></DefaultComponent>
	);
};

export default CardComponent;
