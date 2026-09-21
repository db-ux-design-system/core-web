import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
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
			<DBInfotext semantic="informational" size="small" icon="none">
				Composition
			</DBInfotext>
			<DBBreadcrumb separator="slash" expandText="Show more">
				<DBBreadcrumbItem noText icon="pen" text="Home" href="/" />
				<DBBreadcrumbItem
					noText
					icon="person"
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

			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext semantic="informational" size="small" icon="none">
				Options API
			</DBInfotext>
			<DBBreadcrumb
				separator="slash"
				expandText="Show more"
				items={[
					{ noText: true, icon: 'pen', text: 'Home', href: '/' },
					{
						noText: true,
						icon: 'person',
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
