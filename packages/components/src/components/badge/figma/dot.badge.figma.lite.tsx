import { useMetadata } from '@builder.io/mitosis';
import { DBBadge } from '../index';
import { FigmaBadgeProps, dotBadges } from './badge.figma';

useMetadata({
	figma: dotBadges
});

export default function DotBadgeFigmaLite(props: FigmaBadgeProps) {
	return (
		<DBBadge
			size={props.size}
			semantic={props.semantic}
			emphasis={props.emphasis}
			placement={props.placement}
			label={props.label}
		/>
	);
}
