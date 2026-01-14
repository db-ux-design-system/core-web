import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagDisabled() {
	return (
		<Fragment>
			<DBTag>
				<label>
					<input type="checkbox" />
					(Default) False
				</label>
			</DBTag>
			<DBTag>
				<label>
					<input type="checkbox" disabled={true} />
					True
				</label>
			</DBTag>
		</Fragment>
	);
}
