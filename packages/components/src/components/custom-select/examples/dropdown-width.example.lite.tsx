import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Dropdown Width',
	storybookNames: [
		'Form Field Width: Full - (Default) Fixed',
		'Form Field Width: Full - Auto',
		'Form Field Width: Full - Full',
		'Form Field Width: Auto - (Default) Fixed',
		'Form Field Width: Auto - Auto',
		'Form Field Width: Auto - Full'
	],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectDropdownWidth() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Form Field Width: Full
			</DBInfotext>
			<i class="line-break" />
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '99pgkheyw' },
						{ value: 'Option 2', id: 'qc908rx6z' },
						{ value: 'Option 3', id: 'qc908rx5z' },
						{ value: 'Option 4', id: 'qc908rx4z' },
						{ value: 'Option 5', id: 'qc908rx3z' }
					]}
					label="(Default) Fixed"
					formFieldWidth="full"
					dropdownWidth="fixed"
					listLabel="id-10227-(Default) Fixed"></DBCustomSelect>
			</div>
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: '1', id: '2smv303zl' },
						{ value: '2', id: 'dstvsee1m' },
						{ value: '3', id: 'dstvsee2m' },
						{ value: '4', id: 'dstvsee3m' },
						{ value: '5', id: 'dstvsee4m' }
					]}
					label="Auto"
					formFieldWidth="full"
					dropdownWidth="auto"
					listLabel="id-10228-Auto"></DBCustomSelect>
			</div>
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: '1', id: '8fb4evl87' },
						{ value: '2', id: '0iiu59zbg' },
						{ value: '3', id: '0iiu69zbg' },
						{ value: '4', id: '0iiu79zbg' },
						{ value: '5', id: '0iiu89zbg' }
					]}
					label="Full"
					formFieldWidth="full"
					dropdownWidth="full"
					listLabel="id-10229-Full"></DBCustomSelect>
			</div>

			<i class="line-break" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Form Field Width: Auto
			</DBInfotext>

			<i class="line-break" />
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'gniy079gw' },
						{ value: 'Option 2', id: 'kr0v4jgxl' },
						{ value: 'Option 3', id: 'kr0v3jgxl' },
						{ value: 'Option 4', id: 'kr0v2jgxl' },
						{ value: 'Option 5', id: 'kr0v1jgxl' }
					]}
					label="(Default) Fixed"
					formFieldWidth="auto"
					dropdownWidth="fixed"
					listLabel="id-10233-(Default) Fixed"></DBCustomSelect>
			</div>
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: '1', id: 'mmc6lfzsy' },
						{ value: '2', id: 'wr6elxyf4' },
						{ value: '3', id: 'wr6elxyf5' },
						{ value: '4', id: 'wr6elxyf6' },
						{ value: '5', id: 'wr6elxyf7' }
					]}
					label="Auto"
					formFieldWidth="auto"
					dropdownWidth="auto"
					listLabel="id-10234-Auto"></DBCustomSelect>
			</div>
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: '1', id: 'q0iyxp9kq' },
						{ value: '2', id: 'mzo80txs4' },
						{ value: '3', id: 'mzo80txs5' },
						{ value: '4', id: 'mzo80txs6' },
						{ value: '5', id: 'mzo80txs7' }
					]}
					label="Full"
					formFieldWidth="auto"
					dropdownWidth="full"
					listLabel="id-10235-Full"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
