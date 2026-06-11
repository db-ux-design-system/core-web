import { useMetadata } from '@builder.io/mitosis';
import { DBControlPanelPrimaryActions } from '../index';
import {
	FigmaControlPanelPrimaryActionsProps,
	controlPanelPrimaryActions
} from './control-panel-primary-actions.figma';

useMetadata({
	figma: controlPanelPrimaryActions
});

export default function ControlPanelPrimaryActionsFigmaLite(
	props: FigmaControlPanelPrimaryActionsProps
) {
	return (
		<DBControlPanelPrimaryActions>
			{props._children}
		</DBControlPanelPrimaryActions>
	);
}
