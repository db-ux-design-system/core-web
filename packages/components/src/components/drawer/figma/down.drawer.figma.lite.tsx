import { useMetadata } from '@builder.io/mitosis';
import { DBDrawer } from '../index';
import { FigmaDrawerProps, bottomDrawers } from './drawer.figma';

useMetadata({
	figma: bottomDrawers
});

export default function DownDrawerFigmaLite(props: FigmaDrawerProps) {
	return (
		<DBDrawer
			direction="down"
			rounded={props.rounded}
			spacing={props.spacing}>
			Content
		</DBDrawer>
	);
}
