import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Placement',
	storybookNames: [
		'(Default) Bottom',
		'Top',
		'(Default) Bottom-Start',
		'Bottom-End',
		'Top-Start',
		'Top-End'
	],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectPlacement() {
	return (
		<Fragment>
			<DBInfotext size="small" semantic="informational">
				Form Field Width: Full
			</DBInfotext>
			<i class="line-break" />
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'aryeycu23' },
						{ value: 'Option 2', id: 'qrf3x6gdq' },
						{ value: 'Option 3', id: 'qrf4x6gdq' },
						{ value: 'Option 4', id: 'qrf5x6gdq' },
						{ value: 'Option 5', id: 'qrf6x6gdq' }
					]}
					label="(Default) Bottom"
					formFieldWidth="full"
					placement="bottom"
					listLabel="id-10238-(Default) Bottom"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'mmfg4zco7' },
						{ value: 'Option 2', id: '52zkxb05u' },
						{ value: 'Option 3', id: '52zkxb04u' },
						{ value: 'Option 4', id: '52zkxb03u' },
						{ value: 'Option 5', id: '52zkxb02u' }
					]}
					label="Top"
					formFieldWidth="full"
					placement="top"
					listLabel="id-10239-Top"></DBCustomSelect>
			</div>

			<i class="line-break" />

			<DBInfotext size="small" semantic="informational">
				Form Field Width: Auto
			</DBInfotext>

			<i class="line-break" />
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'fhczoz28b' },
						{ value: 'Option 2', id: 'k8zcxfb4x' },
						{ value: 'Option 3', id: 'k8zcxfb3x' },
						{ value: 'Option 4', id: 'k8zcxfb2x' },
						{ value: 'Option 5', id: 'k8zcxfb1x' }
					]}
					label="(Default) Bottom-Start"
					formFieldWidth="auto"
					placement="bottom-start"
					listLabel="id-10243-(Default) Bottom-Start"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'ukchupevr' },
						{ value: 'Option 2', id: 'ts0jwdqxj' },
						{ value: 'Option 3', id: 'ts1jwdqxj' },
						{ value: 'Option 4', id: 'ts2jwdqxj' },
						{ value: 'Option 5', id: 'ts3jwdqxj' }
					]}
					label="Bottom-End"
					formFieldWidth="auto"
					placement="bottom-end"
					listLabel="id-10244-Bottom-End"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'zhuaneo1w' },
						{ value: 'Option 2', id: '5mwz7pmcr' },
						{ value: 'Option 3', id: '4mwz7pmcr' },
						{ value: 'Option 4', id: '3mwz7pmcr' },
						{ value: 'Option 5', id: '2mwz7pmcr' }
					]}
					label="Top-Start"
					formFieldWidth="auto"
					placement="top-start"
					listLabel="id-10245-Top-Start"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '6uq8tv3e8' },
						{ value: 'Option 2', id: 'iz30t1pce' },
						{ value: 'Option 3', id: 'iz40t1pce' },
						{ value: 'Option 4', id: 'iz50t1pce' },
						{ value: 'Option 5', id: 'iz60t1pce' }
					]}
					label="Top-End"
					formFieldWidth="auto"
					placement="top-end"
					listLabel="id-10246-Top-End"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
