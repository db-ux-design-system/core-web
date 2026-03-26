import { Fragment, useMetadata } from '@builder.io/mitosis';
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
			<div class="w-full">
				<DBBreadcrumb
					id="breadcrumb-size-small"
					ariaLabel="Breadcrumb size small"
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
					id="breadcrumb-size-medium"
					size="medium"
					ariaLabel="Breadcrumb size medium"
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
