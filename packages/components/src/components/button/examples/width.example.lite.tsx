import { Fragment } from '@builder.io/mitosis';
import DBButton from '../button.lite';

export default function ButtonWidth() {
	return (
		<Fragment>
			<DBButton width="auto">(Default) Auto</DBButton>
			<div style={{ width: '500px' }}>
				<DBButton width="full">Width</DBButton>
			</div>
		</Fragment>
	);
}
