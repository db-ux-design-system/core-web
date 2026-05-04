import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, weakInteractiveTag } from './tag.figma';

useMetadata({
	figma: weakInteractiveTag
});

export default function WeakInteractiveTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="weak"
			disabled={props.disabled}>
			Label
		</DBTag>
	);
}
