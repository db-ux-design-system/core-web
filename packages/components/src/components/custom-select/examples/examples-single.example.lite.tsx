import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Examples Single',
	storybookNames: [
		'Icons',
		'Less than 6',
		'Option Group Title',
		'Option Groups',
		'More than 6',
		'More than 10'
	],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectExamplesSingle() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{
							value: 'Option 1',
							icon: 'x_placeholder',
							id: 'fvdhawk3a'
						},
						{
							value: 'Option 2',
							icon: 'x_placeholder',
							id: 'i0pey2syc'
						},
						{
							value: 'Option 3',
							icon: 'x_placeholder',
							id: 'i0pey3syc'
						},
						{
							value: 'Option 4',
							icon: 'x_placeholder',
							id: 'i0pey4syc'
						},
						{
							value: 'Option 5',
							icon: 'x_placeholder',
							id: 'i0pey5syc'
						}
					]}
					placeholder="Placeholder"
					label="Icons"
					listLabel="id-10260-Icons"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '6zthubswi' },
						{ value: 'Option 2', id: 'fh93iyp7w' },
						{ value: 'Option 3', id: '1cbtid79q' },
						{ value: 'Option 4', id: '5w9s57s9k' },
						{ value: 'Option 5', id: 'ixclh8p8n' }
					]}
					placeholder="Placeholder"
					label="Less than 6"
					listLabel="id-10261-Less than 6"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{
							label: 'Option group 1',
							isGroupTitle: true,
							id: 'f48zp673q'
						},
						{ value: 'G1:Option 1', id: '8291mu3qc' },
						{ value: 'G1:Option 2', id: '4duvelxc8' },
						{
							label: 'Option group 2',
							isGroupTitle: true,
							id: 'g4ti9lrc7'
						},
						{ value: 'G2:Option 1', id: 'gqhv3u61k' },
						{ value: 'G2:Option 2', id: '8yx3v6yii' }
					]}
					placeholder="Placeholder"
					label="Option Group Title"
					listLabel="id-10262-Option Group Title"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'G1:Option 1', id: 'q4h9435ye' },
						{
							value: 'G1:Option 2',
							showDivider: true,
							id: '7tzwcbeln'
						},
						{ value: 'G2:Option 1', id: 'zjmir6142' },
						{
							value: 'G2:Option 2',
							showDivider: true,
							id: 'hwqps1347'
						}
					]}
					placeholder="Placeholder"
					label="Option Groups"
					listLabel="id-10263-Option Groups"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'ghsxrti0t' },
						{ value: 'Option 2', id: '5hj8rz3h6' },
						{ value: 'Option 3', id: 'kvyjps1ai' },
						{ value: 'Option 4', id: '31ncem9lt' },
						{ value: 'Option 5', id: '0fwgqufql' },
						{ value: 'Option 6', id: 'okz955pi7' },
						{ value: 'Option 7', id: 'ihbjcr0lo' }
					]}
					placeholder="Placeholder"
					label="More than 6"
					listLabel="id-10264-More than 6"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'o9docf7sw' },
						{ value: 'Option 2', id: 'ttwfqxw26' },
						{ value: 'Option 3', id: '0c5sgzfag' },
						{ value: 'Option 4', id: 'c8knaskj6' },
						{ value: 'Option 5', id: '2z5uhqdmr' },
						{ value: 'Option 6', id: 'y2tlf2fnf' },
						{ value: 'Option 7', id: 'q9hdifmw7' },
						{ value: 'Option 8', id: 'vqz28zphb' },
						{ value: 'Option 9', id: 'j2amckmwh' },
						{ value: 'Option 10', id: 'zdi31d2lu' }
					]}
					placeholder="Placeholder"
					label="More than 10"
					listLabel="id-10265-More than 10"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
