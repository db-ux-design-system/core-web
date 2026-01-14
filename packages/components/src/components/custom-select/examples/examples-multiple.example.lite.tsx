import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Examples Multiple',
	storybookNames: [
		'Less than 6',
		'Option Group Title',
		'Option Groups',
		'More than 6',
		'More than 10'
	],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectExamplesMultiple() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '20twpdi3j' },
					{ value: 'Option 2', id: '0uwpufkvw' },
					{ value: 'Option 3', id: 'xmvmr8dws' },
					{ value: 'Option 4', id: 'yv5v4q9ew' },
					{ value: 'Option 5', id: '6bjfubtz4' }
				]}
				placeholder="Placeholder"
				multiple={true}
				id="id-10266">
				Less than 6
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{
						label: 'Option group 1',
						isGroupTitle: true,
						id: 'qcvwaejkk'
					},
					{ value: 'G1:Option 1', id: 'jgnlzpm6q' },
					{ value: 'G1:Option 2', id: 'n75b2qd9t' },
					{
						label: 'Option group 2',
						isGroupTitle: true,
						id: 'bcx8u0ke9'
					},
					{ value: 'G2:Option 1', id: 'zgmc2tyn4' },
					{ value: 'G2:Option 2', id: 'sw7l6jpoj' }
				]}
				placeholder="Placeholder"
				multiple={true}
				id="id-10267">
				Option Group Title
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'G1:Option 1', id: 'y5iukyovr' },
					{
						value: 'G1:Option 2',
						showDivider: true,
						id: '0ton8ii8v'
					},
					{ value: 'G2:Option 1', id: '9c4cgirv2' },
					{ value: 'G2:Option 2', showDivider: true, id: '740m4a61n' }
				]}
				placeholder="Placeholder"
				multiple={true}
				id="id-10268">
				Option Groups
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '3zjiay7k4' },
					{ value: 'Option 2', id: 's52x89xrz' },
					{ value: 'Option 3', id: '2u5nocjfo' },
					{ value: 'Option 4', id: '0ibok60su' },
					{ value: 'Option 5', id: 'kdd8w27oh' },
					{ value: 'Option 6', id: '1qn5w4113' },
					{ value: 'Option 7', id: 'eopg7tn9q' }
				]}
				placeholder="Placeholder"
				multiple={true}
				id="id-10269">
				More than 6
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'wg5f7ycm8' },
					{ value: 'Option 2', id: '3viv9gxlp' },
					{ value: 'Option 3', id: '4wtnn5nwh' },
					{ value: 'Option 4', id: 'r4amvgigg' },
					{ value: 'Option 5', id: 'pcmqabmuy' },
					{ value: 'Option 6', id: 'u8nify3n9' },
					{ value: 'Option 7', id: 'rcmpselej' },
					{ value: 'Option 8', id: 'ln43k984l' },
					{ value: 'Option 9', id: 'j8squjd5i' },
					{
						value: 'Option 10 very long item with may break into a new line',
						id: 'b84ie8otk'
					}
				]}
				placeholder="Placeholder"
				multiple={true}
				id="id-10270">
				More than 10
			</DBCustomSelect>
		</Fragment>
	);
}
