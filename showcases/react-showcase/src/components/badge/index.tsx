import { DBBadge, DBButton, DBIcon, DBInfotext } from '@components';
import type { DBBadgeProps } from '@components/src/components/badge/model';
import defaultComponentVariants from '../../../../shared/badge.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getBadge = ({
	children,
	semantic,
	emphasis,
	noContent,
	size,
	placement,
	example,
	lineBreak
}: DBBadgeProps & {
	noContent: boolean;
	example: string;
	lineBreak?: boolean;
}) => {
	if (lineBreak) {
		return <i className="line-break" />;
	}

	return (
		<>
			{!placement && !example && (
				<>
					<DBBadge
						semantic={semantic}
						emphasis={emphasis}
						size={size}>
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
					<DBButton icon="x_placeholder" variant="outlined" noText>
						<DBBadge
							size="small"
							emphasis="strong"
							semantic="critical"
							placement={placement}></DBBadge>
						{children}
					</DBButton>
					<DBInfotext
						semantic="informational"
						size="small"
						icon="none">
						{children}
					</DBInfotext>
				</>
			)}

			{placement === 'inline' && (
				<>
					<div className="badge-inline-container">
						<DBIcon icon="x_placeholder" />
						<span>{children}</span>
						<DBBadge
							size="small"
							emphasis="strong"
							semantic="critical">
							Label
						</DBBadge>
						<DBIcon icon="error" />
					</div>
				</>
			)}

			{example === 'icon' && (
				<>
					<DBBadge semantic="critical" emphasis="strong" size={size}>
						<DBIcon icon="x_placeholder">{children}</DBIcon>
					</DBBadge>
					<DBInfotext
						semantic="informational"
						size="small"
						icon="none">
						{children}
					</DBInfotext>
				</>
			)}

			{example === 'number' && (
				<>
					<DBBadge semantic="successful">9</DBBadge>
					<DBBadge semantic="informational">12</DBBadge>
					<DBBadge semantic="warning">123</DBBadge>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="successful">
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
					<DBInfotext
						semantic="informational"
						size="small"
						icon="none">
						{children}
					</DBInfotext>
				</>
			)}
		</>
	);
};

const BadgeComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBBadge"
			variants={getVariants(
				defaultComponentVariants,
				getBadge,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default BadgeComponent;
