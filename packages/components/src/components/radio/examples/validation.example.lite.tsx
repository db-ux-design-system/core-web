import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioValidation() {
	return (
		<>
			<fieldset>
				<legend>(Default) No validation - choose a language</legend>
				<DBRadio name="LanguageNone" value="de">
					German
				</DBRadio>
				<DBRadio name="LanguageNone" value="en">
					English
				</DBRadio>
				<DBRadio name="LanguageNone" value="fr">
					French
				</DBRadio>
			</fieldset>
			<fieldset>
				<legend>Invalid - choose a language</legend>
				<DBRadio name="LanguageInvalid" value="de" validation="invalid">
					German
				</DBRadio>
				<DBRadio name="LanguageInvalid" value="en" validation="invalid">
					English
				</DBRadio>
				<DBRadio name="LanguageInvalid" value="fr" validation="invalid">
					French
				</DBRadio>
			</fieldset>
			<fieldset>
				<legend>Valid - choose a language</legend>
				<DBRadio name="LanguageValid" value="de" validation="valid">
					German
				</DBRadio>
				<DBRadio
					name="LanguageValid"
					value="en"
					validation="valid"
					checked={true}>
					English
				</DBRadio>
				<DBRadio name="LanguageValid" value="fr" validation="valid">
					French
				</DBRadio>
			</fieldset>
		</>
	);
}
