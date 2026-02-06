import Link from 'next/link';
import { DBIcon } from '../../../../packages/react-core-components/src';

const LinkHeader = ({ id }) => {
	if (id) {
		return (
			<Link className="header-link" href={`?current=${id}`}>
				<DBIcon icon="paper_clip" />
				{id} anchor link
			</Link>
		);
	}

	return null;
};

export default LinkHeader;
