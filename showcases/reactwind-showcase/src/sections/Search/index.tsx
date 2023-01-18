import { DBButton, DBCard } from '../../../../../output/react/src';

const Search = () => (
	<div className="search px-fix-md">
		<DBCard>
			<div className="db-ui-expressive flex flex-col md:flex-row">
				<div
					className="flex flex-col md:flex-row items-center justify-between w-full
					pt-fix-lg pl-fix-lg pr-fix-lg md:pr-0 md:pb-fix-lg md:gap-fix-md">
					<i>Input From</i>
					<DBButton icon="swap-horizontal" onlyIcon variant="ghost">
						Von Nach tauschen
					</DBButton>

					<i>Input To</i>
				</div>
				<div className="flex p-fix-lg">
					<DBButton className="m-auto">Suchen</DBButton>
				</div>
			</div>
		</DBCard>
	</div>
);

export default Search;
