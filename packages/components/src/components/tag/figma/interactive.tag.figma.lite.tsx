import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, interactiveTag } from './tag.figma';

useMetadata({
	figma: interactiveTag
});

export default function InteractiveTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag>
			<button>{props.label}</button>
		</DBTag>
	);
}
