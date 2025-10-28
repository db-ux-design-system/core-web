import { Slot } from '@builder.io/mitosis';
import DBCard from '../../components/card/card.lite';

interface Props {
	children?: any;
}

export default function CardWrapperShowcase(props: Props) {
	return (
		<DBCard class="variants-card">
			<div class="variants-list">
				<Slot />
			</div>
		</DBCard>
	);
}
