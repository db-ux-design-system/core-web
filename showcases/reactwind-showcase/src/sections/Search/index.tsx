import { DBButton, DBCard, DBInput } from '../../../../../output/react/src';

const Search = () => (
	<div className="search px-fix-md">
		<DBCard>
			<div className="db-ui-expressive flex flex-col s:flex-row">
				<div
					className="flex flex-col s:flex-row items-center justify-between w-full
					pt-fix-lg pl-fix-lg pr-fix-lg s:pr-0 s:pb-fix-lg s:gap-fix-md">
					<DBInput
						className="w-full"
						iconBefore="start"
						label="Von"
						placeholder="Frankfurt HBF"></DBInput>
					<DBButton icon="swap-horizontal" variant="transparent">
						Von Nach tauschen
					</DBButton>
					<DBInput
						className="w-full"
						iconBefore="destination"
						label="Nach"
						placeholder="Berlin HBF"></DBInput>
				</div>
				<div className="flex p-fix-lg">
					<DBButton className="m-auto" width="full">
						Suchen
					</DBButton>
				</div>
			</div>
		</DBCard>
	</div>
);

export default Search;
