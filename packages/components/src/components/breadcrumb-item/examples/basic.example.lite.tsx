import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../breadcrumb-item.lite';
import { StorybookBreadcrumbItemArgTypes } from './_breadcrumb-item.arg.types';

useMetadata({
	storybookTitle: 'Basic',
	storybookNames: ['Link', 'Current Page'],
	storybookArgTypes: StorybookBreadcrumbItemArgTypes
});

export default function BreadcrumbItemBasic() {
	return (
		<Fragment>
			<nav class="db-breadcrumb" aria-label="Breadcrumb">
				<ol>
					<DBBreadcrumbItem href="#" text="Home" />
				</ol>
			</nav>
			<nav class="db-breadcrumb" aria-label="Breadcrumb">
				<ol>
					<DBBreadcrumbItem ariaCurrent="page" text="Current Page" />
				</ol>
			</nav>
		</Fragment>
	);
}
