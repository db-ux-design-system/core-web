import { Show, useMetadata } from '@builder.io/mitosis';
import DBHeadingH1 from '../heading-h1.lite';
import DBHeadingH2 from '../heading-h2.lite';
import DBHeadingH3 from '../heading-h3.lite';
import DBHeadingH4 from '../heading-h4.lite';
import DBHeadingH5 from '../heading-h5.lite';
import DBHeadingH6 from '../heading-h6.lite';
import { FigmaHeadingProps, headings } from './heading.figma';

useMetadata({ figma: headings });

export default function HeadingFigmaLite(props: FigmaHeadingProps) {
	return (
		<>
			<Show when={props.level === 'h1'}>
				<DBHeadingH1
					size={props.size}
					fontWeight={props.fontWeight}
					alignment={props.alignment}
					paragraphSpacing={props.paragraphSpacing}>
					{props.text}
				</DBHeadingH1>
			</Show>
			<Show when={props.level === 'h2'}>
				<DBHeadingH2
					size={props.size}
					fontWeight={props.fontWeight}
					alignment={props.alignment}
					paragraphSpacing={props.paragraphSpacing}>
					{props.text}
				</DBHeadingH2>
			</Show>
			<Show when={props.level === 'h3'}>
				<DBHeadingH3
					size={props.size}
					fontWeight={props.fontWeight}
					alignment={props.alignment}
					paragraphSpacing={props.paragraphSpacing}>
					{props.text}
				</DBHeadingH3>
			</Show>
			<Show when={props.level === 'h4'}>
				<DBHeadingH4
					size={props.size}
					fontWeight={props.fontWeight}
					alignment={props.alignment}
					paragraphSpacing={props.paragraphSpacing}>
					{props.text}
				</DBHeadingH4>
			</Show>
			<Show when={props.level === 'h5'}>
				<DBHeadingH5
					size={props.size}
					fontWeight={props.fontWeight}
					alignment={props.alignment}
					paragraphSpacing={props.paragraphSpacing}>
					{props.text}
				</DBHeadingH5>
			</Show>
			<Show when={props.level === 'h6'}>
				<DBHeadingH6
					size={props.size}
					fontWeight={props.fontWeight}
					alignment={props.alignment}
					paragraphSpacing={props.paragraphSpacing}>
					{props.text}
				</DBHeadingH6>
			</Show>
		</>
	);
}
