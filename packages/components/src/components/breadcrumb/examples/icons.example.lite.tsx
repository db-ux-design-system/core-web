import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Icons',
	storybookNames: ['With Icons (Small)', 'With Icons (Medium)'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbIcons() {
	return (
		<Fragment>
			<div class="w-full">
				<DBBreadcrumb
					id="breadcrumb-icons-small"
					ariaLabel="Breadcrumb icons small"
					items={[
						{ href: '#', text: 'Root', icon: 'house' },
						{ href: '#', text: 'Settings', icon: 'gear_wheel' },
						{ href: '#', text: 'Profile', icon: 'person' },
						{ href: '#', text: 'Notifications', icon: 'bell' }
					]}
				/>
			</div>
			<div class="w-full">
				<DBBreadcrumb
					id="breadcrumb-icons-medium"
					size="medium"
					ariaLabel="Breadcrumb icons medium"
					items={[
						{ href: '#', text: 'Root', icon: 'house' },
						{ href: '#', text: 'Settings', icon: 'gear_wheel' },
						{ href: '#', text: 'Profile', icon: 'person' },
						{ href: '#', text: 'Notifications', icon: 'bell' }
					]}
				/>
			</div>
		</Fragment>
	);
}
