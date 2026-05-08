import { useMetadata } from '@builder.io/mitosis';
import { DBDivider } from '../index';
import { FigmaDividerProps, dividers } from './divider.figma';

useMetadata({
	figma: dividers
});

export default function DividerFigmaLite(props: FigmaDividerProps) {
	return <DBDivider />;
}
