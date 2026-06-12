import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import {
	horizontalAlignmentCenterTable,
	horizontalAlignmentEndTable,
	horizontalAlignmentStartTable
} from './data';

useMetadata({
	storybookTitle: 'Horizontal Alignment',
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableHorizontalAlignment() {
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
					data={horizontalAlignmentStartTable}
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
					data={horizontalAlignmentCenterTable}
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
					data={horizontalAlignmentEndTable}
					captionPlain="End"
					divider="both"
				/>
			</div>
		</Fragment>
	);
}
