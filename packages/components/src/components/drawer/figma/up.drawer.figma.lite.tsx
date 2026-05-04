import { useMetadata } from '@builder.io/mitosis';
import { DBDrawer } from '../index';
import { FigmaDrawerProps, topDrawers } from './drawer.figma';

useMetadata({
	figma: topDrawers
});

export default function UpDrawerFigmaLite(props: FigmaDrawerProps) {
	return (
		<DBDrawer
			direction="up"
			rounded={props.rounded}
			spacing={props.spacing}>
			Content
		</DBDrawer>
	);
}
