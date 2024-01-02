import Link from 'next/link';
import { DBButton } from '../src';

const LinkHeader = ({ id }) => {
	if (id) {
		return (
			<>
				<a className="anchor" id={id} />
				<Link href={`#${id}`}>
					<DBButton variant="text" noText icon="add_link">
						{id}
					</DBButton>
				</Link>
			</>
		);
	}

	return null;
};

export default LinkHeader;
