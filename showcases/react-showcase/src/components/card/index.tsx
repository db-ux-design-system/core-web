import { DBCard } from '../../../../../output/react/src';
import type { DBCardProps } from '../../../../../output/react/src/components/card/model';
import defaultComponentVariants from '../../../../shared/card.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getCard = ({
	behavior,
	children,
	spacing,
	elevationLevel
}: DBCardProps) => {
	const card = (
		<DBCard
			behavior={behavior}
			spacing={spacing}
			elevationLevel={elevationLevel}>
			<strong>{children}</strong>
		</DBCard>
	);

	return behavior === 'interactive' ? (
		<button type="button">{card}</button>
	) : (
		card
	);
};

const CardComponent = (properties: BaseComponentProps) => (
	<DefaultComponent
		title={'DBCard'}
		variants={getVariants(
			defaultComponentVariants,
			getCard,
			properties.slotCode
		)}></DefaultComponent>
);

export default CardComponent;
