import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBBreadcrumbItem from '../../breadcrumb-item/breadcrumb-item.lite';
import DBBreadcrumbPopoverItem from '../../breadcrumb-popover-item/breadcrumb-popover-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBreadcrumb from '../breadcrumb.lite';
import { StorybookBreadcrumbArgTypes } from './_breadcrumb.arg.types';

useMetadata({
	storybookTitle: 'Badge',
	storybookNames: [
		'Inline - Four Items',
		'Corner - Four Items',
		'Inline - Truncation Popover',
		'Corner - Truncation Popover'
	],
	storybookArgTypes: StorybookBreadcrumbArgTypes
});

export default function BreadcrumbBadge() {
	return (
		<Fragment>
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Inline badges (4 items)
			</DBInfotext>
			<DBBreadcrumb
				aria-label="Breadcrumb (inline badges, 4 items)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">
						Home
						<DBBadge semantic="informational">1</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1">
						Level 1<DBBadge semantic="successful">2</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2">
						Level 2<DBBadge semantic="warning">3</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/current" aria-current="page">
						Current
						<DBBadge semantic="critical">4</DBBadge>
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Corner badges (4 items)
			</DBInfotext>
			<DBBreadcrumb
				aria-label="Breadcrumb (corner badges, 4 items)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">
						Home
						<DBBadge
							semantic="informational"
							placement="corner-top-right"
							label="1 update">
							1
						</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1">
						Level 1
						<DBBadge
							semantic="successful"
							placement="corner-top-right"
							label="2 updates">
							2
						</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2">
						Level 2
						<DBBadge
							semantic="warning"
							placement="corner-top-right"
							label="3 updates">
							3
						</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/current" aria-current="page">
						Current
						<DBBadge
							semantic="critical"
							placement="corner-top-right"
							label="4 updates">
							4
						</DBBadge>
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Inline badges with truncation popover
			</DBInfotext>
			<DBBreadcrumb
				aria-label="Breadcrumb (inline badges, truncation popover)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">
						Home
						<DBBadge semantic="informational">1</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbPopoverItem label="Show more breadcrumbs">
					<DBBreadcrumbItem>
						<a href="/1">
							Level 1<DBBadge semantic="successful">2</DBBadge>
						</a>
					</DBBreadcrumbItem>
					<DBBreadcrumbItem>
						<a href="/1/2">
							Level 2<DBBadge semantic="warning">3</DBBadge>
						</a>
					</DBBreadcrumbItem>
					<DBBreadcrumbItem>
						<a href="/1/2/3">
							Level 3<DBBadge semantic="critical">4</DBBadge>
						</a>
					</DBBreadcrumbItem>
				</DBBreadcrumbPopoverItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4">
						Level 4<DBBadge semantic="neutral">5</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/current" aria-current="page">
						Current
						<DBBadge semantic="adaptive">6</DBBadge>
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				semantic="informational"
				size="small"
				icon="none"
				data-sb-ignore="true">
				Corner badges with truncation popover
			</DBInfotext>
			<DBBreadcrumb
				aria-label="Breadcrumb (corner badges, truncation popover)"
				expandText="Show more">
				<DBBreadcrumbItem>
					<a href="/">
						Home
						<DBBadge
							semantic="informational"
							placement="corner-top-right"
							label="1 update">
							1
						</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbPopoverItem label="Show more breadcrumbs">
					<DBBreadcrumbItem>
						<a href="/1">
							Level 1
							<DBBadge
								semantic="successful"
								placement="corner-top-right"
								label="2 updates">
								2
							</DBBadge>
						</a>
					</DBBreadcrumbItem>
					<DBBreadcrumbItem>
						<a href="/1/2">
							Level 2
							<DBBadge
								semantic="warning"
								placement="corner-top-right"
								label="3 updates">
								3
							</DBBadge>
						</a>
					</DBBreadcrumbItem>
					<DBBreadcrumbItem>
						<a href="/1/2/3">
							Level 3
							<DBBadge
								semantic="critical"
								placement="corner-top-right"
								label="4 updates">
								4
							</DBBadge>
						</a>
					</DBBreadcrumbItem>
				</DBBreadcrumbPopoverItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4">
						Level 4
						<DBBadge
							semantic="neutral"
							placement="corner-top-right"
							label="5 updates">
							5
						</DBBadge>
					</a>
				</DBBreadcrumbItem>
				<DBBreadcrumbItem>
					<a href="/1/2/3/4/current" aria-current="page">
						Current
						<DBBadge
							semantic="adaptive"
							placement="corner-top-right"
							label="6 updates">
							6
						</DBBadge>
					</a>
				</DBBreadcrumbItem>
			</DBBreadcrumb>
		</Fragment>
	);
}
