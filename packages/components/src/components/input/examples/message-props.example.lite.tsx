import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Message Props',
	storybookNames: [
		'Message size medium',
		'Message with icon',
		'Message without icon',
		'Message with wrap',
		'Valid message size medium',
		'Invalid message size medium'
	],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputMessageProps() {
	return (
		<Fragment>
			<DBInput
				label="Label"
				message="Message"
				messageProps={{ size: 'medium' }}
				placeholder="Message size medium"></DBInput>
			<DBInput
				label="Label"
				message="Message"
				messageProps={{ icon: 'information_circle' }}
				placeholder="Message with icon"></DBInput>
			<DBInput
				label="Label"
				message="Message"
				messageProps={{ icon: 'information_circle', showIcon: false }}
				placeholder="Message without icon"></DBInput>
			<DBInput
				label="Label"
				message="A longer message that wraps when the container is too small"
				messageProps={{ wrap: true }}
				placeholder="Message with wrap"></DBInput>
			<DBInput
				label="Label"
				validation="valid"
				validMessage="Valid message"
				validMessageProps={{ size: 'medium' }}
				placeholder="Valid message size medium"></DBInput>
			<DBInput
				label="Label"
				validation="invalid"
				invalidMessage="Invalid message"
				invalidMessageProps={{ size: 'medium' }}
				placeholder="Invalid message size medium"></DBInput>
		</Fragment>
	);
}
