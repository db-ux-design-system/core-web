import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import {
	alignmentCenterTable,
	alignmentEndTable,
	alignmentStartTable
} from './data';

useMetadata({
	storybookTitle: 'Alignment',
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableAlignment() {
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
					(Default) Start
				</DBInfotext>
				<DBTable
					data={alignmentStartTable}
					captionPlain="(Default) Start"
					divider="both"
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
					Center
				</DBInfotext>
				<DBTable
					data={alignmentCenterTable}
					captionPlain="Center"
					divider="both"
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
					End
				</DBInfotext>
				<DBTable
					data={alignmentEndTable}
					captionPlain="End"
					divider="both"
				/>
			</div>
		</Fragment>
	);
}
