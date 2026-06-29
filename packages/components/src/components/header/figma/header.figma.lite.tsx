import {useMetadata} from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import {DBHeader} from '../index';
import {FigmaHeaderProps, headers} from './header.figma';

useMetadata({
	figma: headers,
});

export default function HeaderFigmaLite(props: FigmaHeaderProps) {
	return (
		<DBHeader
			brand={<DBBrand>Application Name</DBBrand>}
			metaNavigation={
				<span>
					TODO: Replace these placeholders with proper Code Connect mappings —
					they cannot be resolved automatically
				</span>
			}
			primaryAction={
				<span>
					TODO: Replace these placeholders with proper Code Connect mappings —
					they cannot be resolved automatically
				</span>
			}
			secondaryAction={
				<span>
					TODO: Replace these placeholders with proper Code Connect mappings —
					they cannot be resolved automatically
				</span>
			}
		>
			{props._children}
		</DBHeader>
	);
}
