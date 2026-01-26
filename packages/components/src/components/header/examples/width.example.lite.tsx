import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
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
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader
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
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="full width">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Full</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Full disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader
					width="medium"
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
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="medium width">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Medium</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Medium disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader
					width="large"
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
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="large width">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Large</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Large disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
		</Fragment>
	);
}
