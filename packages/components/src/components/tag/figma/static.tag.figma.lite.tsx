import { useMetadata } from '@builder.io/mitosis';
import { DBTag } from '../index';
import { FigmaTagProps, staticTag } from './tag.figma';

useMetadata({
	figma: staticTag
});

export default function StaticTagFigmaLite(props: FigmaTagProps) {
	return <DBTag>{props.label}</DBTag>;
}
