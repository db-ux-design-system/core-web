import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, weakInteractiveToggleTag } from './tag.figma';

useMetadata({
	figma: weakInteractiveToggleTag
});

export default function WeakInteractiveToggleTagFigmaLite(
	props: FigmaTagProps
) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="weak"
			disabled={props.disabled}
			checked={props.checked}>
			Label
		</DBTag>
	);
}
