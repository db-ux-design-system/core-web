import { DBLink } from '../../link';
import { DBControlPanelMetaNavigation } from '../index';

export default function ControlPanelMetaNavigation() {
	return (
		<>
			<h1>DBControlPanelMetaNavigation Documentation Examples</h1>

			<h2>1. Default Meta Navigation</h2>
			<DBControlPanelMetaNavigation>
				<DBLink href="#">Imprint</DBLink>
				<DBLink href="#">Help</DBLink>
				<DBLink href="#">Privacy</DBLink>
			</DBControlPanelMetaNavigation>
		</>
	);
}
