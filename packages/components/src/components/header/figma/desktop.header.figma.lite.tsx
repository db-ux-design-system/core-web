import { useMetadata } from '@builder.io/mitosis';
import { DBHeader } from '../index';
import { FigmaHeaderProps, desktopHeaders } from './header.figma';

useMetadata({
	figma: desktopHeaders
});

export default function DesktopHeaderFigmaLite(props: FigmaHeaderProps) {
	return <DBHeader width={props.width}>Navigation</DBHeader>;
}
