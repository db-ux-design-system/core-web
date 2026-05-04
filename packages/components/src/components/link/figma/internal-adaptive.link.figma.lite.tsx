import { useMetadata } from '@builder.io/mitosis';
import { DBLink } from '../index';
import { FigmaLinkProps, internalAdaptiveLinks } from './link.figma';

useMetadata({
	figma: internalAdaptiveLinks
});

export default function InternalAdaptiveLinkFigmaLite(props: FigmaLinkProps) {
	return (
		<DBLink href="#" content="internal" size={props.size}>
			Link
		</DBLink>
	);
}
