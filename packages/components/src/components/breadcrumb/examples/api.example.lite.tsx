import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'API',
	storybookNames: ['Composition', 'Options API'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbApi() {
	return (
		<Fragment>
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Composition
			</DBInfotext>
			<DBBreadcrumb
				aria-label="Breadcrumb (Composition)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next">Next</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/next/next">NextNext</a>
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
				Options API
			</DBInfotext>
			<DBBreadcrumb
				aria-label="Breadcrumb (Options API)"
				expandText="Show more"
				items={[
					{ text: 'Home', href: '/' },
					{ text: 'Next', href: '/next' },
					{ text: 'NextNext', href: '/next/next' },
					{ text: 'Current', href: '/next/next/current' }
				]}
			/>
		</Fragment>
	);
}
