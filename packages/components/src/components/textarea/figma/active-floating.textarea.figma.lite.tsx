import { useMetadata } from '@builder.io/mitosis';
import { DBTextarea } from '../index';
import { activeFloatingTextareas } from './textarea.figma';

useMetadata({
	figma: activeFloatingTextareas
});

export default function ActiveFloatingTextareaFigmaLite() {
	return <DBTextarea label="Label" variant="floating" />;
}
