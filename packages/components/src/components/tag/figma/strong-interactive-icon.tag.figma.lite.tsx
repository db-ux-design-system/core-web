import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, strongInteractiveIconTag } from './tag.figma';

useMetadata({
	figma: strongInteractiveIconTag
});

export default function StrongInteractiveIconTagFigmaLite(
	props: FigmaTagProps
) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="strong"
			noText
			icon="placeholder"
			disabled={props.disabled}>
			Label
		</DBTag>
	);
}
