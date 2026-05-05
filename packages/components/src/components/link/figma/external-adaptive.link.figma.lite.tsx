import { useMetadata } from '@builder.io/mitosis';
import { DBLink } from '../index';
import { FigmaLinkProps, externalAdaptiveLinks } from './link.figma';

useMetadata({
	figma: externalAdaptiveLinks
});

export default function ExternalAdaptiveLinkFigmaLite(props: FigmaLinkProps) {
	return (
		<DBLink
			href="#"
			content="external"
			size={props.size}
			disabled={props.disabled}>
			Link
		</DBLink>
	);
}
