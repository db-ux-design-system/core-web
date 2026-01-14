import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioDensity() {
	return (
		<Fragment>
			<DBRadio
				data-density="functional"
				name="Density"
				value="functional">
				Functional
			</DBRadio>
			<DBRadio data-density="regular" name="Density" value="regular">
				(Default) Regular
			</DBRadio>
			<DBRadio
				data-density="expressive"
				name="Density"
				value="expressive">
				Expressive
			</DBRadio>
		</Fragment>
	);
}
