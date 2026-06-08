import { useMetadata } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import { DBHeader } from '../index';
import { FigmaHeaderProps, headers } from './header.figma';

useMetadata({
	figma: headers
});

export default function HeaderFigmaLite(props: FigmaHeaderProps) {
	return (
		<DBHeader
			brand={<DBBrand>Application Name</DBBrand>}
			metaNavigation={
				/* TODO: Replace with proper Code Connect mapping */
				undefined
			}
			primaryAction={
				/* TODO: Replace with proper Code Connect mapping */
				undefined
			}
			secondaryAction={
				/* TODO: Replace with proper Code Connect mapping */
				undefined
			}>
			{props._children}
		</DBHeader>
	);
}
