import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, strongInteractiveTag } from './tag.figma';

useMetadata({
	figma: strongInteractiveTag
});

export default function StrongInteractiveTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag
			semantic={props.semantic}
			emphasis="strong"
			disabled={props.disabled}>
			Label
		</DBTag>
	);
}
