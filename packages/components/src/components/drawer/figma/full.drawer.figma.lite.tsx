import { useMetadata } from '@builder.io/mitosis';
import { DBDrawer } from '../index';
import { FigmaDrawerProps, fullDrawers } from './drawer.figma';

useMetadata({
	figma: fullDrawers
});

export default function FullDrawerFigmaLite(props: FigmaDrawerProps) {
	return <DBDrawer spacing={props.spacing}>Content</DBDrawer>;
}
