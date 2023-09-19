import {
	DBBadge,
	DBInfotext,
	DBIcon,
	DBButton
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/badge.json';
import type { DBBadgeProps } from '../../../../../output/react/src/components/badge/model';
import { getVariants } from '../data';

const getBadge = ({
	children,
	variant,
	emphasis,
	noContent,
	size,
	placement,
	example
}: DBBadgeProps & {
	noContent: boolean;
	example: string;
}) => (
	<>
		{!placement && !example && (
			<>
				<DBBadge variant={variant} emphasis={emphasis} size={size}>
					{noContent ? '' : children}
				</DBBadge>
				{noContent && (
					<DBInfotext
						variant="informational"
						size="small"
						icon="none">
						{children}
					</DBInfotext>
				)}
			</>
		)}

		{placement && placement !== 'inline' && !example && (
			<>
				<DBButton icon="account" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						variant="critical"
						placement={placement}></DBBadge>
					{children}
				</DBButton>
				<DBInfotext variant="informational" size="small" icon="none">
					{children}
				</DBInfotext>
			</>
		)}

		{placement === 'inline' && (
			<>
				<div className="badge-inline-container">
					<DBIcon icon="account" />
					<span>{children}</span>
					<DBBadge size="small" emphasis="strong" variant="critical">
						Label
					</DBBadge>
					<DBIcon icon="error" />
				</div>
			</>
		)}

		{example === 'icon' && (
			<>
				<DBBadge variant="critical" emphasis="strong" size={size}>
					<DBIcon icon="account">{children}</DBIcon>
				</DBBadge>
				<DBInfotext variant="informational" size="small" icon="none">
					{children}
				</DBInfotext>
			</>
		)}

		{example === 'number' && (
			<>
				<DBBadge variant="successful">9</DBBadge>
				<DBBadge variant="informational">12</DBBadge>
				<DBBadge variant="warning">123</DBBadge>
				<DBBadge size="small" emphasis="strong" variant="successful">
					9
				</DBBadge>
				<DBBadge size="small" emphasis="strong" variant="informational">
					12
				</DBBadge>
				<DBBadge size="small" emphasis="strong" variant="warning">
					123
				</DBBadge>
				<DBInfotext variant="informational" size="small" icon="none">
					{children}
				</DBInfotext>
			</>
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
