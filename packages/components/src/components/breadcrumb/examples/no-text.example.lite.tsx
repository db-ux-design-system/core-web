import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'No text',
	storybookNames: ['Composition', 'Options API'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbNoText() {
	return (
		<Fragment>
			<DBBreadcrumb expandText="Show more">
				<DBBreadcrumbItem noText icon="house" text="Home" href="/" />
				<DBBreadcrumbItem
					noText
					icon="user"
					text="Profile"
					href="/profile"
				/>
				<DBBreadcrumbItem
					noText
					icon="gear"
					text="Settings"
					href="/profile/settings"
					ariaCurrent="page"
				/>
			</DBBreadcrumb>
			<DBBreadcrumb
				expandText="Show more"
				items={[
					{ noText: true, icon: 'house', text: 'Home', href: '/' },
					{
						noText: true,
						icon: 'user',
						text: 'Profile',
						href: '/profile'
					},
					{
						noText: true,
						icon: 'gear',
						text: 'Settings',
						href: '/profile/settings'
					}
				]}
			/>
		</Fragment>
	);
}
