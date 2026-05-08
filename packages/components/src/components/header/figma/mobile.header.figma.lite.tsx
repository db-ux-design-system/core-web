import { useMetadata } from '@builder.io/mitosis';
import { DBHeader } from '../index';
import { mobileHeaders } from './header.figma';

useMetadata({
	figma: mobileHeaders
});

export default function MobileHeaderFigmaLite() {
	return <DBHeader>Real content coming soon</DBHeader>;
}
