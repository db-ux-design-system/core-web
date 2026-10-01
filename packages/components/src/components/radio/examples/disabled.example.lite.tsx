import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) Enabled group', 'Disabled group'],
	storybookArgTypes: StorybookRadioArgTypes
});

// `disabled` on the second fieldset disables the whole group natively.
export default function RadioDisabled() {
	return (
		<>
			<fieldset>
				<legend>
					(Default) false, enabled - select a payment method
				</legend>
				<DBRadio name="PaymentEnabled" value="card">
					Credit card
				</DBRadio>
				<DBRadio name="PaymentEnabled" value="paypal">
					PayPal
				</DBRadio>
				<DBRadio name="PaymentEnabled" value="invoice">
					Invoice
				</DBRadio>
			</fieldset>
			<fieldset disabled={true}>
				<legend>True, disabled - select a payment method</legend>
				<DBRadio name="PaymentDisabled" value="card">
					Credit card
				</DBRadio>
				<DBRadio name="PaymentDisabled" value="paypal">
					PayPal
				</DBRadio>
				<DBRadio name="PaymentDisabled" value="invoice">
					Invoice
				</DBRadio>
			</fieldset>
		</>
	);
}
