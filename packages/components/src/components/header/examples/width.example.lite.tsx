import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBButton from '../../button/button.lite';
import DBLink from '../../link/link.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBHeader from '../header.lite';
import { StorybookHeaderArgTypes } from './_header.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['Full', 'Medium', 'Large'],
	storybookArgTypes: StorybookHeaderArgTypes
});

export default function HeaderWidth() {
	return (
		<Fragment>
			<DBHeader
				brand={<DBBrand>Brand</DBBrand>}
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
				<DBNavigation>
					<DBNavigationItem>
						<a href="#">Full</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
			<DBHeader
				width="medium"
				brand={<DBBrand>Brand</DBBrand>}
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
				<DBNavigation>
					<DBNavigationItem>
						<a href="#">Medium</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
			<DBHeader
				width="large"
				brand={<DBBrand>Brand</DBBrand>}
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
				<DBNavigation>
					<DBNavigationItem>
						<a href="#">Large</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
		</Fragment>
	);
}
