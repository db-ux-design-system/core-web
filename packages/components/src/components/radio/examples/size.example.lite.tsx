import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioSize() {
	return (
		<>
			<fieldset>
				<legend>(Default) Medium - pick a delivery speed</legend>
				<DBRadio name="DeliveryMedium" value="standard">
					Standard
				</DBRadio>
				<DBRadio name="DeliveryMedium" value="express">
					Express
				</DBRadio>
				<DBRadio name="DeliveryMedium" value="overnight">
					Overnight
				</DBRadio>
			</fieldset>
			<fieldset>
				<legend>Small - pick a delivery speed</legend>
				<DBRadio name="DeliverySmall" value="standard" size="small">
					Standard
				</DBRadio>
				<DBRadio name="DeliverySmall" value="express" size="small">
					Express
				</DBRadio>
				<DBRadio name="DeliverySmall" value="overnight" size="small">
					Overnight
				</DBRadio>
			</fieldset>
		</>
	);
}
