import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Length',
	storybookNames: ['Four Items', 'Seven Items', 'Ten Items'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbLength() {
	return (
		<Fragment>
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				4 Items
			</DBInfotext>
			<DBBreadcrumb expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1">Level 1</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2">Level 2</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/current" aria-current="page">
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
				7 Items
			</DBInfotext>
			<DBBreadcrumb expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1">Level 1</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2">Level 2</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3">Level 3</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4">Level 4</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/5">Level 5</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/5/current" aria-current="page">
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
				10 Items
			</DBInfotext>
			<DBBreadcrumb expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">Home</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1">Level 1</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2">Level 2</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3">Level 3</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4">Level 4</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/5">Level 5</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/5/6">Level 6</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/5/6/7">Level 7</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/5/6/7/8">Level 8</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/5/6/7/8/current" aria-current="page">
						Current
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
		</Fragment>
	);
}
