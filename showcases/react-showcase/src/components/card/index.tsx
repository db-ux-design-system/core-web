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
}: DBCardProps) => (
	<DBCard
		behavior={behavior}
		spacing={spacing}
		elevationLevel={elevationLevel}>
		<strong>{children}</strong>
	</DBCard>
);

const CardComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBCard'}
			variants={getVariants(
				defaultComponentVariants,
				getCard,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default CardComponent;
