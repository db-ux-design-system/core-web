import { DBControlPanelNavigationItem } from '../index';

export default function ControlPanelNavigationItem() {
	return (
		<>
			<h1>DBControlPanelNavigationItem Documentation Examples</h1>

			<h2>1. Default Navigation Item</h2>
			<DBControlPanelNavigationItem>
				Default Navigation Item
			</DBControlPanelNavigationItem>

			<h2>2. Active State</h2>
			<DBControlPanelNavigationItem active>
				Active Navigation Item
			</DBControlPanelNavigationItem>

			<h2>3. Disabled State</h2>
			<DBControlPanelNavigationItem disabled>
				Disabled Navigation Item
			</DBControlPanelNavigationItem>

			<h2>4. Sub-Navigation</h2>
			<DBControlPanelNavigationItem
				subNavigation={<div>Sub Navigation Content</div>}>
				Navigation Item with Sub-Navigation
			</DBControlPanelNavigationItem>

			<h2>5. Icon Support</h2>
			<DBControlPanelNavigationItem icon="user">
				Navigation Item with Icon
			</DBControlPanelNavigationItem>

			<h2>6. Custom Class</h2>
			<DBControlPanelNavigationItem className="custom-class">
				Navigation Item with Custom Class
			</DBControlPanelNavigationItem>
		</>
	);
}
