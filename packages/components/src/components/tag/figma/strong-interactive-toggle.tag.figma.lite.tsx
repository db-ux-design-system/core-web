import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, strongInteractiveToggleTag } from './tag.figma';

useMetadata({
	figma: strongInteractiveToggleTag
});

export default function StrongInteractiveToggleTagFigmaLite(
	props: FigmaTagProps
) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="strong"
			disabled={props.disabled}
			checked={props.checked}>
			Label
		</DBTag>
	);
}
