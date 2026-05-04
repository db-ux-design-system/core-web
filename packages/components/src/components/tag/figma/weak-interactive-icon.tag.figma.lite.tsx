import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, weakInteractiveIconTag } from './tag.figma';

useMetadata({
	figma: weakInteractiveIconTag
});

export default function WeakInteractiveIconTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="weak"
			noText
			icon="placeholder"
			disabled={props.disabled}>
			Label
		</DBTag>
	);
}
