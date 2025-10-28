import { Fragment } from '@builder.io/mitosis';
import DBButton from '../button.lite';

export default function ButtonDensity() {
	return (
		<Fragment>
			<DBButton data-density="functional">Functional</DBButton>
			<DBButton data-density="regular">(Default) Regular</DBButton>
			<DBButton data-density="expressive">Expressive</DBButton>
		</Fragment>
	);
}
