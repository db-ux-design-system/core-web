import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Leading',
	storybookNames: ['False', 'True'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonShowIconLeading() {
	return (
		<Fragment>
			<DBButton icon="x_placeholder" showIcon={false}>
				(Default) False
			</DBButton>
			<DBButton icon="x_placeholder" showIcon={true}>
				True
			</DBButton>
		</Fragment>
	);
}
