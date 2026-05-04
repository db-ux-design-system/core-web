import { useMetadata } from '@builder.io/mitosis';
import { DBCard } from '../index';
import { FigmaCardProps, level3Cards } from './card.figma';

useMetadata({
	figma: level3Cards
});

export default function Level3CardFigmaLite(props: FigmaCardProps) {
	return (
		<DBCard
			elevationLevel="3"
			spacing={props.spacing}
			behavior={props.behavior}>
			Content
		</DBCard>
	);
}
