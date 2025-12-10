import { DBIcon } from '@components';
import Link from 'next/link';

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
