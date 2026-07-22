import { useMetadata } from '@builder.io/mitosis';
import DBDrawerHeader from '../drawer-header.lite';
import { FigmaDrawerHeaderProps, drawerHeaders } from './drawer-header.figma';

useMetadata({
	figma: drawerHeaders
});

export default function DrawerHeaderFigmaLite(props: FigmaDrawerHeaderProps) {
	return (
		<DBDrawerHeader
			closeButtonText="Close"
			startSlot={props.startSlot}
			endSlot={props.endSlot}>
			{props.text}
		</DBDrawerHeader>
	);
}
