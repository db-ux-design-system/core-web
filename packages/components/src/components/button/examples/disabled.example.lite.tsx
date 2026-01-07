import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['False', 'True'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonDisabled() {
	return (
		<Fragment>
			<DBButton disabled={false}>(Default) False</DBButton>
			<DBButton disabled={true}>True</DBButton>
		</Fragment>
	);
}
