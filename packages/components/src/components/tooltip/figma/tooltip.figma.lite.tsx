import { useMetadata } from '@builder.io/mitosis';
import { DBTooltip } from '../index';
import { FigmaTooltipProps, tooltips } from './tooltip.figma';

useMetadata({
	figma: tooltips
});

export default function TooltipFigmaLite(props: FigmaTooltipProps) {
	return <DBTooltip>{props.label}</DBTooltip>;
}
