import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBButton from '../../button/button.lite';
import DBLink from '../../link/link.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBHeader from '../header.lite';
import { StorybookHeaderArgTypes } from './_header.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookHeaderArgTypes
});

export default function HeaderDensity() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader
					data-density="functional"
					brand={<DBBrand>DBHeader</DBBrand>}
					metaNavigation={
						<>
							<DBLink href="#">Imprint</DBLink>
							<DBLink href="#">Help</DBLink>
						</>
					}
					primaryAction={
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							noText>
							Search
						</DBButton>
					}
					secondaryAction={
						<>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Profile
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Notification
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Help
							</DBButton>
						</>
					}>
					<DBNavigation>
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Functional</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Functional disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader
					data-density="regular"
					brand={<DBBrand>DBHeader</DBBrand>}
					metaNavigation={
						<>
							<DBLink href="#">Imprint</DBLink>
							<DBLink href="#">Help</DBLink>
						</>
					}
					primaryAction={
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							noText>
							Search
						</DBButton>
					}
					secondaryAction={
						<>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Profile
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Notification
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Help
							</DBButton>
						</>
					}>
					<DBNavigation>
						<DBNavigationItem icon="x_placeholder">
							<a href="#">(Default) Regular</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">(Default) Regular disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader
					data-density="expressive"
					brand={<DBBrand>DBHeader</DBBrand>}
					metaNavigation={
						<>
							<DBLink href="#">Imprint</DBLink>
							<DBLink href="#">Help</DBLink>
						</>
					}
					primaryAction={
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							noText>
							Search
						</DBButton>
					}
					secondaryAction={
						<>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Profile
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Notification
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Help
							</DBButton>
						</>
					}>
					<DBNavigation>
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Expressive</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Expressive disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
		</Fragment>
	);
}
