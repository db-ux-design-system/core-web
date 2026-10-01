import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Checked',
	storybookNames: ['(Default) Nothing checked', 'One option checked'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioChecked() {
	return (
		<>
			<fieldset>
				<legend>
					(Default) false, nothing checked - choose a newsletter
				</legend>
				<DBRadio name="Newsletter" value="daily">
					Daily digest
				</DBRadio>
				<DBRadio name="Newsletter" value="weekly">
					Weekly summary
				</DBRadio>
				<DBRadio name="Newsletter" value="none">
					No newsletter
				</DBRadio>
			</fieldset>
			<fieldset>
				<legend>True, one option checked - choose a newsletter</legend>
				<DBRadio name="NewsletterChecked" value="daily">
					Daily digest
				</DBRadio>
				<DBRadio name="NewsletterChecked" value="weekly" checked={true}>
					Weekly summary
				</DBRadio>
				<DBRadio name="NewsletterChecked" value="none">
					No newsletter
				</DBRadio>
			</fieldset>
		</>
	);
}
