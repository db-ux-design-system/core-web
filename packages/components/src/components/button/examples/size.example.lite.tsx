import { Fragment } from '@builder.io/mitosis';
import DBButton from '../button.lite';

export default function ButtonSize() {
	return (
		<Fragment>
			<DBButton size="medium">(Default) Medium</DBButton>
			<DBButton size="small">Small</DBButton>
		</Fragment>
	);
}
