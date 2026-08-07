import Link from 'next/link';
import { DBIcon } from '../../../../output/react/src';

export default function LinkHeader({ id }) {
	if (id) {
		return (
			<Link className="header-link" href={`?current=${id}`}>
				<DBIcon icon="paper_clip" />
				{id} anchor link
			</Link>
		);
	}

	return null;
}
