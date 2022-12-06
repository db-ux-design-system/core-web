import {
	DBButton,
	DBCard
} from '../../../../../packages/components/output/react/src';

const Search = () => (
	<div className="search mx-res-xs md:mx-res-xl">
		<DBCard>
			<div
				className="db-ui-expressive flex flex-col md:flex-row gap-res-xs md:gap-res-md
					p-fix-sm justify-around items-center">
				<i>Input From</i>
				<DBButton icon="swap-horizontal" onlyIcon variant="ghost">
					Von Nach tauschen
				</DBButton>
				<i>Input To</i>
				<DBButton>Suchen</DBButton>
			</div>
		</DBCard>
	</div>
);

export default Search;
