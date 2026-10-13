import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBBreadcrumbPopoverItem from '../../breadcrumb-popover-item/breadcrumb-popover-item.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Popover',
	storybookNames: ['Popover'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbPopover() {
	return (
		<Fragment>
			<DBBreadcrumb aria-label="Breadcrumb" expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbPopoverItem label="Show more breadcrumbs">
					<DBBreadcrumbItem>
						<a href="/1">Level 1</a>
					</DBBreadcrumbItem>
					<DBBreadcrumbItem>
						<a href="/1/2">Level 2</a>
					</DBBreadcrumbItem>
					<DBBreadcrumbItem>
						<a href="/1/2/3">Level 3</a>
					</DBBreadcrumbItem>
				</DBBreadcrumbPopoverItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4">Level 4</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/current" aria-current="page">
						Current
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
		</Fragment>
	);
}
