import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioDensity() {
	return (
		<>
			<fieldset data-density="functional">
				<legend>Functional - choose a contact method</legend>
				<DBRadio name="ContactFunctional" value="email">
					Email
				</DBRadio>
				<DBRadio name="ContactFunctional" value="phone">
					Phone
				</DBRadio>
				<DBRadio name="ContactFunctional" value="post">
					Post
				</DBRadio>
			</fieldset>
			<fieldset data-density="regular">
				<legend>(Default) Regular - choose a contact method</legend>
				<DBRadio name="ContactRegular" value="email">
					Email
				</DBRadio>
				<DBRadio name="ContactRegular" value="phone">
					Phone
				</DBRadio>
				<DBRadio name="ContactRegular" value="post">
					Post
				</DBRadio>
			</fieldset>
			<fieldset data-density="expressive">
				<legend>Expressive - choose a contact method</legend>
				<DBRadio name="ContactExpressive" value="email">
					Email
				</DBRadio>
				<DBRadio name="ContactExpressive" value="phone">
					Phone
				</DBRadio>
				<DBRadio name="ContactExpressive" value="post">
					Post
				</DBRadio>
			</fieldset>
		</>
	);
}
