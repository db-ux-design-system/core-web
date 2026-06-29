import { useState } from 'react';
import { DBButton } from '../../button';
import { DBDrawer } from '../index';

export default function Drawer() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<h1>DBDrawer Documentation Examples</h1>

			<h2>1. Default Drawer</h2>
			<div>
				<DBButton
					onClick={() => {
						setOpen(true);
					}}>
					Open Me
				</DBButton>
				<DBDrawer
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					drawerHeader={<header>Optional drawer header</header>}>
					My Drawer content
				</DBDrawer>
			</div>

			<h2>2. Drawer Variants</h2>
			<div>
				<DBButton
					onClick={() => {
						setOpen(true);
					}}>
					Open Modal Drawer
				</DBButton>
				<DBDrawer
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					variant="modal">
					Modal Drawer content
				</DBDrawer>
			</div>
			<div>
				<DBButton
					onClick={() => {
						setOpen(true);
					}}>
					Open Inside Drawer
				</DBButton>
				<DBDrawer
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					variant="inside">
					Inside Drawer content
				</DBDrawer>
			</div>
		</>
	);
}
