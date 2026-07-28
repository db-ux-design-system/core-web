import { useMetadata } from '@builder.io/mitosis';
import DBDrawerFooter from '../drawer-footer.lite';
import { FigmaDrawerFooterProps, drawerFooters } from './drawer-footer.figma';

useMetadata({
	figma: drawerFooters
});

export default function DrawerFooterFigmaLite(props: FigmaDrawerFooterProps) {
	return <DBDrawerFooter>{props._children}</DBDrawerFooter>;
}
