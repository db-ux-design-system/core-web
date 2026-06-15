import { useMetadata } from '@builder.io/mitosis';
import { DBControlPanelSecondaryActions } from '../index';
import {
	FigmaControlPanelSecondaryActionsProps,
	controlPanelSecondaryActions
} from './control-panel-secondary-actions.figma';

useMetadata({
	figma: controlPanelSecondaryActions
});

export default function ControlPanelSecondaryActionsFigmaLite(
	props: FigmaControlPanelSecondaryActionsProps
) {
	return (
		<DBControlPanelSecondaryActions>
			{props._children}
		</DBControlPanelSecondaryActions>
	);
}
