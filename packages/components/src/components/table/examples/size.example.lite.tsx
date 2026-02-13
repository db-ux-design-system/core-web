import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { defaultTable } from './data';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['X-Small', 'Small', '(Default) Medium', 'Large'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableSize() {
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
					X-Small
				</DBInfotext>
				<DBTable
					data={defaultTable}
					size="x-small"
					captionPlain="X-Small"
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
					Small
				</DBInfotext>
				<DBTable
					data={defaultTable}
					size="small"
					captionPlain="Small"
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
					(Default) Medium
				</DBInfotext>
				<DBTable
					data={defaultTable}
					size="medium"
					captionPlain="(Default) Medium"
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
					Large
				</DBInfotext>
				<DBTable
					data={defaultTable}
					size="large"
					captionPlain="Large"
				/>
			</div>
		</Fragment>
	);
}
