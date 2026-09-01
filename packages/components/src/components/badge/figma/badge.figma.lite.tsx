import { useMetadata } from '@builder.io/mitosis';
import { DBBadge } from '../index';
import { FigmaBadgeProps, badges } from './badge.figma';

useMetadata({
	figma: badges
});

export default function BadgeFigmaLite(props: FigmaBadgeProps) {
	return <DBBadge>{props.text}</DBBadge>;
}
