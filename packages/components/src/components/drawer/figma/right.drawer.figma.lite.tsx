import { useMetadata } from '@builder.io/mitosis';
import { DBDrawer } from '../index';
import { FigmaDrawerProps, rightDrawers } from './drawer.figma';

useMetadata({
	figma: rightDrawers
});

export default function RightDrawerFigmaLite(props: FigmaDrawerProps) {
	return (
		<DBDrawer
			direction="right"
			rounded={props.rounded}
			spacing={props.spacing}>
			Content
		</DBDrawer>
	);
}
