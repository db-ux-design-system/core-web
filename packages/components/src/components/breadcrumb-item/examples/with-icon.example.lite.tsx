import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../breadcrumb-item.lite';
import { StorybookBreadcrumbItemArgTypes } from './_breadcrumb-item.arg.types';

useMetadata({
	storybookTitle: 'With Icon',
	storybookNames: ['Home Icon', 'Folder Icon'],
	storybookArgTypes: StorybookBreadcrumbItemArgTypes
});

export default function BreadcrumbItemWithIcon() {
	return (
		<Fragment>
			<nav class="db-breadcrumb" aria-label="Breadcrumb">
				<ol>
					<DBBreadcrumbItem href="#" icon="house" text="Home" />
				</ol>
			</nav>
			<nav class="db-breadcrumb" aria-label="Breadcrumb">
				<ol>
					<DBBreadcrumbItem href="#" icon="folder" text="Category" />
				</ol>
			</nav>
		</Fragment>
	);
}
