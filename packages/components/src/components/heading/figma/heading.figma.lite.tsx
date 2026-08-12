import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { FigmaHeadingProps, headings } from './heading.figma';

useMetadata({
	figma: headings
});

export default function HeadingFigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeading
			as={props.as}
			size={props.size}
			fontWeight={props.fontWeight}
			alignment={props.alignment}
			paragraphSpacing={props.paragraphSpacing}
			startSlot={<Fragment>{props.startSlot}</Fragment>}
			endSlot={<Fragment>{props.endSlot}</Fragment>}>
			{props.text}
		</DBHeading>
	);
}
