import { useMetadata } from '@builder.io/mitosis';
import { DBHeader } from '../index';
import { FigmaHeaderProps, headers } from './header.figma';

useMetadata({
	figma: headers
});

export default function HeaderFigmaLite(props: FigmaHeaderProps) {
	return <DBHeader>Navigation</DBHeader>;
}
