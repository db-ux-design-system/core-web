import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Separator',
	storybookNames: ['Chevron', 'Slash'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbSeparator() {
	return (
		<Fragment>
			<div class="w-full">
				<DBBreadcrumb
					id="breadcrumb-separator-chevron"
					separator="chevron"
					ariaLabel="Breadcrumb separator chevron"
					items={[
						{ href: '#', text: 'Home' },
						{ href: '#', text: 'Category' },
						{
							text: 'Current Page',
							ariaCurrent: 'page',
							href: '#'
						}
					]}
				/>
			</div>
			<div class="w-full">
				<DBBreadcrumb
					id="breadcrumb-separator-slash"
					separator="slash"
					ariaLabel="Breadcrumb separator slash"
					items={[
						{ href: '#', text: 'Home' },
						{ href: '#', text: 'Category' },
						{
							text: 'Current Page',
							ariaCurrent: 'page',
							href: '#'
						}
					]}
				/>
			</div>
		</Fragment>
	);
}
