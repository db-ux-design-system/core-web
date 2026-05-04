import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, weakRemovableTag } from './tag.figma';

useMetadata({
	figma: weakRemovableTag
});

export default function WeakRemovableTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag semantic={props.semantic} emphasis="weak" behavior="removable">
			Label
		</DBTag>
	);
}
