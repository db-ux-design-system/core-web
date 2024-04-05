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
	semantic,
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
				<DBBadge semantic={semantic} emphasis={emphasis} size={size}>
					{noContent ? '' : children}
				</DBBadge>
				{noContent && (
					<DBInfotext
						semantic="informational"
						size="small"
						icon="none">
						{children}
					</DBInfotext>
				)}
			</>
		)}

		{placement && placement !== 'inline' && !example && (
			<>
				<DBButton icon="user" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="critical"
						placement={placement}></DBBadge>
					{children}
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					{children}
				</DBInfotext>
			</>
		)}

		{placement === 'inline' && (
			<>
				<div className="badge-inline-container">
					<DBIcon icon="user" />
					<span>{children}</span>
					<DBBadge size="small" emphasis="strong" semantic="critical">
						Label
					</DBBadge>
					<DBIcon icon="error" />
				</div>
			</>
		)}

		{example === 'icon' && (
			<>
				<DBBadge semantic="critical" emphasis="strong" size={size}>
					<DBIcon icon="user">{children}</DBIcon>
				</DBBadge>
				<DBInfotext semantic="informational" size="small" icon="none">
					{children}
				</DBInfotext>
			</>
		)}

		{example === 'number' && (
			<>
				<DBBadge semantic="successful">9</DBBadge>
				<DBBadge semantic="informational">12</DBBadge>
				<DBBadge semantic="warning">123</DBBadge>
				<DBBadge size="small" emphasis="strong" semantic="successful">
					9
				</DBBadge>
				<DBBadge
					size="small"
					emphasis="strong"
					semantic="informational">
					12
				</DBBadge>
				<DBBadge size="small" emphasis="strong" semantic="warning">
					123
				</DBBadge>
				<DBInfotext semantic="informational" size="small" icon="none">
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
