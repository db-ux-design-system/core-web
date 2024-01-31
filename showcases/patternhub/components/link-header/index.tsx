import Link from 'next/link';
import { DBIcon } from '../src';

const LinkHeader = ({ id }) => {
	if (id) {
		return (
			<>
				<a className="anchor" id={id} />
				<Link href={`#${id}`} scroll={false}>
					<DBIcon icon="add_link">{id}</DBIcon>
				</Link>
			</>
		);
	}

	return null;
};

export default LinkHeader;
