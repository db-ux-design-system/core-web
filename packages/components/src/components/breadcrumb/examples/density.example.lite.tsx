import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', 'Regular', 'Expressive'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbDensity() {
	return (
		<Fragment>
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Functional
			</DBInfotext>
			<DBBreadcrumb
				data-density="functional"
				aria-label="Breadcrumb (Functional)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next">Next</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next/next/current" aria-current="page">
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
				Regular
			</DBInfotext>
			<DBBreadcrumb
				data-density="regular"
				aria-label="Breadcrumb (Regular)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next">Next</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next/next/current" aria-current="page">
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
				Expressive
			</DBInfotext>
			<DBBreadcrumb
				data-density="expressive"
				aria-label="Breadcrumb (Expressive)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next">Next</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next/next/current" aria-current="page">
						Current
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
		</Fragment>
	);
}
