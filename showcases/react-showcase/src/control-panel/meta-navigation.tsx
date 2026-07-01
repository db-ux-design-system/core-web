import { DBControlPanelMeta, DBLink } from '@components';

const MetaNavigation = () => (
	<DBControlPanelMeta className="meta-workaround">
		<DBLink size="small" href="#">
			Link 1
		</DBLink>
		<DBLink size="small" href="#">
			Link 2
		</DBLink>
		<DBLink size="small" href="#">
			Link 3
		</DBLink>
	</DBControlPanelMeta>
);

export default MetaNavigation;
