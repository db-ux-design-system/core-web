import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, interactiveToggleTag } from './tag.figma';

useMetadata({
	figma: interactiveToggleTag
});

export default function InteractiveToggleTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag>
			<label>
				<input type="checkbox" checked={props.checked} />
				{props.label}
			</label>
		</DBTag>
	);
}
