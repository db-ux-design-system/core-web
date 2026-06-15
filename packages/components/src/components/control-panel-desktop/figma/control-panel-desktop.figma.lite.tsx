import { useMetadata } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import { DBControlPanelDesktop } from '../index';
import {
	FigmaControlPanelDesktopProps,
	controlPanelDesktops
} from './control-panel-desktop.figma';

useMetadata({
	figma: controlPanelDesktops
});

export default function ControlPanelDesktopFigmaLite(
	props: FigmaControlPanelDesktopProps
) {
	return (
		<DBControlPanelDesktop
			width={props.width}
			orientation={props.orientation}
			brand={<DBControlPanelBrand>Application Name</DBControlPanelBrand>}>
			{props._children}
		</DBControlPanelDesktop>
	);
}
