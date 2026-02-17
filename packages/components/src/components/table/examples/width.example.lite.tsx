import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { defaultTable } from './data';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['(Default) Full', 'Auto'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableWidth() {
	return (
		<Fragment>
			<div
				style={{
					inlineSize: '300px',
					display: 'flex',
					flexDirection: 'column'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					(Default) Full
				</DBInfotext>
				<DBTable
					data={defaultTable}
					width="full"
					captionPlain="(Default) Full"
				/>
			</div>
			<div
				style={{
					inlineSize: '300px',
					display: 'flex',
					flexDirection: 'column'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Auto
				</DBInfotext>
				<DBTable data={defaultTable} width="auto" captionPlain="Auto" />
			</div>
		</Fragment>
	);
}
