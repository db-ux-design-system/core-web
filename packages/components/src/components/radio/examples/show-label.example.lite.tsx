import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioShowLabel() {
	return (
		<Fragment>
			<DBRadio name="Content" showLabel={true}>
				(Default) True
			</DBRadio>
			<DBRadio name="Content" showLabel={false}>
				False
			</DBRadio>
		</Fragment>
	);
}
