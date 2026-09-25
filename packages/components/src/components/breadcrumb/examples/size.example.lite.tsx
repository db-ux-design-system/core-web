import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Small', 'Medium'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbSize() {
	return (
		<Fragment>
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Small
			</DBInfotext>
			<DBBreadcrumb
				size="small"
				aria-label="Breadcrumb (Small)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next">Next</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next/current" aria-current="page">
						Current
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Medium
			</DBInfotext>
			<DBBreadcrumb
				size="medium"
				aria-label="Breadcrumb (Medium)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next">Next</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next/current" aria-current="page">
						Current
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
		</Fragment>
	);
}
