import { DBButton, DBSelect, DBStack, DBTooltip } from '@components';
import { Fragment } from 'react';

type Props = {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	nextPage: () => void;
	pageCount: number;
	pageIndex: number;
	pageSize: number;
	previousPage: () => void;
	setPageIndex: (index: number) => void;
	setPageSize: (size: number) => void;
};

export function ActionButtons({
	hasNextPage,
	hasPreviousPage,
	nextPage,
	pageCount,
	pageIndex,
	pageSize,
	previousPage,
	setPageIndex,
	setPageSize
}: Props) {
	return (
		<Fragment>
			<DBStack direction="row" alignment="center" justifyContent="center">
				<DBButton
					onClick={() => setPageIndex(0)}
					disabled={!hasPreviousPage}
					variant="ghost"
					noText
					icon="double_chevron_left">
					First Page
					<DBTooltip placement="top">First Page</DBTooltip>
				</DBButton>
				<DBButton
					onClick={() => previousPage()}
					disabled={!hasPreviousPage}
					variant="ghost"
					noText
					icon="chevron_left">
					Previous Page
					<DBTooltip placement="top">Previous Page</DBTooltip>
				</DBButton>
				<DBButton
					onClick={() => nextPage()}
					disabled={!hasNextPage}
					variant="ghost"
					noText
					icon="chevron_right">
					Next Page
					<DBTooltip placement="top">Next Page</DBTooltip>
				</DBButton>
				<DBButton
					onClick={() => setPageIndex(pageCount - 1)}
					disabled={!hasNextPage}
					variant="ghost"
					noText
					icon="double_chevron_right">
					Last Page
					<DBTooltip placement="top">Last Page</DBTooltip>
				</DBButton>
				<DBStack style={{ width: 'fit-content' }} gap="3x-small">
					<div>Page</div>
					<strong>
						{pageIndex + 1} of {pageCount}
					</strong>
				</DBStack>
				<DBSelect
					variant="floating"
					label="Amount of Entries"
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}>
					{[5, 10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</DBSelect>
			</DBStack>
		</Fragment>
	);
}

export default ActionButtons;
