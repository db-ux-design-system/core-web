import { Fragment } from '@builder.io/mitosis';
import DBButton from '../button.lite';

export default function ButtonShowIconLeading() {
	return (
		<Fragment>
			<DBButton icon="x_placeholder" showIcon={false}>(Default) False</DBButton>
			<DBButton icon="x_placeholder" showIcon={true}>True</DBButton>
		</Fragment>
	);
}
