import { useMetadata } from '@builder.io/mitosis';
import { DBControlPanelFlatIconNavigation } from '../index';
import {
	FigmaControlPanelFlatIconNavigationProps,
	controlPanelFlatIconNavigations
} from './control-panel-flat-icon-navigation.figma';

useMetadata({
	figma: controlPanelFlatIconNavigations
});

export default function ControlPanelFlatIconNavigationFigmaLite(
	props: FigmaControlPanelFlatIconNavigationProps
) {
	return (
		<DBControlPanelFlatIconNavigation noText={props.noText}>
			{props._children}
		</DBControlPanelFlatIconNavigation>
	);
}
