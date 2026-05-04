import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, weakStaticTag } from './tag.figma';

useMetadata({
	figma: weakStaticTag
});

export default function WeakStaticTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag semantic={props.semantic} emphasis="weak">
			Label
		</DBTag>
	);
}
