import { useMetadata } from '@builder.io/mitosis';
import { DBCard } from '../index';
import { FigmaCardProps, cards } from './card.figma';

useMetadata({
	figma: cards
});

export default function CardFigmaLite(props: FigmaCardProps) {
	return <DBCard>{props._children}</DBCard>;
}
