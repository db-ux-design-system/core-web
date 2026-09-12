import { DBLink } from '../../link';
import { DBControlPanelMeta } from '../index';

export default function ControlPanelMeta() {
	return (
		<>
			<h1>DBControlPanelMeta Documentation Examples</h1>

			<h2>1. Default Meta</h2>
			<DBControlPanelMeta>
				<DBLink href="#">Imprint</DBLink>
				<DBLink href="#">Help</DBLink>
				<DBLink href="#">Privacy</DBLink>
			</DBControlPanelMeta>
		</>
	);
}
