import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, weakInteractiveToggleIconTag } from './tag.figma';

useMetadata({
	figma: weakInteractiveToggleIconTag
});

export default function WeakInteractiveToggleIconTagFigmaLite(
	props: FigmaTagProps
) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="weak"
			noText
			icon="placeholder"
			disabled={props.disabled}
			checked={props.checked}>
			Label
		</DBTag>
	);
}
