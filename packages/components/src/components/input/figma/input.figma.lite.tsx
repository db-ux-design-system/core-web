import { useMetadata } from '@builder.io/mitosis';
import { DBInput } from '../index';
import { FigmaInputProps, inputs } from './input.figma';

useMetadata({
	figma: inputs
});

export default function InputFigmaLite(props: FigmaInputProps) {
	return <DBInput name="input" />;
}
