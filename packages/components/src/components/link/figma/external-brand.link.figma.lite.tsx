import { useMetadata } from '@builder.io/mitosis';
import { DBLink } from '../index';
import { FigmaLinkProps, externalBrandLinks } from './link.figma';

useMetadata({
	figma: externalBrandLinks
});

export default function ExternalBrandLinkFigmaLite(props: FigmaLinkProps) {
	return (
		<DBLink
			href="#"
			content="external"
			variant="brand"
			size={props.size}
			disabled={props.disabled}>
			Link
		</DBLink>
	);
}
