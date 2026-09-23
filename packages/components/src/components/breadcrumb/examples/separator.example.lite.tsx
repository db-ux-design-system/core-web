import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Separator',
	storybookNames: ['(Default) Chevron', 'Slash'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbSeparator() {
	return (
		<Fragment>
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Chevron
			</DBInfotext>
			<DBBreadcrumb
				separator="chevron"
				aria-label="Breadcrumb (Chevron)"
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
				Slash
			</DBInfotext>
			<DBBreadcrumb
				separator="slash"
				aria-label="Breadcrumb (Slash)"
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
