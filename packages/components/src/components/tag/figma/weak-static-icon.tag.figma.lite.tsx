import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, weakStaticIconTag } from './tag.figma';

useMetadata({
	figma: weakStaticIconTag
});

export default function WeakStaticIconTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="weak"
			noText
			icon="placeholder">
			Label
		</DBTag>
	);
}
