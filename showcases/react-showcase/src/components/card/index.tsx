import { DBCard } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/card.json';
import { getVariants } from '../data';
import type { DBCardProps } from '../../../../../output/react/src/components/card/model';
import { type BaseComponentProps } from '../base-component-data';

const getCard = ({
	behaviour,
	children,
	spacing,
	elevationLevel
}: DBCardProps) => (
	<DBCard
		behaviour={behaviour}
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
