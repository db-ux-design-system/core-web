import { useMetadata } from '@builder.io/mitosis';
import { DBControlPanelBrand } from '../index';
import {
	FigmaControlPanelBrandProps,
	controlPanelBrands
} from './control-panel-brand.figma';

useMetadata({
	figma: controlPanelBrands
});

export default function ControlPanelBrandFigmaLite(
	props: FigmaControlPanelBrandProps
) {
	return <DBControlPanelBrand text={props.text} />;
}
