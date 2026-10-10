import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBBreadcrumbPopoverItem from '../../breadcrumb-popover-item/breadcrumb-popover-item.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/breadcrumb/breadcrumb-interaction.spec.ts).
 *
 * "Auto collapse" renders more crumbs than `maxItems`, so the trail collapses
 * and exposes the ellipsis expand toggle; clicking it reveals the hidden middle
 * crumbs. "Manual popover" uses a `DBBreadcrumbPopoverItem`, whose toggle opens
 * a popover listing the truncated crumbs. Both reflect their result into
 * observable DOM instead of a JS callback.
 */
export default function BreadcrumbInteraction() {
	return (
		<Fragment>
			<div data-testid="auto-collapse-breadcrumb">
				<DBBreadcrumb aria-label="Breadcrumb (auto collapse)">
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
						<a href="/1/2/3/4/current" aria-current="page">
							Current
						</a>
					</DBBreadcrumbItem>
				</DBBreadcrumb>
			</div>
			<div data-testid="popover-breadcrumb">
				<DBBreadcrumb aria-label="Breadcrumb (manual popover)">
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
					</DBBreadcrumbPopoverItem>
					<DBBreadcrumbItem>
						<a href="/1/2/current" aria-current="page">
							Current
						</a>
					</DBBreadcrumbItem>
				</DBBreadcrumb>
			</div>
		</Fragment>
	);
}
