import { DBNavigationItem } from '../index';

export default function NavigationItem() {
	return (
		<>
			<h1>DBNavigationItem Documentation Examples</h1>

			<h2>1. Default Navigation Item</h2>
			<DBNavigationItem>Default Navigation Item</DBNavigationItem>

			<h2>2. Active State</h2>
			<DBNavigationItem active>Active Navigation Item</DBNavigationItem>

			<h2>3. Disabled State</h2>
			<DBNavigationItem disabled>
				Disabled Navigation Item
			</DBNavigationItem>

			<h2>4. Sub-Navigation</h2>
			<DBNavigationItem subNavigation={<div>Sub Navigation Content</div>}>
				Navigation Item with Sub-Navigation
			</DBNavigationItem>

			<h2>5. Icon Support</h2>
			<DBNavigationItem icon="user">
				Navigation Item with Icon
			</DBNavigationItem>

			<h2>6. Custom Class</h2>
			<DBNavigationItem className="custom-class">
				Navigation Item with Custom Class
			</DBNavigationItem>
		</>
	);
}
