import { useMetadata } from '@builder.io/mitosis';
import DBDrawer from '../drawer.lite';
import { FigmaDrawerProps, drawers } from './drawer.figma';

useMetadata({
	figma: drawers
});

export default function DrawerFigmaLite(props: FigmaDrawerProps) {
	return (
		<DBDrawer header={props._drawerHeader} footer={props._drawerFooter}>
			{props._children}
		</DBDrawer>
	);
}
