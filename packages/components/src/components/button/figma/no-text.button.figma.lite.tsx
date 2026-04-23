import { useMetadata } from '@builder.io/mitosis';
import { DBButton } from '../index';
import { FigmaButtonProps, noTextButtons } from './button.figma';

useMetadata({
	figma: noTextButtons
});

export default function NoTextButtonFigmaLite(props: FigmaButtonProps) {
	return (
		<DBButton
			disabled={props.disabled}
			noText={props.noText}
			icon={props.icon}
			width={props.width}
			size={props.size}
			variant={props.variant}
			type="button">
			{props.text}
		</DBButton>
	);
}
