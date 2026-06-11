import { useMetadata } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import { DBControlPanelMobile } from '../index';
import {
	FigmaControlPanelMobileProps,
	controlPanelMobiles
} from './control-panel-mobile.figma';

useMetadata({
	figma: controlPanelMobiles
});

export default function ControlPanelMobileFigmaLite(
	props: FigmaControlPanelMobileProps
) {
	return (
		<DBControlPanelMobile
			position={props.position}
			variant={props.variant}
			brand={<DBControlPanelBrand>Application Name</DBControlPanelBrand>}>
			{props._children}
		</DBControlPanelMobile>
	);
}
