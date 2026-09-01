import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import {
	subHeaderEmphasisNoneTable,
	subHeaderEmphasisStrongTable,
	subHeaderEmphasisWeakTable
} from './data';

useMetadata({
	storybookTitle: 'SubHeaderEmphasis',
	storybookNames: ['(Default) None', 'Weak', 'Strong'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableSubHeaderEmphasis() {
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
					(Default) None
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisNoneTable}
					captionPlain="(Default) None"
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
					Weak
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					captionPlain="Weak"
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
					Strong
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisStrongTable}
					captionPlain="Strong"
				/>
			</div>
		</Fragment>
	);
}
