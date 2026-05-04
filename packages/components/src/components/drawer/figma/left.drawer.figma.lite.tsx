import { useMetadata } from '@builder.io/mitosis';
import { DBDrawer } from '../index';
import { FigmaDrawerProps, leftDrawers } from './drawer.figma';

useMetadata({
	figma: leftDrawers
});

export default function LeftDrawerFigmaLite(props: FigmaDrawerProps) {
	return (
		<DBDrawer
			direction="left"
			rounded={props.rounded}
			spacing={props.spacing}>
			Content
		</DBDrawer>
	);
}
