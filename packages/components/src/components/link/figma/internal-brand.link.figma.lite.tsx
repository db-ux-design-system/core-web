import { useMetadata } from '@builder.io/mitosis';
import { DBLink } from '../index';
import { FigmaLinkProps, internalBrandLinks } from './link.figma';

useMetadata({
	figma: internalBrandLinks
});

export default function InternalBrandLinkFigmaLite(props: FigmaLinkProps) {
	return (
		<DBLink
			href="#"
			content="internal"
			variant="brand"
			size={props.size}
			disabled={props.disabled}>
			Link
		</DBLink>
	);
}
