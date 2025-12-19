import { Fragment } from '@builder.io/mitosis';
import DBButton from '../button.lite';

export default function ButtonShowIconTrailing() {
	return (
		<Fragment>
			<DBButton iconTrailing="x_placeholder" showIconTrailing={false}>(Default) False</DBButton>
			<DBButton iconTrailing="x_placeholder" showIconTrailing={true}>True</DBButton>
		</Fragment>
	);
}
