import { useMetadata } from '@builder.io/mitosis';
import { DBControlPanelMetaNavigation } from '../index';
import {
	FigmaControlPanelMetaNavigationProps,
	controlPanelMetaNavigations
} from './control-panel-meta-navigation.figma';

useMetadata({
	figma: controlPanelMetaNavigations
});

export default function ControlPanelMetaNavigationFigmaLite(
	props: FigmaControlPanelMetaNavigationProps
) {
	return (
		<DBControlPanelMetaNavigation>
			{props._children}
		</DBControlPanelMetaNavigation>
	);
}
