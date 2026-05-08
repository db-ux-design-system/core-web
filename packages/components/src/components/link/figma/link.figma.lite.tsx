import { useMetadata } from '@builder.io/mitosis';
import { DBLink } from '../index';
import { FigmaLinkProps, links } from './link.figma';

useMetadata({
	figma: links
});

export default function LinkFigmaLite(props: FigmaLinkProps) {
	return (
		<DBLink
			href="https://wikipedia.org/wiki/Easter_Egg"
			content={props.content}
			variant={props.variant}
			size={props.size}
			disabled={props.disabled}>
			{props.text}
		</DBLink>
	);
}
