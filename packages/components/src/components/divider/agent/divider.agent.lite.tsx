import { DBDivider } from '../index';

export default function Divider() {
	return (
		<>
			<h1>DBDivider Documentation Examples</h1>

			<h2>1. Default Divider</h2>
			<DBDivider />

			<h2>2. Margin Variants</h2>
			<DBDivider margin="none" />
			<DBDivider margin="_" />

			<h2>3. Orientation Variants</h2>
			<DBDivider variant="horizontal" />
			<DBDivider variant="vertical" />

			<h2>4. Emphasis Variants</h2>
			<DBDivider emphasis="weak" />
			<DBDivider emphasis="strong" />

			<h2>5. Width Variants</h2>
			<DBDivider width="full" />
			<DBDivider width="auto" />
		</>
	);
}
