import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioShowRequiredAsterisk() {
	return (
		<>
			<fieldset>
				<legend>(Default) True - pick a ticket type *</legend>
				<DBRadio
					name="TicketAsterisk"
					value="single"
					required={true}
					showRequiredAsterisk={true}>
					Single
				</DBRadio>
				<DBRadio
					name="TicketAsterisk"
					value="return"
					required={true}
					showRequiredAsterisk={true}>
					Return
				</DBRadio>
				<DBRadio
					name="TicketAsterisk"
					value="day"
					required={true}
					showRequiredAsterisk={true}>
					Day pass
				</DBRadio>
			</fieldset>
			<fieldset>
				<legend>False - pick a ticket type *</legend>
				<DBRadio
					name="TicketNoAsterisk"
					value="single"
					required={true}
					showRequiredAsterisk={false}>
					Single
				</DBRadio>
				<DBRadio
					name="TicketNoAsterisk"
					value="return"
					required={true}
					showRequiredAsterisk={false}>
					Return
				</DBRadio>
				<DBRadio
					name="TicketNoAsterisk"
					value="day"
					required={true}
					showRequiredAsterisk={false}>
					Day pass
				</DBRadio>
			</fieldset>
		</>
	);
}
