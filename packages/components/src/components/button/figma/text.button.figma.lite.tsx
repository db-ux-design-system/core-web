import { useMetadata } from '@builder.io/mitosis';
import { DBButton } from '../index';
import { FigmaButtonProps, textButtons } from './button.figma';

useMetadata({
	figma: textButtons
});

export default function TextButtonFigmaLite(props: FigmaButtonProps) {
	return (
		<DBButton
			disabled={props.disabled}
			noText={props.noText}
			icon={props.iconLeading}
			iconTrailing={props.iconTrailing}
			showIcon={props.showIconLeading}
			showIconTrailing={props.showIconTrailing}
			width={props.width}
			size={props.size}
			variant={props.variant}
			showIconLeading={props.showIconLeading}
			type="button">
			{props.text}
		</DBButton>
	);
}
