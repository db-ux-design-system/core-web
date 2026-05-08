import { useMetadata } from '@builder.io/mitosis';
import { DBDrawer } from '../index';
import { FigmaDrawerProps, drawers } from './drawer.figma';

useMetadata({
	figma: drawers
});

export default function DrawerFigmaLite(props: FigmaDrawerProps) {
	return (
		<DBDrawer
			size={props.size}
			direction={props.direction}
			rounded={props.rounded}
			spacing={props.spacing}>
			Real content coming soon
		</DBDrawer>
	);
}
