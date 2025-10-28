import { DBTabItem } from '../index';

export default function TabItem() {
	return (
		<>
			<h1>DBTabItem Documentation Examples</h1>

			<h2>1. Default Tab Item</h2>
			<DBTabItem>Default Tab Item</DBTabItem>

			<h2>2. Active State</h2>
			<DBTabItem active>Active Tab Item</DBTabItem>

			<h2>3. Disabled State</h2>
			<DBTabItem disabled>Disabled Tab Item</DBTabItem>

			<h2>4. Icon Variants</h2>
			<DBTabItem icon="user">Tab Item with Icon</DBTabItem>
			<DBTabItem iconLeading="arrow-left">
				Tab Item with Leading Icon
			</DBTabItem>
			<DBTabItem iconTrailing="arrow-right">
				Tab Item with Trailing Icon
			</DBTabItem>

			<h2>5. Label Property</h2>
			<DBTabItem label="Tab Item Label">Tab Item with Label</DBTabItem>

			<h2>6. No Text</h2>
			<DBTabItem noText icon="user" />
		</>
	);
}
