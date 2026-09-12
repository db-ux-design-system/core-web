import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { overflowTable } from './data';

useMetadata({
	storybookTitle: 'Sticky Header',
	storybookNames: [
		'(Default) None',
		'None Spaced',
		'Both',
		'Both Spaced',
		'Horizontal',
		'Horizontal Spaced',
		'Vertical',
		'Vertical Spaced'
	],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableStickyHeader() {
	return (
		<Fragment>
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					(Default) None
				</DBInfotext>
				<DBTable data={overflowTable} captionPlain="(Default) None" />
			</div>
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					None Spaced
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="spaced"
					captionPlain="None Spaced"
				/>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Both
				</DBInfotext>
				<DBTable
					data={overflowTable}
					captionPlain="Both"
					stickyHeader="both"
				/>
			</div>
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Both Spaced
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="spaced"
					captionPlain="Both Spaced"
					stickyHeader="both"
				/>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Horizontal
				</DBInfotext>
				<DBTable
					data={overflowTable}
					stickyHeader="horizontal"
					captionPlain="Horizontal"
				/>
			</div>
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Horizontal Spaced
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="spaced"
					stickyHeader="horizontal"
					captionPlain="Horizontal Spaced"
				/>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Vertical
				</DBInfotext>
				<DBTable
					data={overflowTable}
					stickyHeader="vertical"
					captionPlain="Vertical"
				/>
			</div>
			<div
				style={{
					inlineSize: '300px',
					display: 'block',
					textAlign: 'center',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Vertical Spaced
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="spaced"
					stickyHeader="vertical"
					captionPlain="Vertical Spaced"
				/>
			</div>
		</Fragment>
	);
}
