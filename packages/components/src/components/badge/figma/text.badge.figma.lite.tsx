import { useMetadata } from '@builder.io/mitosis';
import { DBBadge } from '../index';
import { FigmaBadgeProps, textBadges } from './badge.figma';

useMetadata({
	figma: textBadges
});

export default function TextBadgeFigmaLite(props: FigmaBadgeProps) {
	return (
		<DBBadge
			size={props.size}
			semantic={props.semantic}
			emphasis={props.emphasis}
			placement={props.placement}>
			{props.text}
		</DBBadge>
	);
}
