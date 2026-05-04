import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, strongStaticTag } from './tag.figma';

useMetadata({
	figma: strongStaticTag
});

export default function StrongStaticTagFigmaLite(props: FigmaTagProps) {
	return (
		<DBTag semantic={props.semantic} emphasis="strong">
			Label
		</DBTag>
	);
}
