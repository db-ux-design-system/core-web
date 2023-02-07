import { DBCard, DBLink } from '../../../../../../output/react/src';
import type { MultiCardsType } from './data';

const MultiCards = ({ cards }: MultiCardsType) => (
	<div className={`grid grid-cols-1 md:grid-cols-${cards.length} gap-fix-md`}>
		<div className="hidden md:grid-cols-2 md:grid-cols-3 md:grid-cols-4" />
		{cards.map((card) => (
			<DBCard key={card.title} variant="ia" imgSrc={card.image}>
				<div className="flex flex-col gap-fix-md h-full p-fix-lg">
					<h5>{card.title}</h5>
					<p>{card.text}</p>
					<div className="mt-auto">
						<DBLink href="#" content="internal">
							{card.link}
						</DBLink>
					</div>
				</div>
			</DBCard>
		))}
	</div>
);

export default MultiCards;
