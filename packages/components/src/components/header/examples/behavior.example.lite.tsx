import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBButton from '../../button/button.lite';
import DBLink from '../../link/link.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBHeader from '../header.lite';
import { StorybookHeaderArgTypes } from './_header.arg.types';

useMetadata({
	storybookTitle: 'Behavior',
	storybookNames: ['Desktop (full width)', 'Mobile'],
	storybookArgTypes: StorybookHeaderArgTypes
});

export default function HeaderBehavior() {
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
						aria-label="Desktop (full width)">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Desktop (full width)</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Desktop (full width) disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader
					forceMobile="true"
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
						aria-label="Mobile">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Mobile</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Mobile disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
		</Fragment>
	);
}
