import { useMetadata } from '@builder.io/mitosis';
import { DBCard } from '../index';
import { FigmaCardProps, level1Cards } from './card.figma';

useMetadata({
	figma: level1Cards
});

export default function Level1CardFigmaLite(props: FigmaCardProps) {
	return (
		<DBCard
			elevationLevel="1"
			spacing={props.spacing}
			behavior={props.behavior}>
			Content
		</DBCard>
	);
}
