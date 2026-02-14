import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Show Check State',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagShowCheckState() {
	return (
		<Fragment>
			<DBTag showCheckState={true}>
				<label>
					<input type="checkbox" />
					(Default) True
				</label>
			</DBTag>
			<DBTag showCheckState={false}>
				<label>
					<input type="checkbox" />
					False
				</label>
			</DBTag>
		</Fragment>
	);
}
