import {
	Fragment,
	useMetadata,
	useState,
	useTarget
} from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Visual Aid',
	storybookNames: [
		'(Default) False (Unchecked)',
		'(Default) False (Checked)',
		'True (Unchecked)',
		'True (Checked)'
	],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchVisualAid() {
	const [checked, setChecked] = useState<boolean>(true);
	const [checked2, setChecked2] = useState<boolean>(true);
	return (
		<Fragment>
			<DBSwitch visualAid={false}>(Default) False (Unchecked)</DBSwitch>
			<DBSwitch
				visualAid={false}
				checked={checked}
				{...useTarget({
					react: {
						onChange: (event: any) =>
							setChecked(
								(event.target as HTMLInputElement).checked
							)
					},
					default: {}
				})}>
				(Default) False (Checked)
			</DBSwitch>
			<DBSwitch visualAid={true} iconLeading="moon" iconTrailing="sun">
				True (Unchecked)
			</DBSwitch>
			<DBSwitch
				visualAid={true}
				checked={checked2}
				iconLeading="moon"
				iconTrailing="sun"
				{...useTarget({
					react: {
						onChange: (event: any) =>
							setChecked(
								(event.target as HTMLInputElement).checked
							)
					},
					default: {}
				})}>
				True (Checked)
			</DBSwitch>
		</Fragment>
	);
}
