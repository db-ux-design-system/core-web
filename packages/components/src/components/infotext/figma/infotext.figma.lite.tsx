import { useMetadata } from '@builder.io/mitosis';
import { DBInfotext } from '../index';
import { FigmaInfotextProps, infotexts } from './infotext.figma';

useMetadata({
	figma: infotexts
});

export default function InfotextFigmaLite(props: FigmaInfotextProps) {
	return (
		<DBInfotext
			semantic={props.semantic}
			size={props.size}
			showIcon={props.showIcon}>
			Infotext
		</DBInfotext>
	);
}
