import { useMetadata } from '@builder.io/mitosis';
import { DBDrawer } from '../index';
import { FigmaDrawerProps, drawers } from './drawer.figma';

useMetadata({
	figma: drawers
});

export default function DrawerFigmaLite(props: FigmaDrawerProps) {
	return <DBDrawer>Content</DBDrawer>;
}
