import { Fragment } from '@builder.io/mitosis';
import DBButton from '../button.lite';

export default function ButtonNoText() {
	return (
		<Fragment>
			<DBButton icon="x_placeholder">(Default) False</DBButton>
			<DBButton icon="x_placeholder" noText={true}>True</DBButton>
		</Fragment>
	);
}
