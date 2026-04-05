import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../breadcrumb-item.lite';
import { StorybookBreadcrumbItemArgTypes } from './_breadcrumb-item.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookBreadcrumbItemArgTypes
});

export default function BreadcrumbItemDisabled() {
	return (
		<Fragment>
			<nav class="db-breadcrumb" aria-label="Breadcrumb">
				<ol>
					<DBBreadcrumbItem
						href="#"
						disabled={false}
						text="Enabled Item"
					/>
				</ol>
			</nav>
			<nav class="db-breadcrumb" aria-label="Breadcrumb">
				<ol>
					<DBBreadcrumbItem
						href="#"
						disabled={true}
						text="Disabled Item"
					/>
				</ol>
			</nav>
		</Fragment>
	);
}
