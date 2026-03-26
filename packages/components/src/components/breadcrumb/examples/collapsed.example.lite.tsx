import { useMetadata } from '@builder.io/mitosis';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Collapsed',
	storybookNames: ['Collapsed (maxItems=3)'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbCollapsed() {
	return (
		<div class="w-full">
			<DBBreadcrumb
				id="breadcrumb-collapsed"
				maxItems={3}
				ariaLabel="Breadcrumb collapsed"
				ellipsisAriaLabel="Expand to show all breadcrumb items"
				items={[
					{ href: '#', text: 'Root' },
					{ href: '#', text: 'Path 1' },
					{ href: '#', text: 'Path 2' },
					{ href: '#', text: 'Path 3' },
					{
						text: 'Current Page',
						ariaCurrent: 'page',
						href: '#'
					}
				]}
			/>
		</div>
	);
}
