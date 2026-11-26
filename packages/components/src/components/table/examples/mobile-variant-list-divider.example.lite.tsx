import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { defaultTable } from './data';

useMetadata({
	storybookTitle: 'Mobile Variant List Divider',
	storybookNames: ['None', 'Both', 'Horizontal', 'Vertical'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableMobileVariantListDivider() {
	return (
		<Fragment>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					None
				</DBInfotext>
				<DBTable
					data={defaultTable}
					mobileVariant="list"
					divider="none"
					captionPlain="None"
				/>
			</div>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Both
				</DBInfotext>
				<DBTable
					data={defaultTable}
					mobileVariant="list"
					divider="both"
					captionPlain="Both"
				/>
			</div>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Horizontal
				</DBInfotext>
				<DBTable
					data={defaultTable}
					mobileVariant="list"
					divider="horizontal"
					captionPlain="Horizontal"
				/>
			</div>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Vertical
				</DBInfotext>
				<DBTable
					data={defaultTable}
					mobileVariant="list"
					divider="vertical"
					captionPlain="Vertical"
				/>
			</div>
		</Fragment>
	);
}
