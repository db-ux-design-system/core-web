import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) Optional group', 'Required group'],
	storybookArgTypes: StorybookRadioArgTypes
});

// Required belongs to the whole radio group. `fieldset` has no native `required`
// attribute, so a required radio group is expressed natively by marking every
// radio of the group `required` and labelling the group with its `legend`. This
// gives real constraint validation (the form will not submit until one option is
// picked) rather than a presentation-only `aria-required` hint.
export default function RadioRequired() {
	return (
		<>
			<fieldset>
				<legend>
					(Default) false, optional - pick a seat reservation
				</legend>
				<DBRadio name="Reservation" value="window">
					Window seat
				</DBRadio>
				<DBRadio name="Reservation" value="aisle">
					Aisle seat
				</DBRadio>
				<DBRadio name="Reservation" value="none">
					No preference
				</DBRadio>
			</fieldset>
			<fieldset>
				<legend>True, required - pick a travel class *</legend>
				<DBRadio name="TravelClass" value="first" required={true}>
					First class
				</DBRadio>
				<DBRadio name="TravelClass" value="second" required={true}>
					Second class
				</DBRadio>
				<DBRadio name="TravelClass" value="business" required={true}>
					Business class
				</DBRadio>
			</fieldset>
		</>
	);
}
