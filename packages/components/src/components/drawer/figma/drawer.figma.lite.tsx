import { useMetadata } from '@builder.io/mitosis';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { FigmaDrawerProps, drawers } from './drawer.figma';

useMetadata({
	figma: drawers
});

export default function DrawerFigmaLite(props: FigmaDrawerProps) {
	return (
		<DBDrawer
			header={
				<DBDrawerHeader>
					{props.showText ? props.drawerHeader : ''}
				</DBDrawerHeader>
			}>
			{props._children}
		</DBDrawer>
	);
}
