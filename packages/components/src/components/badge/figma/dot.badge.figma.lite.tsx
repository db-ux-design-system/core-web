import { useMetadata } from '@builder.io/mitosis';
import { DBBadge } from '../index';
import { FigmaBadgeProps, dotBadges } from './badge.figma';

useMetadata({
	figma: dotBadges
});

export default function DotBadgeFigmaLite(props: FigmaBadgeProps) {
	return <DBBadge />;
}
