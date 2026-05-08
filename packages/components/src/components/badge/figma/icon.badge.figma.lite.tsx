import { useMetadata } from '@builder.io/mitosis';
import { DBBadge } from '../index';
import { FigmaBadgeProps, iconBadges } from './badge.figma';

useMetadata({
	figma: iconBadges
});

export default function IconBadgeFigmaLite(props: FigmaBadgeProps) {
	return (
		<DBBadge
			size={props.size}
			semantic={props.semantic}
			emphasis={props.emphasis}
			placement={props.placement}
			icon={props.icon}>
			{props.text}
		</DBBadge>
	);
}
