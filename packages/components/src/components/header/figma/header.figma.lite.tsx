import { useMetadata } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBButton from '../../button/button.lite';
import DBLink from '../../link/link.lite';
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
				<>
					<DBLink href="#">Imprint</DBLink>
					<DBLink href="#">Help</DBLink>
				</>
			}
			primaryAction={
				<DBButton icon="magnifying_glass" variant="ghost" noText>
					Search
				</DBButton>
			}
			secondaryAction={
				<>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Profile
					</DBButton>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Notification
					</DBButton>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Help
					</DBButton>
				</>
			}>
			{props._children}
		</DBHeader>
	);
}
