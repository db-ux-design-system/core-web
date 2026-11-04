import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { columnCount21Table, columnCount50Table } from './data';

useMetadata({
	storybookTitle: 'Column Count',
	storybookNames: ['21 Columns', '50 Columns'],
	storybookArgTypes: StorybookTableArgTypes
});

/**
 Tables with more than 20 columns (see #8576). Also used as fixture for
 showcases/e2e/table/table-interaction.spec.ts, which verifies that every
 column gets its own grid track up to the supported maximum of 50.
 */
export default function TableColumnCount() {
	return (
		<Fragment>
			<div
				style={{
					inlineSize: '100%',
					display: 'flex',
					flexDirection: 'column'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					21 Columns
				</DBInfotext>
				<DBTable
					data-testid="table-21-columns"
					data={columnCount21Table}
					captionPlain="21 Columns"
				/>
			</div>
			<div
				style={{
					inlineSize: '100%',
					display: 'flex',
					flexDirection: 'column'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					50 Columns
				</DBInfotext>
				<DBTable
					data-testid="table-50-columns"
					data={columnCount50Table}
					captionPlain="50 Columns"
				/>
			</div>
		</Fragment>
	);
}
