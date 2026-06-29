import { useMetadata } from '@builder.io/mitosis';
import { useState } from 'react';
import { DBNavigation } from '../../navigation';
import { DBNavigationItem } from '../../navigation-item';
import { DBHeader } from '../index';

useMetadata({
	slots: {
		brand: {
			angular: '<db-brand brand>My Awesome App</db-header>',
			vue: '<DBBrand>My Awesome App</DBBrand>',
			stencil: '<db-brand slot="brand">My Awesome App</db-brand>',
			react: '<DBBrand>My Awesome App</DBBrand>'
		},
		metaNavigation: {
			angular:
				'<ng-container *dbMetaNavigation><db-link href="#">Imprint</db-link><db-link href="#">Help</db-link></ng-container>',
			vue: '<DBLink href="#">Imprint</DBLink><DBLink href="#">Help</DBLink>',
			stencil:
				'<div slot="metaNavigation"><db-link href="#">Imprint</db-link><db-link href="#">Help</db-link></div>',
			react: '<><DBLink href="#">Imprint</DBLink><DBLink href="#">Help</DBLink></>'
		},
		primaryAction: {
			angular:
				'<ng-container primary-action><db-button icon="magnifying_glass" variant="ghost" noText>Search</db-button></ng-container>',
			vue: '<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>',
			stencil:
				'<db-button slot="primaryAction" icon="magnifying_glass" variant="ghost" noText>Search</db-button>',
			react: '<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>'
		},
		secondaryAction: {
			angular:
				'<ng-container *secondaryAction><db-button icon="x_placeholder" variant="ghost" noText>Profile</db-button><db-button icon="alert" variant="ghost" noText>Notification</db-button><db-button icon="help" variant="ghost" noText>Help</db-button></ng-container>',
			vue: '<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton><DBButton icon="alert" variant="ghost" noText>Notification</DBButton><DBButton icon="help" variant="ghost" noText>Help</DBButton>',
			stencil:
				'<div slot="secondaryAction"><db-button icon="x_placeholder" variant="ghost" noText>Profile</db-button><db-button icon="alert" variant="ghost" noText>Notification</db-button><db-button icon="help" variant="ghost" noText>Help</db-button></div>',
			react: '<><DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton><DBButton icon="alert" variant="ghost" noText>Notification</DBButton><DBButton icon="help" variant="ghost" noText>Help</DBButton></>'
		}
	}
});

export default function Header() {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	return (
		<>
			<h1>DBHeader Documentation Examples</h1>

			<h2>1. Default Header</h2>
			<DBHeader
				drawerOpen={drawerOpen}
				onToggle={(open: boolean) => setDrawerOpen(open)}>
				__slots__
				<DBNavigation>
					<DBNavigationItem>
						<a href="#">Navi-Item 1</a>
					</DBNavigationItem>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 2</a>
					</DBNavigationItem>
					<DBNavigationItem disabled>
						<a href="#">Navi-Item 3</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
		</>
	);
}
