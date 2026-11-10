import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { columnCount20Table, columnCount21Table } from './data';

// Story names become export identifiers, so they must not start with a digit
useMetadata({
	storybookTitle: 'Column Count',
	storybookNames: ['Columns 20', 'Columns 21'],
	storybookArgTypes: StorybookTableArgTypes
});

/**
 The grid detects up to 20 columns automatically. Wider tables set their
 column count with `--db-table-columns` (see #8576). Also used as
 fixture for showcases/e2e/table/table-interaction.spec.ts.
 The styles are plain object literals: with a type cast, Mitosis moves a
 style into a component method, which the Angular stories do not have
 ("objSpread_style_… is not a function").
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
					Columns 20
				</DBInfotext>
				<DBTable
					data-testid="table-20-columns"
					data={columnCount20Table}
					captionPlain="Columns 20"
					showCaption
				/>
			</div>
			<div
				style={{
					inlineSize: '100%',
					display: 'flex',
					flexDirection: 'column',
					'--db-table-columns': '21'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Columns 21
				</DBInfotext>
				<DBTable
					data-testid="table-21-columns"
					data={columnCount21Table}
					captionPlain="Columns 21"
					showCaption
				/>
			</div>
		</Fragment>
	);
}
