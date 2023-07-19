import { DBBadge, DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/badge.json';
import type { DBBadgeProps } from '../../../../../output/react/src/components/badge/model';
import { getVariants } from '../data';

const getBadge = ({
	children,
	variant,
	emphasis,
	noContent,
	size
}: DBBadgeProps & { noContent: boolean }) => (
	<>
		<DBBadge variant={variant} emphasis={emphasis} size={size}>
			{noContent ? '' : children}
		</DBBadge>
		{noContent && (
			<DBInfotext variant="informational" size="small">
				{children}
			</DBInfotext>
		)}
	</>
);

const BadgeComponent = () => {
	return (
		<DefaultComponent
			title="DBBadge"
			variants={getVariants(
				defaultComponentVariants,
				getBadge
			)}></DefaultComponent>
	);
};

export default BadgeComponent;
