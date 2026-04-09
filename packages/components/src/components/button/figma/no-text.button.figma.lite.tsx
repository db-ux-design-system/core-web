import { useMetadata } from '@builder.io/mitosis';
import { DBButton } from '../index';
import { noTextButtons } from './button.figma';

useMetadata({
	figma: noTextButtons
});

export default function NoTextButtonFigmaLite(props: any) {
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
