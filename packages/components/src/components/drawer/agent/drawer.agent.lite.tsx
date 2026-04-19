import { DBButton } from '../../button';
import { DBDrawer } from '../index';

export default function Drawer() {
	return (
		<>
			<h1>DBDrawer Documentation Examples</h1>

			<h2>1. Default Drawer</h2>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-agent-default">
					Open Me
				</DBButton>
				<DBDrawer
					id="drawer-agent-default"
					drawerHeader={<header>Optional drawer header</header>}>
					My Drawer content
				</DBDrawer>
			</div>

			<h2>2. Drawer Variants</h2>
			<div>
				<DBButton command="show-modal" commandfor="drawer-agent-modal">
					Open Modal Drawer
				</DBButton>
				<DBDrawer id="drawer-agent-modal" variant="modal">
					Modal Drawer content
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-agent-inside">
					Open Inside Drawer
				</DBButton>
				<DBDrawer id="drawer-agent-inside" variant="inside">
					Inside Drawer content
				</DBDrawer>
			</div>
		</>
	);
}
