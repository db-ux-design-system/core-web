import { useMetadata } from '@builder.io/mitosis';
import { DBCard } from '../index';
import { FigmaCardProps, level2Cards } from './card.figma';

useMetadata({
	figma: level2Cards
});

export default function Level2CardFigmaLite(props: FigmaCardProps) {
	return (
		<DBCard
			elevationLevel="2"
			spacing={props.spacing}
			behavior={props.behavior}>
			Content
		</DBCard>
	);
}
