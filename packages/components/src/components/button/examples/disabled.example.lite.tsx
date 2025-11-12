import { Fragment } from '@builder.io/mitosis';
import DBButton from '../button.lite';

export default function ButtonDisabled() {
	return (
		<Fragment>
			<DBButton disabled={false}>(Default) False</DBButton>
			<DBButton disabled={true}>True</DBButton>
		</Fragment>
	);
}
