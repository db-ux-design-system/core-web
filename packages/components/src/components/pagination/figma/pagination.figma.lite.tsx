import { useMetadata } from '@builder.io/mitosis';
import { DBPagination } from '../index';
import { FigmaPaginationProps, pagination } from './pagination.figma';

useMetadata({
	figma: pagination
});

export default function PaginationFigmaLite(props: FigmaPaginationProps) {
	return <DBPagination currentPage={5} totalCount={100} pageSize={10} />;
}
